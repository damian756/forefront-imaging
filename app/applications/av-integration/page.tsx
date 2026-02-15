import Image from "next/image";
import Link from "next/link";
import { Monitor, Settings, Video, CheckCircle2, ArrowRight, Wrench } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for AV Integrators & System Installers | StreamTek",
  description: "Versatile capture solutions for AV integrators, system installers, and rental companies. All-In-One devices with multi-format support for unpredictable client needs.",
  keywords: "AV integrator capture, system installation equipment, rental AV equipment, multi-format capture, HDMI VGA capture, professional AV solutions",
  openGraph: { title: "USB Capture for AV Integrators | StreamTek", description: "Versatile multi-format capture for AV professionals and system integrators.", url: "https://www.streamtek.co.uk/applications/av-integration", siteName: "StreamTek", locale: "en_GB", type: "article", images: [{ url: "https://www.streamtek.co.uk/images/applications/av-integration.png", width: 1200, height: 630, alt: "AV Integration Setup" }] },
  twitter: { card: "summary_large_image", title: "USB Capture for AV Integrators | StreamTek", description: "Versatile capture for AV professionals." },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/av-integration" },
};

export default function AVIntegrationPage() {
  const useCases = [
    { title: "Multi-Room AV Installations", description: "Deploy capture devices across conference rooms, training facilities, and event spaces. Universal format support handles any client equipment.", icon: Monitor },
    { title: "Rental & Event Production", description: "Reliable equipment for rental inventory and live events. Robust design withstands frequent transport and demanding field use.", icon: Settings },
    { title: "System Integration Projects", description: "Integrate video capture into complex AV systems. Compatible with control systems, switchers, and professional AV infrastructure.", icon: Wrench },
    { title: "Client-Specific Solutions", description: "All-In-One devices support HDMI, VGA, DVI, SDI, Component, and Composite. One device handles unpredictable client requirements.", icon: Video }
  ];

  const features = [
    { title: "All-In-One Versatility", description: "Single device accepts HDMI, VGA, DVI, SDI, Component, Composite, and S-Video. Eliminates need for multiple dongles.", icon: Settings },
    { title: "Reliable Performance", description: "Professional build quality for permanent installations and rental fleets. Proven reliability reduces service calls.", icon: CheckCircle2 },
    { title: "Easy Client Handoff", description: "Driver-free operation means clients can use systems without IT support. Reduces training and support burden.", icon: Monitor },
    { title: "Scalable Deployments", description: "Volume pricing for integrators and rental companies. Deploy across multiple sites and projects.", icon: Wrench }
  ];

  const recommendedProducts = [
    { name: "USB Capture AIO", slug: "magewell-usb-capture-aio", price: 489, description: "All-In-One device supporting every major video format. Perfect for integrators.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/USB_Capture_AIO_1.png" },
    { name: "USB Capture HDMI Gen 2", slug: "magewell-usb-capture-hdmi-gen-2", price: 289, description: "Cost-effective HDMI capture for standard conference room installations.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png" }
  ];

  const structuredData = { "@context": "https://schema.org", "@type": "Article", "headline": "USB Capture for AV Integrators", "description": "Versatile capture solutions for system integrators and AV professionals.", "image": "https://www.streamtek.co.uk/images/applications/av-integration.png", "author": { "@type": "Organization", "name": "StreamTek" }, "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } }, "datePublished": "2026-02-15" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-600/20 border border-slate-500/30 rounded-lg mb-6">
                  <Monitor className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-semibold text-slate-300 uppercase tracking-wide">AV Integration / Tech</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Versatile Capture for <span className="text-gradient">AV Professionals</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Multi-format capture solutions for system integrators, AV installers, and rental companies. 
                  One device handles any client requirement—HDMI, VGA, DVI, SDI, and legacy formats.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-400 hover:to-gray-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Wrench className="w-5 h-5" />
                    View AV Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Volume Pricing
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>All Formats</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Reliable</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Scalable</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/av-integration.png" alt="AV Integration" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AV Professional Use Cases</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Trusted by integrators for demanding client installations.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-slate-600/20 border border-slate-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-slate-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Integrator-Friendly Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Reliable, versatile, and designed for professional deployment.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-600/20 to-gray-600/20 border border-slate-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-slate-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for AV Integration</h2>
              <p className="text-slate-400 text-lg">Versatile devices for professional AV installations and rental inventory.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-slate-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-slate-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-slate-600/20 to-gray-600/20 border border-slate-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Volume Pricing or Integration Support?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Contact our team for integrator pricing, multi-site deployments, and technical integration assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-slate-500 to-gray-600 hover:from-slate-400 hover:to-gray-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Integration Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Integration Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
