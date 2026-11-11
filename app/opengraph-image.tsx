import { ImageResponse } from "next/og";
import { hero, site } from "@/content/site";

export const alt = `${site.name}: ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f6f3ec",
          color: "#1e1c19",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#57524a" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#2d5b4c" }} />
          leopoldhorne.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, color: "#2d5b4c", marginBottom: 20 }}>{site.name}</div>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            {hero.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: 40,
            borderTop: "2px solid #dcd5c8",
            paddingTop: 28,
            fontSize: 26,
            color: "#57524a",
          }}
        >
          <span>GTM Operations · Air Labs</span>
          <span>Ex-JPMorgan IB</span>
          <span>RevOps Consulting</span>
          <span>Builder of ScaleCue</span>
        </div>
      </div>
    ),
    size
  );
}
