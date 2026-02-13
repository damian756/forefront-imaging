'use client';

import React, { useState, useMemo, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Search, Filter, Grid, List, CheckCircle2, ArrowUpDown, 
  Package, AlertCircle, ShoppingCart, Zap, Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SpaceBackground from '@/components/SpaceBackground';
import { useCart } from '@/contexts/CartContext';
import { getUSBCaptureProducts } from '@/lib/products';

const products = getUSBCaptureProducts(); 

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pcb-substrate">
          <div className="text-center">
            <div className="connection-node-large mx-auto mb-4" />
            <div className="text-white text-xl">INITIALIZING SIGNAL...</div>
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
      <div className="flex flex-col min-h-screen text-white selection:bg-cyan-500/30" style={{ background: '#000000' }}>
        
        {/* Space Background */}
        <SpaceBackground />
        <div className="fixed inset-0 pcb-grid opacity-10 pointer-events-none z-0" />
        
        {/* Hero Header */}
        <div className="pt-32 pb-12 border-b border-green-500/20 relative overflow-hidden">
          <div className="absolute inset-0 tech-grid opacity-30" />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 component-outline pcb-substrate mb-6">
                <div className="led-indicator" />
                <span className="text-sm text-gray-400 uppercase tracking-wide font-semibold">COMPONENT DATABASE</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase">
                <span className="schematic-text">SIGNAL</span> <span className="text-white">CATALOG</span>
              </h1>
              <p className="text-gray-400 max-w-2xl text-lg">
                Browse <strong className="schematic-text">{products.length} engineering-grade capture modules</strong> for signal processing applications
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 relative z-10">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <motion.div 
              className="sticky top-32 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Search */}
              <div className="circuit-glass component-outline p-6 pcb-substrate">
                <label className="text-white font-bold text-xs uppercase mb-3 block flex items-center gap-2">
                  <Search className="w-4 h-4 schematic-text" />
                  COMPONENT SEARCH
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="SKU OR MODULE NAME..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full pcb-substrate border border-green-500/30 rounded py-3 px-4 text-sm text-white placeholder:text-gray-600 focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none transition-all uppercase" 
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-3 text-gray-400 hover:text-white text-lg"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Sort */}
              <div className="circuit-glass component-outline p-6 pcb-substrate">
                <label className="text-white font-bold text-xs uppercase mb-3 block flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 schematic-text" />
                  SORT ORDER
                </label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'category')}
                  className="w-full pcb-substrate border border-green-500/30 rounded py-3 px-4 text-sm text-white focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none cursor-pointer uppercase"
                >
                  <option value="name">NAME (A-Z)</option>
                  <option value="category">CATEGORY</option>
                </select>
              </div>

              {/* Categories */}
              <div className="circuit-glass component-outline p-6 pcb-substrate">
                <h3 className="text-white font-bold text-xs uppercase mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4 schematic-text" /> 
                  CATEGORIES
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
                        className={`flex items-center gap-3 cursor-pointer p-3 rounded transition-all w-full text-left uppercase ${
                          selectedCategory === cat 
                            ? 'trace-border tech-glow text-white' 
                            : 'pcb-substrate text-gray-400 hover:text-white border border-green-500/20'
                        }`}
                      >
                        <div className={`w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                          selectedCategory === cat ? 'border-green-500' : 'border-gray-600'
                        }`}>
                          {selectedCategory === cat && <CheckCircle2 className="w-3 h-3 text-green-400" />}
                        </div> 
                        <span className="font-semibold">{cat}</span>
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Results Count */}
              <div className="circuit-glass component-outline p-6 pcb-substrate relative overflow-hidden">
                <div className="absolute top-2 right-2 via-point" />
                <div className="absolute bottom-2 left-2 via-point" />
                <div className="text-center relative z-10">
                  <motion.div 
                    className="text-4xl font-bold schematic-text mb-1"
                    key={filteredProducts.length}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filteredProducts.length}
                  </motion.div>
                  <div className="text-xs text-green-300 uppercase tracking-wider font-bold">MODULES FOUND</div>
                  <div className="mt-3 signal-meter" />
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <motion.div 
              className="flex justify-between items-center mb-8 pb-4 border-b border-green-500/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <span className="text-lg font-bold text-white">
                  {filteredProducts.length} <span className="text-gray-500 font-normal">of {products.length}</span>
                </span>
                <p className="text-xs text-gray-500 mt-1 uppercase">
                  {searchQuery && `SEARCH: "${searchQuery}"`}
                  {selectedCategory !== 'All' && ` • FILTER: ${selectedCategory}`}
                </p>
              </div>
              <div className="flex gap-2">
                <motion.button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-3 rounded border transition-all ${
                    viewMode === 'grid' 
                      ? 'trace-border tech-glow text-white' 
                      : 'border-green-500/20 text-gray-400 hover:text-white pcb-substrate'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Grid className="w-4 h-4" />
                </motion.button>
                <motion.button 
                  onClick={() => setViewMode('list')} 
                  className={`p-3 rounded border transition-all ${
                    viewMode === 'list' 
                      ? 'trace-border tech-glow text-white' 
                      : 'border-green-500/20 text-gray-400 hover:text-white pcb-substrate'
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
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg component-outline pcb-substrate mb-6">
                    <AlertCircle className="w-12 h-12 schematic-text" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 uppercase">NO COMPONENTS FOUND</h3>
                  <p className="text-gray-400 mb-8 uppercase text-sm">ADJUST SEARCH PARAMETERS</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="px-8 py-4 trace-border tech-glow text-white font-bold rounded-lg transition-all hover:scale-105 uppercase tracking-wider"
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
                        className="schematic-fade-in"
                      >
                        <Link 
                          href={`/products/${product.slug}`} 
                          className="group block h-full"
                        >
                          <motion.div
                            className={`h-full circuit-glass component-outline rounded-lg overflow-hidden relative ${
                              viewMode === 'list' ? 'flex items-center gap-6' : ''
                            }`}
                            whileHover={{ 
                              y: -8,
                              scale: 1.02,
                              transition: { duration: 0.3 }
                            }}
                          >
                            {/* Via Points */}
                            <div className="absolute top-3 left-3 via-point z-20" />
                            <div className="absolute top-3 right-3 via-point z-20" />
                            <div className="absolute bottom-3 left-3 via-point z-20" />
                            <div className="absolute bottom-3 right-3 via-point z-20" />

                            {/* Product Image */}
                            <div className={`relative p-6 flex items-center justify-center border-green-500/20 ${
                              viewMode === 'grid' ? 'h-64 border-b' : 'h-48 w-48 flex-shrink-0 border-r'
                            }`} style={{ background: 'linear-gradient(135deg, #0a1612 0%, #0d1f1a 100%)' }}>
                              
                              {/* Stock Badge */}
                              {product.stock && (
                                <motion.div 
                                  className={`absolute top-4 right-4 text-black text-[10px] font-bold px-3 py-1.5 uppercase rounded z-10 ${
                                    product.stock === 'In Stock' ? 'bg-green-400' : 'bg-orange-400'
                                  }`}
                                  style={{
                                    boxShadow: product.stock === 'In Stock' ? '0 0 10px #00ff00' : '0 0 10px #ff9500'
                                  }}
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.2 }}
                                >
                                  {product.stock === 'In Stock' ? 'ACTIVE' : 'LOW QTY'}
                                </motion.div>
                              )}
                              
                              <div className="absolute inset-0 tech-grid opacity-30" />
                              
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
                                  style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 255, 136, 0.3))' }}
                                />
                              </motion.div>

                              {/* Solder points */}
                              {[{top: '20px', left: '20px'}, {top: '20px', right: '20px'}, {bottom: '20px', left: '20px'}, {bottom: '20px', right: '20px'}].map((pos, i) => (
                                <div key={i} className="absolute solder-point" style={{ ...pos, width: '5px', height: '5px' }} />
                              ))}
                            </div>
                            
                            {/* Product Info */}
                            <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex justify-between items-center' : ''}`}>
                              <div className="flex-1">
                                <span className="tech-label mb-2 inline-block">
                                  {product.category}
                                </span>
                                <h3 className="text-xl font-bold text-white group-hover:schematic-text transition-all mb-3 line-clamp-2 uppercase">
                                  {product.name}
                                </h3>
                                <p className="text-xs text-gray-500 line-clamp-2 mb-4 uppercase" dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                                
                                {viewMode === 'grid' && (
                                  <>
                                    <div className="flex gap-2 mb-4">
                                      <div className="pcb-substrate px-3 py-1.5 rounded border border-green-500/20 flex items-center gap-2">
                                        <Zap className="w-3 h-3 schematic-text" />
                                        <span className="text-xs text-green-300 font-bold">10 Gbps</span>
                                      </div>
                                      <div className="pcb-substrate px-3 py-1.5 rounded border border-green-500/20 flex items-center gap-2">
                                        <Activity className="w-3 h-3 schematic-text" />
                                        <span className="text-xs text-green-300 font-bold">{'< 1ms'}</span>
                                      </div>
                                    </div>

                                    <div className="mb-4">
                                      <span className="text-3xl font-bold text-orange-400">£{product.price}</span>
                                      <span className="text-gray-500 text-sm ml-2">GBP</span>
                                    </div>
                                    <motion.button 
                                      onClick={(e) => handleAddToCart(product, e)}
                                      className="w-full py-3 trace-border text-white text-sm font-bold uppercase transition-all rounded-lg flex items-center justify-center gap-2 tech-glow relative overflow-hidden"
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.98 }}
                                    >
                                      <span className="relative z-10 flex items-center gap-2">
                                        <ShoppingCart className="w-4 h-4" />
                                        {addedItemId === product.id ? 'ADDED' : 'ADD TO CART'}
                                      </span>
                                      <div className="absolute inset-0 signal-trace" />
                                    </motion.button>
                                  </>
                                )}
                              </div>
                              
                              {viewMode === 'list' && (
                                <div className="ml-6 flex items-center gap-6">
                                  <div className="flex gap-2">
                                    <div className="pcb-substrate p-2 rounded border border-green-500/20">
                                      <Zap className="w-4 h-4 schematic-text" />
                                    </div>
                                    <div className="pcb-substrate p-2 rounded border border-green-500/20">
                                      <Activity className="w-4 h-4 schematic-text" />
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-3xl font-bold text-orange-400">£{product.price}</span>
                                  </div>
                                  <motion.button 
                                    onClick={(e) => handleAddToCart(product, e)}
                                    className="px-6 py-3 trace-border text-white text-sm font-bold uppercase transition-all rounded-lg whitespace-nowrap flex items-center gap-2 tech-glow"
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
