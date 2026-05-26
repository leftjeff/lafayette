import { CalendarPlus } from "lucide-react";
import type { EventItem } from "@/lib/content";

function buildGoogleCalendarUrl(event: EventItem): string {
	const date = event.date.replace(/-/g, "");
	const y = Number(date.slice(0, 4));
	const m = Number(date.slice(4, 6)) - 1;
	const d = Number(date.slice(6, 8));
	const next = new Date(y, m, d + 1);
	const endDate = [
		String(next.getFullYear()),
		String(next.getMonth() + 1).padStart(2, "0"),
		String(next.getDate()).padStart(2, "0"),
	].join("");
	const params = new URLSearchParams({
		action: "TEMPLATE",
		text: event.title,
		dates: `${date}/${endDate}`,
		details: event.description,
		location: "Lafayette-Pointer Park, 5900 33rd St NW, Washington DC 20015",
	});
	return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function AddToCalendar({ event }: { event: EventItem }) {
	const slug = event.slug ?? event.date;
	return (
		<div className="mt-4 flex flex-wrap items-center gap-3">
			<a
				href={`/api/calendar?event=${encodeURIComponent(slug)}`}
				download
				className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
			>
				<CalendarPlus className="size-3.5" />
				Download .ics
			</a>
			<a
				href={buildGoogleCalendarUrl(event)}
				target="_blank"
				rel="noreferrer"
				className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
			>
				<CalendarPlus className="size-3.5" />
				Google Calendar
			</a>
		</div>
	);
}
