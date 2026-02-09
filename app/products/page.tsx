'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheck, FileText, Search, 
  Filter, Grid, List, CheckCircle 
} from 'lucide-react';

// IMPORT YOUR EXISTING DATA
import { products } from '@/lib/products'; 

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Generate unique categories from your actual data
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter Logic
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
      {/* Navbar - Typo Fixed Here (class -> className) */}
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
            <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white">Home</Link>
            <Link href="/contact" className="flex items-center gap-2 px-4 py-2 rounded-sm font-bold text-sm bg-white text-slate-950 hover:bg-blue-50"><FileText className="w-4 h-4" /><span>Get Quote</span></Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-12 border-b border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">Product Catalog ({products.length} SKUs)</h1>
          <p className="text-slate-400 max-w-2xl">Official UK Distribution Inventory.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-8">
            <div className="relative">
              <input type="text" placeholder="Search SKU or Name..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-sm py-2 pl-10 pr-4 text-sm text-white focus:border-blue-500 outline-none" />
              <Search className="absolute left-3 top-2.5 text-slate-500 w-4 h-4" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm uppercase mb-4 flex items-center gap-2"><Filter className="w-4 h-4 text-blue-500" /> Categories</h3>
              <ul className="space-y-1 text-sm text-slate-400">
                {categories.map((cat) => (
                  <li key={cat} onClick={() => setSelectedCategory(cat)} className={`flex items-center gap-2 cursor-pointer p-2 rounded transition-colors ${selectedCategory === cat ? 'bg-slate-800 text-white' : 'hover:text-white hover:bg-slate-900'}`}>
                    <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedCategory === cat ? 'bg-blue-600 border-blue-600' : 'border-slate-600'}`}>{selectedCategory === cat && <CheckCircle className="w-3 h-3 text-white" />}</div> 
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-800">
            <span className="text-sm text-slate-400">Showing <strong>{filteredProducts.length}</strong> Products</span>
            <div className="flex gap-2">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-sm border ${viewMode === 'grid' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 text-slate-400 hover:text-white'}`}><Grid className="w-4 h-4" /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-sm border ${viewMode === 'list' ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 text-slate-400 hover:text-white'}`}><List className="w-4 h-4" /></button>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className={`group block bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all duration-200 ${viewMode === 'list' ? 'flex items-center gap-6 p-4' : ''}`}>
                <div className={`relative bg-white p-6 flex items-center justify-center ${viewMode === 'grid' ? 'h-48 border-b border-slate-800' : 'h-32 w-32 rounded border border-slate-200'}`}>
                  {/* Safely check if stock exists before rendering */}
                  {product.stock && <div className={`absolute top-2 right-2 text-white text-[10px] font-bold px-2 py-0.5 uppercase rounded-sm z-10 ${product.stock === 'In Stock' ? 'bg-green-600' : 'bg-amber-500'}`}>{product.stock}</div>}
                  
                  <Image src={product.imageUrl} alt={product.name} fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                <div className={`p-5 ${viewMode === 'list' ? 'flex-1 flex justify-between items-center' : ''}`}>
                  <div>
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-1">{product.category}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2" dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                  </div>
                  
                  <div className={`mt-4 ${viewMode === 'list' ? 'text-right mt-0' : ''}`}>
                    <button className="w-full py-2 bg-slate-800 hover:bg-white hover:text-slate-900 text-slate-300 text-xs font-bold uppercase transition-colors rounded-sm border border-slate-700">View Spec</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}