"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
			<div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="flex items-center gap-3 text-[color:var(--heading)]"
				>
					<Image
						src="/folp-leaf.png"
						alt=""
						width={926}
						height={452}
						priority
						className="h-11 w-auto"
					/>
					<span className="leading-tight">
						<span className="block font-heading text-xl tracking-wide sm:text-[1.35rem]">
							Friends of Lafayette-Pointer Park
						</span>
					</span>
				</Link>

				<nav className="hidden items-center gap-1 md:flex">
					{site.nav.slice(1).map((item) => {
						const active =
							item.href === "/"
								? pathname === "/"
								: pathname.startsWith(item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"rounded-md px-3 py-2 font-heading text-[0.95rem] tracking-wide transition-colors",
									active
										? "text-primary"
										: "text-[color:var(--heading)] hover:text-primary",
								)}
							>
								{item.label}
							</Link>
						);
					})}
					<Button asChild size="sm" className="ml-3">
						<Link href="/get-involved#donate">Donate</Link>
					</Button>
				</nav>

				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="md:hidden"
							aria-label="Open menu"
						>
							<Menu className="size-5" />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-72">
						<SheetHeader>
							<SheetTitle className="font-heading">Menu</SheetTitle>
						</SheetHeader>
						<nav className="mt-2 flex flex-col px-3 pb-6">
							{site.nav.map((item) => (
								<SheetClose asChild key={item.href}>
									<Link
										href={item.href}
										className="rounded-md px-3 py-2 font-heading text-base text-[color:var(--heading)] hover:bg-secondary"
									>
										{item.label}
									</Link>
								</SheetClose>
							))}
							<SheetClose asChild>
								<Button asChild className="mt-3">
									<Link href="/get-involved#donate">Donate</Link>
								</Button>
							</SheetClose>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
