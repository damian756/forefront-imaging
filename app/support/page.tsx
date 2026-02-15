import Link from "next/link";
import { Headphones, FileText, Video, Download, MessageCircle, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Support",
  description: "Technical support, resources, and documentation for Magewell USB capture devices. Free UK-based support with 3-year warranty.",
  keywords: "Magewell support, technical help, USB capture support, StreamTek help",
  openGraph: {
    title: "Support | StreamTek",
    description: "Technical support, resources, and documentation for Magewell products.",
    url: "https://www.streamtek.co.uk/support",
    siteName: "StreamTek",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary" as const,
    title: "Support | StreamTek",
    description: "Technical support, resources, and documentation for Magewell products.",
  },
  alternates: {
    canonical: "https://www.streamtek.co.uk/support",
  },
};

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Direct access to our technical team for product support, troubleshooting, and installation guidance.",
      action: "Contact Support",
      href: "/contact",
      color: "blue"
    },
    {
      icon: Download,
      title: "Downloads",
      description: "Latest drivers, firmware updates, software utilities, and product documentation.",
      action: "View Downloads",
      href: "/downloads",
      color: "green"
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Comprehensive guides, FAQs, and technical articles to help you get the most from your products.",
      action: "Browse Articles",
      href: "/knowledge-base",
      color: "purple"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides covering installation, configuration, and advanced features.",
      action: "Watch Tutorials",
      href: "/tutorials",
      color: "orange"
    }
  ];

  const faqs = [
    {
      question: "What warranty coverage is included?",
      answer: "All Magewell products include full manufacturer warranty with direct support. Warranty terms vary by product - typically 2-3 years from date of purchase."
    },
    {
      question: "How do I handle returns or RMAs?",
      answer: "Contact our support team with your order details and issue description. We'll guide you through the RMA process and arrange replacement or repair as appropriate."
    },
    {
      question: "Are drivers compatible with my operating system?",
      answer: "Magewell products support Windows, macOS, and Linux. Visit our Downloads page for the latest drivers and compatibility information."
    },
    {
      question: "Can I get technical training for my team?",
      answer: "Yes! We offer comprehensive training for resellers and integrators, including product overviews, installation best practices, and troubleshooting."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available Monday-Friday, 9AM-5PM GMT. Emergency support for critical issues can be arranged for registered partners."
    },
    {
      question: "Do you offer pre-sales technical consultation?",
      answer: "Absolutely. Contact us to discuss your project requirements and we'll help you select the right products for your specific application."
    }
  ];

  const colorClasses = {
    blue: "bg-blue-600/10 text-blue-500 border-blue-500/20",
    green: "bg-green-600/10 text-green-500 border-green-500/20",
    purple: "bg-purple-600/10 text-purple-500 border-purple-500/20",
    orange: "bg-orange-600/10 text-orange-500 border-orange-500/20"
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen text-white pt-20 pb-20" style={{ background: 'var(--fiber-gradient)' }}>
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Support & Resources
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Everything you need to succeed with Magewell products. Technical support, 
              documentation, and training resources for resellers and end users.
            </p>
          </div>

          {/* Support Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {supportOptions.map((option) => {
              const Icon = option.icon;
              const colorClass = colorClasses[option.color as keyof typeof colorClasses];
              
              return (
                <div 
                  key={option.title}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-slate-700 transition-all group"
                >
                  <div className={`w-16 h-16 rounded-xl ${colorClass} border flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  <Link 
                    href={option.href}
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    {option.action}
                    <span>→</span>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-3xl p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Phone Support</h3>
                <a href="tel:01704635785" className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
                  01704 635785
                </a>
                <p className="text-slate-400 text-sm mt-2">Mon-Fri, 9AM-5PM GMT</p>
              </div>
              <div>
                <MessageCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Email Support</h3>
                <Link href="/contact" className="text-green-400 hover:text-green-300 font-semibold text-lg">
                  Contact Form
                </Link>
                <p className="text-slate-400 text-sm mt-2">Response within 24 hours</p>
              </div>
              <div>
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                <p className="text-purple-400 font-semibold text-lg">9AM - 5PM GMT</p>
                <p className="text-slate-400 text-sm mt-2">Monday to Friday</p>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {faqs.map((faq) => (
                <div 
                  key={faq.question}
                  className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <h3 className="font-bold text-lg">{faq.question}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Warranty Info */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <AlertCircle className="w-12 h-12 text-blue-400 mb-6" />
                <h2 className="text-3xl font-bold mb-4">Warranty & Returns</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  All Magewell products sold through StreamTek include full manufacturer 
                  warranty coverage. We handle all RMA processing and warranty claims directly.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Full manufacturer warranty included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Direct RMA processing through our team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Advanced replacement available for partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">30-day return policy for resellers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">Need Warranty Support?</h3>
                <p className="text-slate-400 mb-6">
                  Contact our support team with your order number and product details. 
                  We&apos;ll help you resolve the issue quickly.
                </p>
                <Link 
                  href="/contact"
                  className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-center transition-all"
                >
                  Contact Support Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
