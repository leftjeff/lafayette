import { beforeEach, describe, expect, it, vi } from "vitest";

const email = vi.hoisted(() => ({
	subscribeEmail: vi.fn(),
	sendContactMessage: vi.fn(),
	sendSignupNotification: vi.fn(),
}));
vi.mock("@/lib/email", () => email);
vi.mock("next/navigation", () => ({
	redirect: vi.fn((url: string) => {
		throw Object.assign(new Error("NEXT_REDIRECT"), { url });
	}),
}));

import { GET as calendarGET } from "@/app/api/calendar/route";
import { POST as newsletterPOST } from "@/app/api/newsletter/route";
import { submitContact } from "@/app/contact/actions";
import { submitSignup } from "@/app/signup/actions";
import { upcomingEvents } from "@/lib/content";

beforeEach(() => {
	for (const f of Object.values(email)) f.mockReset();
});

const post = (body: unknown) =>
	new Request("http://x/api/newsletter", {
		method: "POST",
		body: typeof body === "string" ? body : JSON.stringify(body),
	});

describe("POST /api/newsletter", () => {
	it("subscribes a valid email", async () => {
		const res = await newsletterPOST(post({ email: " a@b.org " }));
		expect(res.status).toBe(200);
		expect(email.subscribeEmail).toHaveBeenCalledWith("a@b.org");
	});

	it.each([
		{},
		{ email: "" },
		{ email: "nope" },
		{ email: 5 },
		"not json",
	])("rejects %j with 400 and no subscribe", async (body) => {
		const res = await newsletterPOST(post(body));
		expect(res.status).toBe(400);
		expect(email.subscribeEmail).not.toHaveBeenCalled();
	});

	it("returns 502 when Mailchimp fails", async () => {
		email.subscribeEmail.mockRejectedValueOnce(new Error("down"));
		const res = await newsletterPOST(post({ email: "a@b.org" }));
		expect(res.status).toBe(502);
	});
});

describe("GET /api/calendar", () => {
	it("serves an .ics for every upcoming event with a slug", async () => {
		const upcoming = upcomingEvents.filter((e) => e.status === "upcoming");
		expect(upcoming.length).toBeGreaterThan(0);
		for (const e of upcoming) {
			const key = e.slug ?? e.date;
			const res = await calendarGET(
				new Request(`http://x/api/calendar?event=${key}`),
			);
			expect(res.status, key).toBe(200);
			expect(res.headers.get("content-type")).toContain("text/calendar");
			expect(await res.text()).toContain("BEGIN:VEVENT");
		}
	});

	it("404s for past, unknown and missing events", async () => {
		const past = upcomingEvents.find((e) => e.status === "past");
		for (const q of [
			"?event=nope",
			"",
			past ? `?event=${past.slug ?? past.date}` : "?event=x",
		]) {
			const res = await calendarGET(new Request(`http://x/api/calendar${q}`));
			expect(res.status, q).toBe(404);
		}
	});
});

const form = (fields: Record<string, string>) => {
	const fd = new FormData();
	for (const [k, v] of Object.entries(fields)) fd.set(k, v);
	return fd;
};

describe("contact form action", () => {
	const good = { name: "Pat", email: "pat@x.org", message: "Hi", zip: "" };

	it("sends a valid message", async () => {
		await expect(submitContact(null, form(good))).resolves.toEqual({
			ok: true,
		});
		expect(email.sendContactMessage).toHaveBeenCalledWith({
			name: "Pat",
			email: "pat@x.org",
			zip: undefined,
			message: "Hi",
		});
	});

	it.each([
		["name", { ...good, name: " " }],
		["email", { ...good, email: "bad" }],
		["message", { ...good, message: "" }],
	])("rejects a missing/invalid %s without sending", async (_f, fields) => {
		const r = await submitContact(null, form(fields));
		expect(r.ok).toBe(false);
		expect(email.sendContactMessage).not.toHaveBeenCalled();
	});

	it("reports a send failure instead of throwing", async () => {
		email.sendContactMessage.mockRejectedValueOnce(new Error("x"));
		const r = await submitContact(null, form(good));
		expect(r.ok).toBe(false);
	});
});

describe("signup form action", () => {
	const good = { firstName: "Pat", lastName: "Lee", email: "pat@x.org" };

	it("records a valid signup then redirects", async () => {
		await expect(submitSignup(null, form(good))).rejects.toThrow(
			"NEXT_REDIRECT",
		);
		expect(email.sendSignupNotification).toHaveBeenCalledOnce();
	});

	it.each([
		["firstName", { ...good, firstName: "" }],
		["lastName", { ...good, lastName: "" }],
		["email", { ...good, email: "pat@" }],
	])("rejects a missing/invalid %s without sending", async (_f, fields) => {
		const r = await submitSignup(null, form(fields));
		expect(r.error).toBeTruthy();
		expect(email.sendSignupNotification).not.toHaveBeenCalled();
	});
});
