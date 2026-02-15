import Image from "next/image";
import Link from "next/link";
import { Briefcase, Users, Video, Presentation, CheckCircle2, ArrowRight, Building2, Globe, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Corporate & Business | Video Conferencing Solutions | StreamTek",
  description: "Professional HDMI capture for corporate video conferencing, training, presentations, and enterprise communications. Teams/Zoom compatible, driver-free deployment. Free UK shipping.",
  keywords: "corporate video capture, business video conferencing, Teams capture card, Zoom HDMI capture, presentation recording, training video equipment, enterprise video solutions",
  openGraph: {
    title: "USB Capture for Corporate & Business | StreamTek",
    description: "Professional video conferencing and presentation capture for enterprise. Teams/Zoom compatible, driver-free deployment.",
    url: "https://www.streamtek.co.uk/applications/corporate",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.streamtek.co.uk/images/applications/corporate-business.png", width: 1200, height: 630, alt: "Corporate Video Conferencing Setup" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USB Capture for Corporate & Business | StreamTek",
    description: "Professional video conferencing and presentation capture for enterprise environments.",
  },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/corporate" },
};

export default function CorporatePage() {
  const useCases = [
    { title: "Executive Presentations & Board Meetings", description: "Capture and record boardroom presentations, executive briefings, and stakeholder meetings with professional quality. Perfect for distributed teams and archived minutes.", icon: Presentation },
    { title: "Training & Onboarding Programs", description: "Create scalable training content once and deploy across the organization. Capture instructor-led sessions, software demonstrations, and compliance training.", icon: Users },
    { title: "Hybrid Meeting Rooms", description: "Enable seamless hybrid meetings where remote and in-office participants collaborate equally. Capture presentation screens, document cameras, and room cameras simultaneously.", icon: Video },
    { title: "Product Demonstrations & Sales", description: "Record product demos, sales presentations, and customer success stories. Share compelling visual content with prospects and internal teams.", icon: Building2 }
  ];

  const features = [
    { title: "Universal Compatibility", description: "Works instantly with Microsoft Teams, Zoom, Google Meet, Webex, and all major platforms. No driver installation—plug in and join your meeting.", icon: Globe },
    { title: "IT-Friendly Deployment", description: "Driver-free UVC/UAC compliance means zero IT overhead. Deploy across hundreds of meeting rooms without software installation or updates.", icon: Shield },
    { title: "Multi-Room Scalability", description: "Standardize on reliable hardware across conference rooms, training centers, and remote offices. Volume pricing available for enterprise deployments.", icon: Building2 },
    { title: "Broadcast-Quality Output", description: "1080p60 or 4K capture ensures crystal-clear presentations and professional recordings. Hardware encoding prevents system slowdowns during critical meetings.", icon: CheckCircle2 }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI Gen 2", slug: "magewell-usb-capture-hdmi-gen-2", price: 289, description: "Perfect for standard meeting rooms and training spaces. Reliable 1080p60 capture.", image: "/images/products/hdmi-gen2.png" },
    { name: "USB Capture HDMI 4K Plus", slug: "magewell-usb-capture-hdmi-4k-plus", price: 549, description: "Executive boardrooms and high-end installations. 4K60 HDR capture for premium quality.", image: "/images/products/hdmi-4k-plus.png" }
  ];

  const setupSteps = [
    { step: "1", title: "Connect Presentation Source", description: "Plug your laptop, document camera, or room system HDMI output into the capture device. Use loop-through for confidence monitors." },
    { step: "2", title: "Connect to Meeting Room PC", description: "Attach the USB 3.0 cable to your meeting room computer or AV system. Device is instantly recognized by Windows, macOS, and Linux." },
    { step: "3", title: "Select in Video Conferencing Software", description: "Open Teams, Zoom, or your platform. Select the Magewell device as your camera source—it appears as a standard webcam." },
    { step: "4", title: "Start Your Meeting", description: "Join your call with professional-quality video from presentations, cameras, or any HDMI source. Record locally if needed." }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "USB Capture for Corporate & Business",
    "description": "Professional HDMI capture for corporate video conferencing, training, and enterprise communications.",
    "image": "https://www.streamtek.co.uk/images/applications/corporate-business.png",
    "author": { "@type": "Organization", "name": "StreamTek" },
    "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } },
    "datePublished": "2026-02-15",
    "dateModified": "2026-02-15"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white" style={{ background: 'var(--fiber-gradient)' }}>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-lg mb-6">
                  <Briefcase className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300 uppercase tracking-wide">Corporate / Business</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Enterprise Video <span className="text-gradient">That Just Works</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Seamless video conferencing, presentation capture, and training content production for corporate environments. 
                  Driver-free deployment across meeting rooms with Teams and Zoom compatibility.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Briefcase className="w-5 h-5" />
                    Shop Enterprise Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Volume Pricing
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Teams/Zoom Ready</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Driver-Free</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Scalable</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/corporate-business.png" alt="Corporate Video Conferencing" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Corporate Use Cases</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                From boardrooms to training centers, professional capture devices elevate corporate communications.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Features</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                Reliable, scalable, and IT-friendly solutions for corporate video needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Deployment Process</h2>
              <p className="text-slate-400 text-lg">
                From procurement to production in minutes—minimal IT overhead, maximum reliability.
              </p>
            </div>
            <div className="space-y-8">
              {setupSteps.map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-2xl font-bold">{item.step}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Corporate</h2>
              <p className="text-slate-400 text-lg">Enterprise-grade capture devices for meeting rooms and training facilities.</p>
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
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Enterprise Pricing or Integration Support?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our team can assist with volume quotes, custom integration, and ongoing support for corporate deployments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-400 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Enterprise Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Setup Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
