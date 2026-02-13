import Link from "next/link";
import { CheckCircle2, TrendingUp, Package, Headphones, GraduationCap, Award, Users, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Reseller Program - StreamTek",
  description: "Join our network of authorized Magewell resellers. Competitive pricing, dedicated support, and comprehensive training.",
};

export default function ResellersPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Competitive Margins",
      description: "Attractive pricing tiers with volume discounts and special promotional pricing for partners.",
      color: "blue"
    },
    {
      icon: Package,
      title: "Stock Availability",
      description: "Direct access to UK, German, and French warehouse stock with next-day delivery options.",
      color: "green"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Priority technical support and dedicated account management for all partner enquiries.",
      color: "purple"
    },
    {
      icon: GraduationCap,
      title: "Product Training",
      description: "Comprehensive training materials, webinars, and certification programs for your team.",
      color: "orange"
    },
    {
      icon: Award,
      title: "Marketing Support",
      description: "Co-branded materials, product imagery, technical specifications, and sales collateral.",
      color: "red"
    },
    {
      icon: Globe,
      title: "Regional Coverage",
      description: "Serve customers across UK, Germany, France, and beyond with multi-language support.",
      color: "cyan"
    }
  ];

  const requirements = [
    "Established business with relevant industry experience",
    "Technical capability to support end-user installations",
    "Professional website and online presence",
    "Commitment to Magewell product training",
    "Ability to maintain product inventory",
    "Adherence to manufacturer pricing guidelines"
  ];

  const colorClasses = {
    blue: "bg-blue-600/10 text-blue-500 border-blue-500/20",
    green: "bg-green-600/10 text-green-500 border-green-500/20",
    purple: "bg-purple-600/10 text-purple-500 border-purple-500/20",
    orange: "bg-orange-600/10 text-orange-500 border-orange-500/20",
    red: "bg-red-600/10 text-red-500 border-red-500/20",
    cyan: "bg-cyan-600/10 text-cyan-500 border-cyan-500/20"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-bold">
              Partner Program
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Become a Reseller
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Join our growing network of authorized Magewell distributors and resellers. 
              Grow your business with industry-leading video capture and streaming solutions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-extrabold text-blue-400 mb-2">76+</div>
              <div className="text-sm text-slate-400">Products</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-extrabold text-green-400 mb-2">3</div>
              <div className="text-sm text-slate-400">Warehouses</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-extrabold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-slate-400">Support</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 text-center">
              <div className="text-4xl font-extrabold text-orange-400 mb-2">100%</div>
              <div className="text-sm text-slate-400">Warranty</div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Partner Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                const colorClass = colorClasses[benefit.color as keyof typeof colorClasses];
                
                return (
                  <div 
                    key={benefit.title}
                    className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all"
                  >
                    <div className={`w-14 h-14 rounded-xl ${colorClass} border flex items-center justify-center mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Requirements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <Users className="w-12 h-12 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Partner Requirements</h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We work with established businesses that can provide professional service 
                and support to end customers. Our ideal partners include:
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 flex flex-col justify-center">
              <Award className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Application Process</h2>
              <ol className="space-y-6 mb-8">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold mb-1">Submit Application</h4>
                    <p className="text-slate-300 text-sm">Complete our reseller application form with your business details.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold mb-1">Review & Approval</h4>
                    <p className="text-slate-300 text-sm">Our team reviews your application (typically within 48 hours).</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold mb-1">Onboarding & Training</h4>
                    <p className="text-slate-300 text-sm">Access partner portal, training materials, and product resources.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold mb-1">Start Selling</h4>
                    <p className="text-slate-300 text-sm">Begin ordering with competitive pricing and dedicated support.</p>
                  </div>
                </li>
              </ol>
              <Link 
                href="/contact"
                className="w-full py-4 bg-white text-slate-950 font-bold rounded-lg text-center hover:bg-blue-50 transition-all shadow-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Contact our partner team to discuss how we can help grow your business 
              with Magewell&apos;s industry-leading products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all"
              >
                Contact Partner Team
              </Link>
              <a 
                href="tel:+441162775730"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Call +44 (0)116 277 5730
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
