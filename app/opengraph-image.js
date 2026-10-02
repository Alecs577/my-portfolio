import { ImageResponse } from "next/og";

export const alt = "Alex Berardozzi — Full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0A",
          color: "#EDEDED",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            background: "#FF6A3D",
            borderRadius: 999,
            marginBottom: 32,
          }}
        />
        <div style={{ fontSize: 72, fontWeight: 500, letterSpacing: "-0.04em" }}>
          Alex Berardozzi
        </div>
        <div style={{ fontSize: 28, color: "#8F8F8F", marginTop: 16 }}>
          Full-stack developer — from schema to pixel.
        </div>
      </div>
    ),
    { ...size }
  );
}
