import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "PixelFlux — Creative Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public/images/logo-mark.png")
);
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: "#0a0a0b",
          color: "#f2f0ec",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={48} height={48} alt="" />

          <span style={{ fontSize: 34, fontWeight: 700 }}>PixelFlux</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 20,
              fontWeight: 500,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#8b5cf6",
            }}
          >
            Creative Development Startup
          </span>

          <span
            style={{
              marginTop: 20,
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            We build things that move.
          </span>

          <span
            style={{
              marginTop: 24,
              fontSize: 24,
              color: "rgba(242,240,236,0.6)",
            }}
          >
            Websites, interactive experiences, and motion-driven digital work
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
