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
import { useCart } from '@/contexts/CartContext';
import { getUSBCaptureProducts } from '@/lib/products';

const products = getUSBCaptureProducts(); 

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--fiber-gradient)' }}>
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-fiber-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <div className="text-soft-white text-xl">Loading...</div>
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
      <div className="flex flex-col min-h-screen text-white selection:bg-fiber-blue/20" style={{ background: 'var(--fiber-gradient)' }}>
        
        {/* Grid Background */}
        <div className="fixed inset-0 builder-canvas opacity-30 pointer-events-none z-0" />
        
        {/* Hero Header */}
        <div className="pt-20 pb-12 border-b border-fiber-blue/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(59, 130, 246, 0.3), transparent 60%)' }} />
          
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-lg studio-border mb-6">
                <Package className="w-4 h-4 text-fiber-cyan" />
                <span className="text-xs text-cool-gray uppercase tracking-widest font-semibold">Product Catalog</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 uppercase tracking-tight">
                <span className="text-gradient">Capture</span> <span className="text-soft-white">Hardware</span>
              </h1>
              <p className="text-cool-gray max-w-2xl text-lg font-light">
                Browse <strong className="text-fiber-cyan font-semibold">{products.length} professional capture devices</strong> for signal processing applications
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 relative z-10">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-72 flex-shrink-0">
            <motion.div 
              className="sticky top-20 space-y-5"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Search */}
              <div className="glass-panel rounded-lg studio-border p-5">
                <label className="text-soft-white font-semibold text-xs uppercase mb-3 block flex items-center gap-2">
                  <Search className="w-4 h-4 text-fiber-cyan" />
                  Search
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)} 
                    className="w-full bg-dark-blue/60 border border-fiber-blue/25 rounded-lg py-2.5 px-4 text-sm text-soft-white placeholder:text-cool-gray/50 focus:border-fiber-cyan/50 focus:ring-1 focus:ring-fiber-cyan/30 outline-none transition-all" 
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-2.5 text-cool-gray hover:text-soft-white text-lg"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Sort */}
              <div className="glass-panel rounded-lg studio-border p-5">
                <label className="text-soft-white font-semibold text-xs uppercase mb-3 block flex items-center gap-2">
                  <ArrowUpDown className="w-4 h-4 text-fiber-cyan" />
                  Sort By
                </label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value as 'name' | 'category')}
                  className="w-full bg-dark-blue/60 border border-fiber-blue/25 rounded-lg py-2.5 px-4 text-sm text-soft-white focus:border-fiber-cyan/50 focus:ring-1 focus:ring-fiber-cyan/30 outline-none cursor-pointer"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="category">Category</option>
                </select>
              </div>

              {/* Categories */}
              <div className="glass-panel rounded-lg studio-border p-5">
                <h3 className="text-soft-white font-semibold text-xs uppercase mb-4 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-fiber-cyan" /> 
                  Categories
                </h3>
                <ul className="space-y-1.5 text-sm">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setSelectedCategory(cat)} 
                        className={`flex items-center gap-3 cursor-pointer p-2.5 rounded-lg transition-all w-full text-left ${
                          selectedCategory === cat 
                            ? 'bg-fiber-blue/15 border border-fiber-blue/40 text-soft-white' 
                            : 'text-cool-gray hover:text-soft-white hover:bg-fiber-blue/10 border border-transparent'
                        }`}
                      >
                        <div className={`w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                          selectedCategory === cat ? 'border-fiber-cyan' : 'border-cool-gray/40'
                        }`}>
                          {selectedCategory === cat && <CheckCircle2 className="w-3 h-3 text-fiber-cyan" />}
                        </div> 
                        <span className="font-medium">{cat}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results Count */}
              <div className="glass-panel rounded-lg studio-border p-5">
                <div className="text-center">
                  <motion.div 
                    className="text-4xl font-bold text-fiber-cyan mb-1"
                    key={filteredProducts.length}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {filteredProducts.length}
                  </motion.div>
                  <div className="text-xs text-cool-gray uppercase tracking-wider font-semibold">Products Found</div>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <motion.div 
              className="flex justify-between items-center mb-8 pb-4 border-b border-fiber-blue/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div>
                <span className="text-lg font-bold text-soft-white">
                  {filteredProducts.length} <span className="text-cool-gray/60 font-normal">of {products.length}</span>
                </span>
                <p className="text-xs text-cool-gray/60 mt-1">
                  {searchQuery && `Search: "${searchQuery}"`}
                  {selectedCategory !== 'All' && ` • ${selectedCategory}`}
                </p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-2.5 rounded-lg border transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-fiber-blue/15 border-fiber-blue/40 text-fiber-cyan' 
                      : 'border-fiber-blue/20 text-cool-gray hover:text-soft-white hover:bg-fiber-blue/10'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('list')} 
                  className={`p-2.5 rounded-lg border transition-all ${
                    viewMode === 'list' 
                      ? 'bg-fiber-blue/15 border-fiber-blue/40 text-fiber-cyan' 
                      : 'border-fiber-blue/20 text-cool-gray hover:text-soft-white hover:bg-fiber-blue/10'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
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
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-lg glass-panel studio-border mb-6">
                    <AlertCircle className="w-12 h-12 text-fiber-cyan" />
                  </div>
                  <h3 className="text-3xl font-bold text-soft-white mb-2">No Products Found</h3>
                  <p className="text-cool-gray mb-8 text-sm">Try adjusting your search or filters</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                    className="btn-primary px-8 py-3"
                  >
                    Reset Filters
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
                      >
                        <Link 
                          href={`/products/${product.slug}`} 
                          className="group block h-full"
                        >
                          <motion.div
                            className={`h-full glass-panel rounded-lg studio-border overflow-hidden relative ${
                              viewMode === 'list' ? 'flex items-center gap-6' : ''
                            }`}
                            whileHover={{ 
                              y: -4,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {/* Product Image */}
                            <div className={`relative p-6 flex items-center justify-center border-fiber-blue/20 ${
                              viewMode === 'grid' ? 'h-64 border-b' : 'h-48 w-48 flex-shrink-0 border-r'
                            }`} style={{ background: 'linear-gradient(135deg, var(--deep-void), var(--dark-blue))' }}>
                              
                              {/* Stock Badge */}
                              {product.stock && (
                                <div 
                                  className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1.5 uppercase rounded z-10 ${
                                    product.stock === 'In Stock' 
                                      ? 'bg-fiber-cyan text-dark-blue' 
                                      : 'bg-amber-400 text-dark-blue'
                                  }`}
                                >
                                  {product.stock === 'In Stock' ? 'In Stock' : 'Low Stock'}
                                </div>
                              )}
                              
                              <motion.div
                                className="relative w-full h-full z-10"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.3 }}
                              >
                                <Image 
                                  src={product.imageUrl} 
                                  alt={product.name} 
                                  fill 
                                  className="object-contain" 
                                  style={{ filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))' }}
                                />
                              </motion.div>
                            </div>
                            
                            {/* Product Info */}
                            <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex justify-between items-center' : ''}`}>
                              <div className="flex-1">
                                <span className="text-[10px] text-fiber-cyan font-semibold uppercase tracking-wider">
                                  {product.category}
                                </span>
                                <h3 className="text-lg font-bold text-soft-white group-hover:text-fiber-cyan transition-colors mt-1 mb-2 line-clamp-2">
                                  {product.name}
                                </h3>
                                <p className="text-xs text-cool-gray/80 line-clamp-2 mb-4" dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                                
                                {viewMode === 'grid' && (
                                  <>
                                    <div className="flex gap-2 mb-4">
                                      <div className="bg-dark-blue/60 px-3 py-1.5 rounded-lg border border-fiber-blue/25 flex items-center gap-1.5">
                                        <Zap className="w-3 h-3 text-fiber-cyan" />
                                        <span className="text-xs text-fiber-cyan font-semibold">10 Gbps</span>
                                      </div>
                                      <div className="bg-dark-blue/60 px-3 py-1.5 rounded-lg border border-fiber-blue/25 flex items-center gap-1.5">
                                        <Activity className="w-3 h-3 text-fiber-cyan" />
                                        <span className="text-xs text-fiber-cyan font-semibold">{'< 1ms'}</span>
                                      </div>
                                    </div>

                                    <div className="mb-4">
                                      <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                                      <span className="text-cool-gray/60 text-sm ml-2">GBP</span>
                                    </div>
                                    <motion.button 
                                      onClick={(e) => handleAddToCart(product, e)}
                                      className="w-full btn-primary py-3 text-sm font-semibold flex items-center justify-center gap-2"
                                      whileHover={{ scale: 1.01 }}
                                      whileTap={{ scale: 0.99 }}
                                    >
                                      <ShoppingCart className="w-4 h-4" />
                                      {addedItemId === product.id ? 'Added!' : 'Add to Cart'}
                                    </motion.button>
                                  </>
                                )}
                              </div>
                              
                              {viewMode === 'list' && (
                                <div className="ml-6 flex items-center gap-6">
                                  <div className="flex gap-2">
                                    <div className="bg-dark-blue/60 p-2 rounded-lg border border-fiber-blue/25">
                                      <Zap className="w-4 h-4 text-fiber-cyan" />
                                    </div>
                                    <div className="bg-dark-blue/60 p-2 rounded-lg border border-fiber-blue/25">
                                      <Activity className="w-4 h-4 text-fiber-cyan" />
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                                  </div>
                                  <motion.button 
                                    onClick={(e) => handleAddToCart(product, e)}
                                    className="btn-primary px-6 py-3 text-sm font-semibold whitespace-nowrap flex items-center gap-2"
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                  >
                                    <ShoppingCart className="w-4 h-4" />
                                    {addedItemId === product.id ? 'Added!' : 'Add'}
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
