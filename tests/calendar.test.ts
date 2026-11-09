import { describe, expect, it } from "vitest";
import { buildGoogleCalendarUrl, buildIcs } from "@/lib/calendar";
import type { EventItem } from "@/lib/content";

const base: EventItem = {
	date: "2026-11-14",
	slug: "meetup",
	title: "Meet-Up",
	description: "Plant; mulch, rake\\done\nsee you",
	type: "volunteer",
	status: "upcoming",
};

describe("buildIcs", () => {
	it("produces an all-day VEVENT ending the next day", () => {
		const ics = buildIcs(base);
		expect(ics.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
		expect(ics).toContain("DTSTART;VALUE=DATE:20261114");
		expect(ics).toContain("DTEND;VALUE=DATE:20261115");
		expect(ics).toContain("UID:meetup@");
		expect(ics).toContain("URL:https://lafayettepointerpark.org/events#meetup");
	});

	it("escapes RFC 5545 special characters", () => {
		const ics = buildIcs(base);
		expect(ics).toContain(
			"DESCRIPTION:Plant\\; mulch\\, rake\\\\done\\nsee you",
		);
	});

	it.each([
		["2026-01-31", "20260201"],
		["2026-12-31", "20270101"],
		["2028-02-28", "20280229"],
		["2027-02-28", "20270301"],
		["2026-03-08", "20260309"], // US DST start
	])("rolls %s over to %s", (date, end) => {
		expect(buildIcs({ ...base, date })).toContain(`DTEND;VALUE=DATE:${end}`);
	});

	it("falls back to the date for UID and URL when there is no slug", () => {
		const ics = buildIcs({ ...base, slug: undefined });
		expect(ics).toContain("UID:2026-11-14@");
		expect(ics).toContain("URL:https://lafayettepointerpark.org/events\r\n");
	});
});

describe("buildGoogleCalendarUrl", () => {
	it("encodes an all-day template link", () => {
		const url = new URL(buildGoogleCalendarUrl(base));
		expect(url.hostname).toBe("calendar.google.com");
		expect(url.searchParams.get("action")).toBe("TEMPLATE");
		expect(url.searchParams.get("dates")).toBe("20261114/20261115");
		expect(url.searchParams.get("text")).toBe("Meet-Up");
	});
});
