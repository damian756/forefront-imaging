import Image from "next/image";
import Link from "next/link";
import { Camera, Image as ImageIcon, Video, CheckCircle2, ArrowRight, Monitor } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Photography Studios | Camera Tethering & Client Preview | StreamTek",
  description: "Professional video capture for photography studios. Camera tethering, client preview displays, product photography, and studio workflow optimization.",
  keywords: "photography studio equipment, camera tethering, client preview display, product photography tools, studio workflow, HDMI camera capture",
  openGraph: { title: "USB Capture for Photography Studios | StreamTek", description: "Professional camera tethering and client preview for photography studios.", url: "https://www.streamtek.co.uk/applications/photography", siteName: "StreamTek", locale: "en_GB", type: "article", images: [{ url: "https://www.streamtek.co.uk/images/applications/photography-studio.png", width: 1200, height: 630, alt: "Photography Studio Setup" }] },
  twitter: { card: "summary_large_image", title: "USB Capture for Photography Studios | StreamTek", description: "Professional camera capture and client preview solutions." },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/photography" },
};

export default function PhotographyPage() {
  const useCases = [
    { title: "Client Preview Displays", description: "Show live camera feed to clients on large displays. Let them see poses, composition, and results in real-time for better collaboration.", icon: Monitor },
    { title: "Camera Tethering Workflows", description: "Capture HDMI output from DSLRs and mirrorless cameras for instant review. Stream to multiple displays or recording software simultaneously.", icon: Camera },
    { title: "Product Photography", description: "Capture product shots with instant preview and review. Perfect for e-commerce studios and catalog photography with high-volume workflows.", icon: ImageIcon },
    { title: "Studio Recording & Tutorials", description: "Record behind-the-scenes content, photography tutorials, and educational materials. Share your studio process with students and followers.", icon: Video }
  ];

  const features = [
    { title: "High-Quality Image Preview", description: "4K capture maintains fine detail from high-resolution cameras. See every element of your composition in crystal clarity.", icon: ImageIcon },
    { title: "Zero-Latency Display", description: "HDMI loop-through provides instant preview to monitors. No lag between camera and display for natural posing and direction.", icon: Monitor },
    { title: "Multi-Display Support", description: "Send camera feed to multiple screens—photographer's monitor, client display, and capture software simultaneously.", icon: CheckCircle2 },
    { title: "Professional Connectivity", description: "Works with Canon, Nikon, Sony, Fujifilm, and all major camera brands with HDMI output. Universal compatibility.", icon: Camera }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI Gen 2", slug: "magewell-usb-capture-hdmi-gen-2", price: 289, description: "Perfect for standard studio setups with 1080p camera tethering.", image: "/images/products/hdmi-gen2.png" },
    { name: "USB Capture HDMI 4K Plus", slug: "magewell-usb-capture-hdmi-4k-plus", price: 549, description: "Premium 4K capture for high-end studios with advanced mirrorless cameras.", image: "/images/products/hdmi-4k-plus.png" }
  ];

  const structuredData = { "@context": "https://schema.org", "@type": "Article", "headline": "USB Capture for Photography Studios", "description": "Professional camera tethering and client preview for photography studios.", "image": "https://www.streamtek.co.uk/images/applications/photography-studio.png", "author": { "@type": "Organization", "name": "StreamTek" }, "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } }, "datePublished": "2026-02-15" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-lg mb-6">
                  <Camera className="w-4 h-4 text-pink-400" />
                  <span className="text-sm font-semibold text-pink-300 uppercase tracking-wide">Photography Studio</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Elevate Your Studio with <span className="text-gradient">Live Preview</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Professional camera tethering and client preview displays for photography studios. 
                  Show your work in real-time, enhance collaboration, and streamline your workflow.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <ImageIcon className="w-5 h-5" />
                    View Studio Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Get Expert Advice
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>4K Preview</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Zero Lag</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>All Cameras</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/photography-studio.png" alt="Photography Studio Setup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Studio Applications</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Transform your photography workflow with professional capture.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-pink-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Studio Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">High-quality preview and seamless workflow integration.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600/20 to-rose-600/20 border border-pink-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-pink-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Photography Studios</h2>
              <p className="text-slate-400 text-lg">Capture devices trusted by professional photographers worldwide.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-pink-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-pink-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-pink-600/20 to-rose-600/20 border border-pink-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Studio Workflow?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our team can help you configure the perfect setup for camera tethering and client preview displays.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Studio Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Studio Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
