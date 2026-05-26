import { NextResponse } from "next/server";
import { buildIcs } from "@/lib/calendar";
import { upcomingEvents } from "@/lib/content";

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const slug = searchParams.get("event");

	const event = upcomingEvents.find(
		(e) => (e.slug ?? e.date) === slug && e.status === "upcoming",
	);

	if (!event) {
		return NextResponse.json({ error: "Event not found" }, { status: 404 });
	}

	const ics = buildIcs(event);
	const filename = `${event.slug ?? event.date}.ics`;

	return new Response(ics, {
		headers: {
			"Content-Type": "text/calendar; charset=utf-8",
			"Content-Disposition": `attachment; filename="${filename}"`,
		},
	});
}
