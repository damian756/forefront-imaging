import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ShieldCheck, FileText, Download, CheckCircle, 
  Box, Truck, Printer 
} from 'lucide-react';

// IMPORT YOUR FUNCTIONS
import { getProductBySlug } from '@/lib/products'; 

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // USE YOUR HELPER FUNCTION
  const product = getProductBySlug(slug);

  if (!product) {
    notFound(); 
  }

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* Navbar - Typo Fixed Here */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/95 backdrop-blur-md border-b border-blue-900/30 py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded bg-blue-600 text-white"><ShieldCheck className="w-6 h-6" /></div>
            <div className="flex flex-col">
                <span className="text-xl font-extrabold text-white tracking-tight uppercase">ForeFront</span>
                <span className="text-[10px] font-mono text-blue-400 uppercase">Magewell UK Distributor</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white">Back to Catalog</Link>
            <Link href="/contact" className="flex items-center gap-2 px-4 py-2 rounded-sm font-bold text-sm bg-white text-slate-950 hover:bg-blue-50"><FileText className="w-4 h-4" /><span>Get Quote</span></Link>
          </div>
        </div>
      </nav>

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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          <div className="md:col-span-5">
            <div className="bg-white rounded-lg p-12 flex items-center justify-center border border-slate-700 relative mb-8">
              <div className="absolute top-4 left-4 flex gap-2">
                 <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Authorized Stock</span>
              </div>
              <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="w-full h-auto object-contain" />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 text-sm font-bold uppercase transition-all rounded-sm"><Download className="w-4 h-4" /> Datasheet</button>
                <button className="flex items-center justify-center gap-2 py-3 border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-blue-400 text-sm font-bold uppercase transition-all rounded-sm"><Printer className="w-4 h-4" /> Print Spec</button>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="flex items-center gap-6 mb-8 pb-8 border-b border-slate-800">
               {product.stock && <div className="flex items-center gap-2 text-green-400 font-mono text-sm"><CheckCircle className="w-4 h-4" /> {product.stock}</div>}
               <div className="flex items-center gap-2 text-slate-400 font-mono text-sm"><Truck className="w-4 h-4" /> Next Day Delivery</div>
               <div className="flex items-center gap-2 text-slate-400 font-mono text-sm"><ShieldCheck className="w-4 h-4" /> 3-Year Warranty</div>
            </div>

            {/* Render HTML Description Safely */}
            <div 
              className="prose prose-invert prose-blue max-w-none text-slate-300 mb-8"
              dangerouslySetInnerHTML={{ __html: product.description }} 
            />

            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Features</h3>
            <ul className="space-y-3 mb-10">
                {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-400 text-sm"><div className="mt-1 w-1.5 h-1.5 bg-blue-500 rounded-full"></div>{feature}</li>
                ))}
            </ul>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-sm mb-12">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-slate-400 text-sm uppercase font-bold">Trade Price</span>
                    <span className="text-blue-400 text-xs font-mono bg-blue-900/30 px-2 py-1 rounded">LOGIN REQUIRED</span>
                </div>
                <div className="flex gap-4">
                    <Link href="/contact" className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase text-center rounded-sm transition-colors">Request Quote</Link>
                    <Link href="/contact" className="flex-1 py-3 bg-white hover:bg-slate-200 text-slate-950 font-bold uppercase text-center rounded-sm transition-colors">Volume Pricing</Link>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}