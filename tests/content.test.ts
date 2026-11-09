import { describe, expect, it } from "vitest";
import {
	bearDonorAnonymousCount,
	bearDonors,
	bearDonorTotalCount,
	upcomingEvents,
} from "@/lib/content";

// Data invariants for the hand-edited event and donor lists. These guard the
// common edit (adding/renaming an event) against typos that render as
// "Invalid Date" or broken calendar links on the live site.
describe("events data", () => {
	it("has valid ISO calendar dates", () => {
		for (const e of upcomingEvents) {
			expect(e.date, e.title).toMatch(/^\d{4}-\d{2}-\d{2}$/);
			const d = new Date(`${e.date}T12:00:00`);
			expect(Number.isNaN(d.getTime()), e.title).toBe(false);
			expect(d.toISOString().slice(0, 10), e.title).toBe(e.date);
		}
	});

	it("has unique slugs that are URL-safe", () => {
		const slugs = upcomingEvents.flatMap((e) => (e.slug ? [e.slug] : []));
		expect(new Set(slugs).size).toBe(slugs.length);
		for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
	});

	it("has a title and description on every visible event", () => {
		for (const e of upcomingEvents) {
			expect(e.title.trim()).not.toBe("");
			expect(e.description.trim()).not.toBe("");
			expect(e.hidden).not.toBe(true);
		}
	});
});

describe("bear donor count (published number)", () => {
	it("is named donors plus anonymous donors", () => {
		expect(bearDonorTotalCount).toBe(
			bearDonors.length + bearDonorAnonymousCount,
		);
	});

	it("has no duplicate or blank named donors", () => {
		const names = bearDonors.map((n) => n.trim());
		expect(names.every((n) => n.length > 0)).toBe(true);
		expect(new Set(names).size).toBe(names.length);
	});

	it("is a non-negative integer anonymous count", () => {
		expect(Number.isInteger(bearDonorAnonymousCount)).toBe(true);
		expect(bearDonorAnonymousCount).toBeGreaterThanOrEqual(0);
	});
});
