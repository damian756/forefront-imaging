'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, CheckCircle2, Truck, Shield, ShoppingCart, Zap, Activity, Radio, Package, Award, Clock, ChevronDown, Monitor, Video, Gamepad2, GraduationCap, HeartPulse, Church, Layers, Warehouse, Ticket, Mic, Factory, Archive, Palette, Presentation, Settings, Clapperboard, Microscope, Trophy, Satellite, Box, Star, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/products';
import { useState, useEffect } from 'react';

const iconMap: Record<string, React.ElementType> = {
  Video, Monitor, Gamepad2, GraduationCap, HeartPulse, Church, Layers, Warehouse,
  Ticket, Mic, Factory, Archive, Palette, Presentation, Settings, Radio,
  Clapperboard, Microscope, Trophy, Satellite, Download, Activity, Box
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showFloatingCta, setShowFloatingCta] = useState(false);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      slug: product.slug,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // Show floating CTA when user scrolls past purchase card
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloatingCta(scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* ────────────────────────────────────────────
              LEFT SIDEBAR - Sticky
              ──────────────────────────────────────────── */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              
              {/* Product Image */}
              <motion.div
                className="fiber-glass refraction-border rounded-2xl p-6 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute top-4 left-4 z-20 uncompressed-badge px-3 py-1.5 text-black text-[10px] font-bold uppercase rounded font-mono">
                  AUTHORIZED
                </div>
                <div className="absolute inset-0 fiber-core opacity-30" />
                <div className="relative h-[320px] flex items-center justify-center">
                  <Image src={product.imageUrl} alt={product.name} fill className="object-contain" style={{ filter: 'drop-shadow(0 15px 40px rgba(0, 255, 255, 0.35))' }} />
                </div>
              </motion.div>

              {/* Highlights */}
              {product.highlights && product.highlights.length > 0 && (
                <motion.div className="grid grid-cols-3 gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                  {product.highlights.map((h, i) => (
                    <div key={i} className="text-center p-3 fiber-glass refraction-border rounded-lg">
                      <div className="text-xl font-bold text-cyan-400 font-mono">{h.value}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">{h.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* Purchase Card */}
              <motion.div className="fiber-glass refraction-border rounded-2xl p-6 relative overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
                <div className="absolute inset-0 light-beam opacity-5" />
                <div className="relative z-10">
                  {/* Stock Status */}
                  {product.stock && (
                    <div className="flex items-center gap-2 mb-4 pb-4 border-b border-cyan-500/20">
                      <motion.div className="w-2 h-2 rounded-full bg-green-400" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                      <span className="text-green-400 font-mono text-sm font-bold">{product.stock}</span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-5">
                    <span className="text-gray-400 text-xs uppercase font-bold block mb-1 font-mono">Price</span>
                    <div className="flex items-baseline gap-2">
                      {product.price > 0 ? (
                        <>
                          <span className="text-4xl font-bold text-green-400 font-mono">£{product.price}</span>
                          <span className="text-gray-400 text-sm font-mono">GBP</span>
                        </>
                      ) : (
                        <span className="text-4xl font-bold text-cyan-400 font-mono">FREE</span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart / Download Button */}
                  {product.price > 0 ? (
                    <motion.button
                      onClick={handleAddToCart}
                      className={`w-full py-4 text-white font-bold uppercase text-center rounded-xl transition-all flex items-center justify-center gap-2 relative overflow-hidden font-mono mb-4 text-base tracking-wide shadow-lg ${added ? 'bg-green-500 shadow-green-500/30' : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-cyan-500/30 hover:shadow-cyan-500/50'}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {added ? 'ADDED!' : 'ADD TO CART'}
                    </motion.button>
                  ) : (
                    <Link
                      href="/downloads"
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold uppercase text-center rounded-xl transition-all flex items-center justify-center gap-2 font-mono mb-4 text-base tracking-wide shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50"
                    >
                      <Download className="w-5 h-5" />
                      FREE DOWNLOAD
                    </Link>
                  )}

                  {/* Trust Badges */}
                  {product.price > 0 && (
                  <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                    <div className="flex items-center gap-2 p-2 glass-frosted rounded-lg border border-green-500/20">
                      <CheckCircle2 className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span className="text-green-300 font-semibold font-mono">Free Shipping</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 glass-frosted rounded-lg border border-cyan-500/20">
                      <Shield className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                      <span className="text-cyan-300 font-semibold font-mono">3-Yr Warranty</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 glass-frosted rounded-lg border border-blue-500/20">
                      <Package className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span className="text-blue-300 font-semibold font-mono">UK Stock</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 glass-frosted rounded-lg border border-purple-500/20">
                      <Clock className="w-3 h-3 text-purple-400 flex-shrink-0" />
                      <span className="text-purple-300 font-semibold font-mono">Next Day</span>
                    </div>
                  </div>
                  )}

                  {/* Contact Link */}
                  <Link href="/contact" className="block py-3 glass-frosted border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white font-semibold text-center rounded-lg transition-all text-xs font-mono uppercase">
                    Questions? Contact Us
                  </Link>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div className="grid grid-cols-2 gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <button className="flex items-center justify-center gap-2 py-3 fiber-glass border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white text-xs font-bold uppercase transition-all rounded-lg font-mono">
                  <Download className="w-3.5 h-3.5" /> DATASHEET
                </button>
                <button className="flex items-center justify-center gap-2 py-3 fiber-glass border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white text-xs font-bold uppercase transition-all rounded-lg font-mono">
                  <ExternalLink className="w-3.5 h-3.5" /> MANUAL
                </button>
              </motion.div>

              {/* What's in the Box */}
              {product.whatsInBox && product.whatsInBox.length > 0 && (
                <motion.div className="fiber-glass refraction-border rounded-xl p-5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
                  <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 font-mono flex items-center gap-2">
                    <Box className="w-3.5 h-3.5 text-cyan-400" />
                    IN THE BOX
                  </h3>
                  <ul className="space-y-2">
                    {product.whatsInBox.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Trust Signals */}
              <motion.div className="grid grid-cols-3 gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="text-center p-3 glass-frosted rounded-lg border border-cyan-500/20">
                  <Award className="w-6 h-6 text-cyan-400 mx-auto mb-1" />
                  <div className="text-[10px] text-gray-400 uppercase font-mono">Official</div>
                  <div className="text-xs font-bold text-white font-mono">Dist.</div>
                </div>
                <div className="text-center p-3 glass-frosted rounded-lg border border-cyan-500/20">
                  <Star className="w-6 h-6 text-amber-400 mx-auto mb-1" />
                  <div className="text-[10px] text-gray-400 uppercase font-mono">4.9/5</div>
                  <div className="text-xs font-bold text-white font-mono">Rated</div>
                </div>
                <div className="text-center p-3 glass-frosted rounded-lg border border-cyan-500/20">
                  <Shield className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                  <div className="text-[10px] text-gray-400 uppercase font-mono">3-Year</div>
                  <div className="text-xs font-bold text-white font-mono">Support</div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ────────────────────────────────────────────
              RIGHT CONTENT - Full Width, Scrollable
              ──────────────────────────────────────────── */}
          <div className="lg:col-span-8 space-y-10">

            {/* Status Bar */}
            <motion.div className="flex flex-wrap items-center gap-3 pb-6 border-b border-cyan-500/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 px-3 py-2 glass-frosted rounded-lg border border-cyan-500/20">
                <Truck className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-mono text-xs font-semibold">Next Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 glass-frosted rounded-lg border border-cyan-500/20">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-mono text-xs font-semibold">3-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 glass-frosted rounded-lg border border-cyan-500/20">
                <Award className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-mono text-xs font-semibold">Authorized Stock</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="prose prose-invert prose-cyan max-w-none text-gray-300 leading-relaxed prose-h2:text-xl prose-h2:text-white prose-h2:font-bold prose-h2:mt-6 prose-h2:mb-3 prose-p:mb-4 prose-strong:text-white prose-strong:font-semibold" dangerouslySetInnerHTML={{ __html: product.description }} />
            </motion.div>

            {/* Key Features */}
            <motion.div className="fiber-glass refraction-border rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                KEY FEATURES
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <div className="mt-1.5 connection-node w-2 h-2 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Use Cases */}
            {product.useCases && product.useCases.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  IDEAL FOR
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.useCases.map((uc, i) => {
                    const Icon = iconMap[uc.icon] || Monitor;
                    return (
                      <div key={i} className="fiber-glass refraction-border rounded-xl p-5 hover:border-cyan-500/40 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">{uc.description}</p>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Compatible Software */}
            {product.compatibleSoftware && product.compatibleSoftware.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                  <Activity className="w-4 h-4 text-cyan-400" />
                  WORKS WITH
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.compatibleSoftware.map((sw, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{sw}</span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Compatible OS */}
            {product.compatibleOS && product.compatibleOS.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  COMPATIBLE SYSTEMS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {product.compatibleOS.map((os, i) => (
                    <div key={i} className="text-center p-3 rounded-xl border border-cyan-500/15 bg-cyan-500/5">
                      <div className="text-sm font-semibold text-white">{os.name}</div>
                      <div className="text-[11px] text-gray-500">{os.version}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Full Specifications */}
            {product.specs && Object.keys(product.specs).length > 0 && (
              <motion.div className="fiber-glass refraction-border rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                  <Radio className="w-4 h-4 text-cyan-400" />
                  FULL SPECIFICATIONS
                </h3>
                <div className="divide-y divide-cyan-500/10">
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center py-3 gap-1 md:gap-4">
                      <span className="text-xs text-gray-500 uppercase font-mono tracking-wide md:w-48 flex-shrink-0">{key}</span>
                      <span className="text-sm text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* FAQ Accordion */}
            {product.faqs && product.faqs.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  FREQUENTLY ASKED QUESTIONS
                </h3>
                <div className="space-y-3">
                  {product.faqs.map((faq, i) => (
                    <div key={i} className="fiber-glass refraction-border rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-cyan-500/5 transition-colors"
                      >
                        <span className="text-sm font-medium text-white pr-4">{faq.question}</span>
                        <ChevronDown className={`w-4 h-4 text-cyan-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-4 pb-4 text-sm text-gray-400 leading-relaxed border-t border-cyan-500/10 pt-3">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────
          FLOATING CTA BAR (Mobile)
          ──────────────────────────────────────────── */}
      <AnimatePresence>
        {showFloatingCta && product.price > 0 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-dark-blue/95 backdrop-blur-xl border-t border-cyan-500/30 p-4 shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="text-xs text-gray-400 font-mono">Price</div>
                  <div className="text-xl font-bold text-green-400 font-mono">£{product.price}</div>
                </div>
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 py-3 text-white font-bold uppercase text-sm rounded-lg flex items-center justify-center gap-2 font-mono shadow-lg ${added ? 'bg-green-500 shadow-green-500/30' : 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-cyan-500/30'}`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {added ? 'ADDED!' : 'ADD TO CART'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
