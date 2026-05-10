import { cn } from "@/lib/utils";

type Slug =
  | "recreation-center"
  | "playgrounds"
  | "water-daisy"
  | "tennis"
  | "basketball"
  | "green-spaces"
  | "gardens";

const palette = {
  sky: "#cfe1d2",
  skyTop: "#d8e6da",
  skyBottom: "#f1ecd6",
  grassTop: "#5e8a47",
  grassBottom: "#3d6f35",
  pathLight: "#ecdcab",
  pathDark: "#c8b984",
  treeMid: "#3f7a3a",
  treeDark: "#2c5a30",
  treeLight: "#5a9a4a",
  trunk: "#5a3f24",
  brick: "#c46a3f",
  brickDeep: "#8b3e21",
  amber: "#e29b2b",
  cream: "#f7efd8",
  blueRoof: "#3e5e74",
  red: "#c4593b",
  orange: "#e6803a",
  white: "#ffffff",
  beige: "#dccfa3",
  pink: "#f2b3c4",
  yellow: "#f3d96b",
  purple: "#b48ad6",
};

export function ParkVignette({
  slug,
  className,
  label,
}: {
  slug: Slug;
  className?: string;
  label?: string;
}) {
  const labelMap: Record<Slug, string> = {
    "recreation-center": "Lafayette-Pointer Recreation Center illustration",
    playgrounds: "Playgrounds illustration",
    "water-daisy": "Water Daisy sprayground illustration",
    tennis: "Tennis courts illustration",
    basketball: "Basketball court illustration",
    "green-spaces": "Green spaces illustration",
    gardens: "Gardens illustration",
  };
  return (
    <svg
      viewBox="0 0 400 240"
      role="img"
      aria-label={label ?? labelMap[slug]}
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
    >
      <Sky />
      {slug === "recreation-center" && <RecCenter />}
      {slug === "playgrounds" && <Playground />}
      {slug === "water-daisy" && <WaterDaisy />}
      {slug === "tennis" && <Tennis />}
      {slug === "basketball" && <Basketball />}
      {slug === "green-spaces" && <GreenSpaces />}
      {slug === "gardens" && <Gardens />}
    </svg>
  );
}

function Sky() {
  return (
    <>
      <defs>
        <linearGradient id="vSky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={palette.skyTop} />
          <stop offset="60%" stopColor="#ecf2dc" />
          <stop offset="100%" stopColor={palette.skyBottom} />
        </linearGradient>
        <linearGradient id="vGrass" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={palette.grassTop} />
          <stop offset="100%" stopColor={palette.grassBottom} />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#vSky)" />
      <circle cx="330" cy="48" r="22" fill={palette.amber} opacity="0.85" />
      <circle cx="330" cy="48" r="36" fill={palette.amber} opacity="0.18" />
      <path d="M0 165 Q 100 130 200 150 T 400 155 V240 H0 Z" fill={palette.treeDark} opacity="0.55" />
      <path d="M0 200 V240 H400 V200 Q 200 175 0 200 Z" fill="url(#vGrass)" />
    </>
  );
}

function RecCenter() {
  return (
    <g>
      {/* tree behind */}
      <Tree x={50} y={188} scale={0.9} />
      <Tree x={365} y={190} scale={0.85} />
      {/* building body */}
      <rect x="110" y="100" width="180" height="100" fill={palette.cream} />
      <rect x="110" y="100" width="180" height="100" fill="none" stroke={palette.brickDeep} strokeWidth="1.5" />
      {/* roof */}
      <polygon points="100,100 200,60 300,100" fill={palette.brick} />
      <polygon points="100,100 200,60 300,100" fill="none" stroke={palette.brickDeep} strokeWidth="1.5" />
      {/* door */}
      <rect x="184" y="148" width="32" height="52" fill={palette.brickDeep} />
      <circle cx="210" cy="174" r="1.6" fill={palette.amber} />
      {/* windows */}
      <rect x="128" y="120" width="34" height="22" fill={palette.sky} />
      <rect x="128" y="120" width="34" height="22" fill="none" stroke={palette.brickDeep} strokeWidth="1" />
      <rect x="238" y="120" width="34" height="22" fill={palette.sky} />
      <rect x="238" y="120" width="34" height="22" fill="none" stroke={palette.brickDeep} strokeWidth="1" />
      <rect x="128" y="156" width="34" height="22" fill={palette.sky} />
      <rect x="128" y="156" width="34" height="22" fill="none" stroke={palette.brickDeep} strokeWidth="1" />
      <rect x="238" y="156" width="34" height="22" fill={palette.sky} />
      <rect x="238" y="156" width="34" height="22" fill="none" stroke={palette.brickDeep} strokeWidth="1" />
      {/* path */}
      <path d="M200 240 L 200 200" stroke={palette.beige} strokeWidth="22" />
    </g>
  );
}

