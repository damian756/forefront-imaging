import Image from "next/image";
import Link from "next/link";
import { Gamepad2, Trophy, Video, Zap, CheckCircle2, ArrowRight, Tv } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Gaming & Consoles | 4K60 HDR Gameplay Recording | StreamTek",
  description: "High-performance gameplay capture for PS5, Xbox Series X, Nintendo Switch, and PC. 4K60 HDR with zero input lag. Perfect for streamers and content creators.",
  keywords: "gaming capture card, PS5 capture, Xbox capture, 4K60 gameplay recording, HDR capture, zero lag passthrough, Twitch streaming, YouTube gaming",
  openGraph: {
    title: "USB Capture for Gaming & Consoles | StreamTek",
    description: "High-performance 4K60 HDR gameplay capture with zero input lag.",
    url: "https://www.streamtek.co.uk/applications/gaming",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.streamtek.co.uk/images/applications/gaming-new.png", width: 1200, height: 630, alt: "Gaming Capture Setup" }]
  },
  twitter: { card: "summary_large_image", title: "USB Capture for Gaming & Consoles | StreamTek", description: "Professional 4K60 HDR gameplay capture with zero lag." },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/gaming" },
};

export default function GamingPage() {
  const useCases = [
    { title: "Console Gameplay Recording", description: "Capture PS5, Xbox Series X, and Nintendo Switch gameplay at 4K60 with HDR. Zero-latency passthrough ensures competitive gaming performance.", icon: Gamepad2 },
    { title: "Streaming & Content Creation", description: "Record gameplay highlights, create tutorials, and stream live to Twitch or YouTube. Compatible with OBS, Streamlabs, and XSplit.", icon: Video },
    { title: "Esports & Competitive Gaming", description: "Tournament-grade capture with absolutely no input delay. Professional quality for competitive players and esports organizations.", icon: Trophy },
    { title: "Retro & Classic Gaming", description: "Capture from older consoles and systems. Compatible with HDMI, Component, and legacy connections via adapters.", icon: Tv }
  ];

  const features = [
    { title: "True Zero Input Lag", description: "Hardware passthrough delivers your gameplay to the monitor with zero added latency. No compromise on competitive performance.", icon: Zap },
    { title: "4K60 HDR Capture", description: "Record next-gen console graphics at full 4K 60fps with HDR color. Maintain every visual detail for stunning content.", icon: Video },
    { title: "VRR & High Refresh Support", description: "Compatible with Variable Refresh Rate and high refresh rate displays. Capture doesn't interfere with smooth gaming.", icon: CheckCircle2 },
    { title: "Instant Replay Recording", description: "Buffer recent gameplay for instant highlight capture. Never miss an epic moment or clutch play.", icon: Trophy }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI Gen 2", slug: "magewell-usb-capture-hdmi-gen-2", price: 289, description: "Perfect for 1080p60 gaming capture with zero-lag passthrough.", image: "/images/products/hdmi-gen2.png" },
    { name: "USB Capture HDMI 4K Plus", slug: "magewell-usb-capture-hdmi-4k-plus", price: 549, description: "Premium 4K60 HDR capture for next-gen consoles and high-end PC gaming.", image: "/images/products/hdmi-4k-plus.png" }
  ];

  const structuredData = { "@context": "https://schema.org", "@type": "Article", "headline": "USB Capture for Gaming & Consoles", "description": "Professional gameplay capture for PS5, Xbox, Switch, and PC gaming.", "image": "https://www.streamtek.co.uk/images/applications/gaming-new.png", "author": { "@type": "Organization", "name": "StreamTek" }, "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } }, "datePublished": "2026-02-15" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600/20 border border-violet-500/30 rounded-lg mb-6">
                  <Gamepad2 className="w-4 h-4 text-violet-400" />
                  <span className="text-sm font-semibold text-violet-300 uppercase tracking-wide">Gaming / Console</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Capture Epic Moments with <span className="text-gradient">Zero Lag</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Professional 4K60 HDR gameplay capture for PS5, Xbox Series X, Nintendo Switch, and PC. 
                  Zero input latency ensures competitive performance while recording your best plays.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Trophy className="w-5 h-5" />
                    Shop Gaming Capture
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Get Expert Advice
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Zero Lag</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>4K60 HDR</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>All Consoles</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/gaming-new.png" alt="Gaming Capture Setup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gaming Use Cases</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">From casual streaming to esports—professional capture for gamers.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-violet-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gaming-Specific Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Performance and quality—no compromises for serious gamers.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-600/20 border border-violet-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-violet-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Gaming</h2>
              <p className="text-slate-400 text-lg">Capture devices built for competitive gaming and content creation.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-violet-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-violet-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-violet-600/20 to-purple-600/20 border border-violet-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Level Up Your Gaming Content</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Need help choosing the right capture card for your gaming setup? Our team can assist with setup and configuration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Gaming Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Gaming Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
