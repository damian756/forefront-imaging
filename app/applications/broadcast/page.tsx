import Image from "next/image";
import Link from "next/link";
import { Radio as RadioIcon, Video, Radio, TrendingUp, CheckCircle2, ArrowRight, Tv, Film } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Radio & Studios | Professional Production Equipment | StreamTek",
  description: "Professional 4K/SDI capture for broadcast studios, TV production, OB vans, and multi-camera workflows. Radio-grade quality for demanding productions.",
  keywords: "broadcast capture card, professional video production, SDI capture, 4K broadcast, TV studio equipment, OB van capture, multi-camera production, broadcast quality",
  openGraph: {
    title: "USB Capture for Radio & Studios | StreamTek",
    description: "Professional broadcast production and TV studio video capture solutions.",
    url: "https://www.streamtek.co.uk/applications/broadcast",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.streamtek.co.uk/images/applications/broadcast-studio.png", width: 1200, height: 630, alt: "Radio Studio Production" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USB Capture for Radio & Studios | StreamTek",
    description: "Professional broadcast and TV studio capture solutions.",
  },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/broadcast" },
};

export default function RadioPage() {
  const useCases = [
    { title: "Live TV Production & Streaming", description: "Professional broadcast workflows for live TV, news production, and streaming platforms. SDI and HDMI inputs with broadcast-grade color accuracy and timing.", icon: Tv },
    { title: "Multi-Camera Studio Recording", description: "Capture multiple ISO feeds for post-production flexibility. Record individual camera sources while simultaneously creating a live mix.", icon: Film },
    { title: "OB Van & Remote Production", description: "Portable, rugged capture solutions for outside broadcast vans and remote production units. Reliable performance in demanding field conditions.", icon: RadioIcon },
    { title: "Sports & Live Events", description: "High-frame-rate 4K60 capture for sports broadcasting, esports tournaments, and live event production. Zero-latency monitoring for real-time switching.", icon: Radio }
  ];

  const features = [
    { title: "Radio-Quality Output", description: "10-bit 4:2:2 color sampling and HDR support. Maintains broadcast standards throughout the capture pipeline.", icon: TrendingUp },
    { title: "SDI & HDMI Pro Support", description: "3G-SDI, 6G-SDI, and 12G-SDI inputs alongside HDMI 2.0. Professional locking connectors prevent accidental disconnection.", icon: Video },
    { title: "Hardware Timing & Genlock", description: "Frame-accurate capture with genlock support for multi-camera synchronization. Essential for professional multi-cam productions.", icon: CheckCircle2 },
    { title: "Low-Latency Monitoring", description: "Hardware loop-through and processing ensure minimal delay. Critical for live switching and on-air monitoring.", icon: Radio }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI 4K Pro", slug: "magewell-usb-capture-hdmi-4k-pro", price: 799, description: "Professional 4K60 HDMI capture with HDR and 10-bit color support.", image: "/images/products/hdmi-4k-pro.png" },
    { name: "USB Capture SDI 4K Pro", slug: "magewell-usb-capture-sdi-4k-pro", price: 899, description: "Radio-grade 12G-SDI capture for professional production environments.", image: "/images/products/usb-capture-sdi-4k-pro.png" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "USB Capture for Radio & Studios",
    "description": "Professional video capture for broadcast studios, TV production, and multi-camera workflows.",
    "image": "https://www.streamtek.co.uk/images/applications/broadcast-studio.png",
    "author": { "@type": "Organization", "name": "StreamTek" },
    "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } },
    "datePublished": "2026-02-15"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-500/30 rounded-lg mb-6">
                  <RadioIcon className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-300 uppercase tracking-wide">Radio / Studio</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Radio-Grade <span className="text-gradient">Production Capture</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Professional 4K/SDI capture for broadcast studios, live TV production, OB vans, and multi-camera workflows. 
                  Trusted by broadcasters worldwide for mission-critical production.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Tv className="w-5 h-5" />
                    View Radio Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Radio Quote
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>4K60 SDI</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>10-bit Color</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Genlock</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/broadcast-studio.png" alt="Radio Studio Production" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Production Applications</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">From studio floors to OB vans—trusted for broadcast excellence.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{useCase.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Radio-Specific Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Professional specifications for demanding broadcast environments.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-red-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Radio</h2>
              <p className="text-slate-400 text-lg">Professional-grade capture for broadcast studios and production facilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-red-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                View All Products<ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-red-600/20 to-rose-600/20 border border-red-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Professional Integration Support?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our broadcast specialists can assist with workflow integration, multi-device setups, and technical specifications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-400 hover:to-rose-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Radio Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Pro Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
