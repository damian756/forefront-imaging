import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertTriangle, Lightbulb, BookOpen, ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import guides from "@/lib/guides-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide Not Found" };

  return {
    title: `${guide.title} | StreamTek Knowledge Base`,
    description: guide.description,
    keywords: guide.keywords,
    openGraph: {
      title: `${guide.title} | StreamTek`,
      description: guide.description,
      url: `https://www.streamtek.co.uk/knowledge-base/${guide.slug}`,
      siteName: "StreamTek",
      locale: "en_GB",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: guide.title,
      description: guide.description,
    },
    alternates: {
      canonical: `https://www.streamtek.co.uk/knowledge-base/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const currentIndex = guides.findIndex((g) => g.slug === slug);
  const relatedGuides = guides
    .filter((g) => g.category === guide.category && g.slug !== guide.slug)
    .slice(0, 4);

  const categoryColors: Record<string, string> = {
    "Getting Started": "blue",
    "Troubleshooting": "orange",
    "Advanced Features": "purple",
    "Warranty & Returns": "green",
  };
  const color = categoryColors[guide.category] || "blue";
  const colorMap: Record<string, { badge: string; accent: string }> = {
    blue: { badge: "bg-blue-600/20 text-blue-400 border-blue-500/30", accent: "text-blue-400" },
    orange: { badge: "bg-orange-600/20 text-orange-400 border-orange-500/30", accent: "text-orange-400" },
    purple: { badge: "bg-purple-600/20 text-purple-400 border-purple-500/30", accent: "text-purple-400" },
    green: { badge: "bg-green-600/20 text-green-400 border-green-500/30", accent: "text-green-400" },
  };
  const colors = colorMap[color];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": guide.title,
    "description": guide.description,
    "author": { "@type": "Organization", "name": "StreamTek" },
    "publisher": { "@type": "Organization", "name": "StreamTek", "logo": { "@type": "ImageObject", "url": "https://www.streamtek.co.uk/logo.png" } },
    "datePublished": "2026-02-15",
    "dateModified": "2026-02-15",
    "mainEntityOfPage": `https://www.streamtek.co.uk/knowledge-base/${guide.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main className="min-h-screen text-white pt-32 pb-20" style={{ background: 'var(--fiber-gradient)' }}>
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8" aria-label="Breadcrumb">
            <Link href="/knowledge-base" className="hover:text-white transition-colors">Knowledge Base</Link>
            <ChevronRight className="w-4 h-4" />
            <span className={colors.accent}>{guide.category}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-300 truncate max-w-xs">{guide.title}</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 ${colors.badge} border rounded-lg text-xs font-semibold uppercase tracking-wide mb-4`}>
              {guide.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              {guide.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {guide.description}
            </p>
          </div>

          {/* Problem Section */}
          {guide.content.problem && (
            <section className="mb-10">
              <div className="bg-orange-600/10 border border-orange-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="font-bold text-lg mb-2 text-orange-300">The Problem</h2>
                    <p className="text-slate-300 leading-relaxed">{guide.content.problem}</p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Solution Section */}
          <section className="mb-10">
            <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-bold text-lg mb-2 text-green-300">The Solution</h2>
                  <p className="text-slate-300 leading-relaxed">{guide.content.solution}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Steps Section */}
          {guide.content.steps && guide.content.steps.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Step-by-Step Instructions</h2>
              <div className="space-y-4">
                {guide.content.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-sm font-bold text-blue-400">
                      {i + 1}
                    </div>
                    <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-4">
                      <p className="text-slate-300 leading-relaxed">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tips Section */}
          {guide.content.tips && guide.content.tips.length > 0 && (
            <section className="mb-10">
              <div className="bg-purple-600/10 border border-purple-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Lightbulb className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                  <h2 className="font-bold text-lg text-purple-300">Pro Tips</h2>
                </div>
                <ul className="space-y-3 pl-10">
                  {guide.content.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-1" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Recommended Products */}
          {guide.content.relatedProducts && guide.content.relatedProducts.length > 0 && (
            <section className="mb-10">
              <h2 className="text-xl font-bold mb-4">Recommended Products</h2>
              <div className="flex flex-wrap gap-3">
                {guide.content.relatedProducts.map((productSlug) => (
                  <Link
                    key={productSlug}
                    href={`/products/${productSlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600/10 border border-cyan-500/30 rounded-lg text-cyan-400 hover:bg-cyan-600/20 transition-colors text-sm font-semibold"
                  >
                    {productSlug.replace(/magewell-/g, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related Guides */}
          {relatedGuides.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedGuides.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/knowledge-base/${related.slug}`}
                    className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all group"
                  >
                    <h3 className="font-bold mb-2 group-hover:text-blue-400 transition-colors text-sm">
                      {related.title}
                    </h3>
                    <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t border-slate-800">
            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Knowledge Base
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg transition-all text-sm"
            >
              Still Need Help?
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
