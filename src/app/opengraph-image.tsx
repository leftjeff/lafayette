import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Friends of Lafayette-Pointer Park — nine acres of green space in Chevy Chase, DC";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(135deg, #2d5e3e 0%, #3f7a52 55%, #6ea27a 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        color: "#f4f1e8",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <svg width="56" height="56" viewBox="0 0 40 40">
          <title>Leaf mark</title>
          <circle cx="20" cy="20" r="19" fill="#f4f1e8" />
          <path
            d="M11 27c8 0 16-6 17-17-9 0-16 5-16 12 0 1.6 0 3.4-1 5Z"
            fill="#2d5e3e"
          />
          <path
            d="M11 27c4-4 8-7 13-11"
            stroke="#2d5e3e"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <span
          style={{
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontSize: 22,
            opacity: 0.85,
          }}
        >
          Chevy Chase · Washington DC
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 88,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            fontWeight: 400,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Friends of</span>
          <span>Lafayette-Pointer Park</span>
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            maxWidth: 880,
            lineHeight: 1.35,
          }}
        >
          Nine acres of green space, stewarded by neighbors since 1999.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          textTransform: "uppercase",
          letterSpacing: "0.22em",
          fontSize: 18,
          opacity: 0.75,
        }}
      >
        <span>lafayetteparkfriends.org</span>
        <span>501(c)(3) nonprofit</span>
      </div>
    </div>,
    size,
  );
}
