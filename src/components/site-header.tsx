"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-[color:var(--heading)]"
        >
          <LeafMark className="size-9 text-primary" />
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
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 font-heading text-base text-[color:var(--heading)] hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3">
                <Link href="/get-involved#donate">Donate</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      role="img"
      aria-label="Leaf mark"
      className={className}
    >
      <circle cx="20" cy="20" r="19" fill="currentColor" />
      <path
        d="M11 27c8 0 16-6 17-17-9 0-16 5-16 12 0 1.6 0 3.4-1 5Z"
        fill="#fff"
        fillOpacity="0.95"
      />
      <path
        d="M11 27c4-4 8-7 13-11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
