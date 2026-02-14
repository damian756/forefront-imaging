import Link from "next/link";
import { BookOpen, Search, TrendingUp, Wrench, Shield, Zap, HelpCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Knowledge Base - StreamTek",
  description: "Comprehensive guides, troubleshooting tips, and technical articles for Magewell products.",
};

export default function KnowledgeBasePage() {
  const categories = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Installation guides, quick start tutorials, and first-time setup instructions.",
      articleCount: 12,
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Troubleshooting",
      description: "Common issues, error messages, and step-by-step solutions.",
      articleCount: 24,
      color: "orange"
    },
    {
      icon: TrendingUp,
      title: "Advanced Features",
      description: "In-depth guides for advanced configuration and optimization.",
      articleCount: 18,
      color: "purple"
    },
    {
      icon: Shield,
      title: "Warranty & Returns",
      description: "RMA procedures, warranty coverage, and support policies.",
      articleCount: 8,
      color: "green"
    }
  ];

  const popularArticles = [
    {
      title: "How to Install USB Capture Drivers on Windows 11",
      category: "Getting Started",
      icon: Zap
    },
    {
      title: "Resolving 'No Signal' Issues with HDMI Capture",
      category: "Troubleshooting",
      icon: Wrench
    },
    {
      title: "Optimizing Capture Quality for 4K60 Workflows",
      category: "Advanced Features",
      icon: TrendingUp
    },
    {
      title: "Understanding Magewell Product Warranty Coverage",
      category: "Warranty & Returns",
      icon: Shield
    },
    {
      title: "Configuring Multi-Camera Capture Systems",
      category: "Advanced Features",
      icon: TrendingUp
    },
    {
      title: "USB Capture vs Pro Capture: Which is Right for You?",
      category: "Getting Started",
      icon: Zap
    }
  ];

  const faqs = [
    {
      question: "What's the difference between USB Capture and Pro Capture?",
      answer: "USB Capture devices are plug-and-play USB 3.0 solutions ideal for portable setups. Pro Capture cards are PCIe-based for permanent installations requiring multiple inputs or higher bandwidth."
    },
    {
      question: "Do I need special drivers for macOS?",
      answer: "Yes, Magewell provides native macOS drivers available in our Downloads section. Both Intel and Apple Silicon are fully supported."
    },
    {
      question: "Can I use multiple capture devices simultaneously?",
      answer: "Absolutely! Magewell devices are designed for multi-device workflows. Ensure your system has adequate USB bandwidth or PCIe lanes."
    },
    {
      question: "What video software is compatible with Magewell?",
      answer: "Magewell products work with virtually all major software including OBS, vMix, Wirecast, Adobe Premiere, Final Cut Pro, and more."
    }
  ];

  const colorClasses = {
    blue: {
      icon: "bg-blue-600/10 text-blue-500 border-blue-500/20",
      badge: "bg-blue-600/20 text-blue-400"
    },
    orange: {
      icon: "bg-orange-600/10 text-orange-500 border-orange-500/20",
      badge: "bg-orange-600/20 text-orange-400"
    },
    purple: {
      icon: "bg-purple-600/10 text-purple-500 border-purple-500/20",
      badge: "bg-purple-600/20 text-purple-400"
    },
    green: {
      icon: "bg-green-600/10 text-green-500 border-green-500/20",
      badge: "bg-green-600/20 text-green-400"
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white pt-20 pb-20" style={{ background: 'var(--fiber-gradient)' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Knowledge Base
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive guides, troubleshooting tips, and technical documentation 
              to help you get the most from your Magewell products.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search articles, guides, and FAQs..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => {
                const Icon = category.icon;
                const colors = colorClasses[category.color as keyof typeof colorClasses];
                
                return (
                  <div
                    key={category.title}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-lg ${colors.icon} border flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                      {category.description}
                    </p>
                    <div className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-xs font-bold`}>
                      {category.articleCount} articles
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl divide-y divide-slate-800">
              {popularArticles.map((article) => {
                const Icon = article.icon;
                return (
                  <div
                    key={article.title}
                    className="p-6 hover:bg-slate-800/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-slate-400">
                          <span>{article.category}</span>
                        </div>
                      </div>
                      <div className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick FAQs */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8">Quick Answers</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold">{faq.question}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Help CTA */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 text-center">
            <BookOpen className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Our support team is here to help. Contact us for personalized assistance 
              with your technical questions and product support needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg shadow-blue-500/30 transition-all"
              >
                Contact Support
              </Link>
              <Link
                href="/tutorials"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all"
              >
                Watch Video Tutorials
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
