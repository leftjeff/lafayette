"use server";

import { redirect } from "next/navigation";
import { sendSignupNotification } from "@/lib/email";
import { visitorErrorMessage } from "@/lib/site";

export type SignupState = {
	error?: string;
};

export async function submitSignup(
	_prev: SignupState | null,
	formData: FormData,
): Promise<SignupState> {
	const firstName = String(formData.get("firstName") ?? "").trim();
	const lastName = String(formData.get("lastName") ?? "").trim();
	const email = String(formData.get("email") ?? "").trim();
	const notes = String(formData.get("notes") ?? "").trim();

	if (!firstName) return { error: "Please add your first name." };
	if (!lastName) return { error: "Please add your last name." };
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return { error: "Please enter a valid email address." };
	}

	try {
		await sendSignupNotification({
			firstName,
			lastName,
			email,
			notes: notes || undefined,
		});
	} catch (e) {
		console.error("[signup] send failed:", e);
		return { error: visitorErrorMessage() };
	}

	redirect("/signup/thanks");
}
