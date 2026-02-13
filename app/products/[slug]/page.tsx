import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';
import FiberOpticBackground from '@/components/FiberOpticBackground';
import { getProductBySlug, products } from '@/lib/products'; 

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound(); 
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans text-white selection:bg-cyan-500/30" style={{ background: 'var(--optic-black)' }}>
        
        {/* Fiber Optic Background */}
        <FiberOpticBackground />
        <div className="fixed inset-0 spectrum-lines opacity-20 pointer-events-none z-0" />
        
        {/* Breadcrumb & Header */}
        <div className="pt-28 pb-8 border-b border-cyan-500/20 relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link> 
              <span className="text-cyan-500/50">/</span>
              <Link href="/products" className="hover:text-cyan-400 transition-colors">Devices</Link> 
              <span className="text-cyan-500/50">/</span>
              <span className="text-cyan-400">{product.sku}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold prismatic-text mb-2">{product.name}</h1>
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
