import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#2d5e3e",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        fill="none"
        stroke="#f4f1e8"
        strokeWidth="2.2"
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
