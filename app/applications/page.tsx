import Link from "next/link";
import Image from "next/image";
import { Video, Briefcase, GraduationCap, Stethoscope, Church, Radio, Gamepad2, Monitor, Microscope, Camera, ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Video Capture Applications | StreamTek UK",
  description: "Discover how Magewell USB capture devices transform workflows across content creation, corporate, education, medical, broadcast, and more. Industry-specific solutions for every professional application.",
  keywords: "video capture applications, professional streaming solutions, HDMI capture uses, content creation tools, corporate video, educational technology, medical imaging capture, broadcast equipment",
  openGraph: {
    title: "Professional Video Capture Applications | StreamTek UK",
    description: "Industry-specific video capture solutions for content creators, corporates, educators, medical professionals, churches, broadcasters, and more.",
    url: "https://www.streamtek.co.uk/applications",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Video Capture Applications | StreamTek UK",
    description: "Industry-specific video capture solutions for 10+ professional sectors.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/applications",
  },
};

export default function ApplicationsPage() {
  const applications = [
    {
      icon: Video,
      title: "Content Creator / Streamer",
      slug: "content-creator",
      description: "Professional-grade HDMI capture for YouTubers, Twitch streamers, and content producers. Capture cameras, consoles, and gameplay with zero latency.",
      image: "/images/applications/av-integration.png",
      color: "from-purple-600 to-pink-600",
      features: ["Multi-Camera Workflows", "Zero-Lag Passthrough", "OBS/Streamlabs Ready"]
    },
    {
      icon: Briefcase,
      title: "Corporate / Business",
      slug: "corporate",
      description: "Seamless video conferencing, presentation recording, and training content production for enterprise environments and remote teams.",
      image: "/images/applications/corporate-business.png",
      color: "from-blue-600 to-cyan-600",
      features: ["Teams/Zoom Compatible", "Driver-Free Deployment", "Multi-Room Setup"]
    },
    {
      icon: GraduationCap,
      title: "Education / Classroom",
      slug: "education",
      description: "Lecture capture, distance learning, and online course creation for universities, schools, and e-learning platforms.",
      image: "/images/applications/education-classroom.png",
      color: "from-green-600 to-emerald-600",
      features: ["Lecture Recording", "Document Cameras", "Hybrid Classrooms"]
    },
    {
      icon: Stethoscope,
      title: "Medical / Healthcare",
      slug: "medical",
      description: "Surgical recording, telemedicine, medical imaging capture, and training documentation for hospitals and clinics.",
      image: "/images/applications/education-classroom.png",
      color: "from-cyan-600 to-teal-600",
      features: ["Surgical Recording", "Telemedicine", "Medical Imaging"]
    },
    {
      icon: Church,
      title: "Church / Worship",
      slug: "church",
      description: "Live streaming church services, worship events, and conferences to YouTube, Facebook, and streaming platforms.",
      image: "/images/applications/medical-healthcare.png",
      color: "from-amber-600 to-orange-600",
      features: ["Multi-Camera Production", "Facebook/YouTube Live", "Volunteer-Friendly"]
    },
    {
      icon: Radio,
      title: "Radio / Studio",
      slug: "broadcast",
      description: "Professional broadcast production, live TV, OB vans, and multi-camera studio workflows with SDI and HDMI inputs.",
      image: "/images/applications/broadcast-studio.png",
      color: "from-red-600 to-rose-600",
      features: ["4K60 Capture", "SDI Support", "Radio Quality"]
    },
    {
      icon: Gamepad2,
      title: "Gaming / Console",
      slug: "gaming",
      description: "High-performance gameplay capture for PS5, Xbox Series X, Nintendo Switch, and PC gaming with 4K60 HDR support.",
      image: "/images/applications/gaming-streamer-1.png",
      color: "from-violet-600 to-purple-600",
      features: ["4K60 HDR", "Zero Input Lag", "Console Compatible"]
    },
    {
      icon: Monitor,
      title: "AV Integration / Tech",
      slug: "av-integration",
      description: "Versatile capture solutions for AV integrators, system installers, and rental companies with multi-format support.",
      image: "/images/applications/av-integration.png",
      color: "from-slate-600 to-gray-600",
      features: ["All-In-One Devices", "Long Cable Runs", "Reliable Performance"]
    },
    {
      icon: Microscope,
      title: "Laboratory / Scientific",
      slug: "laboratory",
      description: "Microscope capture, research documentation, quality control imaging, and scientific analysis workflows.",
      image: "/images/applications/laboratory-scientific.png",
      color: "from-indigo-600 to-blue-600",
      features: ["Microscope Capture", "Legacy VGA/DVI", "Continuous Operation"]
    },
    {
      icon: Camera,
      title: "Photography Studio",
      slug: "photography",
      description: "Camera tethering, client preview displays, product photography, and studio workflow optimization.",
      image: "/images/applications/photography-studio.png",
      color: "from-pink-600 to-rose-600",
      features: ["Client Preview", "Camera Tethering", "High-Quality Capture"]
    }
  ];

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Professional Video Capture Applications",
    "description": "Industry-specific video capture solutions for content creators, corporates, educators, medical professionals, churches, broadcasters, and more.",
    "url": "https://www.streamtek.co.uk/applications",
    "publisher": {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
              One Device.<br />Every Industry.
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-6">
              Professional USB video capture solutions tailored for your industry. 
              From streaming to surgery, one versatile device handles it all.
            </p>
            <p className="text-sm text-slate-400 max-w-2xl mx-auto">
              Explore how Magewell capture devices transform workflows across 10+ professional sectors with plug-and-play simplicity and broadcast-grade quality.
            </p>
          </div>

          {/* Applications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <Link
                  key={app.slug}
                  href={`/applications/${app.slug}`}
                  className="group relative bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={`${app.title} video capture application`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-60 group-hover:opacity-70 transition-opacity`} />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                      {app.title}
                    </h2>
                    <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                      {app.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-3xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Choosing the Right Solution?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our UK-based experts can help you select the perfect capture device for your specific application and workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
