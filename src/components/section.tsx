import Image from "next/image";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("mx-auto max-w-6xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-heading text-3xl tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  accent = "leaves",
  photo,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  accent?: "leaves" | "blooms" | "sun" | "court";
  photo?: { src: string; alt: string };
}) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-gradient-to-br from-secondary via-background to-[color:var(--cream)]">
      <PageHeaderAccent variant={accent} />
      <div className="relative mx-auto max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-14 lg:px-8">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mx-auto mt-3 max-w-3xl font-heading text-4xl tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
        {photo ? (
          <div className="relative mx-auto mt-10 aspect-[5/2] max-w-5xl overflow-hidden rounded-2xl shadow-md ring-1 ring-border/70">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 64rem, 100vw"
              priority
              className="object-cover"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function PageHeaderAccent({ variant }: { variant: "leaves" | "blooms" | "sun" | "court" }) {
  if (variant === "blooms") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-10 -top-10 size-64 opacity-70 sm:-right-6 sm:-top-6 sm:size-80"
      >
        <circle cx="60" cy="60" r="44" fill="var(--clay)" opacity="0.25" />
        <circle cx="120" cy="100" r="30" fill="var(--amber)" opacity="0.3" />
        <circle cx="80" cy="130" r="22" fill="var(--primary)" opacity="0.35" />
        <circle cx="150" cy="55" r="14" fill="var(--sky)" opacity="0.3" />
      </svg>
    );
  }
  if (variant === "sun") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -left-12 -bottom-16 size-72 opacity-60 sm:size-80"
      >
        <circle cx="100" cy="100" r="58" fill="var(--amber)" opacity="0.55" />
        <circle cx="100" cy="100" r="84" fill="var(--amber)" opacity="0.18" />
      </svg>
    );
  }
  if (variant === "court") {
    return (
      <svg
        aria-hidden
        viewBox="0 0 240 200"
        className="pointer-events-none absolute -right-8 bottom-0 size-72 opacity-50 sm:size-96"
      >
        <rect x="20" y="40" width="200" height="120" rx="6" fill="var(--clay)" opacity="0.18" />
        <rect x="40" y="60" width="160" height="80" rx="3" fill="none" stroke="var(--clay)" strokeOpacity="0.45" strokeWidth="2" />
        <line x1="120" y1="60" x2="120" y2="140" stroke="var(--clay)" strokeOpacity="0.45" strokeWidth="2" />
        <circle cx="120" cy="100" r="16" fill="none" stroke="var(--clay)" strokeOpacity="0.45" strokeWidth="2" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -right-8 -top-8 size-72 opacity-70 sm:size-96"
    >
      <path
        d="M30 160 Q 80 80 170 40 Q 120 90 60 170 Z"
        fill="var(--primary)"
        opacity="0.18"
      />
      <path
        d="M50 170 Q 90 100 160 70 Q 110 110 70 175 Z"
        fill="var(--primary-deep)"
        opacity="0.18"
      />
      <circle cx="170" cy="50" r="22" fill="var(--amber)" opacity="0.4" />
    </svg>
  );
}
