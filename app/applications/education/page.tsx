import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BookOpen, Video, Users, CheckCircle2, ArrowRight, School, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Education & Classrooms | Lecture Capture Solutions | StreamTek",
  description: "Professional video capture for universities, schools, and e-learning. Lecture recording, distance learning, hybrid classrooms. Compatible with all learning platforms.",
  keywords: "lecture capture, education video capture, classroom recording, distance learning equipment, hybrid classroom technology, university video capture, e-learning tools",
  openGraph: {
    title: "USB Capture for Education & Classrooms | StreamTek",
    description: "Professional lecture capture and distance learning solutions for universities and schools.",
    url: "https://www.streamtek.co.uk/applications/education",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.streamtek.co.uk/images/applications/education-classroom.png", width: 1200, height: 630, alt: "Education Lecture Capture" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USB Capture for Education & Classrooms | StreamTek",
    description: "Professional lecture capture and distance learning video solutions.",
  },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/education" },
};

export default function EducationPage() {
  const useCases = [
    { title: "Lecture Capture & Recording", description: "Record lectures from document cameras, presentation screens, and instructor cameras. Students can review content on-demand, improving learning outcomes and accessibility.", icon: Video },
    { title: "Hybrid & Distance Learning", description: "Enable remote students to participate in real-time with crystal-clear video of presentations, experiments, and demonstrations. Perfect for post-pandemic flexible learning models.", icon: Globe },
    { title: "Online Course Production", description: "Create professional e-learning content with multi-source capture. Record instructors, demonstrations, screen captures, and educational materials simultaneously.", icon: BookOpen },
    { title: "Training & Professional Development", description: "Capture staff training sessions, professional development workshops, and certification programs for asynchronous viewing and institutional archives.", icon: Users }
  ];

  const features = [
    { title: "Budget-Friendly Deployment", description: "Cost-effective solution for educational institutions. No ongoing licensing fees—purchase once and deploy across multiple classrooms.", icon: CheckCircle2 },
    { title: "Works with All LMS Platforms", description: "Compatible with Moodle, Blackboard, Canvas, Teams, Zoom, and every major learning management system. No special integration required.", icon: School },
    { title: "Easy for Non-Technical Staff", description: "Teachers and instructors can operate without IT support. Plug-and-play design means focusing on teaching, not troubleshooting.", icon: Users },
    { title: "Capture Document Cameras", description: "Perfect for capturing visual aids, textbooks, lab experiments, and demonstrations from document cameras and microscopes.", icon: Video }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI Gen 2", slug: "magewell-usb-capture-hdmi-gen-2", price: 289, description: "Ideal for standard classrooms and lecture halls. Reliable 1080p60 capture.", image: "/images/products/hdmi-gen2.png" },
    { name: "USB Capture AIO", slug: "magewell-usb-capture-aio", price: 489, description: "All-In-One device supporting HDMI, VGA, DVI, and legacy inputs for older equipment.", image: "/images/products/usb-capture-aio.png" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "USB Capture for Education & Classrooms",
    "description": "Professional video capture for lecture recording, distance learning, and hybrid classrooms.",
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-lg mb-6">
                  <GraduationCap className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-semibold text-green-300 uppercase tracking-wide">Education / Classroom</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Empower Learning with <span className="text-gradient">Professional Capture</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Lecture capture, distance learning, and hybrid classroom solutions for universities, schools, and e-learning platforms. 
                  Budget-friendly, easy-to-use, and compatible with all LMS platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <School className="w-5 h-5" />
                    View Education Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Education Pricing
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>LMS Compatible</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Budget-Friendly</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Easy Setup</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/education-classroom.png" alt="Education Lecture Capture" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Use Cases</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Transform teaching and learning with professional video capture technology.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-green-600/20 border border-green-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-green-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Educators Choose Magewell</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Reliable, affordable, and designed for educational environments.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-green-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Education</h2>
              <p className="text-slate-400 text-lg">Capture devices perfect for classrooms, lecture halls, and training centers.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-green-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help Setting Up Your Classroom?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our team can assist with educational pricing, classroom setup guidance, and technical support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Education Team</Link>
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
