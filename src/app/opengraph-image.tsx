import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { getContributions } from "@/lib/github";
import { ui } from "@/lib/content";

export const alt = "PARE Mibienpan Joseph — Software Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// dark-theme heatmap ramp; idle cells sit lower than on the page so the
// active days still carry at preview thumbnail size
const levelColors = ["#1C1C1C", "#525252", "#8A8A8A", "#D4D4D4", "#FFFFFF"];

const asset = (file: string) => join(process.cwd(), "assets", file);

const dataUri = (buffer: Buffer, mime: string) =>
  `data:${mime};base64,${buffer.toString("base64")}`;

export default async function Image() {
  const [serif, mono, avatar, mark, contributions] = await Promise.all([
    readFile(asset("instrument-serif-italic.ttf")),
    readFile(asset("geist-mono-regular.ttf")),
    readFile(asset("og-avatar.jpg")),
    readFile(asset("og-l-mark.png")),
    getContributions(),
  ]);

  // last 26 weeks, oldest first — enough history to read as a rhythm
  const days = contributions?.days.slice(-182) ?? [];
  const weeks: number[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7).map((d) => d.level));
  }

  const t = ui.en.hero;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#0A0A0A",
          color: "#FAFAFA",
          fontFamily: "Geist Mono",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 24,
            left: 24,
            right: 24,
            bottom: 24,
            border: "1px dashed rgba(255,255,255,0.14)",
            borderRadius: 20,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <img src={dataUri(mark, "image/png")} width={30} height={30} alt="" />
          <span style={{ fontSize: 20, color: "#A1A1A1", letterSpacing: 1 }}>
            mibienpan.me
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 56 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                fontFamily: "Instrument Serif",
                fontStyle: "italic",
                fontSize: 80,
                lineHeight: 1.05,
                letterSpacing: -1,
              }}
            >
              PARE Mibienpan Joseph
            </div>
            <div style={{ marginTop: 18, fontSize: 22, color: "#A1A1A1" }}>
              {t.role}
            </div>
          </div>
          <img
            src={dataUri(avatar, "image/jpeg")}
            width={200}
            height={200}
            alt=""
            style={{ borderRadius: 28, border: "1px solid rgba(255,255,255,0.14)" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", gap: 4 }}>
              {weeks.map((week, wi) => (
                <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {week.map((level, di) => (
                    <div
                      key={di}
                      style={{
                        width: 15,
                        height: 15,
                        borderRadius: 3,
                        background: levelColors[level],
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
            {contributions && (
              <div style={{ fontSize: 17, color: "#A1A1A1" }}>
                {t.contribTotal.replace("{count}", String(contributions.total))}
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#22C55E",
              }}
            />
            <span style={{ fontSize: 19, color: "#A1A1A1" }}>
              {t.available} · {t.location}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "italic", weight: 400 },
        { name: "Geist Mono", data: mono, style: "normal", weight: 400 },
      ],
    },
  );
}
