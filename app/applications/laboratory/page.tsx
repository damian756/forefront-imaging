import Image from "next/image";
import Link from "next/link";
import { Microscope, Flask, Video, CheckCircle2, ArrowRight, Activity } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Laboratory & Scientific Research | Microscope Capture | StreamTek",
  description: "Professional video capture for microscopes, scientific research, quality control, and lab documentation. Compatible with legacy VGA/DVI equipment.",
  keywords: "microscope capture, laboratory video capture, scientific imaging, research documentation, quality control imaging, lab equipment capture",
  openGraph: { title: "USB Capture for Laboratory & Scientific | StreamTek", description: "Professional capture for microscopes and scientific research equipment.", url: "https://www.streamtek.co.uk/applications/laboratory", siteName: "StreamTek", locale: "en_GB", type: "article", images: [{ url: "https://www.streamtek.co.uk/images/applications/laboratory-scientific.png", width: 1200, height: 630, alt: "Laboratory Microscope Capture" }] },
  twitter: { card: "summary_large_image", title: "USB Capture for Laboratory & Scientific | StreamTek", description: "Professional microscope and lab equipment capture." },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/laboratory" },
};

export default function LaboratoryPage() {
  const useCases = [
    { title: "Microscope Image Capture", description: "Capture from optical microscopes, electron microscopes, and digital imaging systems. High-resolution capture preserves fine detail for analysis.", icon: Microscope },
    { title: "Quality Control & Inspection", description: "Document manufacturing defects, quality assurance processes, and inspection results. Create visual records for compliance and analysis.", icon: Flask },
    { title: "Research Documentation", description: "Record experiments, lab procedures, and research findings. Share discoveries with colleagues and create training materials.", icon: Video },
    { title: "Legacy Equipment Integration", description: "Connect older microscopes and lab equipment with VGA or DVI outputs. Extend the life of valuable scientific instruments.", icon: Activity }
  ];

  const features = [
    { title: "High-Resolution Capture", description: "4K capture maintains fine scientific detail. Perfect for microscopy, imaging systems, and precision measurement equipment.", icon: Microscope },
    { title: "Legacy Format Support", description: "VGA, DVI, and HDMI inputs handle modern and legacy lab equipment. All-In-One devices accept every format.", icon: CheckCircle2 },
    { title: "Continuous Operation", description: "Reliable 24/7 operation for long experiments and time-lapse imaging. Industrial-grade components for lab environments.", icon: Activity },
    { title: "Frame-Accurate Recording", description: "Precise timing for scientific applications. Capture exact sequences for analysis and documentation.", icon: Video }
  ];

  const recommendedProducts = [
    { name: "USB Capture AIO", slug: "magewell-usb-capture-aio", price: 489, description: "All-In-One device supporting VGA, DVI, HDMI for diverse lab equipment.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/USB_Capture_AIO_1.png" },
    { name: "USB Capture HDMI 4K Plus", slug: "magewell-usb-capture-hdmi-4k-plus", price: 549, description: "High-resolution 4K capture for advanced microscopy and imaging systems.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/HDMI-4K-Plus.png" }
  ];

  const structuredData = { "@context": "https://schema.org", "@type": "Article", "headline": "USB Capture for Laboratory & Scientific", "description": "Professional video capture for microscopes, research, and scientific imaging.", "image": "https://www.streamtek.co.uk/images/applications/laboratory-scientific.png", "author": { "@type": "Organization", "name": "StreamTek" }, "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } }, "datePublished": "2026-02-15" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        <section className="relative pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-lg mb-6">
                  <Microscope className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-semibold text-indigo-300 uppercase tracking-wide">Laboratory / Scientific</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Professional Capture for <span className="text-gradient">Scientific Research</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  High-resolution video capture for microscopes, lab equipment, and scientific imaging systems. 
                  Support for legacy VGA/DVI equipment and modern 4K microscopy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Flask className="w-5 h-5" />
                    View Lab Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Research Quote
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>4K Capture</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>VGA/DVI</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>24/7 Operation</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/laboratory-scientific.png" alt="Laboratory Microscope Capture" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Scientific Applications</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Trusted in research labs and industrial facilities worldwide.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-indigo-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Scientific-Grade Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Precision and reliability for research environments.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-indigo-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Laboratory Use</h2>
              <p className="text-slate-400 text-lg">Capture devices designed for scientific and research applications.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-indigo-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-indigo-600/20 to-blue-600/20 border border-indigo-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Scientific Integration Support?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our team can assist with lab equipment integration and scientific application requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Research Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Lab Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