function Playground() {
  return (
    <g>
      {/* slide structure */}
      <rect x="80" y="120" width="80" height="60" fill={palette.brick} />
      <rect x="78" y="116" width="84" height="6" fill={palette.brickDeep} />
      <rect x="100" y="180" width="6" height="20" fill={palette.brickDeep} />
      <rect x="134" y="180" width="6" height="20" fill={palette.brickDeep} />
      {/* slide */}
      <path d="M160 130 Q 220 165 230 200" stroke={palette.amber} strokeWidth="10" fill="none" strokeLinecap="round" />
      {/* swings */}
      <line x1="270" y1="100" x2="320" y2="100" stroke={palette.brickDeep} strokeWidth="4" />
      <line x1="270" y1="100" x2="280" y2="160" stroke={palette.brickDeep} strokeWidth="2" />
      <line x1="320" y1="100" x2="310" y2="160" stroke={palette.brickDeep} strokeWidth="2" />
      <line x1="280" y1="100" x2="285" y2="160" stroke={palette.brickDeep} strokeWidth="2" />
      <line x1="310" y1="100" x2="305" y2="160" stroke={palette.brickDeep} strokeWidth="2" />
      <rect x="277" y="160" width="14" height="4" fill={palette.brick} />
      <rect x="299" y="160" width="14" height="4" fill={palette.brick} />
      {/* posts holding swing */}
      <line x1="270" y1="100" x2="260" y2="200" stroke={palette.brickDeep} strokeWidth="4" />
      <line x1="320" y1="100" x2="330" y2="200" stroke={palette.brickDeep} strokeWidth="4" />
      {/* ball on ground */}
      <circle cx="190" cy="218" r="8" fill={palette.red} />
      <Tree x={30} y={185} scale={0.7} />
      <Tree x={370} y={195} scale={0.7} />
    </g>
  );
}

function WaterDaisy() {
  return (
    <g>
      {/* daisy petals */}
      <g transform="translate(200 150)">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <ellipse
            key={deg}
            cx="0"
            cy="-44"
            rx="14"
            ry="28"
            fill={palette.white}
            stroke={palette.sky}
            strokeWidth="1"
            transform={`rotate(${deg})`}
          />
        ))}
        <circle cx="0" cy="0" r="20" fill={palette.amber} />
      </g>
      {/* water arcs */}
      <g stroke={palette.sky} strokeWidth="2.4" fill="none" strokeLinecap="round" opacity="0.85">
        <path d="M200 100 Q 230 70 260 90" />
        <path d="M200 100 Q 170 70 140 90" />
        <path d="M200 100 Q 215 70 230 80" />
        <path d="M200 100 Q 185 70 170 80" />
      </g>
      {/* puddle */}
      <ellipse cx="200" cy="216" rx="120" ry="14" fill="#9ec0d6" opacity="0.7" />
      <Tree x={55} y={195} scale={0.7} />
      <Tree x={345} y={195} scale={0.7} />
    </g>
  );
}

function Tennis() {
  return (
    <g>
      {/* court */}
      <rect x="60" y="120" width="280" height="100" fill={palette.brick} opacity="0.9" />
      <rect x="60" y="120" width="280" height="100" fill="none" stroke={palette.white} strokeWidth="2" />
      <line x1="200" y1="120" x2="200" y2="220" stroke={palette.white} strokeWidth="2" />
      <line x1="60" y1="170" x2="340" y2="170" stroke={palette.white} strokeWidth="1.4" strokeDasharray="4 4" />
      {/* net */}
      <line x1="200" y1="108" x2="200" y2="120" stroke={palette.brickDeep} strokeWidth="2" />
      <rect x="100" y="120" width="200" height="14" fill="rgba(255,255,255,0.45)" />
      {/* ball */}
      <circle cx="270" cy="150" r="7" fill={palette.yellow} stroke={palette.brickDeep} strokeWidth="0.8" />
      <Tree x={30} y={180} scale={0.7} />
      <Tree x={370} y={185} scale={0.65} />
    </g>
  );
}

