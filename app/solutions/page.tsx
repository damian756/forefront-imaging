import Link from "next/link";
import { CheckCircle2, Video, Radio, MonitorPlay, Building2, GraduationCap, Tv, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Use Cases - StreamTek",
  description: "Discover how StreamTek USB Capture devices work for streaming, content creation, video calls, and professional video production.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Tv,
      title: "Broadcast & Live Production",
      description: "Professional-grade capture cards and encoders for live broadcast, studio production, and multi-camera workflows.",
      features: [
        "4K/60fps capture support",
        "SDI and HDMI inputs",
        "Low-latency encoding",
        "Genlock synchronization"
      ],
      color: "blue"
    },
    {
      icon: GraduationCap,
      title: "Education & Training",
      description: "Reliable video capture solutions for lecture recording, distance learning, and training content creation.",
      features: [
        "USB plug-and-play simplicity",
        "Compatible with all major platforms",
        "Multi-source capture",
        "Cost-effective scalability"
      ],
      color: "green"
    },
    {
      icon: Building2,
      title: "Corporate & Enterprise",
      description: "Enterprise video solutions for conferencing, presentations, digital signage, and corporate communications.",
      features: [
        "IT-friendly deployment",
        "Windows/Mac/Linux support",
        "API and SDK integration",
        "Centralized management"
      ],
      color: "purple"
    },
    {
      icon: Video,
      title: "Content Creation",
      description: "High-quality capture for streamers, YouTubers, and content creators requiring professional output.",
      features: [
        "Zero-latency passthrough",
        "RGB color accuracy",
        "Multi-platform streaming",
        "4:4:4 chroma sampling"
      ],
      color: "orange"
    },
    {
      icon: Radio,
      title: "Live Streaming",
      description: "Purpose-built encoders and capture devices for professional live streaming and OTT delivery.",
      features: [
        "NDI®|HX encoding",
        "RTMP/RTSP/SRT protocols",
        "Multi-bitrate streaming",
        "Hardware-accelerated encoding"
      ],
      color: "red"
    },
    {
      icon: MonitorPlay,
      title: "Medical & Healthcare",
      description: "Medical-grade video capture for surgical recording, telemedicine, and clinical documentation.",
      features: [
        "DICOM compatibility",
        "High-resolution capture",
        "Secure data handling",
        "Regulatory compliance support"
      ],
      color: "cyan"
    }
  ];

  const colorClasses = {
    blue: {
      icon: "bg-blue-600/10 text-blue-500 border-blue-500/20",
      gradient: "from-blue-600/10 to-blue-600/5"
    },
    green: {
      icon: "bg-green-600/10 text-green-500 border-green-500/20",
      gradient: "from-green-600/10 to-green-600/5"
    },
    purple: {
      icon: "bg-purple-600/10 text-purple-500 border-purple-500/20",
      gradient: "from-purple-600/10 to-purple-600/5"
    },
    orange: {
      icon: "bg-orange-600/10 text-orange-500 border-orange-500/20",
      gradient: "from-orange-600/10 to-orange-600/5"
    },
    red: {
      icon: "bg-red-600/10 text-red-500 border-red-500/20",
      gradient: "from-red-600/10 to-red-600/5"
    },
    cyan: {
      icon: "bg-cyan-600/10 text-cyan-500 border-cyan-500/20",
      gradient: "from-cyan-600/10 to-cyan-600/5"
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
              Perfect For Any Use
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              USB Capture devices work brilliantly for streaming, content creation, video calls, 
              education, and professional production. See how they can work for you.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              const colors = colorClasses[solution.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={solution.title}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-xl ${colors.icon} border flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 text-center">
            <Shield className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our team works with resellers and integrators to design tailored video capture 
              and streaming solutions for specific industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all"
              >
                Contact Our Team
              </Link>
              <Link 
                href="/products"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
