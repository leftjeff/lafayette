"use client";

import { useActionState } from "react";

type NewsletterState = { error?: string; success?: boolean } | null;

async function subscribe(
	_prev: NewsletterState,
	formData: FormData,
): Promise<NewsletterState> {
	const email = String(formData.get("email") ?? "").trim();
	if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return { error: "Please enter a valid email." };
	}

	const res = await fetch("/api/newsletter", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email }),
	});

	if (!res.ok) {
		const data = await res.json().catch(() => ({}));
		return { error: data.error ?? "Something went wrong." };
	}

	return { success: true };
}

export function NewsletterForm() {
	const [state, action, isPending] = useActionState(subscribe, null);

	if (state?.success) {
		return (
			<div className="flex flex-col justify-center gap-3">
				<p className="font-heading text-xl tracking-wide text-[color:var(--heading)]">
					Stay in the loop
				</p>
				<p className="text-sm text-primary font-medium">
					You&rsquo;re signed up! Watch for occasional updates.
				</p>
			</div>
		);
	}

	return (
		<form action={action} className="flex flex-col justify-center gap-3">
			<p className="font-heading text-xl tracking-wide text-[color:var(--heading)]">
				Stay in the loop
			</p>
			<p className="text-sm text-muted-foreground">
				Event invites and short updates. No spam.
			</p>
			<div className="flex overflow-hidden rounded-xl border border-border bg-background">
				<input
					type="email"
					name="email"
					required
					placeholder="you@neighborhood.org"
					className="flex-1 bg-transparent px-4 py-3 text-sm focus:outline-none"
				/>
				<button
					type="submit"
					disabled={isPending}
					className="bg-primary px-5 font-heading text-sm uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-[color:var(--primary-deep)] disabled:opacity-60"
				>
					{isPending ? "…" : "Sign up"}
				</button>
			</div>
			{state?.error ? (
				<p role="alert" className="text-xs text-destructive">
					{state.error}
				</p>
			) : null}
		</form>
	);
}
