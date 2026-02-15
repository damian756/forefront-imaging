'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Package, ShoppingCart, Zap, Activity, Download } from 'lucide-react';
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

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
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
                      className="h-full glass-panel rounded-lg studio-border overflow-hidden relative"
                      whileHover={{
                        y: -4,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Product Image */}
                      <div
                        className="relative h-64 p-6 flex items-center justify-center border-b border-fiber-blue/20"
                        style={{ background: 'linear-gradient(135deg, var(--deep-void), var(--dark-blue))' }}
                      >
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
                      <div className="p-6">
                        <span className="text-[10px] text-fiber-cyan font-semibold uppercase tracking-wider">
                          {product.category}
                        </span>
                        <h3 className="text-lg font-bold text-soft-white group-hover:text-fiber-cyan transition-colors mt-1 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-xs text-cool-gray/80 line-clamp-2 mb-4" dangerouslySetInnerHTML={{ __html: product.shortDescription }}></p>

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
                          {product.price > 0 ? (
                            <>
                              <span className="text-3xl font-bold text-gradient">£{product.price}</span>
                              <span className="text-cool-gray/60 text-sm ml-2">GBP</span>
                            </>
                          ) : (
                            <span className="text-3xl font-bold text-gradient">FREE</span>
                          )}
                        </div>
                        {product.price > 0 ? (
                        <motion.button
                          onClick={(e) => handleAddToCart(product, e)}
                          className="w-full btn-primary py-3 text-sm font-semibold flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <ShoppingCart className="w-4 h-4" />
                          {addedItemId === product.id ? 'Added!' : 'Add to Cart'}
                        </motion.button>
                        ) : (
                        <Link
                          href="/downloads"
                          className="w-full btn-primary py-3 text-sm font-semibold flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Free Download
                        </Link>
                        )}
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
