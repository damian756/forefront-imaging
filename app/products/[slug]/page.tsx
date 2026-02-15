import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';
import { getProductBySlug, products } from '@/lib/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: product.metaTitle,
    description: product.metaDescription,
    openGraph: {
      title: product.metaTitle,
      description: product.metaDescription,
      images: [
        {
          url: product.imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'website',
      siteName: 'StreamTek',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.metaTitle,
      description: product.metaDescription,
      images: [product.imageUrl],
    },
    alternates: {
      canonical: `https://www.streamtek.co.uk/products/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // JSON-LD: Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.imageUrl,
    description: product.metaDescription,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'Magewell',
    },
    offers: {
      '@type': 'Offer',
      url: `https://www.streamtek.co.uk/products/${product.slug}`,
      priceCurrency: 'GBP',
      price: product.price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'StreamTek',
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'GB',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          businessDays: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
          },
        },
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'GBP',
        },
      },
    },
  };

  // JSON-LD: FAQ Schema
  const faqSchema = product.faqs && product.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: product.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  // JSON-LD: BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.streamtek.co.uk/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: 'https://www.streamtek.co.uk/products',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://www.streamtek.co.uk/products/${product.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />
      <div
        className="flex flex-col min-h-screen text-white selection:bg-cyan-500/30 relative"
        style={{ background: 'var(--fiber-gradient)' }}
      >
        {/* Grid Background */}
        <div className="fixed inset-0 builder-canvas opacity-30 pointer-events-none z-0" />

        {/* Breadcrumb & Header */}
        <div className="pt-20 pb-8 border-b border-cyan-500/20 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              <span className="text-cyan-500/50">/</span>
              <Link href="/products" className="hover:text-cyan-400 transition-colors">Products</Link>
              <span className="text-cyan-500/50">/</span>
              <span className="text-cyan-400">{product.name}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold prismatic-text mb-2">{product.name}</h1>
            <p className="text-gray-400 font-mono text-sm">SKU: {product.sku}</p>
          </div>
        </div>

        {/* Main Content */}
        <ProductDetailClient product={product} />
      </div>
      <Footer />
    </>
  );
}
