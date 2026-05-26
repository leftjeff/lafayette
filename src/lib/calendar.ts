import type { EventItem } from "./content";
import { site } from "./site";

export function buildIcs(event: EventItem): string {
	const date = event.date.replace(/-/g, "");
	const endDate = incrementDate(date);
	const now = new Date()
		.toISOString()
		.replace(/[-:]/g, "")
		.replace(/\.\d+Z$/, "Z");
	const uid = `${event.slug ?? event.date}@lafayettepointerpark.com`;

	return [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//FOLP//Events//EN",
		"CALSCALE:GREGORIAN",
		"METHOD:PUBLISH",
		"BEGIN:VEVENT",
		`UID:${uid}`,
		`DTSTAMP:${now}`,
		`DTSTART;VALUE=DATE:${date}`,
		`DTEND;VALUE=DATE:${endDate}`,
		`SUMMARY:${escapeIcs(event.title)}`,
		`DESCRIPTION:${escapeIcs(event.description)}`,
		`LOCATION:Lafayette-Pointer Park\\, 5900 33rd St NW\\, Washington DC 20015`,
		`URL:${site.url}/events${event.slug ? `#${event.slug}` : ""}`,
		"END:VEVENT",
		"END:VCALENDAR",
	].join("\r\n");
}

export function buildGoogleCalendarUrl(event: EventItem): string {
	const date = event.date.replace(/-/g, "");
	const endDate = incrementDate(date);
	const params = new URLSearchParams({
		action: "TEMPLATE",
		text: event.title,
		dates: `${date}/${endDate}`,
		details: event.description,
		location: "Lafayette-Pointer Park, 5900 33rd St NW, Washington DC 20015",
	});
	return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function incrementDate(yyyymmdd: string): string {
	const y = Number(yyyymmdd.slice(0, 4));
	const m = Number(yyyymmdd.slice(4, 6)) - 1;
	const d = Number(yyyymmdd.slice(6, 8));
	const next = new Date(y, m, d + 1);
	return [
		String(next.getFullYear()),
		String(next.getMonth() + 1).padStart(2, "0"),
		String(next.getDate()).padStart(2, "0"),
	].join("");
}

function escapeIcs(text: string): string {
	return text
		.replace(/\\/g, "\\\\")
		.replace(/;/g, "\\;")
		.replace(/,/g, "\\,")
		.replace(/\n/g, "\\n");
}
