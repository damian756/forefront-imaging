import { Download, HardDrive, FileText, Package, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Downloads - StreamTek",
  description: "Download drivers, firmware, software utilities, and documentation for Magewell products.",
};

export default function DownloadsPage() {
  const downloadCategories = [
    {
      icon: HardDrive,
      title: "Drivers & Firmware",
      description: "Latest drivers for Windows, macOS, and Linux. Firmware updates for all products.",
      items: [
        { name: "Windows Driver Package", version: "v3.3.1.4313", size: "124 MB", date: "2026-01-15" },
        { name: "macOS Driver Package", version: "v3.3.1.4313", size: "98 MB", date: "2026-01-15" },
        { name: "Linux Driver Package", version: "v3.3.1.4313", size: "45 MB", date: "2026-01-15" },
        { name: "Firmware Update Tool", version: "v2.1.0", size: "12 MB", date: "2025-12-10" }
      ],
      color: "blue"
    },
    {
      icon: Package,
      title: "Software Utilities",
      description: "Capture utilities, control panel applications, and configuration tools.",
      items: [
        { name: "USB Capture Utility", version: "v1.2.0", size: "34 MB", date: "2026-01-20" },
        { name: "Pro Capture Control Panel", version: "v4.5.2", size: "67 MB", date: "2025-12-15" },
        { name: "Magewell Bridge", version: "v2.0.1", size: "89 MB", date: "2025-11-30" },
        { name: "Capture Express", version: "v3.1.0", size: "52 MB", date: "2025-11-15" }
      ],
      color: "green"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "User manuals, quick start guides, and technical specifications.",
      items: [
        { name: "USB Capture Series Manual", version: "v3.0", size: "8 MB", date: "2026-01-01" },
        { name: "Pro Capture Series Manual", version: "v3.0", size: "12 MB", date: "2026-01-01" },
        { name: "Ultra Encode Series Manual", version: "v2.5", size: "10 MB", date: "2025-12-01" },
        { name: "SDK Documentation", version: "v3.0", size: "15 MB", date: "2025-11-20" }
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Downloads
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Get the latest drivers, software utilities, and documentation for all Magewell products. 
              Compatible with Windows, macOS, and Linux.
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-6 mb-12 flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-blue-300">Important Information</h3>
              <ul className="text-slate-300 space-y-1 text-sm">
                <li>• Always download the latest drivers for optimal performance and compatibility</li>
                <li>• Ensure you select the correct driver package for your operating system</li>
                <li>• Registered resellers can access SDK and advanced tools through the partner portal</li>
                <li>• For installation support, visit our <a href="/support" className="text-blue-400 hover:text-blue-300">Support</a> page or <a href="/tutorials" className="text-blue-400 hover:text-blue-300">Video Tutorials</a></li>
              </ul>
            </div>
          </div>

          {/* Download Categories */}
          <div className="space-y-12">
            {downloadCategories.map((category) => {
              const Icon = category.icon;
              const colors = colorClasses[category.color as keyof typeof colorClasses];
              
              return (
                <div key={category.title} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-xl ${colors.icon} border flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                      <p className="text-slate-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div 
                        key={item.name}
                        className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-slate-600 transition-all group"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                              {item.name}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                              <span>Version {item.version}</span>
                              <span>•</span>
                              <span>{item.size}</span>
                              <span>•</span>
                              <span>Updated {item.date}</span>
                            </div>
                          </div>
                          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40">
                            <Download className="w-5 h-5" />
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* SDK Access */}
          <div className="mt-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-3xl p-12 text-center">
            <Package className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need SDK Access?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Registered resellers and integrators can access our comprehensive SDK, 
              developer tools, and API documentation through the partner portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/resellers"
                className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg shadow-purple-500/30 transition-all"
              >
                Become a Reseller
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Contact for Access
              </a>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-blue-400">Windows</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Windows 10/11 (64-bit)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Intel Core i5 or better
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    8GB RAM minimum
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    USB 3.0 port (for USB capture)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-green-400">macOS</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    macOS 10.15 or later
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Intel or Apple Silicon
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    8GB RAM minimum
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    USB 3.0 port (for USB capture)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-purple-400">Linux</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Ubuntu 20.04 LTS or later
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Kernel 4.15 or later
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    8GB RAM minimum
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    USB 3.0 port (for USB capture)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