function Basketball() {
  return (
    <g>
      {/* court */}
      <rect x="40" y="170" width="320" height="60" fill={palette.brick} opacity="0.85" />
      <rect x="40" y="170" width="320" height="60" fill="none" stroke={palette.white} strokeWidth="1.6" />
      <circle cx="200" cy="200" r="22" fill="none" stroke={palette.white} strokeWidth="1.6" />
      {/* hoop pole */}
      <rect x="92" y="80" width="6" height="100" fill={palette.brickDeep} />
      <rect x="60" y="78" width="40" height="22" fill={palette.white} stroke={palette.brickDeep} strokeWidth="1.5" />
      <rect x="74" y="86" width="14" height="10" fill="none" stroke={palette.brickDeep} strokeWidth="1" />
      <ellipse cx="80" cy="104" rx="10" ry="3" fill="none" stroke={palette.orange} strokeWidth="1.6" />
      {/* opposite hoop */}
      <rect x="302" y="80" width="6" height="100" fill={palette.brickDeep} />
      <rect x="300" y="78" width="40" height="22" fill={palette.white} stroke={palette.brickDeep} strokeWidth="1.5" />
      <rect x="312" y="86" width="14" height="10" fill="none" stroke={palette.brickDeep} strokeWidth="1" />
      <ellipse cx="320" cy="104" rx="10" ry="3" fill="none" stroke={palette.orange} strokeWidth="1.6" />
      {/* ball */}
      <circle cx="220" cy="160" r="9" fill={palette.orange} />
      <path d="M211 160 H 229 M 220 151 V 169 M 213 153 Q 220 160 213 167 M 227 153 Q 220 160 227 167" stroke={palette.brickDeep} strokeWidth="0.8" fill="none" />
      <Tree x={20} y={195} scale={0.6} />
      <Tree x={380} y={200} scale={0.55} />
    </g>
  );
}

function GreenSpaces() {
  return (
    <g>
      {/* picnic blanket */}
      <rect x="130" y="180" width="100" height="40" fill={palette.red} opacity="0.85" />
      <path d="M130 190 H 230 M 130 200 H 230 M 130 210 H 230" stroke={palette.white} strokeWidth="1" opacity="0.6" />
      <path d="M150 180 V 220 M 170 180 V 220 M 190 180 V 220 M 210 180 V 220" stroke={palette.white} strokeWidth="1" opacity="0.6" />
      {/* basket */}
      <rect x="148" y="170" width="22" height="14" fill={palette.beige} stroke={palette.brickDeep} strokeWidth="1" />
      <path d="M153 170 Q 159 162 165 170" stroke={palette.brickDeep} strokeWidth="1" fill="none" />
      {/* frisbee */}
      <ellipse cx="280" cy="195" rx="18" ry="6" fill={palette.purple} />
      <Tree x={40} y={180} scale={1.0} />
      <Tree x={350} y={188} scale={0.85} />
      <Tree x={310} y={170} scale={0.55} />
      <Tree x={90} y={170} scale={0.5} />
    </g>
  );
}

function Gardens() {
  return (
    <g>
      {/* gazebo silhouette */}
      <polygon points="280,150 340,150 310,108" fill={palette.brick} />
      <rect x="284" y="150" width="52" height="38" fill={palette.brickDeep} />
      <rect x="304" y="160" width="14" height="28" fill="#1f1812" />
      {/* flower beds */}
      <g transform="translate(120 200)">
        <ellipse cx="0" cy="0" rx="80" ry="14" fill="#446c2c" opacity="0.85" />
        <Flowers />
      </g>
      <g transform="translate(280 215)">
        <ellipse cx="0" cy="0" rx="60" ry="12" fill="#446c2c" opacity="0.85" />
        <Flowers small />
      </g>
      <Tree x={45} y={180} scale={0.85} />
      <Tree x={210} y={170} scale={0.7} />
    </g>
  );
}

function Flowers({ small }: { small?: boolean }) {
  const dots: Array<[number, number, string]> = [
    [-50, -6, palette.pink],
    [-30, -10, palette.amber],
    [-10, -6, palette.yellow],
    [10, -10, palette.purple],
    [30, -6, palette.pink],
    [50, -10, palette.amber],
    [-40, 4, palette.yellow],
    [0, 6, palette.purple],
    [40, 4, palette.pink],
  ];
  const r = small ? 3.2 : 4;
  return (
    <g>
      {dots.map(([dx, dy, color], i) => (
        <g key={i} transform={`translate(${dx} ${dy})`}>
          <circle cx="0" cy="0" r={r} fill={color} />
          <circle cx="0" cy="0" r={r * 0.4} fill={palette.amber} opacity="0.7" />
        </g>
      ))}
    </g>
  );
}

function Tree({ x, y, scale }: { x: number; y: number; scale: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="-3" y="0" width="6" height="22" fill={palette.trunk} />
      <circle cx="0" cy="-8" r="22" fill={palette.treeMid} />
      <circle cx="-14" cy="2" r="16" fill={palette.treeLight} />
      <circle cx="14" cy="2" r="16" fill={palette.treeDark} />
    </g>
  );
}
