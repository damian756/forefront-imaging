'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, 
  Filter, Grid, List, CheckCircle,
  ArrowUpDown, Package, AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// IMPORT YOUR EXISTING DATA
import { products } from '@/lib/products'; 

export default function CatalogPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'category'>('name');

  // Generate unique categories from your actual data
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.sku.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen font-sans bg-slate-950 text-slate-200 selection:bg-blue-500/30">
        {/* Header - Enhanced */}
      <div className="pt-32 pb-12 border-b border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Package className="w-8 h-8 text-blue-500" />
              <h1 className="text-5xl font-bold text-white">
                Product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Catalog</span>
              </h1>
            </div>
            <p className="text-slate-400 max-w-2xl text-lg">
              Browse our complete inventory of <strong className="text-white">{products.length} professional video capture solutions</strong>. All products in stock at our UK warehouse.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        
        {/* Sidebar Filters - Enhanced */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <motion.div 
            className="sticky top-32 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Search */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <label className="text-white font-bold text-xs uppercase mb-3 block flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-500" />
                Search Products
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="SKU or Product Name..." 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                  className="w-full bg-slate-800 border border-slate-700 rounded-md py-2.5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" 
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-2.5 text-slate-400 hover:text-white"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            {/* Sort */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <label className="text-white font-bold text-xs uppercase mb-3 block flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-blue-500" />
                Sort By
              </label>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as 'name' | 'category')}
                className="w-full bg-slate-800 border border-slate-700 rounded-md py-2.5 px-4 text-sm text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none cursor-pointer"
              >
                <option value="name">Name (A-Z)</option>
                <option value="category">Category</option>
              </select>
            </div>

            {/* Categories */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
              <h3 className="text-white font-bold text-xs uppercase mb-4 flex items-center gap-2">
                <Filter className="w-4 h-4 text-blue-500" /> 
                Categories
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
                      className={`flex items-center gap-3 cursor-pointer p-2.5 rounded-md transition-all w-full text-left ${
                        selectedCategory === cat 
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      <div className={`w-4 h-4 border-2 rounded flex items-center justify-center flex-shrink-0 ${
                        selectedCategory === cat ? 'bg-white border-white' : 'border-slate-600'
                      }`}>
                        {selectedCategory === cat && <CheckCircle className="w-3 h-3 text-blue-600" />}
                      </div> 
                      <span className="font-medium">{cat}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Results Count */}
            <div className="bg-gradient-to-r from-blue-950 to-slate-900 border border-blue-900/50 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{filteredProducts.length}</div>
                <div className="text-xs text-blue-300 uppercase tracking-wider">Products Found</div>
              </div>
            </div>
          </motion.div>
        </aside>

        {/* Product Grid - Enhanced */}
        <main className="flex-1">
          <motion.div 
            className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <span className="text-lg font-bold text-white">
                {filteredProducts.length} <span className="text-slate-500 font-normal">of {products.length}</span>
              </span>
              <p className="text-xs text-slate-500 mt-1">
                {searchQuery && `Results for "${searchQuery}"`}
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button 
                onClick={() => setViewMode('grid')} 
                className={`p-2.5 rounded-md border transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Grid className="w-4 h-4" />
              </motion.button>
              <motion.button 
                onClick={() => setViewMode('list')} 
                className={`p-2.5 rounded-md border transition-all ${
                  viewMode === 'list' 
                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30' 
                    : 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
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
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-900 border border-slate-800 mb-6">
                  <AlertCircle className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No Products Found</h3>
                <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md transition-all"
                >
                  Clear All Filters
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
                          className={`h-full bg-slate-900 border border-slate-800 rounded-lg overflow-hidden ${
                            viewMode === 'list' ? 'flex items-center gap-6' : ''
                          }`}
                          whileHover={{ 
                            y: -4,
                            borderColor: 'rgb(59 130 246)',
                            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
                            transition: { duration: 0.3 }
                          }}
                        >
                          <div className={`relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 flex items-center justify-center ${
                            viewMode === 'grid' ? 'h-56 border-b border-slate-800' : 'h-40 w-40 flex-shrink-0'
                          }`}>
                            {product.stock && (
                              <motion.div 
                                className={`absolute top-3 right-3 text-white text-[10px] font-bold px-3 py-1 uppercase rounded-full z-10 ${
                                  product.stock === 'In Stock' ? 'bg-green-600' : 'bg-amber-500'
                                }`}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                              >
                                {product.stock}
                              </motion.div>
                            )}
                            
                            <motion.div
                              className="relative w-full h-full"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Image 
                                src={product.imageUrl} 
                                alt={product.name} 
                                fill 
                                className="object-contain drop-shadow-xl" 
                              />
                            </motion.div>
                          </div>
                          
                          <div className={`p-5 ${viewMode === 'list' ? 'flex-1 flex justify-between items-center' : ''}`}>
                            <div className="flex-1">
                              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2">
                                {product.category}
                              </span>
                              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                                {product.name}
                              </h3>
                              <p className="text-xs text-slate-500 line-clamp-2 mb-4" dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>
                              
                              {viewMode === 'grid' && (
                                <motion.button 
                                  className="w-full py-2.5 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 text-slate-300 hover:text-white text-xs font-bold uppercase transition-all rounded-md"
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                >
                                  View Details →
                                </motion.button>
                              )}
                            </div>
                            
                            {viewMode === 'list' && (
                              <motion.button 
                                className="ml-4 px-6 py-2.5 bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 text-slate-300 hover:text-white text-xs font-bold uppercase transition-all rounded-md whitespace-nowrap"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                View Details →
                              </motion.button>
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