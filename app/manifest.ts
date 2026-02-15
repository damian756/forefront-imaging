import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "StreamTek - Professional Video Capture Hardware",
    short_name: "StreamTek",
    description: "Official Magewell USB video capture distributor in the UK. Professional streaming, recording, and capture hardware.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0e1a",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
