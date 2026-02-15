import Image from "next/image";
import Link from "next/link";
import { Stethoscope, Heart, Video, Shield, CheckCircle2, ArrowRight, Hospital, Activity } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Medical & Healthcare | Surgical Recording Solutions | StreamTek",
  description: "Professional video capture for surgery recording, telemedicine, medical imaging, and healthcare training. HIPAA-compliant solutions for hospitals and clinics.",
  keywords: "surgical recording, telemedicine video capture, medical imaging capture, healthcare video solutions, surgery video recording, clinical documentation, medical training equipment",
  openGraph: {
    title: "USB Capture for Medical & Healthcare | StreamTek",
    description: "Professional surgical recording and telemedicine video capture for healthcare.",
    url: "https://www.streamtek.co.uk/applications/medical",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.streamtek.co.uk/images/applications/education-classroom.png", width: 1200, height: 630, alt: "Medical Surgical Recording" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USB Capture for Medical & Healthcare | StreamTek",
    description: "Professional surgical recording and telemedicine solutions.",
  },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/medical" },
};

export default function MedicalPage() {
  const useCases = [
    { title: "Surgical Recording & Documentation", description: "Capture surgical procedures for patient records, quality assurance, and legal documentation. Loop-through ensures uninterrupted clinical displays during procedures.", icon: Heart },
    { title: "Telemedicine & Remote Consultations", description: "Enable high-quality video consultations with remote specialists and patients. Capture medical imaging, endoscopy, and examination cameras for real-time collaboration.", icon: Video },
    { title: "Medical Training & Education", description: "Record surgical procedures, demonstrations, and clinical skills for medical student training, residency programs, and continuing medical education.", icon: Hospital },
    { title: "Clinical Imaging Capture", description: "Capture from ultrasound machines, endoscopes, arthroscopes, microscopes, and other medical imaging devices for documentation and analysis.", icon: Activity }
  ];

  const features = [
    { title: "Mission-Critical Reliability", description: "Proven in operating rooms worldwide. Hardware-based processing ensures stable, uninterrupted capture during critical procedures.", icon: Shield },
    { title: "Loop-Through for Clinical Displays", description: "HDMI passthrough maintains uninterrupted display to surgical monitors—capture recording never affects the primary clinical workflow.", icon: Activity },
    { title: "High-Resolution Capture", description: "4K60 HDR capture preserves fine surgical detail and medical imaging quality. Perfect for endoscopy, microscopy, and advanced imaging systems.", icon: Video },
    { title: "HIPAA-Compliant Recording", description: "Secure local capture with no cloud dependency. Maintain full control over sensitive patient data and comply with healthcare regulations.", icon: Stethoscope }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI 4K Plus", slug: "magewell-usb-capture-hdmi-4k-plus", price: 549, description: "High-resolution 4K60 capture for surgical suites and medical imaging.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/HDMI-4K-Plus.png" },
    { name: "USB Capture SDI 4K Pro", slug: "magewell-usb-capture-sdi-4k-pro", price: 899, description: "Professional SDI capture for broadcast-grade medical equipment integration.", image: "/images/products/usb-capture-sdi-4k-pro.png" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "USB Capture for Medical & Healthcare",
    "description": "Professional video capture for surgical recording, telemedicine, and medical imaging.",
    "image": "https://www.streamtek.co.uk/images/applications/education-classroom.png",
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-lg mb-6">
                  <Stethoscope className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold text-cyan-300 uppercase tracking-wide">Medical / Healthcare</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Clinical-Grade <span className="text-gradient">Video Capture</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Surgical recording, telemedicine, and medical imaging capture for hospitals, clinics, and healthcare facilities. 
                  Mission-critical reliability with loop-through for uninterrupted clinical workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Hospital className="w-5 h-5" />
                    View Medical Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Clinical Quote
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>OR-Proven</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Loop-Through</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>4K Capture</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/education-classroom.png" alt="Medical Surgical Recording" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Applications</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Trusted by hospitals and clinics worldwide for critical medical video capture.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-cyan-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical-Grade Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Built for the demanding requirements of healthcare environments.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-cyan-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Healthcare</h2>
              <p className="text-slate-400 text-lg">Clinical-grade capture devices for surgical suites and medical facilities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-cyan-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-cyan-600/20 to-teal-600/20 border border-cyan-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Clinical Integration Support?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our team can assist with healthcare-specific requirements, HIPAA compliance guidance, and clinical workflow integration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-400 hover:to-teal-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Healthcare Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Medical Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
