'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Search, Filter, Grid, List, CheckCircle2, ArrowUpDown, 
  Package, AlertCircle, ShoppingCart, Zap, Activity, Radio,
  Signal, Waves
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FiberOpticBackground from '@/components/FiberOpticBackground';
import { useCart } from '@/contexts/CartContext';
import { getUSBCaptureProducts } from '@/lib/products';

const products = getUSBCaptureProducts(); 

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--optic-black)' }}>
          <div className="text-center">
            <div className="connection-node w-16 h-16 rounded-full mx-auto mb-4" />
            <div className="text-white text-xl font-mono">Initializing Signal...</div>
          </div>
        </div>
        <Footer />
      </>
    }>
      <CatalogPage />
    </Suspense>
  );
}

function CatalogPage() {
  const { addItem } = useCart();
  const [addedItemId, setAddedItemId] = useState<string | null>(null);
  
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category')?.replace(/\+/g, ' ') || 'All';
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');

  const handleAddToCart = (product: typeof products[0], e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      slug: product.slug,
    });
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 2000);
  };

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans text-white selection:bg-cyan-500/30" style={{ background: 'var(--optic-black)' }}>
        
        {/* Fiber Optic Background */}
        <FiberOpticBackground />
        <div className="fixed inset-0 spectrum-lines opacity-20 pointer-events-none z-0" />
        
        {/* Hero Header */}
        <div className="pt-32 pb-12 border-b border-cyan-500/20 relative overflow-hidden">
          {/* Light beams */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] opacity-30" 
               style={{ background: 'radial-gradient(circle, #00ffff, transparent)' }} />
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-[150px] opacity-20"
               style={{ background: 'radial-gradient(circle, #0080ff, transparent)' }} />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-frosted rounded-full border border-cyan-500/30 mb-6">
                <Radio className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold font-mono">Photonic Catalog</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                <span className="prismatic-text">Signal</span> <span className="text-white">Library</span>
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg">
                Browse <strong className="text-cyan-400">{products.length} light-speed capture devices</strong> delivering uncompressed signal transmission
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 relative z-10">
          
          {/* Sidebar Filters - Fiber Optic Style */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <motion.div 
              className="sticky top-32 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Search */}
              <div className="fiber-glass refraction-border rounded-2xl p-6">
                <label className="text-white font-bold text-xs uppercase mb-3 block flex items-center gap-2 font-mono">
                  <Search className="w-4 h-4 text-cyan-400" />
                  Signal Search
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="SKU or Device Name..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full glass-frosted border border-cyan-500/30 rounded-xl py-3 px-4 text-sm text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all font-mono" 
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Sort */}
              <div className="fiber-glass refraction-border rounded-2xl p-6">
                <label className="text-white font-bold text-xs uppercase mb-3 block flex items-center gap-2 font-mono">
                  <ArrowUpDown className="w-4 h-4 text-cyan-400" />
                  Transmission Order
                </label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'category')}
                  className="w-full glass-frosted border border-cyan-500/30 rounded-xl py-3 px-4 text-sm text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none cursor-pointer font-mono"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="category">Category</option>
                </select>
              </div>

              {/* Categories */}
              <div className="fiber-glass refraction-border rounded-2xl p-6">
                <h3 className="text-white font-bold text-xs uppercase mb-4 flex items-center gap-2 font-mono">
                  <Filter className="w-4 h-4 text-cyan-400" /> 
                  Signal Types
                </h3>
                <ul className="space-y-2 text-sm">
                  {categories.map((cat) => (
                    <motion.li 
                      key={cat}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <button
                        onClick={() => setSelectedCategory(cat)} 
                        className={`flex items-center gap-3 cursor-pointer p-3 rounded-xl transition-all w-full text-left font-mono ${
                          selectedCategory === cat 
                            ? 'refraction-border fiber-glow text-white' 
                            : 'glass-frosted text-gray-400 hover:text-white border border-cyan-500/20'
                        }`}
                      >
                        <div className={`w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                          selectedCategory === cat ? 'signal-pulse' : 'border-gray-600'
                        }`}>
                          {selectedCategory === cat && <CheckCircle2 className="w-3 h-3 text-cyan-400" />}
                        </div> 
                        <span className="font-semibold">{cat}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Results Count */}
              <div className="fiber-glass refraction-border rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute inset-0 light-beam opacity-10" />
                <div className="text-center relative z-10">
                  <motion.div 
                    className="text-4xl font-bold prismatic-text mb-1 font-mono"
                    key={filteredProducts.length}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filteredProducts.length}
                  </motion.div>
                  <div className="text-xs text-cyan-300 uppercase tracking-wider font-bold font-mono">Active Signals</div>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <motion.div 
              className="flex justify-between items-center mb-8 pb-4 border-b border-cyan-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <span className="text-lg font-bold text-white font-mono">
                  {filteredProducts.length} <span className="text-gray-500 font-normal">of {products.length}</span>
                </span>
                <p className="text-xs text-gray-500 mt-1 font-mono">
                  {searchQuery && `Results for "${searchQuery}"`}
                  {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                </p>
              </div>
              <div className="flex gap-2">
                <motion.button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-3 rounded-xl border transition-all ${
                    viewMode === 'grid' 
                      ? 'refraction-border fiber-glow text-white' 
                      : 'border-cyan-500/20 text-gray-400 hover:text-white glass-frosted'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  onClick={() => setViewMode('list')} 
                  className={`p-3 rounded-xl border transition-all ${
                    viewMode === 'list' 
                      ? 'refraction-border fiber-glow text-white' 
                      : 'border-cyan-500/20 text-gray-400 hover:text-white glass-frosted'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <List className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Empty State */}
            <AnimatePresence mode="wait">
              {filteredProducts.length === 0 ? (
                <motion.div 
                  className="text-center py-20"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full fiber-glass refraction-border mb-6">
                    <AlertCircle className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 font-mono">NO SIGNAL DETECTED</h3>
                  <p className="text-gray-400 mb-8 font-mono">Adjust search parameters or filter settings</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="px-8 py-4 refraction-border fiber-glow text-white font-bold rounded-xl transition-all hover:scale-105 font-mono"
                  >
                    RESET FILTERS
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
                  layout
                >
                  <AnimatePresence>
                    {filteredProducts.map((product, index) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="fiber-fade-in"
                      >
                        <Link 
                          href={`/products/${product.slug}`} 
                          className="group block h-full"
                        >
                          <motion.div
                            className={`h-full fiber-glass refraction-border rounded-2xl overflow-hidden ${
                              viewMode === 'list' ? 'flex items-center gap-6' : ''
                            }`}
                            whileHover={{ 
                              y: -8,
                              scale: 1.02,
                              transition: { duration: 0.3 }
                            }}
                          >
                            {/* Product Image */}
                            <div className={`relative p-6 flex items-center justify-center border-b border-cyan-500/20 ${
                              viewMode === 'grid' ? 'h-64' : 'h-48 w-48 flex-shrink-0 border-b-0 border-r'
                            }`} style={{ background: 'linear-gradient(135deg, #0a0a18 0%, #151520 100%)' }}>
                              
                              {/* Stock Badge */}
                              {product.stock && (
                                <motion.div 
                                  className={`absolute top-4 right-4 text-black text-[10px] font-bold px-3 py-1.5 uppercase rounded-lg z-10 font-mono ${
                                    product.stock === 'In Stock' ? 'uncompressed-badge' : 'bg-gradient-to-r from-magenta-500 to-purple-500'
                                  }`}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                  {product.stock === 'In Stock' ? 'AVAILABLE' : 'LOW STOCK'}
                                </motion.div>
                              )}
                              
                              {/* Fiber core glow */}
                              <div className="absolute inset-0 fiber-core opacity-60" />
                              
                              <motion.div
                                className="relative w-full h-full z-10"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Image 
                                  src={product.imageUrl} 
                                  alt={product.name} 
                                  fill 
                                  className="object-contain" 
                                  style={{ filter: 'drop-shadow(0 10px 40px rgba(0, 255, 255, 0.4))' }}
                                />
                              </motion.div>

                              {/* Light underglow */}
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-t from-cyan-500/20 to-transparent blur-2xl" />
                            </div>
                            
                            {/* Product Info */}
                            <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex justify-between items-center' : ''}`}>
                              <div className="flex-1">
                                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-2 font-bold">
                                  {product.category}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:prismatic-text transition-all mb-3 line-clamp-2">
                                  {product.name}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-2 mb-4" dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                                
                                {viewMode === 'grid' && (
                                  <>
                                    {/* Technical Specs */}
                                    <div className="flex gap-2 mb-4">
                                      <div className="glass-frosted px-3 py-1.5 rounded-lg border border-cyan-500/20 flex items-center gap-2">
                                        <Zap className="w-3 h-3 text-cyan-400" />
                                        <span className="text-xs text-cyan-300 font-mono font-bold">10 Gbps</span>
                                      </div>
                                      <div className="glass-frosted px-3 py-1.5 rounded-lg border border-cyan-500/20 flex items-center gap-2">
                                        <Activity className="w-3 h-3 text-green-400" />
                                        <span className="text-xs text-green-300 font-mono font-bold">{'< 1ms'}</span>
                                      </div>
                                    </div>

                                    <div className="mb-4">
                                      <span className="text-3xl font-bold text-green-400 font-mono">£{product.price}</span>
                                      <span className="text-gray-500 text-sm ml-2 font-mono">GBP</span>
                                    </div>
                                    <motion.button 
                                      onClick={(e) => handleAddToCart(product, e)}
                                      className="w-full py-3 refraction-border text-white text-sm font-bold uppercase transition-all rounded-xl flex items-center justify-center gap-2 fiber-glow font-mono relative overflow-hidden"
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <span className="relative z-10 flex items-center gap-2">
                                        <ShoppingCart className="w-4 h-4" />
                                        {addedItemId === product.id ? 'SIGNAL ACQUIRED' : 'ADD TO CART'}
                                      </span>
                                      <div className="absolute inset-0 light-streak opacity-0 hover:opacity-100" />
                                    </motion.button>
                                  </>
                                )}
                              </div>
                              
                              {viewMode === 'list' && (
                                <div className="ml-6 flex items-center gap-6">
                                  <div className="flex gap-2">
                                    <div className="glass-frosted px-3 py-2 rounded-lg border border-cyan-500/20">
                                      <Zap className="w-4 h-4 text-cyan-400" />
                                    </div>
                                    <div className="glass-frosted px-3 py-2 rounded-lg border border-cyan-500/20">
                                      <Activity className="w-4 h-4 text-green-400" />
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-3xl font-bold text-green-400 font-mono">£{product.price}</span>
                                  </div>
                                  <motion.button 
                                    onClick={(e) => handleAddToCart(product, e)}
                                    className="px-6 py-3 refraction-border text-white text-sm font-bold uppercase transition-all rounded-xl whitespace-nowrap flex items-center gap-2 fiber-glow font-mono"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                  >
                                    <ShoppingCart className="w-4 h-4" />
                                    {addedItemId === product.id ? 'ADDED' : 'ADD'}
                                  </motion.button>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
