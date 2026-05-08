import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#2d5e3e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="120"
        height="120"
        fill="none"
        stroke="#f4f1e8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20c8 0 16-6 16-16-9 0-16 5-16 12 0 1.5 0 3 .5 4Z" />
        <path d="M4.5 20C8 16 12 13 18 8" />
      </svg>
    </div>,
    size,
  );
}
