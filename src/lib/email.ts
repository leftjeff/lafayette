import { site } from "./site";

const MAILCHIMP_FORM_URL =
	"https://thefolp.us1.list-manage.com/subscribe/post?u=9f23f7f2b1dc06c9e8b44d541&id=9941cb11ec";

const FROM_EMAIL = "noreply@lafayettepointerpark.com";
const FROM_NAME = "Friends of Lafayette-Pointer Park";

function getMandrillKey() {
	const key = process.env.MAILCHIMP_TRANSACTIONAL_API_KEY;
	if (!key) throw new Error("MAILCHIMP_TRANSACTIONAL_API_KEY is not set");
	return key;
}

export type ContactPayload = {
	name: string;
	email: string;
	zip?: string;
	message: string;
};

export async function sendContactMessage(payload: ContactPayload) {
	const key = getMandrillKey();
	const lines = [
		`Name:  ${payload.name}`,
		`Email: ${payload.email}`,
		payload.zip ? `Zip:   ${payload.zip}` : null,
		"",
		payload.message,
	].filter(Boolean);

	const res = await fetch("https://mandrillapp.com/api/1.0/messages/send", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			key,
			message: {
				from_email: FROM_EMAIL,
				from_name: FROM_NAME,
				to: [{ email: site.email, type: "to" }],
				subject: `Contact form: ${payload.name}`,
				text: lines.join("\n"),
				headers: { "Reply-To": payload.email },
			},
		}),
	});

	if (!res.ok) {
		const body = await res.text();
		throw new Error(`Email send failed: ${body}`);
	}

	const data: unknown = await res.json();
	if (Array.isArray(data) && data[0]?.status === "rejected") {
		throw new Error(data[0].reject_reason ?? "Email send failed");
	}
}

export type SignupPayload = {
	firstName: string;
	lastName: string;
	email: string;
	notes?: string;
};

export async function sendSignupNotification(payload: SignupPayload) {
	const body = new URLSearchParams({
		EMAIL: payload.email,
		FNAME: payload.firstName,
		LNAME: payload.lastName,
	});

	const res = await fetch(MAILCHIMP_FORM_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: body.toString(),
	});

	if (!res.ok && res.status !== 302) {
		throw new Error("Mailchimp subscribe failed");
	}
}

export async function subscribeEmail(email: string) {
	const body = new URLSearchParams({ EMAIL: email });

	const res = await fetch(MAILCHIMP_FORM_URL, {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: body.toString(),
	});

	if (!res.ok && res.status !== 302) {
		throw new Error("Mailchimp subscribe failed");
	}
}
