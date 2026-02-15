import Image from "next/image";
import Link from "next/link";
import { Church as ChurchIcon, Heart, Video, Users, CheckCircle2, ArrowRight, Wifi, Camera } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "USB Capture for Churches & Worship | Live Streaming Equipment | StreamTek",
  description: "Professional video capture for church live streaming to YouTube and Facebook. Multi-camera worship production made simple. Volunteer-friendly equipment.",
  keywords: "church live streaming, worship video capture, church broadcasting, YouTube live church, Facebook church streaming, worship production equipment, multi-camera church",
  openGraph: {
    title: "USB Capture for Churches & Worship | StreamTek",
    description: "Professional live streaming solutions for churches and worship services.",
    url: "https://www.streamtek.co.uk/applications/church",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "article",
    images: [{ url: "https://www.streamtek.co.uk/images/applications/church-worship-1.png", width: 1200, height: 630, alt: "Church Worship Live Streaming" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "USB Capture for Churches & Worship | StreamTek",
    description: "Professional live streaming for worship services and church events.",
  },
  alternates: { canonical: "https://www.streamtek.co.uk/applications/church" },
};

export default function ChurchPage() {
  const useCases = [
    { title: "Sunday Service Live Streaming", description: "Stream worship services to YouTube, Facebook, and church websites. Reach congregants who can't attend in person, expand your ministry reach globally.", icon: Wifi },
    { title: "Multi-Camera Production", description: "Capture multiple camera angles—wide stage shots, close-ups of worship leaders, scripture displays, and sermon notes. Create engaging, professional broadcasts.", icon: Camera },
    { title: "Special Events & Conferences", description: "Record baptisms, weddings, conferences, and special services for archival and sharing. Preserve meaningful moments for your church community.", icon: Heart },
    { title: "Youth & Outreach Programs", description: "Produce content for youth groups, small groups, and outreach initiatives. Create engaging video content that connects with younger generations.", icon: Users }
  ];

  const features = [
    { title: "Volunteer-Friendly Operation", description: "Simple enough for volunteers to operate without extensive technical training. Plug-and-play design minimizes Sunday morning tech headaches.", icon: Users },
    { title: "Multi-Platform Streaming", description: "Stream simultaneously to YouTube, Facebook, church websites, and custom RTMP destinations. Reach your congregation wherever they are.", icon: Wifi },
    { title: "Budget-Conscious Solutions", description: "Professional quality without broadcast-industry pricing. Stretch your ministry budget further with reliable, cost-effective equipment.", icon: CheckCircle2 },
    { title: "Scalable as You Grow", description: "Start with a single camera and add more sources as your production grows. Modular approach lets you expand capabilities over time.", icon: Camera }
  ];

  const recommendedProducts = [
    { name: "USB Capture HDMI Gen 2", slug: "magewell-usb-capture-hdmi-gen-2", price: 289, description: "Perfect for small to mid-sized churches starting their streaming journey.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/hdmi-usb.61gen2.png" },
    { name: "USB Capture SDI Plus", slug: "magewell-usb-capture-sdi-plus", price: 549, description: "For churches with professional cameras and long cable runs in larger sanctuaries.", image: "https://darkturquoise-pigeon-678798.hostingersite.com/wp-content/uploads/2026/01/SDI-Plus.png" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "USB Capture for Churches & Worship",
    "description": "Professional live streaming solutions for churches, worship services, and ministry events.",
    "image": "https://www.streamtek.co.uk/images/applications/church-worship-1.png",
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
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 border border-amber-500/30 rounded-lg mb-6">
                  <ChurchIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-semibold text-amber-300 uppercase tracking-wide">Church / Worship</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                  Expand Your Ministry with <span className="text-gradient">Live Streaming</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Professional live streaming for worship services, conferences, and church events. 
                  Multi-camera production made simple for volunteers. Stream to YouTube, Facebook, and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="#products" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg transition-all">
                    <Video className="w-5 h-5" />
                    View Church Solutions
                  </Link>
                  <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">
                    Request Ministry Pricing
                  </Link>
                </div>
                <div className="flex items-center gap-6 text-sm text-slate-400">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Multi-Camera</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>YouTube/Facebook</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400" /><span>Volunteer-Friendly</span></div>
                </div>
              </div>
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/applications/church-worship-1.png" alt="Church Worship Live Streaming" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ministry Applications</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Reach more people, preserve special moments, and expand your ministry impact.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => {
                const Icon = useCase.icon;
                return (
                  <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-amber-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Churches Choose Magewell</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">Reliable, affordable, and designed for church production teams.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-amber-400" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended for Churches</h2>
              <p className="text-slate-400 text-lg">Capture devices trusted by churches worldwide for worship production.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {recommendedProducts.map((product) => (
                <Link key={product.slug} href={`/products/${product.slug}`} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all group">
                  <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-900">
                    <Image src={product.image} alt={product.name} fill className="object-contain p-8 group-hover:scale-105 transition-transform" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">{product.name}</h3>
                    <p className="text-slate-400 mb-4 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                      <span className="flex items-center gap-2 text-amber-400 font-semibold">View Details<ArrowRight className="w-4 h-4" /></span>
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
            <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Streaming Your Services?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Our team can help you choose the right equipment and get your church streaming setup configured.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg transition-all">Contact Ministry Team</Link>
                <Link href="/knowledge-base" className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl transition-all">Browse Church Guides</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
