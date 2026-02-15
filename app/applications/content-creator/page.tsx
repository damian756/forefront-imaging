import Image from "next/image";
import Link from "next/link";
import { Video, Play, Zap, HardDrive, Wifi, CheckCircle2, ArrowRight, TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Content Creators & Streamers | Professional Streaming Equipment | StreamTek",
  description: "Professional HDMI and SDI capture devices for YouTubers, Twitch streamers, and content creators. Multi-camera workflows, zero-lag passthrough, OBS/Streamlabs ready. Free UK shipping & 3-year warranty.",
  keywords: "streaming capture card, content creator equipment, YouTube capture, Twitch streaming setup, multi-camera streaming, HDMI capture for streaming, OBS capture card, professional streaming gear",
  openGraph: {
    title: "USB Capture for Content Creators & Streamers | StreamTek",
    description: "Professional-grade HDMI capture for YouTubers and Twitch streamers. Multi-camera workflows, zero latency, OBS ready.",
    url: "https://www.streamtek.co.uk/applications/content-creator",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "https://www.streamtek.co.uk/images/applications/content-creator.png",
        width: 1200,
        height: 630,
        alt: "Content Creator Streaming Setup with Magewell USB Capture"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "USB Capture for Content Creators & Streamers | StreamTek",
    description: "Professional HDMI capture for multi-camera streaming, gameplay capture, and content production.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/applications/content-creator",
  },
};

export default function ContentCreatorPage() {
  const useCases = [
    {
      title: "Multi-Camera Live Streaming",
      description: "Capture multiple camera angles simultaneously for professional YouTube and Twitch productions. Switch between DSLR, webcam, and screen capture seamlessly in OBS or vMix.",
      icon: Video
    },
    {
      title: "Gameplay Capture & Commentary",
      description: "Record PS5, Xbox, Switch, or PC gameplay with face cam overlay. Zero-lag passthrough ensures no input delay while capturing at 1080p60 or 4K60.",
      icon: Gamepad2
    },
    {
      title: "Interview & Podcast Recording",
      description: "Capture guest feeds from remote interviews, Skype calls, or in-studio cameras. Perfect for podcast video recordings and collaborative content.",
      icon: Mic
    },
    {
      title: "Product Review Videos",
      description: "Demonstrate tech products, software, or devices with direct HDMI capture. Show exactly what's on screen without quality loss or screen recording lag.",
      icon: Package
    }
  ];

  const features = [
    {
      title: "Zero-Latency Passthrough",
      description: "HDMI loop-through output lets you monitor your camera or game on a separate display with absolutely no delay—critical for live streaming and gaming.",
      icon: Zap
    },
    {
      title: "Multi-Device Compatibility",
      description: "Works instantly with OBS Studio, Streamlabs OBS, vMix, XSplit, Wirecast, and every major streaming/recording platform. No driver installation needed.",
      icon: HardDrive
    },
    {
      title: "Hardware Encoding",
      description: "Built-in FPGA processing offloads video encoding from your CPU, ensuring smooth streaming even on mid-range systems. Your PC stays free for gaming and effects.",
      icon: Cpu
    },
    {
      title: "4K60 Downscaling",
      description: "Capture 4K sources and downscale to 1080p60 in hardware for optimal streaming quality. Maintain broadcast-grade image quality without performance hits.",
      icon: TrendingUp
    }
  ];

  const recommendedProducts = [
    {
      name: "USB Capture HDMI Gen 2",
      slug: "magewell-usb-capture-hdmi-gen-2",
      price: 289,
      description: "Perfect for single-camera streamers. 1080p60 capture with loop-through and OBS compatibility.",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png"
    },
    {
      name: "USB Capture HDMI 4K Plus",
      slug: "magewell-usb-capture-hdmi-4k-plus",
      price: 549,
      description: "Professional 4K60 HDR capture for high-end content creators and multi-camera setups.",
      image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/HDMI-4K-Plus.png"
    }
  ];

  const setupSteps = [
    {
      step: "1",
      title: "Connect Your Camera or Console",
      description: "Plug your DSLR, mirrorless camera, or gaming console into the capture device via HDMI. Use the loop-through port for a monitor if needed."
    },
    {
      step: "2",
      title: "Connect to Your Computer",
      description: "Attach the USB 3.0 cable from the capture device to your PC or Mac. The device is instantly recognized—no drivers or software installation required."
    },
    {
      step: "3",
      title: "Open Your Streaming Software",
      description: "Launch OBS, Streamlabs, vMix, or any capture software. Add the Magewell device as a video source and start streaming or recording immediately."
    },
    {
      step: "4",
      title: "Go Live",
      description: "Start your stream to YouTube, Twitch, Facebook, or record locally. Enjoy zero-lag performance and broadcast-quality video capture."
    }
  ];

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "USB Capture for Content Creators & Streamers",
    "description": "Professional HDMI and SDI capture devices for YouTubers, Twitch streamers, and content creators.",
    "image": "https://www.streamtek.co.uk/images/applications/content-creator.png",
    "author": {
      "@type": "Organization",
      "name": "StreamTek"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StreamTek",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.streamtek.co.uk/logo.png"
      }
    },
    "datePublished": "2026-02-15",
    "dateModified": "2026-02-15"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-lg mb-6">
                  <Video className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-semibold text-purple-300 uppercase tracking-wide">Content Creator / Streamer</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Professional Capture for <span className="text-gradient">Creators & Streamers</span>
                </h1>
                
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Elevate your YouTube, Twitch, or content production with professional-grade HDMI capture. 
                  Multi-camera workflows, zero-latency passthrough, and plug-and-play OBS compatibility.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="#products"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg transition-all"
                  >
                    <Play className="w-5 h-5" />
                    Shop Capture Devices
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
                  >
                    Get Expert Advice
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>OBS/vMix Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Zero Latency</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    <span>Driver-Free</span>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/applications/content-creator.png"
                  alt="Content Creator Streaming Setup"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Use Cases for Creators</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                From live streaming to gameplay capture, professional USB capture devices unlock endless creative possibilities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Creators Choose Magewell</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Professional features that make the difference between amateur and broadcast-quality content.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-slate-900/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Getting Started is Simple</h2>
              <p className="text-slate-400 text-lg">
                From unboxing to going live in under 5 minutes—no technical expertise required.
              </p>
            </div>

            <div className="space-y-8">
              {setupSteps.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-2xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Products */}
        <section id="products" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Content Creators</h2>
              <p className="text-slate-400 text-lg">
                Handpicked capture devices perfect for streaming, recording, and content production.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group"
                >
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-8 group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-cyan-400 font-semibold">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
              >
                View All Capture Devices
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Level Up Your Content?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Get expert advice on choosing the right capture solution for your streaming or content creation workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/knowledge-base"
                  className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all"
                >
                  Browse Guides
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Missing imports that were referenced but not included
import { Gamepad2, Mic, Package, Cpu } from "lucide-react";
