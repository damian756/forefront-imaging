export interface Product {
  id: string;
  sku: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  imageUrl: string;
  features: string[];
  price: number;
  stock?: string;
  interface?: string;
  resolution?: string;
  price_category?: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  // Structured content
  specs: Record<string, string>;
  highlights: { value: string; label: string }[];
  useCases: { icon: string; title: string; description: string }[];
  whatsInBox: string[];
  faqs: { question: string; answer: string }[];
  compatibleSoftware: string[];
  compatibleOS: { name: string; version: string }[];
}

export const products: Product[] = [
  // ─────────────────────────────────────────────
  // 1. USB Capture HDMI Gen 2
  // ─────────────────────────────────────────────
  {
    id: "279",
    sku: "32060",
    name: "Magewell USB Capture HDMI Gen 2",
    slug: "magewell-usb-capture-hdmi-gen-2",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png",
    metaTitle: "Magewell USB Capture HDMI Gen 2 | Buy UK | Free Delivery | StreamTek",
    metaDescription: "Buy the Magewell USB Capture HDMI Gen 2 from an official UK distributor. Plug-and-play 1080p60 HDMI to USB 3.0 capture. Zero CPU usage, driver-free. Free UK delivery & 3-year warranty.",
    shortDescription: "The gold-standard HDMI capture dongle. Plug-and-play 1080p60 video into any computer via USB 3.0 — no drivers, no setup, just connect and go. Perfect for streaming, Zoom calls, and content creation.",
    description: `
      <h2>The Easiest Way to Capture HDMI Video</h2>
      <p>The <strong>Magewell USB Capture HDMI Gen 2</strong> is the easiest way to get professional-quality HDMI video into your computer. Simply plug it into any USB 3.0 port, connect your HDMI source, and it instantly appears as a webcam in your streaming, recording, or conferencing software. <strong>No drivers. No setup. It just works.</strong></p>
      
      <h2>Why Choose the USB Capture HDMI Gen 2?</h2>
      <p>Most cheap capture dongles use software-based processing, which means your computer's CPU has to work overtime to decode and convert the video. The result? Dropped frames, audio sync issues, and a laptop that sounds like a jet engine.</p>
      <p>The USB Capture HDMI Gen 2 is different. Inside its compact aluminium shell is a dedicated <strong>FPGA processing chip</strong> that handles scaling, deinterlacing, colour space conversion, and frame-rate conversion entirely onboard. Your computer simply receives a perfectly-processed video stream — leaving your CPU free to run OBS, Zoom, or whatever else you need.</p>
      
      <h2>Built for Reliability</h2>
      <p>Trusted by hospitals, universities, broadcasters, and thousands of streamers worldwide, this device is engineered for continuous operation. The solid metal housing dissipates heat passively — no fans, no noise, no moving parts to fail. As an official UK Magewell distributor, every unit from StreamTek comes with a <strong>3-year warranty</strong>, free UK shipping, and dedicated technical support.</p>
    `,
    features: [
      "True plug-and-play — no drivers to install on any operating system",
      "FPGA-based onboard processing — zero CPU usage on your computer",
      "Captures up to 1080p at 60fps in crystal-clear quality",
      "8-channel 24-bit HDMI audio at up to 192kHz",
      "Works with OBS Studio, Zoom, Teams, vMix, XSplit, and more",
      "Compact metal body (92mm) — fits in your pocket",
      "USB bus-powered — no external power supply needed",
      "Custom EDID support for advanced signal control"
    ],
    highlights: [
      { value: "1080p60", label: "Full HD capture at 60fps" },
      { value: "0%", label: "CPU usage — FPGA onboard" },
      { value: "46g", label: "Pocket-sized metal body" }
    ],
    specs: {
      "Video Input": "HDMI 1.4a (up to 2048×1080 @ 60fps 4:4:4)",
      "Max Capture Resolution": "2048×2160 @ 120fps",
      "Colour Formats": "RGB/YUV 4:4:4 (8/10/12-bit), YUY2 4:2:2",
      "Audio Input": "8-channel 24-bit HDMI embedded @ 192kHz",
      "Audio Output": "2-channel IEC60958 via USB",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Processing Rate": "160 megapixels per second",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered — max 2.5W (5V @ 0.5A)",
      "Dimensions": "92.2 × 40.2 × 12.3 mm",
      "Weight": "46g",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "API / SDK": "DirectShow, V4L2, AVCaptureSession, MWCapture SDK",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Video", title: "Live Streaming", description: "Connect any HDMI camera to your laptop and go live on YouTube, Twitch, or Facebook using OBS Studio or Streamlabs. The onboard FPGA handles all the heavy lifting so your stream stays smooth." },
      { icon: "Monitor", title: "Video Conferencing", description: "Zoom-certified. Use a professional camera instead of your built-in webcam for sharper, more impressive video calls on Zoom, Microsoft Teams, or Google Meet." },
      { icon: "Gamepad2", title: "Game Capture", description: "Capture gameplay from your PlayStation, Xbox, or Nintendo Switch in 1080p60. Perfect for recording highlights and building your channel." },
      { icon: "GraduationCap", title: "Education & Training", description: "Record lectures, demonstrations, and presentations by capturing your document camera, visualiser, or laptop output directly into your recording software." },
      { icon: "HeartPulse", title: "Medical & Scientific", description: "Capture real-time feeds from ultrasound machines, endoscopes, and microscopes. Used in hospitals and clinics worldwide for telemedicine and procedure recording." },
      { icon: "Church", title: "Houses of Worship", description: "Stream your services to YouTube or Facebook with a single USB cable from your camera. No complex setup, no IT expertise required." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture HDMI Gen 2",
      "1× USB 3.0 Cable (63cm)",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "Do I need to install any drivers?", answer: "No. The USB Capture HDMI Gen 2 is a true plug-and-play device. It uses the standard UVC/UAC protocols, so Windows, macOS, Linux, and Chrome OS recognise it instantly as a webcam and microphone — no driver installation required." },
      { question: "Will this work with my streaming software?", answer: "Yes. It works with OBS Studio, Streamlabs, XSplit, vMix, Wirecast, Zoom, Microsoft Teams, Google Meet, Skype, and any other software that accepts a webcam input (DirectShow on Windows, V4L2 on Linux, AVCaptureSession on macOS)." },
      { question: "Can I capture 4K video with this device?", answer: "This model accepts inputs up to 2048×1080 at 60fps and can output up to 2048×2160 via internal scaling. For native 4K HDMI capture, consider the USB Capture HDMI 4K Plus or HDMI 4K Pro." },
      { question: "Does it need an external power supply?", answer: "No. It draws less than 2.5W from the USB port — no power brick, no mains adapter. Just one USB cable." },
      { question: "What's the difference between this and the HDMI Plus?", answer: "The HDMI Plus adds an HDMI loop-through output (so you can monitor on a local screen) and 3.5mm audio jacks for headset/mic integration. The Gen 2 is the most compact and affordable option if you don't need those extras." },
      { question: "Is there any latency?", answer: "The hardware processing adds approximately 80ms of latency in the captured stream — imperceptible for streaming, recording, and conferencing. Your HDMI source device itself has zero additional delay." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "Skype", "GoToMeeting", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 2. USB Capture AIO
  // ─────────────────────────────────────────────
  {
    id: "280",
    sku: "321100000",
    name: "Magewell USB Capture AIO",
    slug: "magewell-usb-capture-aio",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-aio-1.png",
    metaTitle: "Magewell USB Capture AIO | All-In-One Capture | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture AIO — accepts HDMI, SDI, DVI, VGA & Component in one device. Replace 5 dongles with 1. Official UK distributor, free delivery & 3-year warranty.",
    shortDescription: "The Swiss Army knife of capture devices. One unit that accepts HDMI, SDI, DVI, VGA, and Component inputs — replace your entire dongle collection with a single, reliable device.",
    description: `
      <h2>Every Input. One Device.</h2>
      <p>The <strong>Magewell USB Capture AIO</strong> (All-In-One) is the most versatile capture device on the market. It accepts <strong>HDMI, 3G-SDI, DVI, VGA, Component, Composite, and S-Video</strong> signals in a single rugged unit — eliminating the need to carry multiple dongles for different source types.</p>
      
      <h2>Why Choose the USB Capture AIO?</h2>
      <p>Whether you need to capture a legacy VGA laptop, a professional SDI camera, a modern HDMI game console, or an old composite CCTV feed, the AIO handles it all. It automatically detects the connected signal type and configures itself accordingly — no manual switching required.</p>
      <p>Like all Magewell USB Capture devices, the AIO features a dedicated FPGA chip that processes video entirely onboard. Your computer's CPU stays free for encoding, streaming, or running your conferencing software. The built-in active cooling fan ensures rock-solid stability during extended capture sessions.</p>
      
      <h2>Built for Reliability</h2>
      <p>The AIO's robust metal housing and active thermal management make it ideal for permanent installations and demanding field work alike. Every unit from StreamTek comes with a <strong>3-year warranty</strong>, free UK shipping, and expert technical support.</p>
    `,
    features: [
      "7 input types in one device — HDMI, SDI, DVI, VGA, Component, Composite, S-Video",
      "Automatic signal detection — no manual input switching",
      "FPGA-based onboard processing — zero CPU usage",
      "Active fan cooling for continuous 24/7 operation",
      "Captures up to 1080p at 60fps",
      "8-channel embedded audio plus analog stereo input",
      "Works with all major streaming and conferencing software",
      "Driver-free on Windows, Mac, Linux, and Chrome OS"
    ],
    highlights: [
      { value: "7", label: "Input types in one device" },
      { value: "0%", label: "CPU usage — FPGA onboard" },
      { value: "24/7", label: "Active cooling for non-stop use" }
    ],
    specs: {
      "Video Inputs": "HDMI 1.4a, 3G-SDI (BNC), DVI, VGA, Component (RCA), Composite (RCA), S-Video",
      "Max Input Resolution": "2048×2160 pixels",
      "Max Capture Resolution": "2048×2160 @ 120fps",
      "SDI Support": "SD-SDI, HD-SDI, 3G-SDI (up to 2048×1080 @ 60fps)",
      "Audio Input": "8-channel HDMI/SDI embedded + 3.5mm analog stereo",
      "Audio Output": "2-channel via USB",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, aspect ratio conversion",
      "Cooling": "Active fan cooling",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered + optional DC input",
      "Dimensions": "116 × 76 × 25 mm",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Layers", title: "AV Integration", description: "One device for any signal type you encounter on-site. Ideal for AV integrators, system installers, and IT professionals who deal with unpredictable source equipment." },
      { icon: "Monitor", title: "Legacy System Capture", description: "Capture feeds from older VGA computers, composite CCTV systems, or S-Video equipment. Perfect for archiving and digitising legacy video sources." },
      { icon: "Radio", title: "Broadcast & Production", description: "Accept SDI feeds from professional cameras or HDMI from consumer devices — all through the same capture path. Simplifies multi-source production environments." },
      { icon: "GraduationCap", title: "Education & Training", description: "Capture any classroom source — from ancient VGA projectors to modern HDMI laptops — without swapping hardware. One device covers every lecture theatre." },
      { icon: "Warehouse", title: "Rental & Events", description: "Pack a single AIO instead of five different dongles. You'll be ready for any signal type a client throws at you on event day." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture AIO",
      "1× USB 3.0 Cable",
      "1× DC Power Adapter",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "Can it capture HDMI and SDI at the same time?", answer: "No — the AIO captures one input at a time. However, it automatically detects which input is active and switches to it, so you don't need to manually select the source." },
      { question: "Do I need to install any drivers?", answer: "No. Like all Magewell USB Capture devices, the AIO is fully plug-and-play using standard UVC/UAC protocols. It works instantly on Windows, macOS, Linux, and Chrome OS." },
      { question: "Is the fan noisy?", answer: "The active cooling fan is designed for low-noise operation. It's barely audible in a typical office or studio environment and ensures the device remains stable during extended capture sessions." },
      { question: "Will it capture VGA from old computers?", answer: "Yes. The AIO's DVI-I and dedicated analog inputs accept VGA, Component, Composite, and S-Video signals. It's specifically designed for legacy system capture." },
      { question: "Does it need external power?", answer: "It can run on USB bus power for most inputs. For demanding signals or 24/7 operation, the included DC power adapter provides additional stability." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "Skype", "GoToMeeting", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. USB Capture SDI Gen 2
  // ─────────────────────────────────────────────
  {
    id: "281",
    sku: "320700000",
    name: "Magewell USB Capture SDI Gen 2",
    slug: "magewell-usb-capture-sdi-gen-2",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/sdi-usb.606.png",
    metaTitle: "Magewell USB Capture SDI Gen 2 | 3G-SDI to USB | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture SDI Gen 2. Compact 3G-SDI to USB 3.0 capture with loop-through output. Supports cable runs up to 150m. Official UK distributor, free delivery.",
    shortDescription: "Professional 3G-SDI capture in a pocket-sized dongle. Captures broadcast-grade SDI video with a dedicated loop-through output for local monitoring. Built for live events and field production.",
    description: `
      <h2>Broadcast-Grade SDI Capture Made Simple</h2>
      <p>The <strong>Magewell USB Capture SDI Gen 2</strong> brings professional broadcast video into the IT world. It captures SD, HD, and 3G-SDI signals with embedded audio and delivers them to your computer as a standard webcam source — no drivers needed.</p>
      
      <h2>Why Choose the USB Capture SDI Gen 2?</h2>
      <p>SDI is the backbone of professional broadcast for good reason: locking BNC connectors that won't accidentally pull out, electrical isolation that eliminates ground loops, and long cable runs that HDMI simply can't match.</p>
      <p>This dongle features a dedicated <strong>SDI loop-through port</strong>, allowing you to monitor your camera feed on a local display while capturing simultaneously. Built-in cable equalisation handles SDI runs up to <strong>150 metres</strong> for 3G-SDI — so even long cable pulls from stage to control room work flawlessly.</p>
      
      <h2>Built for the Field</h2>
      <p>Enclosed in a robust metal housing, the SDI Gen 2 is built to withstand the rigours of live event production and touring broadcast. USB bus-powered with no external adapter needed, it's the most portable way to get SDI into your laptop. Every unit from StreamTek ships with a <strong>3-year warranty</strong> and free UK delivery.</p>
    `,
    features: [
      "3G-SDI input with active loop-through output",
      "Cable equalisation for runs up to 150m (3G-SDI)",
      "FPGA-based onboard processing — zero CPU usage",
      "16-channel 24-bit SDI embedded audio at 48kHz",
      "Captures up to 1080p at 60fps",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "Compact metal body — USB bus-powered",
      "Locking BNC connectors for secure connections"
    ],
    highlights: [
      { value: "1080p60", label: "Full HD SDI capture" },
      { value: "150m", label: "Cable equalisation range" },
      { value: "Loop", label: "Active SDI loop-through" }
    ],
    specs: {
      "Video Input": "3G-SDI — SD-SDI, HD-SDI, 3G-SDI, 2K-SDI (BNC)",
      "SDI Loop-Through": "Yes — active loop-through (BNC)",
      "Max Input Resolution": "2048×1080 @ 60fps",
      "Max Capture Resolution": "2048×2160 @ 120fps",
      "Cable Equalisation": "330m (SD-SDI), 190m (HD-SDI), 150m (3G-SDI)",
      "Audio Input": "16-channel 24-bit SDI embedded @ 48kHz",
      "Audio Output": "2-channel via USB",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Processing Rate": "160 megapixels per second",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered — max 2.5W",
      "Dimensions": "92.2 × 40.2 × 12.3 mm",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Radio", title: "Broadcast Production", description: "Capture SDI feeds from professional cameras for live production, instant replay, or ISO recording. The loop-through means your video village stays connected." },
      { icon: "Ticket", title: "Live Events", description: "Ingest camera feeds at concerts, conferences, and sporting events. Locking BNC connectors and long cable support make it ideal for demanding event environments." },
      { icon: "Church", title: "Houses of Worship", description: "Capture SDI camera feeds for live streaming your services to YouTube or Facebook. One USB cable to your streaming computer — it's that simple." },
      { icon: "HeartPulse", title: "Medical Imaging", description: "Capture real-time SDI feeds from surgical cameras, endoscopes, and medical imaging equipment for recording, telemedicine, or training purposes." },
      { icon: "GraduationCap", title: "Lecture Capture", description: "Record presentations and lectures from SDI cameras in auditoriums and training facilities. The loop-through keeps the room's display connected." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture SDI Gen 2",
      "1× USB 3.0 Cable (63cm)",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "What SDI formats does it support?", answer: "It supports SD-SDI (270 Mbps), HD-SDI (1.485 Gbps), and 3G-SDI (2.97 Gbps), covering resolutions from 480i all the way up to 1080p60 and 2K." },
      { question: "How far can I run SDI cables to this device?", answer: "The built-in cable equaliser supports runs up to 330m for SD-SDI, 190m for HD-SDI, and 150m for 3G-SDI — without any external signal boosters." },
      { question: "What does the loop-through output do?", answer: "The loop-through sends an exact copy of the incoming SDI signal out through a second BNC port. This lets you connect a local monitor or downstream device while simultaneously capturing to your computer." },
      { question: "Do I need to install any drivers?", answer: "No. It's fully plug-and-play using standard UVC/UAC protocols. Windows, macOS, Linux, and Chrome OS all recognise it as a webcam and audio device instantly." },
      { question: "Can I capture 4K SDI?", answer: "This model supports up to 3G-SDI (1080p60). For 4K SDI capture, see the USB Capture SDI 4K Plus (6G-SDI) or SDI 4K Pro (12G-SDI)." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "Skype", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 4. USB Capture Utility V3
  // ─────────────────────────────────────────────
  {
    id: "282",
    sku: "MW-282",
    name: "USB Capture Utility V3",
    slug: "usb-capture-utility-v3",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/USBCaptureUtilityV3.png",
    metaTitle: "USB Capture Utility V3 | Magewell Configuration Software | StreamTek",
    metaDescription: "Download the USB Capture Utility V3 — essential companion software for Magewell USB Capture devices. Manage EDID, update firmware, adjust colour settings, and diagnose signals.",
    shortDescription: "The essential companion software for your Magewell USB Capture device. Fine-tune video settings, manage custom EDIDs, update firmware, and diagnose signal issues from one simple interface.",
    description: `
      <h2>Unlock the Full Potential of Your Magewell Device</h2>
      <p>The <strong>USB Capture Utility V3</strong> is the companion software that gives you granular control over your Magewell USB capture device. While Magewell hardware works perfectly out of the box, power users and AV professionals often need to fine-tune settings that standard drivers don't expose.</p>
      
      <h2>What Can You Do With It?</h2>
      <p>From custom EDID management and colour space adjustment to image rotation, cropping, and real-time signal diagnostics — this utility puts you in full control. It's also the official tool for <strong>firmware updates</strong>, ensuring your device always runs the latest software with the newest features and compatibility improvements.</p>
      <p>The clean, intuitive interface makes it easy to check input signal status, adjust brightness and contrast, configure audio routing, and export diagnostic information for troubleshooting.</p>
      
      <h2>Cross-Platform Support</h2>
      <p>The USB Capture Utility V3 runs on <strong>Windows, macOS, and Linux</strong>, ensuring you can manage your Magewell devices regardless of your preferred operating system.</p>
    `,
    features: [
      "Custom EDID management — control what your source device sees",
      "Firmware update tool — keep your device current",
      "Real-time signal status monitoring and diagnostics",
      "Colour space and brightness/contrast adjustments",
      "Image flip, mirror, rotation, and cropping controls",
      "Audio routing and volume configuration",
      "Export diagnostic logs for technical support",
      "Works on Windows, macOS, and Linux"
    ],
    highlights: [
      { value: "EDID", label: "Custom EDID management" },
      { value: "FW", label: "Firmware update tool" },
      { value: "3", label: "Platforms supported" }
    ],
    specs: {
      "Type": "Desktop software application",
      "Windows": "Windows 7 / 8 / 10 / 11",
      "macOS": "macOS 10.9 and above",
      "Linux": "x86, x64, ARM (kernel 2.6.35+)",
      "Requires": "Magewell USB Capture device connected via USB",
      "Key Features": "EDID management, firmware updates, signal diagnostics, colour adjustment, image controls",
      "Download": "Free from Magewell website"
    },
    useCases: [
      { icon: "Settings", title: "EDID Management", description: "Set a custom EDID to control what resolution and refresh rate your source device outputs. Essential for tricky HDMI handshake issues and non-standard displays." },
      { icon: "Download", title: "Firmware Updates", description: "Keep your Magewell USB Capture device running the latest firmware with new features, bug fixes, and improved compatibility. One-click update process." },
      { icon: "Activity", title: "Signal Diagnostics", description: "Monitor real-time input signal status including resolution, frame rate, colour format, and audio channels. Invaluable for troubleshooting capture issues." },
      { icon: "Palette", title: "Colour Adjustment", description: "Fine-tune brightness, contrast, hue, and saturation. Adjust colour space conversion settings for accurate colour reproduction in your captured video." }
    ],
    whatsInBox: [
      "Digital download — no physical media",
      "Available from the Magewell downloads page"
    ],
    faqs: [
      { question: "Is the USB Capture Utility free?", answer: "Yes. The USB Capture Utility V3 is a free download from Magewell's official website. It's designed as a companion tool for all Magewell USB Capture hardware." },
      { question: "Do I need this software to use my Magewell device?", answer: "No — Magewell USB Capture devices work plug-and-play without any software. The Utility is for power users who want to access advanced settings, update firmware, or troubleshoot signal issues." },
      { question: "Can I manage EDID settings with this?", answer: "Yes. The Utility lets you load custom EDIDs, which control what resolution and format your source device outputs. This is useful for resolving HDMI handshake problems or forcing specific output settings." },
      { question: "Does it work on Mac and Linux?", answer: "Yes. The USB Capture Utility V3 is available for Windows, macOS, and Linux (x86, x64, and ARM architectures)." },
      { question: "How do I update my device firmware?", answer: "Open the Utility, connect your Magewell device, and click the firmware update button. The software will check for the latest version and guide you through the one-click update process." }
    ],
    compatibleSoftware: ["Magewell USB Capture HDMI Gen 2", "Magewell USB Capture SDI Gen 2", "Magewell USB Capture AIO", "All Magewell USB Capture Plus models", "All Magewell USB Capture 4K models"],
    compatibleOS: [
      { name: "Windows", version: "7 / 8 / 10 / 11" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" }
    ]
  },

  // ─────────────────────────────────────────────
  // 5. USB Capture HDMI Plus
  // ─────────────────────────────────────────────
  {
    id: "283",
    sku: "MW-283",
    name: "Magewell USB Capture HDMI Plus",
    slug: "magewell-usb-capture-hdmi-plus",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-hdmi-plus-banner-card1.png",
    metaTitle: "Magewell USB Capture HDMI Plus | Loop-Through & Audio | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture HDMI Plus. 1080p60 HDMI capture with zero-latency loop-through and 3.5mm audio I/O. Ideal for streaming & gaming. Free UK delivery.",
    shortDescription: "Everything the HDMI Gen 2 offers, plus a zero-latency HDMI loop-through output and 3.5mm audio jacks. See your content on a local display while capturing, and connect a headset directly.",
    description: `
      <h2>Capture, Monitor, and Listen — All From One Device</h2>
      <p>The <strong>Magewell USB Capture HDMI Plus</strong> takes the proven Gen 2 dongle and adds the two features streamers and presenters ask for most: an <strong>HDMI loop-through output</strong> for zero-latency local monitoring, and <strong>3.5mm audio jacks</strong> for connecting a headset or external microphone.</p>
      
      <h2>Why Choose the HDMI Plus?</h2>
      <p>If you're a gamer streaming on Twitch, the loop-through lets you play on your TV with zero delay while OBS captures every frame. If you're a presenter, you can see your slides on the room's projector while your webinar software captures the feed. No signal splitters, no extra cables — the Plus handles it all internally.</p>
      <p>The dedicated audio I/O lets you embed commentary or monitoring audio directly through the device, removing the need for separate USB audio interfaces in simple setups. The built-in FPGA chip processes everything onboard, keeping your CPU free for encoding.</p>
      
      <h2>Built for Daily Use</h2>
      <p>The same robust metal construction, USB bus-powered simplicity, and driver-free operation you expect from Magewell. Backed by StreamTek's <strong>3-year warranty</strong> and free UK shipping.</p>
    `,
    features: [
      "HDMI loop-through — zero-latency passthrough to a local display",
      "3.5mm line-in and line-out audio jacks",
      "FPGA-based onboard processing — zero CPU usage",
      "Captures up to 1080p at 60fps",
      "8-channel 24-bit HDMI audio at up to 192kHz",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "USB bus-powered — no external adapter needed",
      "Custom EDID support"
    ],
    highlights: [
      { value: "1080p60", label: "Full HD capture" },
      { value: "Loop", label: "Zero-latency HDMI passthrough" },
      { value: "Audio", label: "3.5mm mic-in & line-out" }
    ],
    specs: {
      "Video Input": "HDMI 1.4a (up to 2048×1080 @ 60fps 4:4:4)",
      "HDMI Loop-Through": "Yes — zero-latency passthrough",
      "Max Capture Resolution": "2048×2160 @ 120fps",
      "Colour Formats": "RGB/YUV 4:4:4 (8/10/12-bit), YUY2 4:2:2",
      "Audio Input": "8-channel HDMI embedded @ 192kHz + 3.5mm line-in",
      "Audio Output": "3.5mm line-out + USB audio",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered",
      "Dimensions": "100 × 46 × 17 mm (approx.)",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Gamepad2", title: "Game Capture & Streaming", description: "Play on your TV with zero delay via the loop-through while OBS captures every frame. The audio jacks let you add commentary without a separate USB microphone adapter." },
      { icon: "Video", title: "Live Streaming", description: "Stream to YouTube, Twitch, or Facebook while monitoring your output on a local display. Perfect for streamers who want to see exactly what their audience sees." },
      { icon: "Presentation", title: "Presentations & Webinars", description: "Present on the room's projector via loop-through while your webinar software captures the same feed. Your audience sees the slides live, your remote viewers get the recording." },
      { icon: "Monitor", title: "Video Conferencing", description: "Use a professional HDMI camera for Zoom or Teams calls while monitoring your own camera feed on a local screen. The audio jacks connect your headset directly." },
      { icon: "GraduationCap", title: "Lecture Recording", description: "Capture lectures and demonstrations while the instructor monitors their content on the room's display. One device replaces a signal splitter and capture card." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture HDMI Plus",
      "1× USB 3.0 Cable",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "What does the HDMI loop-through do?", answer: "It passes your HDMI input signal directly through to a second HDMI port with zero latency. You can connect a TV, monitor, or projector to see your content in real-time while the device simultaneously captures it via USB." },
      { question: "Can I use a headset with this?", answer: "Yes. The 3.5mm line-in accepts audio from a microphone or headset, and the line-out lets you monitor audio through headphones. This lets you add commentary or monitor your capture without extra USB audio hardware." },
      { question: "Is there any delay on the loop-through output?", answer: "No. The loop-through is a direct electrical passthrough — there is zero latency. Your local display shows the source in real-time, exactly as if the capture device wasn't there." },
      { question: "How is this different from the HDMI Gen 2?", answer: "The Plus adds two things the Gen 2 doesn't have: an HDMI loop-through output and 3.5mm audio jacks. If you need to monitor on a local display or connect a headset, choose the Plus. If you just need capture, the Gen 2 is more compact and affordable." },
      { question: "Do I need drivers?", answer: "No. Fully plug-and-play on Windows, macOS, Linux, and Chrome OS using standard UVC/UAC protocols." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "Skype", "GoToMeeting", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 6. USB Capture DVI Plus
  // ─────────────────────────────────────────────
  {
    id: "284",
    sku: "MW-284",
    name: "Magewell USB Capture DVI Plus",
    slug: "magewell-usb-capture-dvi-plus",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-dvi-plus-banner-card.png",
    metaTitle: "Magewell USB Capture DVI Plus | DVI/VGA/HDMI Capture | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture DVI Plus. Captures DVI, VGA, HDMI & Component via one DVI-I connector with loop-through. Ideal for medical & legacy systems. Free UK delivery.",
    shortDescription: "Specialised capture for DVI and legacy video sources. The DVI-I connector accepts digital DVI, analog VGA, HDMI, and Component signals via adapters — one device for old and new equipment.",
    description: `
      <h2>Capture Legacy and Modern Video Sources</h2>
      <p>The <strong>Magewell USB Capture DVI Plus</strong> is a specialised capture device designed for environments where you need to ingest video from DVI, VGA, and other legacy sources. Its DVI-I connector accepts <strong>digital DVI-D, analog VGA, HDMI (via adapter), and Component</strong> signals — making it the go-to device for capturing equipment that predates the HDMI era.</p>
      
      <h2>Why Choose the DVI Plus?</h2>
      <p>Many medical imaging systems, industrial control consoles, radar displays, and older IT workstations still output DVI or VGA. The DVI Plus lets you capture these feeds in full quality without replacing the source equipment. The integrated <strong>loop-through output</strong> means the original display stays connected — critical for safety-sensitive applications like medical imaging where the primary monitor must remain active.</p>
      <p>The dedicated FPGA chip processes video entirely onboard, handling analog-to-digital conversion for VGA sources, scaling, deinterlacing, and colour space conversion without touching your CPU.</p>
      
      <h2>Medical and Industrial Grade</h2>
      <p>Built with the same metal construction and passive cooling as the rest of the USB Capture range, the DVI Plus is designed for continuous operation in demanding environments. StreamTek provides a <strong>3-year warranty</strong> and expert support for all Magewell devices.</p>
    `,
    features: [
      "DVI-I input — accepts DVI-D, VGA, HDMI, and Component via adapters",
      "DVI loop-through — keep your original display connected",
      "3.5mm line-in audio for analog audio sources",
      "FPGA-based onboard processing — zero CPU usage",
      "High-precision analog-to-digital converter for VGA sources",
      "Captures up to 1080p at 60fps",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "Ideal for medical equipment and legacy IT systems"
    ],
    highlights: [
      { value: "5", label: "Video formats via one connector" },
      { value: "Loop", label: "DVI passthrough output" },
      { value: "ADC", label: "High-precision analog capture" }
    ],
    specs: {
      "Video Input": "DVI-I (DVI-D digital, DVI-A/VGA analog, HDMI via adapter, Component via adapter)",
      "DVI Loop-Through": "Yes — DVI-I passthrough",
      "Max Input Resolution": "2048×1080 @ 60fps",
      "Max Capture Resolution": "2048×2160 @ 120fps",
      "Colour Formats": "RGB/YUV 4:4:4 (8/10/12-bit), YUY2 4:2:2",
      "Audio Input": "3.5mm line-in stereo",
      "Audio Output": "2-channel via USB",
      "Analog ADC": "High-precision analog-to-digital conversion for VGA/Component",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "HeartPulse", title: "Medical Imaging", description: "Capture DVI and VGA feeds from ultrasound machines, endoscopes, X-ray viewers, and patient monitors. The loop-through keeps the primary clinical display connected and uninterrupted." },
      { icon: "Factory", title: "Industrial & Control Systems", description: "Ingest video from radar consoles, SCADA displays, CNC controllers, and other industrial equipment that outputs DVI or VGA. Record operations for compliance, training, or remote monitoring." },
      { icon: "Monitor", title: "Legacy IT Capture", description: "Capture output from older computers, KVM systems, and servers that only have DVI or VGA ports. Perfect for IT documentation, remote support recordings, and system migration projects." },
      { icon: "GraduationCap", title: "Education", description: "Capture presentations from older classroom projectors and document cameras that use VGA or DVI connections. No need to upgrade existing equipment." },
      { icon: "Archive", title: "Video Archiving", description: "Digitise and archive legacy video content from DVI and VGA sources. Preserve important recordings before aging equipment fails." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture DVI Plus",
      "1× USB 3.0 Cable",
      "1× DVI-to-VGA Adapter",
      "1× DVI-to-HDMI Adapter",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "Can I capture VGA with this?", answer: "Yes. The DVI-I connector accepts analog VGA signals via the included DVI-to-VGA adapter. It features a high-precision analog-to-digital converter for clean, accurate VGA capture." },
      { question: "Can I capture HDMI with this?", answer: "Yes — via the included DVI-to-HDMI adapter. However, if HDMI is your only source type, the USB Capture HDMI Gen 2 or HDMI Plus may be a simpler choice." },
      { question: "Will the loop-through work while capturing?", answer: "Yes. The loop-through passes the input signal to a second DVI port simultaneously while capturing. Your original display or monitor continues to work normally." },
      { question: "Do I need drivers?", answer: "No. Fully plug-and-play on Windows, macOS, Linux, and Chrome OS." },
      { question: "Is this suitable for medical environments?", answer: "Yes. The DVI Plus is widely used in hospitals and clinics for capturing feeds from medical imaging equipment. The loop-through ensures the clinical display remains active, and the FPGA processing provides consistent, reliable capture." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 7. USB Capture SDI Plus
  // ─────────────────────────────────────────────
  {
    id: "285",
    sku: "MW-285",
    name: "Magewell USB Capture SDI Plus",
    slug: "magewell-usb-capture-sdi-plus",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-sdi-Plus-e1533651581671.png",
    metaTitle: "Magewell USB Capture SDI Plus | SDI Loop-Through & Audio | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture SDI Plus. 3G-SDI to USB 3.0 capture with active loop-through and line-level audio input. Built for broadcast. Free UK delivery & 3-year warranty.",
    shortDescription: "Advanced 3G-SDI capture with active loop-through and a line-level audio input. Embed external audio from a mixing desk directly into your capture stream — built for professional broadcast.",
    description: `
      <h2>SDI Capture With External Audio Embedding</h2>
      <p>The <strong>Magewell USB Capture SDI Plus</strong> takes the proven SDI Gen 2 and adds the features broadcast professionals need most: an <strong>active SDI loop-through</strong> for monitoring and a <strong>3.5mm line-level audio input</strong> for embedding external audio sources into the capture stream.</p>
      
      <h2>Why Choose the SDI Plus?</h2>
      <p>In live event production, you often need to combine video from an SDI camera with audio from a separate mixing desk. The SDI Plus solves this by letting you embed line-level audio directly into the captured stream — no external embedder or separate audio interface required.</p>
      <p>The active loop-through lets you daisy-chain to a monitor, recorder, or downstream device while capturing simultaneously. Built-in cable equalisation handles SDI runs up to <strong>150 metres</strong> for 3G-SDI, and the FPGA chip processes everything onboard so your CPU stays free for encoding.</p>
      
      <h2>Built for Broadcast</h2>
      <p>Enclosed in a rugged metal housing with professional BNC connectors, the SDI Plus is built for the demanding world of live broadcast and touring production. Every unit from StreamTek ships with a <strong>3-year warranty</strong> and free UK delivery.</p>
    `,
    features: [
      "3G-SDI input with active loop-through output",
      "3.5mm line-level audio input for external audio embedding",
      "Cable equalisation for runs up to 150m (3G-SDI)",
      "FPGA-based onboard processing — zero CPU usage",
      "16-channel 24-bit SDI embedded audio at 48kHz",
      "Captures up to 1080p at 60fps",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "Locking BNC connectors for secure connections"
    ],
    highlights: [
      { value: "1080p60", label: "Full HD SDI capture" },
      { value: "Loop", label: "Active SDI loop-through" },
      { value: "Audio In", label: "Line-level audio embedding" }
    ],
    specs: {
      "Video Input": "3G-SDI — SD-SDI, HD-SDI, 3G-SDI, 2K-SDI (BNC)",
      "SDI Loop-Through": "Yes — active loop-through (BNC)",
      "Max Input Resolution": "2048×1080 @ 60fps",
      "Max Capture Resolution": "2048×2160 @ 120fps",
      "Cable Equalisation": "330m (SD-SDI), 190m (HD-SDI), 150m (3G-SDI)",
      "Audio Input": "16-channel SDI embedded @ 48kHz + 3.5mm line-in",
      "Audio Output": "2-channel via USB",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Radio", title: "Live Event Webcasting", description: "Capture SDI camera feeds with mixed audio from the venue's soundboard via the line-in. One device gives you perfectly synced video and audio for your webcast." },
      { icon: "Mic", title: "Broadcast with External Audio", description: "Embed audio from a mixing desk, wireless receiver, or audio interface directly into the captured video stream. No separate audio capture card needed." },
      { icon: "Ticket", title: "Concert & Conference Production", description: "Ingest professional camera feeds at live events. The loop-through keeps the video village connected while the line-in embeds the house audio mix." },
      { icon: "Church", title: "Houses of Worship", description: "Capture your camera's SDI feed and embed the audio from your church's sound system in one step. Stream to YouTube or Facebook with perfectly synced audio and video." },
      { icon: "Video", title: "Multi-Camera Production", description: "Use multiple SDI Plus units to capture ISO feeds from each camera, daisy-chaining via loop-through to your live switcher." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture SDI Plus",
      "1× USB 3.0 Cable",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "Can I embed audio from a mixing desk?", answer: "Yes. The 3.5mm line-level audio input lets you embed audio from a mixing desk, audio interface, or wireless receiver directly into the captured video stream. This is one of the key advantages over the SDI Gen 2." },
      { question: "What's the difference between this and the SDI Gen 2?", answer: "The SDI Plus adds a 3.5mm line-level audio input for embedding external audio. If you only need SDI capture with embedded audio, the SDI Gen 2 is more compact. If you need to add audio from an external source, choose the Plus." },
      { question: "Does the loop-through affect the captured video?", answer: "No. The loop-through is independent of the capture path. It passes the original SDI signal to a second BNC output with no processing or delay." },
      { question: "Do I need drivers?", answer: "No. Fully plug-and-play using standard UVC/UAC protocols on Windows, macOS, Linux, and Chrome OS." },
      { question: "Can this capture 4K SDI?", answer: "This model supports up to 3G-SDI (1080p60). For 4K SDI capture, see the USB Capture SDI 4K Plus (6G-SDI) or SDI 4K Pro (12G-SDI)." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 8. USB Capture HDMI 4K Plus
  // ─────────────────────────────────────────────
  {
    id: "286",
    sku: "MW-286",
    name: "Magewell USB Capture HDMI 4K Plus",
    slug: "magewell-usb-capture-hdmi-4k-plus",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-hdmi-4k-plus.png",
    metaTitle: "Magewell USB Capture HDMI 4K Plus | 4K60 HDMI Capture | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture HDMI 4K Plus. Capture 4K 60fps HDMI via USB 3.0 with zero-latency loop-through and headphone/mic jacks. Free UK delivery & 3-year warranty.",
    shortDescription: "4K Ultra HD HDMI capture at a full 60 frames per second. HDMI 2.0 input with zero-latency loop-through and integrated headphone and microphone jacks for complete production monitoring.",
    description: `
      <h2>4K Capture Without Compromise</h2>
      <p>The <strong>Magewell USB Capture HDMI 4K Plus</strong> captures Ultra HD video at a full <strong>4K 60fps</strong> through a single USB 3.0 cable. Its HDMI 2.0 input handles the latest 4K sources — from gaming consoles and cinema cameras to medical imaging systems and design workstations — with perfect fidelity.</p>
      
      <h2>Why Choose the HDMI 4K Plus?</h2>
      <p>Where standard capture dongles cap at 1080p, this device delivers the full richness of 4K content. The <strong>HDMI loop-through</strong> passes your 4K signal to a local display with zero latency, so you can game, present, or monitor while capturing simultaneously.</p>
      <p>The integrated <strong>3.5mm microphone input and headphone output</strong> let you add commentary and monitor your capture audio directly from the device. The powerful FPGA processing engine handles up to 640 megapixels per second of throughput — scaling, colour conversion, and deinterlacing all happen onboard without touching your CPU.</p>
      
      <h2>Built for 4K Workflows</h2>
      <p>Whether you're capturing 4K gameplay for your channel, recording surgical procedures in Ultra HD, or archiving design work, the HDMI 4K Plus delivers broadcast-quality results in a portable USB form factor. Backed by StreamTek's <strong>3-year warranty</strong> and free UK shipping.</p>
    `,
    features: [
      "4K60 capture — HDMI 2.0 input up to 4096×2160 at 60fps",
      "HDMI loop-through — zero-latency 4K passthrough to a local display",
      "3.5mm microphone input and headphone output",
      "FPGA processing at 640 megapixels per second",
      "8-channel 24-bit HDMI audio at up to 192kHz",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "USB bus-powered — no external adapter needed",
      "Custom EDID support for advanced signal control"
    ],
    highlights: [
      { value: "4K60", label: "Ultra HD at 60fps" },
      { value: "Loop", label: "Zero-latency 4K passthrough" },
      { value: "640M", label: "Pixels/sec FPGA processing" }
    ],
    specs: {
      "Video Input": "HDMI 2.0 (up to 4096×2160 @ 60fps 4:4:4)",
      "HDMI Loop-Through": "Yes — zero-latency 4K passthrough",
      "Max Capture Resolution": "4096×2160 @ 120fps",
      "Colour Formats": "RGB/YUV 4:4:4 (8/10/12-bit), YUY2 4:2:2",
      "Audio Input": "8-channel HDMI embedded @ 192kHz + 3.5mm mic-in",
      "Audio Output": "3.5mm headphone + USB audio",
      "Video Processing": "Hardware scaling, deinterlacing, HDR conversion, colour space conversion",
      "Processing Rate": "640 megapixels per second",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered — max 7W",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "API / SDK": "DirectShow, V4L2, AVCaptureSession, MWCapture SDK",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Gamepad2", title: "4K Game Capture", description: "Capture PS5, Xbox Series X, or PC gameplay at native 4K 60fps. The loop-through means zero lag on your gaming display while OBS or Elgato records every frame." },
      { icon: "HeartPulse", title: "Medical 4K Imaging", description: "Record ultra-high-resolution feeds from 4K surgical cameras, endoscopes, and diagnostic displays. The loop-through keeps the clinical monitor running without interruption." },
      { icon: "Video", title: "4K Content Creation", description: "Capture 4K output from cinema cameras, design workstations, or presentation systems for recording, streaming, or archiving at the highest quality." },
      { icon: "Monitor", title: "4K Conferencing", description: "Deliver stunning 4K video into Zoom, Teams, or custom conferencing setups. Perfect for executive boardrooms and high-end presentation environments." },
      { icon: "Palette", title: "Design & Creative Work", description: "Capture your 4K design workflow — from CAD applications to video editing timelines — for tutorials, reviews, or portfolio recordings." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture HDMI 4K Plus",
      "1× USB 3.0 Cable",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "Can it really capture 4K at 60fps?", answer: "Yes. The HDMI 2.0 input and 640M pixel/sec FPGA engine handle 4K60 natively. The captured output can be up to 4096×2160 at 60fps depending on your software and USB bandwidth." },
      { question: "Will the loop-through pass 4K to my TV?", answer: "Yes. The HDMI loop-through passes the full 4K60 signal to your display with zero latency. It's a direct electrical passthrough — no processing, no delay." },
      { question: "Can I use a headset for commentary?", answer: "Yes. The 3.5mm mic-in accepts a headset or microphone, and the headphone output lets you monitor the captured audio. Ideal for adding commentary to gameplay or presentation recordings." },
      { question: "Does it support HDR?", answer: "The device can accept HDR-capable HDMI 2.0 signals and perform hardware-based conversion for capture. Check Magewell's latest firmware release notes for specific HDR passthrough support." },
      { question: "How is this different from the HDMI Plus?", answer: "The HDMI 4K Plus supports 4K60 via HDMI 2.0 (vs 1080p60 via HDMI 1.4a on the standard Plus) and has a much more powerful FPGA engine (640M vs 160M pixels/sec). Choose this if you need 4K capture." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "Skype", "GoToMeeting", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 9. USB Capture SDI 4K Plus
  // ─────────────────────────────────────────────
  {
    id: "287",
    sku: "MW-287",
    name: "Magewell USB Capture SDI 4K Plus",
    slug: "magewell-usb-capture-sdi-4k-plus",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb-capture-SDI-4k-plus-banner-Copy.png",
    metaTitle: "Magewell USB Capture SDI 4K Plus | 6G-SDI 4K Capture | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture SDI 4K Plus. 6G-SDI 4K capture via USB 3.0 with SDI loop-through and audio input. Backward compatible with 3G/HD/SD-SDI. Free UK delivery.",
    shortDescription: "6G-SDI 4K capture in a single USB dongle. Ingests 4K video at 30fps from professional SDI cameras, with loop-through for monitoring. Backward compatible with all SDI standards.",
    description: `
      <h2>4K SDI Capture via USB</h2>
      <p>The <strong>Magewell USB Capture SDI 4K Plus</strong> bridges the gap between 4K broadcast infrastructure and computer-based production. It captures <strong>6G-SDI signals at up to 4K 30fps</strong> with full embedded audio, and is fully backward compatible with 3G-SDI, HD-SDI, and SD-SDI sources.</p>
      
      <h2>Why Choose the SDI 4K Plus?</h2>
      <p>As broadcasters and production houses upgrade to 4K cameras, you need a capture device that can keep up. This dongle ingests 6G-SDI signals carrying 4K content and delivers them to your computer as a standard webcam feed — no drivers, no complex setup.</p>
      <p>The <strong>SDI loop-through</strong> lets you pass the signal to a downstream monitor or recorder while capturing. The <strong>3.5mm audio input</strong> lets you embed external audio from a mixing desk. Built-in cable equalisation supports 6G-SDI runs up to <strong>75 metres</strong>, with longer distances at lower data rates.</p>
      
      <h2>Future-Proof Your Kit</h2>
      <p>Because it's backward compatible with every SDI standard from SD through to 6G, this one device works with your entire camera inventory — both current 4K models and older HD gear. StreamTek provides a <strong>3-year warranty</strong> and free UK delivery on every unit.</p>
    `,
    features: [
      "6G-SDI input — captures up to 4K at 30fps (4:2:2 10-bit)",
      "Backward compatible with 3G-SDI, HD-SDI, and SD-SDI",
      "Active SDI loop-through for monitoring",
      "3.5mm line-level audio input for external audio embedding",
      "Cable equalisation up to 75m (6G-SDI), 150m (3G-SDI)",
      "FPGA-based onboard processing — zero CPU usage",
      "16-channel SDI embedded audio at 48kHz",
      "Driver-free on Windows, Mac, Linux, and Chrome OS"
    ],
    highlights: [
      { value: "4K30", label: "6G-SDI 4K capture" },
      { value: "Loop", label: "Active SDI loop-through" },
      { value: "75m", label: "6G-SDI cable equalisation" }
    ],
    specs: {
      "Video Input": "6G-SDI — SD/HD/3G/6G-SDI (BNC), up to 4096×2160 @ 30fps 4:2:2 10-bit",
      "SDI Loop-Through": "Yes — active loop-through (BNC)",
      "Max Capture Resolution": "4096×2160 @ 120fps",
      "Cable Equalisation": "75m (6G-SDI), 150m (3G-SDI), 190m (HD-SDI), 330m (SD-SDI)",
      "Audio Input": "16-channel SDI embedded @ 48kHz + 3.5mm line-in",
      "Audio Output": "2-channel via USB",
      "Video Processing": "Hardware scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Radio", title: "4K Broadcast Production", description: "Capture feeds from 4K SDI cameras for live production, ISO recording, or post-production. The loop-through keeps your monitoring chain connected." },
      { icon: "Clapperboard", title: "Cinema & Film", description: "Ingest 4K SDI output from cinema cameras for on-set monitoring, dailies capture, or remote viewing. Professional-grade signal handling in a portable form factor." },
      { icon: "HeartPulse", title: "4K Medical Imaging", description: "Capture ultra-high-resolution feeds from 4K surgical cameras and diagnostic equipment via SDI. The loop-through maintains the clinical display connection." },
      { icon: "Ticket", title: "Live Events", description: "Capture 4K SDI camera feeds at major events and venues upgrading to UHD. Backward compatible with all your existing HD-SDI cameras too." },
      { icon: "Microscope", title: "Scientific & Research", description: "Record 4K SDI output from microscopes, telescopes, and specialised scientific imaging equipment for analysis, publication, or archiving." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture SDI 4K Plus",
      "1× USB 3.0 Cable",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "Will it work with my existing HD-SDI cameras?", answer: "Yes. The SDI 4K Plus is fully backward compatible with SD-SDI, HD-SDI, and 3G-SDI signals. It automatically detects the input format and adjusts accordingly." },
      { question: "Can it capture 4K at 60fps?", answer: "This model supports 4K at 30fps via 6G-SDI. For 4K60 SDI capture, see the USB Capture SDI 4K Pro which supports 12G-SDI." },
      { question: "How far can I run SDI cables?", answer: "Up to 75m for 6G-SDI, 150m for 3G-SDI, 190m for HD-SDI, and 330m for SD-SDI — with no external signal boosters needed." },
      { question: "Can I embed external audio?", answer: "Yes. The 3.5mm line-level audio input lets you embed audio from a mixing desk, wireless receiver, or other audio source into the captured stream alongside the SDI embedded audio." },
      { question: "Do I need drivers?", answer: "No. Fully plug-and-play on Windows, macOS, Linux, and Chrome OS using standard UVC/UAC protocols." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 10. USB Capture HDMI 4K Pro
  // ─────────────────────────────────────────────
  {
    id: "493",
    sku: "MW-493",
    name: "Magewell USB Capture HDMI 4K Pro",
    slug: "magewell-usb-capture-hdmi-4k-pro",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/usb_capture_hdmi_4k_pro.png",
    metaTitle: "Magewell USB Capture HDMI 4K Pro | Premium 4K60 HDMI | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture HDMI 4K Pro — the most advanced HDMI capture dongle available. 4K60 HDMI 2.0, enhanced FPGA, loop-through & audio I/O. Free UK delivery.",
    shortDescription: "The most advanced HDMI capture dongle in Magewell's lineup. Engineered for the most demanding 4K workflows with enhanced FPGA processing, HDMI 2.0 input, loop-through, and integrated audio I/O.",
    description: `
      <h2>The Pinnacle of USB HDMI Capture</h2>
      <p>The <strong>Magewell USB Capture HDMI 4K Pro</strong> represents the latest generation of Magewell's acclaimed USB capture technology. Built for professionals who demand the absolute highest fidelity, it captures <strong>4K 60fps HDMI 2.0</strong> video with an enhanced FPGA processing engine and delivers it to your computer as a standard webcam source.</p>
      
      <h2>Why Choose the HDMI 4K Pro?</h2>
      <p>Building on years of refinement across the USB Capture range, the 4K Pro delivers Magewell's most advanced feature set in a portable dongle. The enhanced FPGA offers superior video processing with improved colour accuracy, better noise handling, and higher throughput for the most demanding capture scenarios.</p>
      <p>The <strong>HDMI loop-through</strong> passes your full 4K60 signal to a local display with zero latency. Integrated <strong>audio I/O</strong> lets you embed microphone audio and monitor through headphones directly from the device. Custom EDID management gives you complete control over the source signal.</p>
      
      <h2>Premium Build, Premium Support</h2>
      <p>Magewell's newest USB Capture devices represent the cutting edge of what's possible in a bus-powered USB form factor. Every unit from StreamTek comes with a <strong>3-year warranty</strong>, free UK delivery, and priority technical support.</p>
    `,
    features: [
      "4K60 capture — enhanced HDMI 2.0 input up to 4096×2160 at 60fps",
      "Latest-generation enhanced FPGA processing engine",
      "HDMI loop-through — zero-latency 4K passthrough",
      "Integrated microphone input and headphone output",
      "8-channel 24-bit HDMI audio at up to 192kHz",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "USB bus-powered — no external adapter needed",
      "Advanced EDID and colour management"
    ],
    highlights: [
      { value: "4K60", label: "Enhanced HDMI 2.0 capture" },
      { value: "Pro", label: "Latest-gen FPGA engine" },
      { value: "Loop", label: "Zero-latency 4K passthrough" }
    ],
    specs: {
      "Video Input": "HDMI 2.0 (up to 4096×2160 @ 60fps)",
      "HDMI Loop-Through": "Yes — zero-latency 4K passthrough",
      "Max Capture Resolution": "4096×2160 @ 120fps",
      "Colour Formats": "RGB/YUV 4:4:4, 4:2:2, 4:2:0 (8/10/12-bit)",
      "Audio Input": "8-channel HDMI embedded @ 192kHz + 3.5mm mic-in",
      "Audio Output": "3.5mm headphone + USB audio",
      "Video Processing": "Enhanced FPGA — scaling, deinterlacing, HDR, colour conversion, cropping, flip/mirror",
      "Processing Engine": "Latest-generation enhanced FPGA",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "API / SDK": "DirectShow, V4L2, AVCaptureSession, MWCapture SDK",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Video", title: "Professional 4K Production", description: "The ultimate capture device for professional video production workflows demanding the highest HDMI fidelity. Enhanced processing ensures pristine 4K60 capture quality." },
      { icon: "HeartPulse", title: "4K Medical & Surgical", description: "Capture ultra-high-resolution feeds from the latest 4K surgical cameras and medical displays. Enhanced colour accuracy is critical for diagnostic recording." },
      { icon: "Gamepad2", title: "Premium Game Capture", description: "The best USB capture device for PS5, Xbox Series X, and high-end PC gaming at 4K60. Loop-through ensures zero lag on your gaming display." },
      { icon: "Monitor", title: "Executive Conferencing", description: "Deliver the sharpest possible 4K video into Zoom, Teams, or custom conferencing systems. The Pro-level processing ensures clean, professional output." },
      { icon: "Palette", title: "Creative & Design Capture", description: "Record 4K workflows from design applications, video editing suites, and creative tools with enhanced colour fidelity and processing accuracy." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture HDMI 4K Pro",
      "1× USB 3.0 Cable",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "What's the difference between the 4K Pro and the 4K Plus?", answer: "The 4K Pro features Magewell's latest-generation enhanced FPGA processing engine with improved colour accuracy, noise handling, and throughput. It represents the newest and most capable HDMI capture hardware in the USB range." },
      { question: "Is it backward compatible with 1080p sources?", answer: "Yes. The HDMI 2.0 input is fully backward compatible with HDMI 1.4a and earlier sources. It captures everything from 480p through to 4K60 seamlessly." },
      { question: "Does it support HDR?", answer: "The enhanced FPGA can process HDR-capable HDMI 2.0 signals. Check Magewell's latest firmware release notes for specific HDR capture and passthrough support." },
      { question: "Do I need drivers?", answer: "No. Fully plug-and-play on Windows, macOS, Linux, and Chrome OS using standard UVC/UAC protocols — no driver installation required." },
      { question: "Can I use it for live streaming?", answer: "Absolutely. It works with all major streaming software including OBS Studio, Streamlabs, XSplit, vMix, and Wirecast. The 4K Pro is ideal for streamers who want the highest possible capture quality." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "Skype", "GoToMeeting", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  },

  // ─────────────────────────────────────────────
  // 11. USB Capture SDI 4K Pro
  // ─────────────────────────────────────────────
  {
    id: "494",
    sku: "MW-494",
    name: "Magewell USB Capture SDI 4K Pro",
    slug: "magewell-usb-capture-sdi-4k-pro",
    category: "USB Capture",
    price: 100,
    stock: "In Stock",
    imageUrl: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/USB_Capture_SDI_4K_Pro.jpg",
    metaTitle: "Magewell USB Capture SDI 4K Pro | 12G-SDI 4K60 Capture | Buy UK | StreamTek",
    metaDescription: "Buy the Magewell USB Capture SDI 4K Pro — 12G-SDI 4K60 capture in a USB dongle. The most advanced SDI capture device available. Free UK delivery & 3-year warranty.",
    shortDescription: "The pinnacle of USB SDI capture. 12G-SDI support enables true 4K 60fps capture from the latest professional broadcast cameras. Fully backward compatible with all SDI standards.",
    description: `
      <h2>True 4K60 SDI Capture — The Best Available</h2>
      <p>The <strong>Magewell USB Capture SDI 4K Pro</strong> is the most advanced USB SDI capture device on the market. With <strong>12G-SDI support</strong>, it captures 4K video at a full 60 frames per second from the latest generation of broadcast cameras — all through a single USB 3.0 cable.</p>
      
      <h2>Why Choose the SDI 4K Pro?</h2>
      <p>12G-SDI is the latest broadcast standard, carrying 4K60 content on a single BNC cable. Where older 6G-SDI devices cap at 4K30, the SDI 4K Pro delivers the full frame rate that modern broadcast workflows demand. It's fully backward compatible with 6G, 3G, HD, and SD-SDI, so it works with your entire camera inventory.</p>
      <p>The enhanced FPGA processing engine delivers superior video quality with improved colour accuracy and higher throughput. The <strong>SDI loop-through</strong> keeps your monitoring chain connected, and the <strong>audio I/O</strong> lets you embed external audio and monitor through headphones.</p>
      
      <h2>Broadcast-Grade, Pocket-Sized</h2>
      <p>All the power of 12G-SDI 4K60 capture in a portable, USB bus-powered dongle. No PCIe cards, no desktop workstation required. Every unit from StreamTek ships with a <strong>3-year warranty</strong> and free UK delivery.</p>
    `,
    features: [
      "12G-SDI input — true 4K capture at 60fps",
      "Backward compatible with 6G/3G/HD/SD-SDI",
      "Latest-generation enhanced FPGA processing engine",
      "Active SDI loop-through for monitoring",
      "Integrated microphone input and headphone output",
      "16-channel SDI embedded audio at 48kHz",
      "Driver-free on Windows, Mac, Linux, and Chrome OS",
      "USB bus-powered — no external adapter needed"
    ],
    highlights: [
      { value: "4K60", label: "12G-SDI capture" },
      { value: "Pro", label: "Latest-gen FPGA engine" },
      { value: "All SDI", label: "12G/6G/3G/HD/SD compatible" }
    ],
    specs: {
      "Video Input": "12G-SDI — SD/HD/3G/6G/12G-SDI (BNC), up to 4096×2160 @ 60fps",
      "SDI Loop-Through": "Yes — active loop-through (BNC)",
      "Max Capture Resolution": "4096×2160 @ 120fps",
      "SDI Standards": "SMPTE 259M, 292M, 296M, 372M, 424M, 2081, 2082",
      "Audio Input": "16-channel SDI embedded @ 48kHz + 3.5mm mic-in",
      "Audio Output": "3.5mm headphone + USB audio",
      "Video Processing": "Enhanced FPGA — scaling, deinterlacing, colour conversion, cropping, flip/mirror",
      "Processing Engine": "Latest-generation enhanced FPGA",
      "Output Interface": "USB 3.0 (backward compatible USB 2.0 & USB 3.1 Gen 1)",
      "Power": "USB bus-powered",
      "Operating Temperature": "0°C to 50°C",
      "OS Support": "Windows 10/11, macOS 10.9+, Linux 2.6.35+, Chrome OS",
      "API / SDK": "DirectShow, V4L2, AVCaptureSession, MWCapture SDK",
      "Warranty": "3 Years (StreamTek UK)"
    },
    useCases: [
      { icon: "Radio", title: "4K60 Broadcast", description: "Capture feeds from the latest 12G-SDI broadcast cameras at full 4K60. Future-proof your ingest workflow for next-generation broadcast content production." },
      { icon: "Clapperboard", title: "Cinema & Film Production", description: "Ingest 4K60 SDI output from cinema cameras for on-set monitoring, DIT workflows, and dailies capture. The highest SDI fidelity available in a USB device." },
      { icon: "Trophy", title: "Sports Production", description: "Capture high-frame-rate 4K SDI feeds from sports broadcast cameras. Essential for replay systems and ultra-smooth slow-motion capture." },
      { icon: "HeartPulse", title: "Advanced Medical Imaging", description: "Record 4K60 SDI feeds from the latest surgical robotics systems and advanced medical imaging equipment requiring 12G-SDI connectivity." },
      { icon: "Satellite", title: "OB Van & Remote Production", description: "Add 4K60 SDI capture capability to any laptop for remote production environments. Bus-powered portability meets broadcast-grade performance." }
    ],
    whatsInBox: [
      "1× Magewell USB Capture SDI 4K Pro",
      "1× USB 3.0 Cable",
      "Quick Start Guide"
    ],
    faqs: [
      { question: "What's the difference between the SDI 4K Pro and SDI 4K Plus?", answer: "The SDI 4K Pro supports 12G-SDI for true 4K60 capture, while the SDI 4K Plus maxes out at 6G-SDI (4K30). The Pro also features Magewell's latest-generation enhanced FPGA for superior processing quality." },
      { question: "Will it work with my older HD-SDI cameras?", answer: "Yes. The SDI 4K Pro is fully backward compatible with SD-SDI, HD-SDI, 3G-SDI, and 6G-SDI. It works with your entire camera inventory, from legacy SD gear to the latest 12G models." },
      { question: "Does it need external power?", answer: "No. Like all Magewell USB Capture dongles, it runs entirely on USB bus power. No power brick or mains adapter needed." },
      { question: "Can I embed external audio?", answer: "Yes. The 3.5mm audio input lets you embed audio from a mixing desk, wireless receiver, or other external source alongside the SDI embedded audio channels." },
      { question: "Do I need drivers?", answer: "No. Fully plug-and-play on Windows, macOS, Linux, and Chrome OS. Your computer recognises it as a standard webcam and audio device instantly." }
    ],
    compatibleSoftware: ["OBS Studio", "Zoom", "Microsoft Teams", "Google Meet", "vMix", "XSplit", "Streamlabs", "Wirecast", "VLC", "QuickTime", "GStreamer"],
    compatibleOS: [
      { name: "Windows", version: "10 / 11 / Server" },
      { name: "macOS", version: "10.9 and above" },
      { name: "Linux", version: "x86 / x64 / ARM" },
      { name: "Chrome OS", version: "All versions" }
    ]
  }
];

export function getProductBySlug(slug: string) {
  return products.find(p => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}

export function getActiveProducts() {
  return products;
}

export function getUSBCaptureProducts() {
  return products.filter(p => p.category === 'USB Capture');
}
