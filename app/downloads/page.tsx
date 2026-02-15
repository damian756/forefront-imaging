import { Download, HardDrive, FileText, Package, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Magewell Drivers, Firmware & Software | Free USB Capture Utilities | StreamTek UK",
  description: "Download the latest Magewell USB Capture drivers, firmware updates, and free software utilities for Windows, macOS, and Linux. Official UK distributor with installation support and documentation.",
  keywords: "Magewell drivers download, USB Capture utility, Magewell firmware update, capture card drivers, Windows macOS Linux drivers, USB Capture software, Magewell SDK download",
  openGraph: {
    title: "Download Magewell Drivers & Software | StreamTek UK",
    description: "Get the latest Magewell USB Capture drivers, firmware, and free utilities for Windows, macOS, and Linux. Official UK support.",
    url: "https://www.streamtek.co.uk/downloads",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Magewell Drivers & Software | StreamTek UK",
    description: "Latest Magewell USB Capture drivers, firmware, and utilities for Windows, macOS, and Linux.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/downloads",
  },
};

interface DownloadItem {
  name: string;
  version: string;
  size: string;
  date: string;
  url: string;
  description: string;
}

export default function DownloadsPage() {
  const downloadCategories = [
    {
      icon: HardDrive,
      title: "Drivers & SDK",
      description: "Official Magewell capture drivers and Software Development Kits for Windows, macOS, and Linux. UVC/UAC compliant — most devices work driver-free.",
      items: [
        { 
          name: "Windows SDK & Drivers", 
          version: "v3.3.1.1552", 
          size: "109 MB", 
          date: "2026-02-02",
          url: "https://www.magewell.com/downloads",
          description: "Complete SDK with drivers, DirectShow support, sample applications, and Visual Studio integration for Windows 10/11."
        },
        { 
          name: "macOS USB Capture Utility", 
          version: "v3.0.5.59377", 
          size: "20.1 MB", 
          date: "2025-08-27",
          url: "https://www.magewell.com/downloads/usb-capture",
          description: "Free control utility for Mac with AVCaptureSession support, custom EDID, and firmware updates for macOS 10.9+."
        },
        { 
          name: "Linux SDK & Drivers", 
          version: "v3.3.1.1515", 
          size: "27.9 MB", 
          date: "2025-07-17",
          url: "https://www.magewell.com/downloads",
          description: "V4L2-compliant drivers and SDK for Ubuntu, CentOS, Debian (kernel 2.6.35+). Supports x86, x64, and ARM architectures."
        },
        { 
          name: "USB Capture Firmware", 
          version: "202509", 
          size: "3.04 MB", 
          date: "2025-09-08",
          url: "https://www.magewell.com/downloads/usb-capture",
          description: "Latest firmware for USB Capture SDI 4K Pro with improved picture smoothness and USB 3.1 stability fixes."
        }
      ],
      color: "blue"
    },
    {
      icon: Package,
      title: "Free Software Utilities",
      description: "Configure capture settings, manage firmware, adjust video parameters, and export diagnostics. No registration required.",
      items: [
        { 
          name: "USB Capture Utility for Windows", 
          version: "v3.0.5+", 
          size: "~35 MB", 
          date: "2025-08",
          url: "https://www.magewell.com/downloads/usb-capture",
          description: "Control all capture parameters, custom EDID, cropping, aspect ratio conversion, deinterlacing, and firmware updates."
        },
        { 
          name: "USB Capture Utility for macOS", 
          version: "v3.0.5.59377", 
          size: "20.1 MB", 
          date: "2025-08-27",
          url: "https://www.magewell.com/downloads/usb-capture",
          description: "Full-featured macOS utility with device configuration, audio volume control, and automatic firmware updates."
        },
        { 
          name: "Magewell Capture Express", 
          version: "Latest", 
          size: "~50 MB", 
          date: "2025",
          url: "https://www.magewell.com/downloads",
          description: "Simple recording application for quick video and audio capture from Magewell devices with format conversion."
        }
      ],
      color: "green"
    },
    {
      icon: FileText,
      title: "Documentation & Manuals",
      description: "Quick start guides, user manuals, technical specifications, and integration guides for all Magewell products.",
      items: [
        { 
          name: "USB Capture Quick Start Guide", 
          version: "Latest", 
          size: "538 KB", 
          date: "2024-11-12",
          url: "https://www.magewell.com/files/documents/Quick%20Start%20Guide%20for%20USB%20Capture.pdf",
          description: "PDF guide covering installation, connection, and first-time setup for all USB Capture devices."
        },
        { 
          name: "USB Capture Utility User Manual", 
          version: "V3", 
          size: "~2 MB", 
          date: "2025",
          url: "https://www.magewell.com/files/documents/User_Manual/USB-Capture-Utility-V3-user-manual_en_US.pdf",
          description: "Complete manual for USB Capture Utility covering all features, settings, troubleshooting, and advanced configuration."
        },
        { 
          name: "SDK Documentation & API Reference", 
          version: "Latest", 
          size: "~15 MB", 
          date: "2025",
          url: "https://www.magewell.com/sdk",
          description: "Comprehensive developer documentation with API references, sample code, and integration guides for C++, C#, Java."
        },
        { 
          name: "Product Datasheets & Specifications", 
          version: "Current", 
          size: "Various", 
          date: "2025",
          url: "https://www.magewell.com/capture/usb-capture",
          description: "Technical specifications, supported formats, compatibility tables, and performance data for all Magewell capture devices."
        }
      ],
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: {
      icon: "bg-blue-600/10 text-blue-500 border-blue-500/20",
      badge: "bg-blue-600/20 text-blue-400 border-blue-500/30"
    },
    green: {
      icon: "bg-green-600/10 text-green-500 border-green-500/20",
      badge: "bg-green-600/20 text-green-400 border-green-500/30"
    },
    purple: {
      icon: "bg-purple-600/10 text-purple-500 border-purple-500/20",
      badge: "bg-purple-600/20 text-purple-400 border-purple-500/30"
    }
  };

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Magewell USB Capture Software & Drivers",
    "applicationCategory": "DriverDownload",
    "operatingSystem": ["Windows 10", "Windows 11", "macOS 10.9+", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    },
    "provider": {
      "@type": "Organization",
      "name": "StreamTek",
      "url": "https://www.streamtek.co.uk"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen text-white pt-32 pb-20" style={{ background: 'var(--fiber-gradient)' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Magewell Drivers & Software Downloads
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
              Free drivers, firmware updates, and software utilities for all Magewell USB Capture devices. 
              Compatible with <strong>Windows, macOS, and Linux</strong>. No registration required for most downloads.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-bold text-lg mb-3 text-blue-300">Before You Download</h2>
              <ul className="text-slate-300 space-y-2 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span><strong>Most Magewell USB devices work driver-free</strong> on Windows, macOS, and Linux using UVC/UAC protocols. Drivers are only needed for advanced features or SDK development.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Always download the <strong>latest version</strong> for optimal performance, compatibility, and security updates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Ensure you select the correct package for your <strong>operating system and architecture</strong> (32-bit / 64-bit / ARM).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Need help? Visit our <a href="/support" className="text-blue-400 hover:text-blue-300 underline">Support</a> page, <a href="/knowledge-base" className="text-blue-400 hover:text-blue-300 underline">Knowledge Base</a>, or <a href="/contact" className="text-blue-400 hover:text-blue-300 underline">contact our UK support team</a>.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Categories */}
          <div className="space-y-12">
            {downloadCategories.map((category) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              
              return (
                <section key={category.title} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-xl ${colors.icon} border flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                      <p className="text-slate-400 leading-relaxed">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item) => (
                      <article 
                        key={item.name}
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-all group"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </h3>
                            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                              <span className="font-mono">Version {item.version}</span>
                              <span>•</span>
                              <span>{item.size}</span>
                              <span>•</span>
                              <span>Updated {new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                            </div>
                          </div>
                          <a 
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 whitespace-nowrap"
                          >
                            <Download className="w-5 h-5" />
                            Download
                            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>

          {/* SDK & Developer Access */}
          <section className="mt-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-12 text-center">
            <Package className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Developer SDK & API Access</h2>
            <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
              Building custom capture applications? The <strong>Magewell SDK</strong> provides comprehensive APIs for Windows, macOS, and Linux with support for DirectShow, V4L2, AVCaptureSession, and custom Magewell APIs.
            </p>
            <p className="text-slate-400 text-sm mb-8 max-w-2xl mx-auto">
              Free to download. Includes sample applications in C++, C#, Java, and Visual Basic with full documentation and technical support from StreamTek UK.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.magewell.com/sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg shadow-purple-500/30 transition-all inline-flex items-center justify-center gap-2"
              >
                Download SDK
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Contact UK Support
              </a>
            </div>
          </section>

          {/* System Requirements */}
          <section className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Minimum System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-blue-400 text-lg">Windows</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Windows 10 / 11 (64-bit recommended)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Intel Core i5 or AMD equivalent
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    8GB RAM (16GB for 4K)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    USB 3.0 or higher port
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    DirectX 9.0c or later
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-green-400 text-lg">macOS</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    macOS 10.9 (Mavericks) or later
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Intel or Apple Silicon (M1/M2/M3)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    8GB RAM (16GB for 4K)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    USB 3.0 or Thunderbolt port
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    AVCaptureSession support
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-purple-400 text-lg">Linux</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Ubuntu 20.04+ / Debian / CentOS
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Kernel 2.6.35 or later (4.15+ recommended)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    8GB RAM (16GB for 4K)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    USB 3.0 or higher port
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    V4L2 support (x86 / x64 / ARM)
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-4 bg-blue-600/10 border border-blue-500/20 rounded-lg">
              <p className="text-sm text-slate-400 leading-relaxed">
                <strong className="text-blue-300">Note:</strong> For 4K60 capture (4K Plus / 4K Pro models), USB 3.1 Gen 2 (10Gbps) or USB 3.2 Gen 2x2 (20Gbps) ports are recommended for maximum bandwidth. Intel Core i7 or AMD Ryzen 7 processors recommended for 4K workflows.
              </p>
            </div>
          </section>

          {/* Installation Support */}
          <section className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Installation & Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <h3 className="font-bold text-lg mb-3 text-cyan-400">Need Help Installing?</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Our UK-based technical support team can assist with driver installation, firmware updates, troubleshooting, and configuration.
                </p>
                <a href="/support" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm">
                  Visit Support Centre
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                <h3 className="font-bold text-lg mb-3 text-green-400">Knowledge Base</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Step-by-step installation guides, FAQs, troubleshooting articles, and best practices for all Magewell products.
                </p>
                <a href="/knowledge-base" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-sm">
                  Browse Guides
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
