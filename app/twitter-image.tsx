import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "StreamTek - Official Magewell Distributor UK";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0f1e 0%, #0f172a 40%, #1e293b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(6, 182, 212, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #06b6d4, #3b82f6, #06b6d4, transparent)",
            display: "flex",
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            borderRadius: 20,
            border: "2px solid rgba(59, 130, 246, 0.25)",
            background: "rgba(15, 23, 42, 0.8)",
            marginBottom: 32,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22v-5" />
            <path d="M9 8V2" />
            <path d="M15 8V2" />
            <path d="M18 8v5a6 6 0 0 1-6 6v0a6 6 0 0 1-6-6V8z" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-1px",
              lineHeight: 1,
              display: "flex",
            }}
          >
            STREAMTEK
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#06b6d4",
              letterSpacing: "8px",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Studio Hardware
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 120,
            height: 2,
            background: "linear-gradient(90deg, transparent, #06b6d4, transparent)",
            marginTop: 36,
            marginBottom: 36,
            display: "flex",
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            fontWeight: 400,
            display: "flex",
            textAlign: "center",
          }}
        >
          Official UK Magewell Distributor
        </div>

        {/* Feature badges */}
        <div
          style={{
            display: "flex",
            gap: 32,
            marginTop: 28,
          }}
        >
          {["Free UK Delivery", "3-Year Warranty", "Next-Day Shipping"].map(
            (text) => (
              <div
                key={text}
                style={{
                  fontSize: 14,
                  color: "#64748b",
                  padding: "8px 20px",
                  borderRadius: 999,
                  border: "1px solid rgba(100, 116, 139, 0.2)",
                  background: "rgba(15, 23, 42, 0.5)",
                  display: "flex",
                }}
              >
                {text}
              </div>
            )
          )}
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #3b82f6, transparent)",
            display: "flex",
          }}
        />

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            fontSize: 16,
            color: "#475569",
            display: "flex",
          }}
        >
          www.streamtek.co.uk
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
