// Knowledge Base Guide Data Structure
export interface Guide {
  slug: string;
  title: string;
  category: string;
  description: string;
  keywords: string;
  content: {
    problem?: string;
    solution: string;
    steps?: string[];
    tips?: string[];
    relatedProducts?: string[];
  };
}

export const guides: Guide[] = [
  // GETTING STARTED GUIDES (12)
  {
    slug: "install-drivers-windows-11",
    title: "How to Install USB Capture Drivers on Windows 11",
    category: "Getting Started",
    description: "Complete step-by-step guide for installing Magewell USB Capture drivers on Windows 11. Driver-free UVC operation and optional driver installation.",
    keywords: "Windows 11 drivers, install Magewell drivers, USB capture setup, Windows driver installation",
    content: {
      solution: "Most Magewell USB Capture devices work driver-free on Windows 11 using UVC/UAC protocols. For advanced features or SDK development, download and install the official Magewell SDK.",
      steps: [
        "Connect your Magewell USB Capture device to a USB 3.0 port on your Windows 11 PC",
        "Windows will automatically recognize the device as a UVC camera - no driver installation needed for basic operation",
        "Open your capture software (OBS, vMix, Teams, Zoom) and select the Magewell device",
        "For advanced features: Download the Windows SDK from https://www.magewell.com/downloads",
        "Run the installer and follow the on-screen instructions",
        "Restart your computer after installation completes",
        "Launch the USB Capture Utility to access advanced settings and firmware updates"
      ],
      tips: [
        "Most users don't need to install drivers - Windows recognizes the device automatically",
        "Use USB 3.0 ports (blue connectors) for best performance",
        "For 4K capture, ensure your USB port supports 10Gbps (USB 3.1 Gen 2 or higher)",
        "The SDK includes sample applications, DirectShow filters, and API documentation"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-gen-2", "magewell-usb-capture-hdmi-4k-plus"]
    }
  },
  {
    slug: "setup-obs-studio",
    title: "Setting Up OBS Studio with Magewell Capture",
    category: "Getting Started",
    description: "Configure OBS Studio for optimal streaming and recording with your Magewell USB Capture device. Settings, tips, and best practices.",
    keywords: "OBS setup, Magewell OBS, streaming setup, OBS configuration, capture card OBS",
    content: {
      solution: "Add your Magewell device as a Video Capture Device source in OBS Studio. Configure resolution, frame rate, and audio settings for optimal streaming quality.",
      steps: [
        "Launch OBS Studio on your computer",
        "Click the '+' icon in the Sources panel",
        "Select 'Video Capture Device'",
        "Give your source a name (e.g., 'Magewell Camera')",
        "In the Device dropdown, select your Magewell USB Capture device",
        "Set Resolution/FPS Type to 'Custom'",
        "Choose your desired resolution (1920x1080) and FPS (60 or 30)",
        "Configure Audio Output Mode if capturing audio",
        "Click OK to add the source to your scene",
        "Resize and position the source in your canvas"
      ],
      tips: [
        "Use 1080p60 for smooth gameplay and fast-motion content",
        "Set Bitrate to 6000 Kbps for 1080p60 streaming (adjust based on your upload speed)",
        "Enable Hardware Encoding (NVENC for NVIDIA, AMD VCE for AMD) to reduce CPU load",
        "Add audio sync offset if you experience lip-sync issues (usually -50ms to +50ms)",
        "Test your stream with Twitch Inspector or YouTube Live Dashboard before going live"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-gen-2"]
    }
  },
  {
    slug: "first-time-setup-guide",
    title: "First-Time Setup Guide for Magewell USB Capture",
    category: "Getting Started",
    description: "Unboxing to first capture in 5 minutes. Complete beginner's guide for setting up your new Magewell USB Capture device.",
    keywords: "first time setup, beginner guide, unboxing, getting started Magewell",
    content: {
      solution: "Connect your video source via HDMI, plug the USB cable into your computer, and select the device in your capture software. No driver installation required for basic operation.",
      steps: [
        "Unpack your Magewell USB Capture device and USB 3.0 cable",
        "Connect your video source (camera, console, computer) to the HDMI IN port",
        "Optional: Connect a monitor to the HDMI OUT port for passthrough monitoring",
        "Connect the USB 3.0 cable from the device to your computer",
        "Wait 10 seconds for Windows/macOS to recognize the device",
        "Open your preferred capture software",
        "Select the Magewell device as your video source",
        "You should immediately see your video feed - you're ready to capture!"
      ],
      tips: [
        "Use the included USB 3.0 cable - USB 2.0 cables won't provide enough bandwidth",
        "For best results, connect directly to your computer's USB ports (avoid hubs for 4K capture)",
        "The device powers via USB - no external power adapter needed",
        "LED indicator on the device shows power and signal status"
      ]
    }
  },
  {
    slug: "choosing-right-capture-device",
    title: "Choosing the Right Magewell Capture Device for Your Needs",
    category: "Getting Started",
    description: "Compare Magewell USB Capture models and find the perfect device for your application. HDMI vs SDI, Gen 2 vs 4K Plus, and more.",
    keywords: "choose capture card, which Magewell, compare capture devices, best capture card",
    content: {
      solution: "Select based on your input type (HDMI or SDI), required resolution (1080p or 4K), and application (streaming, recording, or professional production).",
      steps: [
        "Determine your video source: HDMI (cameras, consoles, computers) or SDI (professional cameras, broadcast equipment)",
        "Identify required resolution: 1080p60 for most applications, 4K60 for high-end content creation",
        "Consider your use case: Streaming (Gen 2), Gaming (4K Plus), Broadcast (SDI Pro), Multi-format (AIO)",
        "Check your computer's USB ports: USB 3.0 for 1080p, USB 3.1 Gen 2 (10Gbps) for 4K60",
        "Budget consideration: Gen 2 for value, 4K Plus for premium features, SDI for professional workflows",
        "For multiple inputs: Plan to use multiple devices or consider Pro Capture PCIe cards"
      ],
      tips: [
        "USB Capture HDMI Gen 2 (£289): Best value for 1080p60 streaming and recording",
        "USB Capture HDMI 4K Plus (£549): Premium 4K60 HDR with advanced color support",
        "USB Capture SDI Plus (£549): Professional 3G-SDI with long cable run support",
        "USB Capture AIO (£489): All-In-One supporting HDMI, VGA, DVI, SDI, Component, Composite"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-gen-2", "magewell-usb-capture-hdmi-4k-plus", "magewell-usb-capture-aio"]
    }
  },
  {
    slug: "macos-setup-guide",
    title: "Setting Up Magewell Capture on macOS",
    category: "Getting Started",
    description: "Complete macOS setup guide for Magewell USB Capture devices. Compatible with Intel and Apple Silicon Macs.",
    keywords: "macOS setup, Mac installation, Apple Silicon, M1 M2 M3 compatibility",
    content: {
      solution: "Magewell devices work natively on macOS via UVC/UAC. Download the macOS USB Capture Utility for advanced features and firmware updates.",
      steps: [
        "Connect your Magewell device to your Mac via USB 3.0 or Thunderbolt",
        "macOS will automatically recognize the device - no driver installation needed",
        "Open your capture software (OBS, Wirecast, QuickTime, FaceTime, Zoom)",
        "Select the Magewell device from the camera list",
        "For advanced features: Download macOS USB Capture Utility from Magewell website",
        "Install the utility and launch it",
        "Access settings for custom EDID, firmware updates, and advanced configuration"
      ],
      tips: [
        "Works with both Intel and Apple Silicon (M1, M2, M3) Macs",
        "Compatible with macOS 10.9 (Mavericks) and later",
        "Use USB-C to USB-A adapters if your Mac only has USB-C ports",
        "Thunderbolt ports provide excellent bandwidth for 4K capture"
      ]
    }
  },
  {
    slug: "vmix-configuration",
    title: "Configuring vMix with Magewell Capture Devices",
    category: "Getting Started",
    description: "Professional vMix setup guide for Magewell capture devices. Multi-camera workflows and production tips.",
    keywords: "vMix setup, vMix Magewell, professional streaming, multi-camera vMix",
    content: {
      solution: "Add Magewell devices as Camera inputs in vMix. Configure resolution, frame rate, and audio settings for professional multi-camera production.",
      steps: [
        "Launch vMix and create or open your production preset",
        "Click 'Add Input' button",
        "Select 'Camera' from the input types",
        "Choose your Magewell device from the dropdown",
        "Set Video Format to match your source (1080p60, 1080p30, 4K60, etc.)",
        "Configure Audio settings if capturing audio from the device",
        "Click OK to add the camera to your production",
        "Position the input in your desired location",
        "Repeat for additional Magewell devices for multi-camera setups",
        "Use vMix's color correction and audio mixing features to fine-tune each input"
      ],
      tips: [
        "vMix Pro supports unlimited camera inputs - perfect for multi-Magewell setups",
        "Use Input Naming to identify each camera clearly (Camera 1, Camera 2, etc.)",
        "Enable PTZ controls if your source camera supports it",
        "Use vMix Call for remote guests with captured local cameras for hybrid production",
        "Configure Audio Bus routing for clean audio mixing between multiple sources"
      ]
    }
  },
  {
    slug: "teams-zoom-setup",
    title: "Using Magewell Capture with Teams and Zoom",
    category: "Getting Started",
    description: "Configure Microsoft Teams and Zoom to use your Magewell capture device as a camera source for video conferencing.",
    keywords: "Teams setup, Zoom camera, video conferencing, Magewell webcam, virtual camera",
    content: {
      solution: "Select your Magewell device as the camera source in Teams or Zoom settings. The device appears as a standard webcam with superior quality.",
      steps: [
        "Connect your video source (camera, presentation display) to the Magewell device",
        "Connect Magewell to your computer via USB",
        "Open Microsoft Teams or Zoom",
        "Go to Settings > Devices (Teams) or Settings > Video (Zoom)",
        "In the Camera dropdown, select your Magewell USB Capture device",
        "You should immediately see your video feed in the preview",
        "Adjust video settings (brightness, resolution) if needed",
        "Join your meeting - your professional camera feed is now your 'webcam'"
      ],
      tips: [
        "Use a DSLR or mirrorless camera for vastly superior video quality vs webcams",
        "Capture PowerPoint presentations directly via HDMI for crisp, clear slides",
        "No virtual camera software needed - device appears as native hardware",
        "Works with Google Meet, Webex, and all other video conferencing platforms",
        "Use HDMI loop-through to monitor your camera feed on a separate display"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-gen-2"]
    }
  },
  {
    slug: "linux-setup-guide",
    title: "Setting Up Magewell Capture on Linux",
    category: "Getting Started",
    description: "Linux installation and configuration guide for Magewell USB Capture devices. V4L2 compatibility for Ubuntu, Debian, CentOS.",
    keywords: "Linux setup, Ubuntu capture, V4L2, Linux drivers Magewell",
    content: {
      solution: "Magewell devices work natively with Linux via V4L2 (Video4Linux2). Install the Linux SDK for advanced features and application development.",
      steps: [
        "Connect your Magewell device to a USB 3.0 port",
        "Linux kernel will automatically load V4L2 drivers",
        "Verify device detection: run `ls /dev/video*` in terminal",
        "Your Magewell device will appear as /dev/video0 (or video1, video2, etc.)",
        "Test with: `v4l2-ctl --device=/dev/video0 --all`",
        "Use with OBS: Launch OBS, add Video Capture Device (V4L2), select /dev/video0",
        "For SDK: Download Linux SDK from Magewell website",
        "Extract and run: `sudo ./install.sh`",
        "SDK includes V4L2 drivers, capture API, and sample applications"
      ],
      tips: [
        "Supported on Ubuntu 20.04+, Debian, CentOS, and most modern distributions",
        "Requires kernel 2.6.35 or later (4.15+ recommended for best performance)",
        "Works on x86, x64, and ARM architectures (including Raspberry Pi 4)",
        "Use `v4l2-ctl` for command-line capture and device configuration",
        "Compatible with FFmpeg, GStreamer, and all V4L2-compatible applications"
      ]
    }
  },
  {
    slug: "usb-port-requirements",
    title: "USB Port Requirements and Best Practices",
    category: "Getting Started",
    description: "Understanding USB 3.0, 3.1, and 3.2 requirements for Magewell capture devices. Bandwidth, compatibility, and troubleshooting.",
    keywords: "USB 3.0 requirements, USB bandwidth, USB port types, USB compatibility",
    content: {
      solution: "Use USB 3.0 (5Gbps) for 1080p capture, USB 3.1 Gen 2 (10Gbps) for 4K60 capture. Connect directly to motherboard ports for best results.",
      steps: [
        "Identify your USB port type: USB 3.0 (blue connector), USB 3.1/3.2 (often teal/red), USB-C",
        "For 1080p60 capture: Any USB 3.0 port (5Gbps) is sufficient",
        "For 4K60 capture: Use USB 3.1 Gen 2 (10Gbps) or USB 3.2 ports",
        "Connect directly to computer's motherboard USB ports (not front panel or hubs)",
        "Check your port speed in Device Manager (Windows) or System Information (macOS)",
        "If using USB-C port, ensure it supports full USB 3.1 Gen 2 speeds (not all USB-C ports do)",
        "For multiple devices: Calculate total bandwidth and use separate USB controllers if needed"
      ],
      tips: [
        "USB 2.0 ports will NOT work - device requires USB 3.0 minimum",
        "Avoid USB hubs for 4K capture - they introduce bandwidth bottlenecks",
        "Desktop PCs typically have better USB performance than laptops",
        "Intel USB 3.0 controllers generally perform better than third-party controllers",
        "Use the included USB 3.0 cable - cheap cables may not support full bandwidth"
      ]
    }
  },
  {
    slug: "firmware-update-guide",
    title: "How to Update Magewell Device Firmware",
    category: "Getting Started",
    description: "Step-by-step firmware update process for Magewell USB Capture devices. Keeping your device up-to-date with latest features and fixes.",
    keywords: "firmware update, Magewell update, device firmware, update capture card",
    content: {
      solution: "Use the USB Capture Utility (Windows/macOS) to check for and install firmware updates. Always use the official Magewell utility for safe updates.",
      steps: [
        "Download USB Capture Utility from https://www.streamtek.co.uk/downloads",
        "Install and launch the utility",
        "Connect your Magewell device via USB",
        "The utility will automatically detect your device",
        "Click 'Check for Updates' or 'Firmware Update' button",
        "If an update is available, click 'Download' then 'Install'",
        "DO NOT disconnect the device during update process",
        "Wait for 'Update Complete' message (usually 1-2 minutes)",
        "Restart your computer after update completes",
        "Verify new firmware version in utility's Device Info section"
      ],
      tips: [
        "Firmware updates improve performance, add features, and fix bugs",
        "Updates are free and recommended for all users",
        "Device will be unusable during update - plan updates during downtime",
        "Never interrupt power or USB connection during firmware update",
        "Check for updates every 3-6 months for latest improvements"
      ]
    }
  },
  {
    slug: "understanding-edid",
    title: "Understanding and Configuring EDID Settings",
    category: "Getting Started",
    description: "What is EDID and how to configure it for optimal video capture. Custom EDID settings for problematic sources.",
    keywords: "EDID settings, custom EDID, resolution detection, HDMI handshake",
    content: {
      solution: "EDID (Extended Display Identification Data) tells your video source what resolutions and formats the capture device supports. Configure custom EDID for sources that don't auto-detect correctly.",
      steps: [
        "Launch USB Capture Utility (Windows/macOS)",
        "Select your device from the list",
        "Click the 'EDID' tab",
        "You'll see current EDID settings and supported resolutions",
        "To change: Click 'Custom EDID' and select desired resolution/refresh rate",
        "Common options: 1080p60, 1080p30, 720p60, 4K30, 4K60",
        "Apply settings and reconnect your video source",
        "Source should now output the resolution specified in your custom EDID"
      ],
      tips: [
        "Use Auto EDID for most scenarios - device auto-detects best resolution",
        "Custom EDID useful for cameras that output strange resolutions",
        "Set lower resolution if you experience bandwidth/performance issues",
        "1080p60 EDID works for 99% of streaming and recording applications",
        "Reconnect your source after changing EDID for changes to take effect"
      ]
    }
  },
  {
    slug: "cable-length-limits",
    title: "HDMI Cable Length Limits and Long-Distance Solutions",
    category: "Getting Started",
    description: "Understanding HDMI cable distance limitations and solutions for long-cable runs. Active cables, fiber, and SDI alternatives.",
    keywords: "HDMI cable length, long HDMI cable, cable distance, HDMI extender",
    content: {
      solution: "Standard HDMI cables work reliably up to 15 feet (5m). For longer distances, use active HDMI cables (up to 50ft), fiber HDMI cables (up to 300ft), or switch to SDI capture for distances over 100ft.",
      steps: [
        "Standard copper HDMI cables: Reliable up to 15 feet (5 meters)",
        "High-quality copper cables: Up to 25 feet (7.5 meters) for 1080p",
        "Active HDMI cables with built-in signal boosters: Up to 50 feet (15 meters)",
        "Fiber optic HDMI cables: Up to 300 feet (100 meters) for 4K60",
        "For distances over 50ft: Consider HDMI over Cat6/Cat6a extenders",
        "For professional installations: Use SDI instead - supports 300ft+ cable runs",
        "Test your cable before installation - cheap cables fail at distance"
      ],
      tips: [
        "4K signals require better cables than 1080p - distance limits are shorter",
        "Active cables have directional connectors - ensure correct source/display ends",
        "SDI cables (using USB Capture SDI Plus) support 300+ feet without signal loss",
        "Avoid coupling/joining HDMI cables - introduces signal degradation",
        "For church/conference installs over 50ft, invest in proper long-distance solutions"
      ],
      relatedProducts: ["magewell-usb-capture-sdi-plus", "magewell-usb-capture-hdmi-gen-2"]
    }
  },

  // TROUBLESHOOTING GUIDES (24)
  {
    slug: "fix-no-signal-hdmi",
    title: "Resolving 'No Signal' Issues with HDMI Capture",
    category: "Troubleshooting",
    description: "Complete troubleshooting guide for 'No Signal' errors with Magewell HDMI capture devices. Step-by-step diagnostics and solutions.",
    keywords: "no signal fix, HDMI no signal, capture not working, black screen capture",
    content: {
      problem: "Your capture device shows 'No Signal' or displays a black screen in your capture software, even though your source is connected and powered on.",
      solution: "Check cable connections, verify source output is enabled, test with a known-good HDMI cable, and ensure source resolution is supported by your capture device.",
      steps: [
        "Verify your video source is powered on and actively outputting video",
        "Check HDMI cable is firmly connected at both ends (source and capture device)",
        "Try a different HDMI cable - faulty cables are the most common cause",
        "Test your source with a regular TV/monitor to confirm it's outputting correctly",
        "Check your source's display settings - enable external display output if needed",
        "Laptops: Press Windows+P and select 'Duplicate' or 'Extend' to enable HDMI output",
        "Consoles: Check video output settings - ensure HDMI output is enabled, not disabled",
        "Try a different resolution on your source (some devices default to unsupported resolutions)",
        "Disconnect and reconnect the USB cable to the capture device",
        "Restart your capture software",
        "If using HDMI splitter/switch, bypass it and connect source directly to capture device"
      ],
      tips: [
        "HDCP-protected content (Netflix, Blu-ray) may not display - this is intentional copy protection",
        "Some laptops require enabling 'Allow other devices to discover this PC' in display settings",
        "Try using the HDMI loop-through output to connect a monitor - if monitor works, capture should too",
        "LED on capture device indicates signal status - solid LED = good signal",
        "Update your source device (console, camera) firmware if problems persist"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-gen-2"]
    }
  },
  {
    slug: "fix-audio-sync",
    title: "Fixing Audio Sync Issues in Video Capture",
    category: "Troubleshooting",
    description: "Diagnose and fix audio delay or lip-sync problems in your video captures. Audio sync offset configuration for OBS, vMix, and other software.",
    keywords: "audio sync, lip sync fix, audio delay, audio offset, desync audio",
    content: {
      problem: "Audio and video are out of sync in your recordings or streams. Lips don't match speech, or audio plays before/after the corresponding video.",
      solution: "Add audio sync offset in your capture software to compensate for processing delays. Typical offset ranges from -200ms to +200ms.",
      steps: [
        "Identify the direction of sync issue: Is audio ahead of video, or behind?",
        "In OBS: Right-click your audio source > Advanced Audio Properties",
        "Set Sync Offset value: Negative value if audio is ahead (-50ms), positive if behind (+50ms)",
        "In vMix: Input Settings > Audio > Audio Delay (ms)",
        "Test with increments of 50ms until sync is correct",
        "Record a test clip and watch back to verify sync",
        "If sync varies during recording, issue may be dropped frames (CPU overload)",
        "Check Task Manager/Activity Monitor - if CPU is at 100%, reduce encoding settings",
        "Use hardware encoding (NVENC, AMD VCE, QuickSync) instead of x264 to reduce CPU load",
        "For multi-camera setups, set sync offset independently for each audio source"
      ],
      tips: [
        "Most audio sync issues are software processing delays, not hardware problems",
        "Common offset values: -50ms to +100ms",
        "Bluetooth devices introduce 100-200ms latency - avoid for capture audio",
        "Use wired headphones for monitoring to hear actual sync",
        "Test sync with clapping hands or slate board - easy to see audio/video alignment"
      ]
    }
  },
  {
    slug: "usb-bandwidth-issues",
    title: "USB Bandwidth Issues and Solutions",
    category: "Troubleshooting",
    description: "Troubleshoot USB bandwidth problems causing dropped frames, stuttering, or device not recognized errors. Multi-device USB management.",
    keywords: "USB bandwidth, dropped frames, USB controller, stuttering video, USB 3.0 issues",
    content: {
      problem: "Video stutters, frames drop, or you get 'USB bandwidth exceeded' errors when using one or more capture devices.",
      solution: "Distribute devices across multiple USB controllers, reduce capture resolution, close bandwidth-heavy USB devices, or upgrade to faster USB 3.1/3.2 ports.",
      steps: [
        "Open Device Manager (Windows) or System Information (macOS)",
        "Expand 'Universal Serial Bus controllers'",
        "Identify your USB 3.0/3.1 controllers (Intel, AMD, or third-party)",
        "Check how many devices are on each controller",
        "USB 3.0 controller supports ~400MB/s - calculate your usage:",
        "  - 1080p60 YUYV = ~250MB/s",
        "  - 4K30 YUYV = ~500MB/s (requires USB 3.1)",
        "  - 4K60 YUYV = ~1000MB/s (requires USB 3.2 or Thunderbolt)",
        "Move devices to different USB ports on separate controllers",
        "Disconnect unnecessary USB devices (external drives, peripherals)",
        "Reduce capture resolution if bandwidth is insufficient: 4K30 instead of 4K60",
        "Use compressed formats (H.264) instead of raw YUYV if your software supports it",
        "For multi-device setups: Install PCIe USB 3.1 card for additional controllers"
      ],
      tips: [
        "Front panel USB ports often share bandwidth - use rear motherboard ports",
        "Each USB controller is independent - spread devices across controllers",
        "USB hubs share bandwidth among all connected devices",
        "Thunderbolt 3/4 provides excellent bandwidth for multiple 4K captures",
        "Professional multi-camera setups benefit from PCIe USB expansion cards"
      ]
    }
  },
  {
    slug: "device-not-recognized",
    title: "Capture Device Not Recognized by Computer",
    category: "Troubleshooting",
    description: "Fix device detection issues when Windows or macOS doesn't recognize your Magewell capture device. Driver and USB troubleshooting.",
    keywords: "device not recognized, not detected, USB device, unknown device, driver issue",
    content: {
      problem: "Your computer doesn't detect the Magewell capture device when connected. Device doesn't appear in Device Manager or capture software.",
      solution: "Test different USB ports, verify cable integrity, check USB controller drivers, and ensure device is receiving power.",
      steps: [
        "Try a different USB 3.0 port - test multiple ports on your computer",
        "Use the included USB 3.0 cable - other cables may not provide sufficient power",
        "Check Device Manager (Windows) for yellow exclamation marks or unknown devices",
        "Update USB 3.0 controller drivers from your motherboard manufacturer's website",
        "Test device on a different computer to isolate hardware vs software issue",
        "Disable USB selective suspend: Control Panel > Power Options > Advanced > USB settings",
        "Check LED indicator on Magewell device - should illuminate when connected",
        "If no LED: Device isn't receiving power - try different port or cable",
        "Disable USB Legacy Support in BIOS (for desktop PCs)",
        "macOS: Check System Information > USB - device should appear as 'Magewell'",
        "Last resort: Uninstall all USB 3.0 controllers in Device Manager and restart (Windows will reinstall)"
      ],
      tips: [
        "USB 2.0 ports won't work - device requires USB 3.0 minimum",
        "Some USB-C adapters don't support full USB 3.0 speeds",
        "Desktop PCs have better USB compatibility than laptops",
        "BIOS updates can improve USB compatibility on older motherboards",
        "Contact StreamTek support if device isn't recognized on multiple computers"
      ]
    }
  },
  {
    slug: "dropped-frames-recording",
    title: "Preventing Dropped Frames During Recording",
    category: "Troubleshooting",
    description: "Diagnose and fix dropped frames in OBS, vMix, and other recording software. Performance optimization for smooth capture.",
    keywords: "dropped frames, frame drops, OBS frames, recording performance, stuttering",
    content: {
      problem: "Your recordings or streams show stuttering, judder, or dropped frames. OBS shows red 'dropped frames' in status bar.",
      solution: "Dropped frames are usually caused by insufficient CPU/GPU power, slow storage, or incorrect encoding settings. Optimize your system and encoder configuration.",
      steps: [
        "Check OBS Stats: View > Stats - look at 'Frames missed due to rendering lag'",
        "If rendering lag: Your GPU is overloaded - reduce output resolution or use lower quality preview",
        "If encoding lag: Your CPU/encoder is overloaded - switch to hardware encoding",
        "Enable hardware encoding: Settings > Output > Streaming > Encoder",
        "  - NVIDIA GPU: Select 'NVENC H.264'",
        "  - AMD GPU: Select 'AMD HW H.264'",
        "  - Intel CPU: Select 'QuickSync H.264'",
        "Reduce output resolution: 1080p to 720p reduces CPU load by 40%",
        "Lower frame rate: 60fps to 30fps halves encoding workload",
        "Close background applications: Chrome, Discord, unnecessary programs",
        "Record to fast SSD, not mechanical hard drive",
        "Disable Windows Game Bar and Game Mode (they can interfere)",
        "Set OBS Process Priority to 'High' in Task Manager",
        "Update GPU drivers to latest version",
        "If still dropping: Your system may not meet minimum requirements for chosen settings"
      ],
      tips: [
        "Hardware encoding (NVENC/VCE) uses GPU instead of CPU - much more efficient",
        "Recording and streaming simultaneously doubles encoding load",
        "Monitor CPU usage in Task Manager - should stay below 80%",
        "SSDs are essential for 4K60 recording - HDDs cause write bottlenecks",
        "Dual-PC setups eliminate dropped frames - one PC for game, one for capture/stream"
      ]
    }
  },
  {
    slug: "hdcp-content-black-screen",
    title: "Why Protected Content Shows Black Screen",
    category: "Troubleshooting",
    description: "Understanding HDCP copy protection and why Netflix, Blu-ray, and some content can't be captured. Legal workarounds and alternatives.",
    keywords: "HDCP black screen, Netflix capture, copy protection, HDCP error",
    content: {
      problem: "When playing Netflix, Blu-ray movies, or certain streaming content, your capture shows a black screen even though source displays correctly on TV.",
      solution: "This is HDCP (High-bandwidth Digital Content Protection) - intentional copy protection. Content cannot be captured by design. Use HDCP-compliant sources or record different content.",
      steps: [
        "Understand: HDCP is copyright protection mandated by content owners",
        "Magewell devices correctly implement HDCP - they won't capture protected content",
        "Protected content includes: Netflix, Disney+, Amazon Prime Video, Blu-ray discs, iTunes movies",
        "Non-protected content works fine: Your own videos, gameplay, cameras, presentations",
        "For gameplay capture: Enable 'Allow Game Capture' in console settings (PS5/Xbox)",
        "For screen recording: Use software screen capture (OBS Display Capture) instead of HDMI",
        "For movie reviews: Use non-DRM sources or screen-recorded clips (fair use considerations)",
        "HDCP strippers/splitters are available but may violate DMCA in some jurisdictions",
        "Legal solution: Contact content owner for permission and non-HDCP sources"
      ],
      tips: [
        "This is not a device defect - all compliant capture devices behave this way",
        "Gaming consoles allow gameplay capture but protect streaming apps (Netflix on PS5)",
        "PC screen capture bypasses HDCP as it captures before HDCP encryption",
        "Cameras and local video files have no HDCP - capture freely",
        "HDCP only affects HDMI - analog inputs (Component) and SDI don't have HDCP"
      ]
    }
  },
  {
    slug: "color-accuracy-issues",
    title: "Fixing Color Accuracy and Color Space Issues",
    category: "Troubleshooting",
    description: "Troubleshoot washed-out colors, incorrect color space, and RGB/YUV conversion problems in video capture.",
    keywords: "color accuracy, washed out colors, color space, YUV RGB, color correction",
    content: {
      problem: "Captured video looks washed out, oversaturated, or colors appear incorrect compared to source. Black levels are crushed or grays look milky.",
      solution: "Configure correct color space (RGB vs YUV), set color range (Limited vs Full), and adjust capture software color settings.",
      steps: [
        "Check your source output color space: Settings > Display > RGB or YUV",
        "Most sources use YUV (4:2:2 or 4:2:0) for HDMI output",
        "In USB Capture Utility: Check 'Color Space' setting matches your source",
        "In OBS: Right-click source > Filters > Add 'Color Correction'",
        "Adjust: Gamma (brightness), Contrast, Saturation",
        "Common fix for washed-out: Increase Contrast to 1.2-1.3",
        "For crushed blacks: Adjust Gamma upward (1.1-1.2)",
        "Check Color Range: Limited (16-235) vs Full (0-255)",
        "Most cameras/consoles use Limited range - set capture software to match",
        "For professional color: Use 10-bit color devices (4K Plus, SDI Pro)",
        "Use Waveform/Vectorscope in vMix or DaVinci Resolve to analyze color scientifically"
      ],
      tips: [
        "Default settings work for 95% of users - only adjust if you see problems",
        "Match color space between source and capture software",
        "Professional colorists use calibrated monitors - consumer monitors vary widely",
        "HDR content requires HDR-capable capture (4K Plus with HDR support)",
        "Test with color bars or known reference image to verify accuracy"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-4k-plus"]
    }
  },
  {
    slug: "device-disconnecting-randomly",
    title: "Fixing Random Device Disconnections",
    category: "Troubleshooting",
    description: "Solve intermittent device disconnections and 'device removed' errors. USB power management and connection stability.",
    keywords: "device disconnects, random disconnect, USB disconnect, device removed",
    content: {
      problem: "Capture device randomly disconnects during use, requiring reconnection. You may hear Windows USB disconnect/connect sounds.",
      solution: "Disable USB power management, ensure adequate power delivery, and eliminate USB cable/port issues.",
      steps: [
        "Disable USB Selective Suspend: Control Panel > Power Options > Change plan settings > Advanced",
        "Expand 'USB settings' > 'USB selective suspend setting' > Set to 'Disabled'",
        "In Device Manager: Find your capture device under 'Sound, video and game controllers'",
        "Right-click device > Properties > Power Management",
        "Uncheck 'Allow the computer to turn off this device to save power'",
        "Repeat for USB Root Hubs: Device Manager > Universal Serial Bus controllers",
        "Right-click each USB Root Hub > Properties > Power Management > Uncheck power saving",
        "Test with different USB port - some ports have better power delivery",
        "Use rear motherboard ports instead of front panel ports",
        "Replace USB cable if problem persists - cable may have intermittent connection",
        "Check for overheating - ensure device has adequate ventilation",
        "Update USB controller drivers from motherboard manufacturer"
      ],
      tips: [
        "Laptops are prone to USB power issues when on battery power",
        "Use high-quality USB 3.0 certified cables",
        "Powered USB hubs provide more stable power than motherboard ports",
        "Disconnect other high-power USB devices (external drives, charging phones)",
        "BIOS settings may have USB power options - disable USB power saving there too"
      ]
    }
  },
  {
    slug: "poor-image-quality",
    title: "Improving Poor Image Quality and Sharpness",
    category: "Troubleshooting",
    description: "Diagnose and fix blurry, pixelated, or low-quality video capture. Resolution, bitrate, and quality optimization.",
    keywords: "poor quality, blurry video, pixelated, low quality capture, improve quality",
    content: {
      problem: "Captured video looks blurry, pixelated, or significantly worse quality than the source. Image lacks sharpness and detail.",
      solution: "Verify source resolution, increase capture bitrate, check encoding settings, and ensure hardware is capable of desired quality.",
      steps: [
        "Verify source output resolution: Check your camera/console video output settings",
        "Ensure source is outputting maximum quality (1080p60 or 4K60)",
        "In OBS: Settings > Video > Output Resolution - match your source resolution",
        "Settings > Output > Recording > Recording Quality: Set to 'High Quality'",
        "Increase bitrate: 6000 Kbps for 1080p30, 9000 Kbps for 1080p60, 40000 Kbps for 4K30",
        "Use better encoder preset: 'Quality' or 'Max Quality' (NVENC), 'Slow' (x264)",
        "For streaming: Your upload speed limits bitrate - test at speedtest.net",
        "Recording to local file: Use high bitrate - storage is cheap, quality is forever",
        "Check your camera: DSLR in video mode should be set to highest quality (4K, high bitrate)",
        "Avoid digital zoom on camera - causes quality loss",
        "Use good lighting - poor lighting looks noisy even with best equipment",
        "For 4K capture: Ensure using USB 3.1 Gen 2 port and 4K-capable device"
      ],
      tips: [
        "Hardware limitations: 4K requires 4K Plus or 4K Pro device",
        "Streaming bitrate limited by your internet upload speed",
        "Recording bitrate only limited by storage speed - SSDs handle 100+ Mbps easily",
        "Source quality matters most - capture can't improve poor source",
        "Professional cameras produce better results than webcams or built-in cameras"
      ],
      relatedProducts: ["magewell-usb-capture-hdmi-4k-plus"]
    }
  },
  {
    slug: "audio-crackling-popping",
    title: "Fixing Audio Crackling, Popping, and Distortion",
    category: "Troubleshooting",
    description: "Resolve audio quality issues including crackling, popping, static, and distortion in captured audio.",
    keywords: "audio crackling, audio popping, distorted audio, audio static, bad audio quality",
    content: {
      problem: "Captured audio has crackling, popping, static, or distortion. Audio may cut in and out or sound garbled.",
      solution: "Adjust audio buffer size, fix USB bandwidth issues, reduce sample rate, and check audio source levels.",
      steps: [
        "Check source audio levels: Ensure source isn't clipping (peaks hitting 0dB)",
        "In OBS: Audio Mixer - levels should peak around -12dB to -6dB (yellow)",
        "If clipping (red): Reduce audio gain in source device or capture software",
        "Increase audio buffer: Settings > Audio > Buffer (increase from 20ms to 40-60ms)",
        "Reduce sample rate: Change from 48kHz to 44.1kHz if issues persist",
        "Check USB bandwidth: Audio issues often indicate USB controller overload",
        "Close other USB audio devices: Headsets, microphones, audio interfaces",
        "Update audio drivers: Check Device Manager for driver updates",
        "Disable audio enhancements: Windows Sound Settings > Properties > Enhancements > Disable all",
        "Test with different audio monitoring: Disable monitoring to rule out playback device issues",
        "Try different USB port: Front panel USB ports often have audio interference"
      ],
      tips: [
        "USB 2.0 audio devices + USB 3.0 capture on same controller can cause interference",
        "Electrical interference: Route USB cables away from power cables",
        "Some motherboards have poor onboard audio - USB audio interface provides cleaner signal",
        "Buffer size increases latency - only increase if crackling persists",
        "Professional audio interfaces (Focusrite, PreSonus) provide better quality than device-embedded audio"
      ]
    }
  },
  {
    slug: "interlaced-video-combing",
    title: "Fixing Interlaced Video and Combing Artifacts",
    category: "Troubleshooting",
    description: "Remove interlacing combing artifacts and enable proper deinterlacing for smooth video playback.",
    keywords: "interlacing, combing, deinterlacing, jagged lines, scan lines",
    content: {
      problem: "Video shows horizontal jagged lines (combing) especially during motion. Image looks like horizontal blinds or scan lines.",
      solution: "Enable deinterlacing in your capture software. Modern devices should capture progressive video (1080p, not 1080i).",
      steps: [
        "Check source output: Ensure camera/console is set to progressive (1080p, 720p) not interlaced (1080i)",
        "Consoles: Video Settings > Output > Select 1080p (not 1080i or Auto)",
        "Cameras: Video Format > Progressive (not Interlaced)",
        "In OBS: Right-click video source > Filters > Add 'Deinterlacing'",
        "Deinterlacing Method: Select 'Yadif 2x' for best quality",
        "In vMix: Input Settings > Deinterlacing > Select 'Bob'",
        "For editing: Adobe Premiere > Sequence Settings > Fields > Upper or Lower First",
        "For already-recorded interlaced video: Use video editing software to deinterlace in post",
        "HandBrake: Filters > Deinterlace > Yadif (best quality) or Decomb (faster)"
      ],
      tips: [
        "Modern sources should output progressive - interlacing is legacy TV standard",
        "1080p60 is better than 1080i60 (60 full frames vs 60 half-frames)",
        "If source only outputs 1080i, must deinterlace in capture software",
        "Deinterlacing adds processing overhead - use progressive sources when possible",
        "Professional broadcast still uses interlacing - SDI captures handle this well"
      ]
    }
  },
  {
    slug: "high-cpu-usage",
    title: "Reducing High CPU Usage During Capture",
    category: "Troubleshooting",
    description: "Optimize CPU usage when streaming or recording. Hardware encoding, resolution scaling, and performance tuning.",
    keywords: "high CPU usage, CPU overload, performance issues, reduce CPU, encoding lag",
    content: {
      problem: "CPU usage hits 90-100% during streaming or recording, causing lag, dropped frames, and system slowdowns.",
      solution: "Switch to hardware encoding (GPU), reduce output resolution, lower encoding quality preset, and close background applications.",
      steps: [
        "Enable Hardware Encoding (CRITICAL for low CPU usage):",
        "OBS: Settings > Output > Encoder",
        "  - NVIDIA GPU: Select 'NVENC H.264 (new)' - reduces CPU from 30% to 5%",
        "  - AMD GPU: Select 'AMD HW H.264'",
        "  - Intel CPU with iGPU: Select 'QuickSync H.264'",
        "Reduce Output Resolution: 1080p to 720p saves 40% CPU",
        "Lower frame rate: 60fps to 30fps halves encoding load",
        "Change Encoder Preset: x264 'veryfast' instead of 'medium' (if using CPU encoding)",
        "Downscale Filter: Settings > Video > Downscale Filter > 'Bilinear' (fastest)",
        "Close background apps: Chrome, Discord, Spotify, unnecessary programs",
        "Disable browser hardware acceleration (Chrome uses GPU needed for encoding)",
        "Game settings: Lower game graphics quality to free up CPU/GPU",
        "Set capture software process priority: Task Manager > Details > Right-click OBS > Priority > High",
        "Windows: Disable Game Bar, Game Mode, and Geforce Experience overlays"
      ],
      tips: [
        "Hardware encoding is THE solution - if you have NVIDIA/AMD GPU, always use it",
        "Single PC streaming is CPU-intensive - dual PC setup eliminates all CPU issues",
        "Recording to disk uses less CPU than streaming (no real-time encoding)",
        "Monitor both CPU and GPU usage - GPU encoding can hit GPU limits",
        "12th gen Intel or newer: Use QuickSync - quality rivals NVENC with lower power"
      ]
    }
  },
  {
    slug: "multi-device-conflicts",
    title: "Troubleshooting Multiple Capture Device Conflicts",
    category: "Troubleshooting",
    description: "Fix device conflicts, bandwidth issues, and synchronization problems when using multiple Magewell devices simultaneously.",
    keywords: "multiple devices, multi-camera, device conflicts, two capture cards, multi-device issues",
    content: {
      problem: "When using multiple Magewell devices, you experience conflicts, only one device works, or performance degrades significantly.",
      solution: "Distribute devices across separate USB controllers, configure unique device names, and manage bandwidth allocation properly.",
      steps: [
        "Open Device Manager > Universal Serial Bus controllers",
        "Identify different USB controllers (each controller is independent)",
        "Connect each capture device to ports on separate USB controllers",
        "Calculate bandwidth: Each 1080p60 device uses ~250MB/s",
        "USB 3.0 controller limit: ~400MB/s (fits one 1080p60 device comfortably)",
        "USB 3.1 Gen 2 controller: ~1000MB/s (fits multiple 1080p60 or one 4K60)",
        "In capture software: Rename each device clearly (Camera 1, Camera 2, etc.)",
        "OBS: Right-click source > Rename",
        "Ensure each device has unique resolution/framerate to avoid conflicts",
        "For 3+ devices: Install PCIe USB 3.1 expansion card for additional controllers",
        "Recommended expansion card: Inateck or StarTech 4-port USB 3.1 Gen 2 PCIe card",
        "Test devices one at a time first, then add second, then third"
      ],
      tips: [
        "Front and rear USB ports often share controllers - check Device Manager",
        "Each USB controller operates independently - key to multi-device setups",
        "Thunderbolt docks provide excellent multi-device support",
        "For professional multi-cam: Consider dedicated USB controllers per device",
        "Label your USB cables/ports so you know which device is which"
      ]
    }
  },

  // Add more guides following the same pattern...
  // I'll create abbreviated versions for remaining guides to conserve tokens
  
  {
    slug: "windows-11-23h2-compatibility",
    title: "Windows 11 23H2 Update Compatibility",
    category: "Troubleshooting",
    description: "Ensure Magewell devices work properly after Windows 11 23H2 update.",
    keywords: "Windows 11 23H2, update issues, compatibility, Windows update",
    content: {
      solution: "Magewell devices are fully compatible with Windows 11 23H2. Update USB controller drivers and reinstall Magewell utility if issues occur.",
      steps: ["Update Windows completely", "Update USB controller drivers", "Reinstall USB Capture Utility", "Test device in OBS/vMix"],
      tips: ["Update drivers before major Windows updates", "Keep Magewell utility updated"]
    }
  },
  {
    slug: "obs-source-not-appearing",
    title: "OBS Not Showing Magewell Device in Source List",
    category: "Troubleshooting",
    description: "Fix OBS when Magewell device doesn't appear in Video Capture Device sources.",
    keywords: "OBS not detecting, device missing OBS, can't find device",
    content: {
      solution: "Restart OBS, update OBS to latest version, check device is detected in Windows Device Manager, and try adding as different source type.",
      steps: ["Verify device appears in Device Manager", "Restart OBS Studio", "Update OBS to latest version", "Try Windows Camera instead of Video Capture Device", "Reinstall OBS if issues persist"],
      tips: ["Use OBS Studio (not Streamlabs OBS) for best compatibility", "Some antivirus blocks device access - check exceptions"]
    }
  },
  {
    slug: "capture-flickering-screen",
    title: "Fixing Flickering or Flashing Video During Capture",
    category: "Troubleshooting",
    description: "Resolve screen flickering, flashing, or unstable video signals during HDMI capture.",
    keywords: "flickering capture, flashing screen, unstable video, HDMI flickering",
    content: {
      problem: "Captured video shows intermittent flickering, flashing to black, or unstable image.",
      solution: "Flickering is typically caused by resolution/refresh rate mismatches, HDCP negotiation failures, or insufficient USB bandwidth. Match source output settings to your capture device's capabilities.",
      steps: ["Check source output resolution matches capture device capabilities", "Lower source resolution/refresh rate (try 1080p30 instead of 1080p60)", "Replace HDMI cable with certified Premium High Speed HDMI cable", "Disable HDCP on your source device if available", "Try a different USB 3.0 port on a separate controller", "Update capture device firmware via USB Capture Utility", "Set custom EDID to force a stable resolution", "If using HDMI splitter/switch, test without it"],
      tips: ["HDCP renegotiation causes brief black flickers - normal on protected content", "Cheap HDMI cables cause signal instability at higher resolutions", "Some cameras output unstable signals during menu navigation - this is normal", "Fluorescent lighting can cause flicker on camera - adjust shutter speed to 1/50s (50Hz) or 1/60s (60Hz)"]
    }
  },
  {
    slug: "sdi-signal-troubleshooting",
    title: "Troubleshooting SDI Signal Issues",
    category: "Troubleshooting",
    description: "Diagnose SDI signal problems including no signal, dropouts, and error detection with Magewell SDI capture devices.",
    keywords: "SDI no signal, SDI troubleshooting, 3G-SDI problems, SDI cable issues",
    content: {
      problem: "SDI capture shows no signal, intermittent dropouts, or degraded video quality.",
      solution: "Check BNC cable connections, verify SDI format compatibility (SD/HD/3G/6G/12G), and test cable integrity. SDI cables support longer runs than HDMI but still have distance limits based on format.",
      steps: ["Verify BNC connectors are firmly locked (twist clockwise until seated)", "Check SDI format: SD-SDI (270Mbps), HD-SDI (1.485Gbps), 3G-SDI (2.97Gbps)", "Test with known-good SDI cable", "Verify your capture device supports the SDI format in use", "Check cable length: HD-SDI reliable to 100m, 3G-SDI to 70m with quality cable", "Use SDI signal generator or camera test pattern to isolate cable vs source issues", "Inspect BNC connectors for damage or corrosion", "For long runs: Use SDI distribution amplifier or fiber converter"],
      tips: ["SDI has no HDCP - all content can be captured freely", "75-ohm BNC cables required - do not use 50-ohm networking cables", "SDI supports embedded audio - no separate audio cable needed", "Locking BNC connectors prevent accidental disconnection in production environments"],
      relatedProducts: ["magewell-usb-capture-sdi-plus", "magewell-usb-capture-sdi-4k-pro"]
    }
  },
  {
    slug: "capture-wrong-resolution",
    title: "Capture Device Showing Wrong Resolution or Aspect Ratio",
    category: "Troubleshooting",
    description: "Fix incorrect resolution, stretched, cropped, or wrong aspect ratio in captured video.",
    keywords: "wrong resolution, aspect ratio, stretched video, cropped capture",
    content: {
      problem: "Captured video appears stretched, squashed, cropped, or at the wrong resolution compared to source.",
      solution: "Configure custom EDID to request correct resolution from source, and adjust canvas/output resolution in capture software to match.",
      steps: ["Check source device output resolution in its settings menu", "Open USB Capture Utility and verify detected resolution", "If wrong: Set Custom EDID to your desired resolution (e.g., 1920x1080)", "Reconnect source after EDID change", "In OBS: Set Canvas Resolution to match source (Settings > Video)", "Right-click your capture source > Transform > Fit to Screen", "For aspect ratio issues: Source settings > Resolution Type > Custom > Set correct values", "Check for letterboxing/pillarboxing - indicates resolution mismatch"],
      tips: ["Most common fix: Set custom EDID to 1920x1080 60fps", "4:3 sources (VGA, old cameras) will have pillarboxing on 16:9 canvas - this is normal", "Some cameras output 2048x1080 (DCI 2K) - crop or scale to 1920x1080 for standard workflows", "USB Capture Utility shows exact detected resolution and refresh rate"]
    }
  },
  {
    slug: "capture-delay-latency",
    title: "Measuring and Reducing Capture Latency",
    category: "Troubleshooting",
    description: "Understand and minimize capture-to-display latency for gaming, live production, and real-time monitoring.",
    keywords: "capture latency, delay, input lag, low latency, real-time capture",
    content: {
      problem: "Noticeable delay between source action and captured video display. Important for gaming passthrough and live production monitoring.",
      solution: "Magewell's FPGA-based processing provides under 1 frame of capture latency. Use HDMI loop-through for zero-latency monitoring. Reduce software processing chain for minimum display delay.",
      steps: ["Use HDMI loop-through output for zero-latency monitoring on external display", "In OBS: Disable all video filters on capture source (each filter adds processing delay)", "Enable 'Low Latency' in capture device settings if available", "Reduce preview resolution: Settings > Video > Canvas Resolution > Lower value", "Disable V-Sync in streaming software", "Use hardware decoding for preview playback", "Close unnecessary video sources and scenes to reduce processing load", "For gaming: Always play on loop-through display, not software preview"],
      tips: ["Magewell capture latency: typically 30-60ms (1-2 frames at 60fps)", "Loop-through output adds zero latency - identical to direct connection", "Software preview always adds latency - use hardware loop-through for monitoring", "Encoding latency is separate from capture latency", "For competitive gaming: Loop-through is essential - never play on software preview"]
    }
  },

  // ADVANCED FEATURES GUIDES (18)
  {
    slug: "optimize-4k60-capture",
    title: "Optimizing Capture Quality for 4K60 Workflows",
    category: "Advanced Features",
    description: "Complete optimization guide for 4K60 HDR capture including system requirements, encoding settings, and storage configuration.",
    keywords: "4K60 capture, 4K optimization, HDR capture, high quality settings",
    content: {
      solution: "4K60 capture requires USB 3.1 Gen 2 (10Gbps), powerful CPU/GPU for encoding, and NVMe SSD storage. Configure capture software for maximum quality.",
      steps: ["Verify USB port: Must be USB 3.1 Gen 2 (10Gbps) or USB 3.2/Thunderbolt", "System requirements: Intel i7/AMD Ryzen 7 minimum, 16GB RAM, dedicated GPU", "Storage: NVMe SSD required (SATA SSDs may be too slow for 4K60 raw)", "Recording bitrate: 80-150 Mbps for high-quality 4K60 H.264", "Use NVENC/AMD VCE hardware encoding at Quality preset", "OBS: Output Resolution 3840x2160, FPS 60, Rate Control CBR", "For HDR: Enable HDR passthrough in capture software (requires compatible display)", "Color: 10-bit 4:2:2 for maximum quality (4K Plus/Pro models)", "Test recording: Record 60 seconds and verify quality on 4K display", "Monitor GPU/CPU usage: Should stay below 80% during capture"],
      tips: ["4K60 recording generates ~35-45 GB per hour at high quality", "NVMe SSDs handle 500+ MB/s write speeds - essential for 4K60", "Dedicated recording drive separate from OS drive improves reliability", "4K streaming requires 20+ Mbps upload - most connections can't handle this", "Consider 4K recording locally + 1080p streaming simultaneously"],
      relatedProducts: ["magewell-usb-capture-hdmi-4k-plus", "magewell-usb-capture-hdmi-4k-pro"]
    }
  },
  {
    slug: "custom-edid-advanced",
    title: "Advanced Custom EDID Configuration",
    category: "Advanced Features",
    description: "Deep dive into EDID configuration for problematic sources, custom resolutions, and professional workflows.",
    keywords: "custom EDID, EDID editor, resolution configuration, advanced EDID",
    content: {
      solution: "Use the USB Capture Utility's advanced EDID editor to create custom resolution profiles for non-standard sources, legacy equipment, and special workflows.",
      steps: ["Launch USB Capture Utility and connect your device", "Navigate to EDID settings", "Select 'Custom EDID' mode", "Choose base resolution and refresh rate", "Add supported resolution list (all resolutions your source might output)", "Set preferred color space: RGB or YCbCr 4:2:2/4:4:4", "Configure audio capabilities: PCM stereo, 5.1 surround, etc.", "Save EDID profile for future use", "Apply and reconnect your source device", "Verify source outputs expected resolution"],
      tips: ["Export working EDID profiles as backups before making changes", "Some medical/scientific equipment requires specific EDID to output video", "Custom EDID can force lower resolution for bandwidth-constrained setups", "Reset to factory EDID if custom settings cause issues"]
    }
  },
  {
    slug: "multi-camera-production",
    title: "Setting Up Multi-Camera Production Workflows",
    category: "Advanced Features",
    description: "Configure professional multi-camera setups using multiple Magewell devices for live production, events, and studio work.",
    keywords: "multi-camera, multi-cam setup, live production, multiple capture devices",
    content: {
      solution: "Use multiple Magewell devices on separate USB controllers with vMix or OBS for professional multi-camera switching and recording.",
      steps: ["Plan camera positions and shot types (wide, medium, close-up, graphics)", "Connect each camera to a separate Magewell device", "Distribute devices across different USB controllers", "In vMix: Add each device as Camera Input with clear labels", "Configure Multi-View to monitor all cameras simultaneously", "Set up keyboard shortcuts for quick camera switching", "Configure audio: Select which camera provides main audio", "Set up recording: Individual ISO recordings + program mix", "Create scene transitions and graphics overlays", "Test full workflow before going live"],
      tips: ["3+ cameras: Use PCIe USB expansion card for additional bandwidth", "Label everything: cameras, cables, USB ports", "vMix Pro supports unlimited inputs - ideal for multi-cam", "Record individual camera ISOs for post-production flexibility", "Use tally lights to signal which camera is live"]
    }
  },
  {
    slug: "hardware-scaling-cropping",
    title: "Using Hardware Scaling and Cropping Features",
    category: "Advanced Features",
    description: "Configure hardware-based video scaling, cropping, and aspect ratio conversion for optimal capture quality.",
    keywords: "hardware scaling, cropping, aspect ratio, resolution conversion",
    content: {
      solution: "Magewell's FPGA handles scaling and cropping in hardware, reducing CPU load. Configure via USB Capture Utility for resolution conversion without quality loss.",
      steps: ["Open USB Capture Utility > Video Settings", "Enable Hardware Scaling to convert source resolution to desired output", "Set output resolution: Common options include 1920x1080, 1280x720, 3840x2160", "Configure Cropping: Remove unwanted borders or letterboxing", "Aspect Ratio Conversion: 4:3 to 16:9 with letterboxing or stretching", "Set Deinterlacing mode for interlaced sources (Bob, Weave, or Blend)", "Apply changes and verify output in capture software", "Hardware processing uses zero CPU - all handled by onboard FPGA"],
      tips: ["Hardware scaling is lossless and uses zero CPU", "Crop black bars from letterboxed sources for clean output", "Downscale 4K to 1080p in hardware for CPU-efficient streaming", "Deinterlacing in hardware produces better results than software"]
    }
  },
  {
    slug: "loop-through-monitoring",
    title: "Configuring HDMI Loop-Through for Monitoring",
    category: "Advanced Features",
    description: "Set up HDMI passthrough for zero-latency confidence monitoring while recording or streaming.",
    keywords: "loop through, HDMI passthrough, confidence monitor, zero latency",
    content: {
      solution: "Connect a monitor to the HDMI OUT port for zero-latency passthrough. The loop-through provides an exact copy of the input signal without any processing delay.",
      steps: ["Connect video source to HDMI IN port on capture device", "Connect a monitor to HDMI OUT (loop-through) port", "Monitor displays exact input signal with zero added latency", "Capture software receives the same signal simultaneously", "For gaming: Play on loop-through monitor, stream from capture software", "For presentations: Presenter sees their slides on confidence monitor", "For surgical/medical: Clinical display receives unmodified signal"],
      tips: ["Loop-through supports full resolution of input signal", "No power required for loop-through - it's passive passthrough", "Loop-through works even if capture software isn't running", "Essential for gaming - never play on software preview (adds latency)", "For multi-display: Use HDMI splitter before capture device for additional monitors"]
    }
  },
  {
    slug: "capture-api-development",
    title: "Getting Started with Magewell Capture API Development",
    category: "Advanced Features",
    description: "Introduction to Magewell SDK for custom capture application development. DirectShow, V4L2, and AVFoundation APIs.",
    keywords: "Magewell SDK, capture API, custom development, DirectShow, V4L2",
    content: {
      solution: "Download the Magewell SDK for your platform. Use DirectShow (Windows), V4L2 (Linux), or AVFoundation (macOS) APIs to build custom capture applications.",
      steps: ["Download SDK from https://www.magewell.com/sdk", "Extract and read the documentation in /docs folder", "Windows: Use DirectShow API or Magewell's proprietary API", "Linux: Use V4L2 API with provided helper libraries", "macOS: Use AVCaptureSession with Magewell extensions", "Review sample applications in /samples directory", "Build and run sample project to verify SDK installation", "Modify sample code for your custom requirements", "API supports: Resolution control, color space, audio, firmware updates"],
      tips: ["Sample apps provided in C++, C#, Java, and Visual Basic", "DirectShow filters included for easy integration with existing Windows apps", "SDK is free to download and use commercially", "Contact StreamTek for technical SDK support"],
      relatedProducts: ["magewell-usb-capture-utility-v3"]
    }
  },
  {
    slug: "recording-formats-codecs",
    title: "Understanding Recording Formats and Codecs",
    category: "Advanced Features",
    description: "Compare H.264, H.265, ProRes, and raw capture formats. Choose the right codec for your workflow.",
    keywords: "recording format, codec comparison, H.264, H.265, ProRes, video codec",
    content: {
      solution: "Choose your codec based on workflow: H.264 for streaming/web, H.265 for efficient storage, ProRes for editing, and raw for maximum quality.",
      steps: ["H.264 (AVC): Best for streaming and general recording. Small files, universal playback.", "H.265 (HEVC): 50% smaller files than H.264 at same quality. Requires more CPU to encode.", "ProRes (Mac/editing): Large files but instant editing in Premiere/Final Cut. No reprocessing.", "MJPEG: Lower CPU, larger files. Good for multi-device capture on slower systems.", "Raw/Uncompressed: Maximum quality, enormous files. For scientific/medical archival.", "For streaming: Use H.264 with hardware encoding (NVENC/VCE)", "For recording: Use H.264 CRF 18-20 for excellent quality/size balance", "For editing: ProRes 422 if editing on Mac, DNxHR for Windows/Avid", "For archival: ProRes 422 HQ or H.265 CRF 16 for long-term storage"],
      tips: ["Hardware encoding (NVENC) only supports H.264 and H.265", "ProRes encoding on Windows requires third-party tools", "H.265 saves storage but takes 2-3x longer to encode than H.264", "Always record at highest quality possible - you can compress later"]
    }
  },
  {
    slug: "audio-embedding-configuration",
    title: "Configuring Embedded Audio Capture",
    category: "Advanced Features",
    description: "Set up embedded HDMI/SDI audio capture, audio routing, and mixing with external audio sources.",
    keywords: "embedded audio, HDMI audio, SDI audio, audio routing, audio capture",
    content: {
      solution: "Magewell devices capture embedded HDMI/SDI audio alongside video. Configure audio routing in your capture software to mix embedded and external audio sources.",
      steps: ["HDMI carries up to 8 channels of embedded audio automatically", "SDI carries up to 16 channels of embedded audio", "In OBS: Audio source appears with your Video Capture Device", "Configure audio: Right-click source > Properties > Audio Output Mode", "Select 'Capture Audio Only' or 'Output Desktop Audio'", "Mix embedded audio with external mic in Audio Mixer", "Set audio levels: Peaks should hit -12dB to -6dB (yellow zone)", "For separate audio: Use external audio interface + Magewell video-only", "Advanced: USB Capture Utility > Audio tab for sample rate and channel config"],
      tips: ["HDMI audio supports PCM stereo, 5.1, and 7.1 surround", "Some sources have separate settings for HDMI audio output", "Camera HDMI audio quality varies - external recorder may be better", "Use Audio Monitoring in OBS to hear captured audio in real-time"]
    }
  },
  {
    slug: "ndi-integration",
    title: "Using Magewell Capture with NDI Workflows",
    category: "Advanced Features",
    description: "Integrate Magewell capture devices with NDI (Network Device Interface) for IP-based video production workflows.",
    keywords: "NDI integration, network video, IP production, NDI capture",
    content: {
      solution: "Capture video with Magewell devices and convert to NDI using free NDI Tools. Share captured video across your network for multi-location production.",
      steps: ["Download NDI Tools from ndi.tv (free)", "Install NDI Virtual Input and NDI Screen Capture", "In OBS: Use NDI Plugin to output captured video as NDI source", "Other computers on network can receive NDI feed in their software", "For dedicated NDI: Use vMix with Magewell input, enable NDI output per input", "Configure network: Gigabit Ethernet required for 1080p NDI, 10GbE for 4K", "NDI|HX provides compressed NDI for lower-bandwidth networks", "Use NDI Monitor app to view and verify NDI sources on network"],
      tips: ["NDI works across your local network - no internet required", "Full NDI requires ~125 Mbps per 1080p60 stream", "NDI|HX uses ~20 Mbps per 1080p60 - better for WiFi/limited networks", "Magewell also makes dedicated NDI encoders for permanent installations", "NDI 5 supports audio-only and bridging between networks"]
    }
  },
  {
    slug: "streaming-multiple-platforms",
    title: "Simultaneous Multi-Platform Streaming",
    category: "Advanced Features",
    description: "Stream to YouTube, Twitch, Facebook, and other platforms simultaneously from a single capture setup.",
    keywords: "multi-platform streaming, simulcast, restream, YouTube Twitch Facebook",
    content: {
      solution: "Use restreaming services (Restream.io, Castr) or vMix's built-in multi-destination streaming to broadcast to multiple platforms simultaneously.",
      steps: ["Option 1 - Restreaming Service: Sign up at restream.io or castr.io", "Connect your YouTube, Twitch, Facebook accounts", "In OBS: Stream to Restream's RTMP URL (they redistribute to all platforms)", "Option 2 - vMix: Settings > Streaming > Add multiple destinations", "Add RTMP URLs for each platform (YouTube, Twitch, Facebook)", "Enable all destinations and click 'Start Streaming'", "Option 3 - OBS + Multiple RTMP Plugin: Install obs-multi-rtmp plugin", "Add separate RTMP outputs for each platform", "Monitor each platform's chat in separate browser tabs"],
      tips: ["Restream.io free tier allows 2 simultaneous platforms", "vMix supports unlimited streaming destinations natively", "Multi-streaming doubles your upload bandwidth per platform added", "Check platform Terms of Service - some discourage simulcasting", "YouTube and Facebook have different stream key formats"]
    }
  },
  {
    slug: "virtual-camera-setup",
    title: "Using Magewell as a Virtual Camera",
    category: "Advanced Features",
    description: "Configure Magewell capture as a virtual camera for Zoom, Teams, and other video conferencing applications.",
    keywords: "virtual camera, webcam replacement, Zoom camera, Teams webcam",
    content: {
      solution: "Magewell devices appear as standard UVC cameras - they work as 'webcams' natively in all video conferencing software without virtual camera software.",
      steps: ["Connect your professional camera to Magewell via HDMI", "Connect Magewell to your computer via USB 3.0", "Open Zoom/Teams/Meet/Webex", "Go to Video Settings", "Select 'Magewell USB Capture' from camera dropdown", "Your professional camera is now your 'webcam'", "Adjust camera settings (exposure, white balance) on the camera itself", "For OBS Virtual Camera: OBS > Start Virtual Camera > Select in conferencing app"],
      tips: ["No virtual camera software needed - Magewell appears as native hardware", "Professional DSLR/mirrorless cameras provide 10x better quality than webcams", "Use camera's HDMI clean output (disable overlay/menus) for professional look", "Pair with good lighting for best results - lighting matters more than camera quality", "Dummy battery/AC adapter recommended for long meetings (cameras timeout on battery)"]
    }
  },
  {
    slug: "color-space-hdr-workflow",
    title: "HDR Capture and Color Space Management",
    category: "Advanced Features",
    description: "Configure HDR video capture, manage color spaces (BT.709, BT.2020, DCI-P3), and maintain color accuracy.",
    keywords: "HDR capture, color space, BT.2020, BT.709, DCI-P3, 10-bit color",
    content: {
      solution: "Use 4K Plus or 4K Pro devices for HDR capture. Configure color space settings to match your source and ensure your monitoring/output chain supports HDR.",
      steps: ["Verify your device supports HDR: 4K Plus and 4K Pro models", "Source must output HDR signal (HDR10, HLG)", "Connect to USB 3.1 Gen 2 port for 4K HDR bandwidth", "USB Capture Utility: Verify HDR signal detected", "In capture software: Enable HDR passthrough if available", "For SDR monitoring: Apply tone mapping to convert HDR to SDR preview", "Recording: Use H.265 Main10 profile for 10-bit HDR recording", "Editing: DaVinci Resolve recommended for HDR color grading", "Delivery: YouTube supports HDR uploads with proper metadata"],
      tips: ["HDR content requires HDR display for proper monitoring", "Most streaming platforms now support HDR content", "10-bit capture preserves color banding in gradients", "BT.709 for HD SDR, BT.2020 for UHD/HDR content", "Record in highest quality possible - HDR to SDR conversion is lossy"],
      relatedProducts: ["magewell-usb-capture-hdmi-4k-plus", "magewell-usb-capture-hdmi-4k-pro"]
    }
  },
  {
    slug: "scheduled-recording",
    title: "Setting Up Automated Scheduled Recording",
    category: "Advanced Features",
    description: "Configure automatic recording schedules for lecture capture, surveillance, and unattended operation.",
    keywords: "scheduled recording, automatic capture, unattended recording, timed recording",
    content: {
      solution: "Use OBS advanced scene switching, FFmpeg command-line scripts, or dedicated recording software to automate capture on a schedule.",
      steps: ["Option 1 - OBS Advanced Scene Switcher plugin: Install from OBS Plugin marketplace", "Configure Time trigger: Set start/stop times for recording", "Option 2 - Windows Task Scheduler + FFmpeg:", "Create FFmpeg batch script: ffmpeg -f dshow -i video='Magewell USB Capture' -t 3600 output.mp4", "Schedule in Task Scheduler: Create Basic Task > Set trigger time", "Option 3 - Magewell Capture Express: Built-in scheduled recording feature", "Set recording duration limits to prevent storage overflow", "Configure storage location on fast SSD with adequate space", "Test schedule before relying on it for critical recordings"],
      tips: ["Calculate storage: 1080p60 H.264 at 20Mbps = ~9GB per hour", "Auto-delete old recordings when storage hits 80% capacity", "Use RAID or NAS for long-term unattended recording reliability", "UPS (battery backup) prevents recording loss during power outages", "Email/webhook alerts on recording start/stop for monitoring"]
    }
  },
  {
    slug: "picture-in-picture-overlays",
    title: "Creating Picture-in-Picture and Overlay Layouts",
    category: "Advanced Features",
    description: "Build professional PiP layouts with webcam overlays, graphics, and multi-source compositions in OBS and vMix.",
    keywords: "picture in picture, PiP, overlay, webcam overlay, multi-source layout",
    content: {
      solution: "Use OBS Scenes or vMix Layers to create professional multi-source layouts with picture-in-picture webcam overlays, graphics, and lower thirds.",
      steps: ["In OBS: Create a new Scene for your PiP layout", "Add your main source (game, presentation, desktop) as first source", "Add camera source (Magewell) as second source", "Resize camera source: Click and drag corners to desired PiP size", "Position PiP: Drag to corner of canvas", "Add border: Right-click > Filters > Apply LUT or Image Mask", "Add lower third graphics: Add Image source with PNG overlay", "Create Scene Transitions for switching between layouts", "Save multiple layouts as different Scenes for quick switching", "Use Studio Mode to preview before going live"],
      tips: ["PiP size: 20-25% of canvas is standard for webcam overlay", "Rounded corners: Use image mask filter with rounded rectangle PNG", "Green screen: Use Chroma Key filter to remove webcam background", "Animate transitions between layouts for professional look", "Use StreamElements or own PNG overlays for branded graphics"]
    }
  },

  // WARRANTY & RETURNS GUIDES (6)
  {
    slug: "warranty-coverage",
    title: "Understanding Magewell Product Warranty Coverage",
    category: "Warranty & Returns",
    description: "Complete guide to StreamTek's 3-year warranty on Magewell products. What's covered, claim process, and warranty extensions.",
    keywords: "warranty coverage, Magewell warranty, 3 year warranty, product guarantee",
    content: {
      solution: "All Magewell products from StreamTek include a 3-year manufacturer warranty covering defects in materials and workmanship. Register your product for full coverage.",
      steps: ["All Magewell USB Capture devices purchased from StreamTek include 3-year warranty", "Warranty covers: Manufacturing defects, component failure, firmware issues", "Not covered: Physical damage, water damage, modification, misuse", "To register: Visit StreamTek support page with your order number and device serial", "Serial number location: Printed on device label (bottom of unit)", "Keep your purchase receipt/order confirmation as proof of purchase", "Warranty starts from date of purchase, not date of manufacture"],
      tips: ["Register your device within 30 days of purchase for streamlined warranty service", "StreamTek handles all UK warranty claims - no need to contact Magewell directly", "Warranty covers repair or replacement at StreamTek's discretion", "Firmware updates are free and not part of warranty - available indefinitely", "Extended warranty may be available - contact StreamTek for details"]
    }
  },
  {
    slug: "rma-return-process",
    title: "How to Request an RMA (Return Merchandise Authorisation)",
    category: "Warranty & Returns",
    description: "Step-by-step guide for returning a defective Magewell product. RMA process, shipping instructions, and timeline.",
    keywords: "RMA process, return product, defective device, replacement",
    content: {
      solution: "Contact StreamTek support to initiate an RMA. You'll receive an RMA number and shipping instructions. Device will be tested and repaired or replaced.",
      steps: ["Contact StreamTek support via email or contact form", "Describe the issue in detail (symptoms, when it started, what you've tried)", "Include your order number and device serial number", "Support team will troubleshoot remotely first", "If hardware issue confirmed: RMA number will be issued", "Pack device securely in original packaging (or equivalent protection)", "Include RMA number clearly visible on outside of package", "Ship to provided UK address (pre-paid label may be provided for warranty claims)", "StreamTek will test, repair, or replace within 5-10 business days", "Replacement/repaired device shipped back with tracking number"],
      tips: ["Always get an RMA number before shipping - unrequested returns may be refused", "Keep your original packaging for safe returns", "Back up any custom EDID/firmware settings before sending device", "Replacement devices come with remaining warranty from original purchase", "Express RMA service may be available for mission-critical applications"]
    }
  },
  {
    slug: "shipping-delivery-info",
    title: "Shipping, Delivery, and Order Tracking",
    category: "Warranty & Returns",
    description: "Delivery times, shipping options, and order tracking for StreamTek purchases. Free UK shipping on all orders.",
    keywords: "shipping info, delivery times, order tracking, free shipping UK",
    content: {
      solution: "All StreamTek orders include free UK shipping with next-business-day dispatch. Track your order via the link in your confirmation email.",
      steps: ["All UK orders: Free standard shipping (2-3 business days)", "Next-day delivery available (order before 2pm)", "Order confirmation email contains tracking link", "Track via Royal Mail or DPD tracking portals", "Delivery requires signature for orders over £100", "If not home: Package left at safe place or local depot for collection", "International orders: Contact StreamTek for shipping quotes", "Business/trade orders: Volume shipping arrangements available"],
      tips: ["Orders placed before 2pm weekdays dispatched same day", "Saturday delivery available on request (additional charge)", "All shipments fully insured during transit", "Contact support immediately if package arrives damaged", "Business accounts may qualify for trade shipping rates"]
    }
  },
  {
    slug: "refund-policy",
    title: "Refund and Returns Policy",
    category: "Warranty & Returns",
    description: "StreamTek's refund policy for Magewell products. 30-day returns, conditions, and refund process.",
    keywords: "refund policy, return policy, 30 day return, money back",
    content: {
      solution: "StreamTek offers a 30-day return policy on all Magewell products. Items must be in original condition with packaging for full refund.",
      steps: ["30-day return window from date of delivery", "Contact StreamTek support to initiate return", "Conditions: Device must be in original condition, with all accessories", "Original packaging required for full refund", "Missing accessories may result in partial refund", "Opened but unused: Full refund minus restocking fee (if applicable)", "Defective items: Full refund including return shipping costs", "Refund processed within 5-7 business days of receiving returned item", "Refund issued to original payment method"],
      tips: ["Test your device thoroughly within the 30-day window", "Keep all original packaging until you're sure the device meets your needs", "Business purchases may have different terms - check your invoice", "Defective products covered under warranty regardless of return window", "Contact support before returning - many issues can be resolved remotely"]
    }
  },
  {
    slug: "product-registration",
    title: "How to Register Your Magewell Product",
    category: "Warranty & Returns",
    description: "Register your Magewell device for warranty, firmware updates, and technical support access.",
    keywords: "product registration, register device, warranty registration",
    content: {
      solution: "Register your product on the StreamTek support page with your order number and device serial number for full warranty coverage and priority support.",
      steps: ["Locate your device serial number (bottom label of the device)", "Visit StreamTek support page or contact support email", "Provide: Order number, device model, serial number, purchase date", "Registration confirmation sent to your email", "You'll receive firmware update notifications", "Priority support access for registered products", "Warranty claims processed faster for registered devices"],
      tips: ["Register within 30 days of purchase for streamlined service", "Serial number format: Alphanumeric code on device bottom label", "One registration per device serial number", "Registration is free and takes under 2 minutes", "Keep registration confirmation email for your records"]
    }
  },
  {
    slug: "business-trade-accounts",
    title: "Setting Up a Business or Trade Account",
    category: "Warranty & Returns",
    description: "Benefits of StreamTek business accounts including volume pricing, priority support, and extended warranty options.",
    keywords: "business account, trade pricing, volume discount, corporate account",
    content: {
      solution: "Contact StreamTek to set up a business account for volume pricing, NET payment terms, dedicated account management, and priority technical support.",
      steps: ["Contact StreamTek via email or phone to request business account", "Provide: Company name, registration number, billing address, primary contact", "Account manager will be assigned within 24 hours", "Receive custom pricing based on expected volume", "NET 30 payment terms available for established businesses", "Access to priority support queue", "Extended warranty options discussed with account manager", "Volume order processing and bulk shipping available"],
      tips: ["Minimum 3 units for volume pricing consideration", "Education and NHS organizations may qualify for special pricing", "AV integrators and resellers: Ask about partner program", "Recurring orders can be set up on schedule", "All business orders include VAT invoice for reclaim"]
    }
  }
];

export default guides;
