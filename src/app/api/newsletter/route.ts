import { NextResponse } from "next/server";
import { subscribeEmail } from "@/lib/email";

export async function POST(request: Request) {
	const body = await request.json().catch(() => null);
	const email = typeof body?.email === "string" ? body.email.trim() : "";

	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return NextResponse.json({ error: "Invalid email." }, { status: 400 });
	}

	try {
		await subscribeEmail(email);
		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json(
			{ error: "Subscribe failed. Please try again." },
			{ status: 502 },
		);
	}
}
