import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductDetailClient from '@/components/ProductDetailClient';

// IMPORT YOUR FUNCTIONS
import { getProductBySlug, products } from '@/lib/products'; 

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // USE YOUR HELPER FUNCTION
  const product = getProductBySlug(slug);

  if (!product) {
    notFound(); 
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
        {/* Breadcrumb & Header */}
      <div className="pt-28 pb-8 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-blue-400">Catalog</Link> / 
            <Link href="/products" className="hover:text-blue-400">{product.category}</Link> / 
            <span className="text-blue-400">{product.sku}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">{product.name}</h1>
        </div>
      </div>

      {/* Main Content */}
      <ProductDetailClient product={product} />
      </div>
      <Footer />
    </>
  );
}