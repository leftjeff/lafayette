import { cn } from "@/lib/utils";

type Variant = "landscape" | "portrait";

export function ParkIllustration({
  className,
  variant = "landscape",
  label = "Stylized illustration of Lafayette-Pointer Park",
}: {
  className?: string;
  variant?: Variant;
  label?: string;
}) {
  if (variant === "portrait") return <PortraitPark className={className} label={label} />;
  return <LandscapePark className={className} label={label} />;
}

function LandscapePark({ className, label }: { className?: string; label: string }) {
  return (
    <svg
      viewBox="0 0 800 500"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
    >
      <Defs />
      <rect width="800" height="500" fill="url(#sky)" />
      <circle cx="640" cy="120" r="46" fill="#f3e5b3" />
      <path
        d="M0 300 Q 150 240 300 290 T 600 280 T 800 300 V500 H0 Z"
        fill="url(#hill)"
        opacity="0.55"
      />
      <path
        d="M0 360 Q 200 290 420 340 T 800 350 V500 H0 Z"
        fill="url(#hill)"
        opacity="0.85"
      />
      <path d="M0 410 Q 200 380 400 405 T 800 410 V500 H0 Z" fill="url(#grass)" />
      <path
        d="M120 500 Q 380 410 520 380 T 760 320"
        stroke="#dccfa3"
        strokeWidth="22"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <Tree x={120} y={360} scale={1} />
      <Tree x={200} y={380} scale={0.7} />
      <Tree x={680} y={350} scale={1.1} />
      <Tree x={600} y={300} scale={0.6} />
      <Tree x={420} y={295} scale={0.55} />
      <Gazebo x={330} y={305} />
      <Person x={440} y={395} fill="#22351c" />
      <Person x={458} y={398} fill="#7a4327" scale={0.85} />
    </svg>
  );
}

function PortraitPark({ className, label }: { className?: string; label: string }) {
  return (
    <svg
      viewBox="0 0 600 800"
      role="img"
      aria-label={label}
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
    >
      <Defs />

      {/* sky */}
      <rect width="600" height="800" fill="url(#sky)" />
      <circle cx="430" cy="150" r="58" fill="#f3e5b3" opacity="0.95" />
      <circle cx="430" cy="150" r="80" fill="#f3e5b3" opacity="0.18" />

      {/* far ridge */}
      <path
        d="M0 360 Q 180 300 360 340 T 600 350 V800 H0 Z"
        fill="url(#hill)"
        opacity="0.55"
      />
      {/* mid ridge */}
      <path
        d="M0 470 Q 200 410 380 450 T 600 460 V800 H0 Z"
        fill="url(#hill)"
        opacity="0.85"
      />
      {/* foreground grass */}
      <path d="M0 580 Q 200 540 360 565 T 600 570 V800 H0 Z" fill="url(#grass)" />

      {/* path winds toward gazebo */}
      <path
        d="M50 800 Q 240 720 320 640 T 470 510"
        stroke="#dccfa3"
        strokeWidth="36"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      <path
        d="M50 800 Q 240 720 320 640 T 470 510"
        stroke="#c8b984"
        strokeWidth="2"
        strokeDasharray="2 14"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* big foreground tree (left) */}
      <Tree x={120} y={580} scale={1.6} />
      {/* mid trees */}
      <Tree x={500} y={510} scale={1.0} />
      <Tree x={250} y={490} scale={0.7} />
      <Tree x={420} y={420} scale={0.55} />
      <Tree x={90} y={430} scale={0.5} />

      {/* gazebo */}
      <Gazebo x={290} y={470} scale={1.5} />

      {/* people on the path */}
      <Person x={310} y={690} scale={1.4} fill="#22351c" />
      <Person x={340} y={700} scale={1.2} fill="#7a4327" />

      {/* flower beds */}
      <g transform="translate(440 700)">
        <ellipse cx="0" cy="0" rx="60" ry="14" fill="#446c2c" opacity="0.85" />
        <FlowerCluster />
      </g>
      <g transform="translate(150 740)">
        <ellipse cx="0" cy="0" rx="55" ry="12" fill="#446c2c" opacity="0.85" />
        <FlowerCluster />
      </g>
    </svg>
  );
}

function Defs() {
  return (
    <defs>
      <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#cfe1d2" />
        <stop offset="60%" stopColor="#e8efde" />
        <stop offset="100%" stopColor="#f1ecd6" />
      </linearGradient>
      <linearGradient id="grass" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#5e8a47" />
        <stop offset="100%" stopColor="#3d6f35" />
      </linearGradient>
      <linearGradient id="hill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#4d7e44" />
        <stop offset="100%" stopColor="#2c5a30" />
      </linearGradient>
    </defs>
  );
}

function Tree({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-4" y="0" width="8" height="32" fill="#5a3f24" />
      <circle cx="0" cy="-12" r="34" fill="#3f7a3a" />
      <circle cx="-22" cy="0" r="24" fill="#4f8a44" />
      <circle cx="22" cy="0" r="24" fill="#326b30" />
    </g>
  );
}

function Gazebo({
  x,
  y,
  scale = 1,
}: {
  x: number;
  y: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <polygon points="0,30 60,30 30,0" fill="#3a3022" />
      <rect x="6" y="30" width="48" height="35" fill="#5a4634" />
      <rect x="22" y="40" width="16" height="25" fill="#1f1812" />
      <rect x="6" y="63" width="48" height="3" fill="#352918" />
    </g>
  );
}

function Person({
  x,
  y,
  fill,
  scale = 1,
}: {
  x: number;
  y: number;
  fill: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} fill={fill}>
      <circle cx="0" cy="-14" r="4.5" />
      <rect x="-3.5" y="-10" width="7" height="14" rx="2" />
    </g>
  );
}

function FlowerCluster() {
  const dots = [
    [-30, -4, "#f4c4cf"],
    [-12, -8, "#f3a5a5"],
    [4, -4, "#fff1a8"],
    [22, -10, "#d6a8e0"],
    [38, -2, "#f4c4cf"],
    [-20, 4, "#fff1a8"],
    [10, 6, "#d6a8e0"],
  ] as const;
  return (
    <g>
      {dots.map(([dx, dy, color], i) => (
        <circle key={i} cx={dx} cy={dy} r="3.5" fill={color} />
      ))}
    </g>
  );
}
