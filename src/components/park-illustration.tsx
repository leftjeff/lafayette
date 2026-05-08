import { cn } from "@/lib/utils";

export function ParkIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      role="img"
      aria-label="Stylized illustration of Lafayette-Pointer Park"
      className={cn("h-full w-full", className)}
    >
      <defs>
        <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.92 0.04 220)" />
          <stop offset="100%" stopColor="oklch(0.97 0.02 95)" />
        </linearGradient>
        <linearGradient id="grass" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.62 0.13 140)" />
          <stop offset="100%" stopColor="oklch(0.5 0.12 145)" />
        </linearGradient>
        <linearGradient id="hill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.55 0.11 145)" />
          <stop offset="100%" stopColor="oklch(0.42 0.09 150)" />
        </linearGradient>
      </defs>

      <rect width="800" height="500" fill="url(#sky)" />

      {/* sun */}
      <circle cx="640" cy="120" r="46" fill="oklch(0.93 0.09 90)" />

      {/* far hills */}
      <path
        d="M0 300 Q 150 240 300 290 T 600 280 T 800 300 V500 H0 Z"
        fill="url(#hill)"
        opacity="0.55"
      />

      {/* mid hill */}
      <path
        d="M0 360 Q 200 290 420 340 T 800 350 V500 H0 Z"
        fill="url(#hill)"
        opacity="0.8"
      />

      {/* grass foreground */}
      <path d="M0 410 Q 200 380 400 405 T 800 410 V500 H0 Z" fill="url(#grass)" />

      {/* path */}
      <path
        d="M120 500 Q 380 410 520 380 T 760 320"
        stroke="oklch(0.85 0.04 90)"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* trees */}
      <Tree x={120} y={360} scale={1} />
      <Tree x={200} y={380} scale={0.7} />
      <Tree x={680} y={350} scale={1.1} />
      <Tree x={600} y={300} scale={0.6} />
      <Tree x={420} y={295} scale={0.55} />

      {/* gazebo silhouette */}
      <g transform="translate(330 305)">
        <polygon points="0,30 60,30 30,0" fill="oklch(0.35 0.05 80)" />
        <rect x="6" y="30" width="48" height="35" fill="oklch(0.45 0.04 80)" />
        <rect x="22" y="40" width="16" height="25" fill="oklch(0.25 0.04 80)" />
      </g>

      {/* people */}
      <g transform="translate(440 395)" fill="oklch(0.28 0.04 150)">
        <circle cx="0" cy="-14" r="4" />
        <rect x="-3" y="-10" width="6" height="14" rx="2" />
      </g>
      <g transform="translate(458 398)" fill="oklch(0.4 0.1 35)">
        <circle cx="0" cy="-12" r="3.5" />
        <rect x="-2.5" y="-9" width="5" height="11" rx="2" />
      </g>
    </svg>
  );
}

function Tree({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-4" y="0" width="8" height="32" fill="oklch(0.32 0.05 60)" />
      <circle cx="0" cy="-10" r="34" fill="oklch(0.46 0.12 145)" />
      <circle cx="-22" cy="0" r="24" fill="oklch(0.5 0.13 140)" />
      <circle cx="22" cy="0" r="24" fill="oklch(0.42 0.11 150)" />
    </g>
  );
}
