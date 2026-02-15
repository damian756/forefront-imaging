'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Download, CheckCircle2, Truck, Shield, ShoppingCart, Zap, Activity, Radio, Package, Award, Clock, ChevronDown, Monitor, Video, Gamepad2, GraduationCap, HeartPulse, Church, Layers, Warehouse, Ticket, Mic, Factory, Archive, Palette, Presentation, Settings, Clapperboard, Microscope, Trophy, Satellite, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Product } from '@/lib/products';
import { useState } from 'react';

const iconMap: Record<string, React.ElementType> = {
  Video, Monitor, Gamepad2, GraduationCap, HeartPulse, Church, Layers, Warehouse,
  Ticket, Mic, Factory, Archive, Palette, Presentation, Settings, Radio,
  Clapperboard, Microscope, Trophy, Satellite, Download, Activity, Box
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* ── Left Column ── */}
        <div className="lg:col-span-5">
          {/* Product Image */}
          <motion.div
            className="fiber-glass refraction-border rounded-2xl p-8 mb-6 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="absolute top-6 left-6 z-20 uncompressed-badge px-4 py-2 text-black text-xs font-bold uppercase rounded-lg font-mono"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              AUTHORIZED STOCK
            </motion.div>
            <div className="absolute inset-0 fiber-core opacity-40" />
            <div className="relative h-[400px] flex items-center justify-center">
              <motion.div className="relative w-full h-full" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Image src={product.imageUrl} alt={product.name} fill className="object-contain" style={{ filter: 'drop-shadow(0 20px 60px rgba(0, 255, 255, 0.4))' }} />
              </motion.div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-cyan-500/30 via-blue-500/20 to-transparent blur-3xl" />
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <button className="flex items-center justify-center gap-2 py-4 fiber-glass border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white text-sm font-bold uppercase transition-all rounded-xl font-mono">
              <Download className="w-4 h-4" /> DATASHEET
            </button>
            <button className="flex items-center justify-center gap-2 py-4 fiber-glass border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white text-sm font-bold uppercase transition-all rounded-xl font-mono">
              <Radio className="w-4 h-4" /> PRINT SPEC
            </button>
          </motion.div>

          {/* Highlights Cards */}
          {product.highlights && product.highlights.length > 0 && (
            <motion.div className="mt-6 grid grid-cols-3 gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              {product.highlights.map((h, i) => (
                <div key={i} className="text-center p-4 fiber-glass refraction-border rounded-xl">
                  <div className="text-2xl font-bold text-cyan-400 font-mono">{h.value}</div>
                  <div className="text-[11px] text-gray-400 mt-1 leading-tight">{h.label}</div>
                </div>
              ))}
            </motion.div>
          )}

          {/* What's in the Box */}
          {product.whatsInBox && product.whatsInBox.length > 0 && (
            <motion.div className="mt-6 fiber-glass refraction-border rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                <Package className="w-4 h-4 text-cyan-400" />
                WHAT&apos;S IN THE BOX
              </h3>
              <ul className="space-y-2">
                {product.whatsInBox.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* ── Right Column ── */}
        <div className="lg:col-span-7">
          {/* Status Bar */}
          <motion.div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-cyan-500/20" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {product.stock && (
              <div className="flex items-center gap-2 px-4 py-2 glass-frosted rounded-lg border border-green-500/30">
                <motion.div className="w-2 h-2 rounded-full bg-green-400" animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                <span className="text-green-400 font-mono text-sm font-bold">{product.stock}</span>
              </div>
            )}
            <div className="flex items-center gap-2 px-4 py-2 glass-frosted rounded-lg border border-cyan-500/20">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-mono text-sm font-semibold">Next Day Delivery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass-frosted rounded-lg border border-cyan-500/20">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 font-mono text-sm font-semibold">3-Year Warranty</span>
            </div>
          </motion.div>

          {/* Description Prose */}
          <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="prose prose-invert prose-cyan max-w-none text-gray-300 leading-relaxed prose-h2:text-lg prose-h2:text-white prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-3 prose-p:mb-4 prose-strong:text-white" dangerouslySetInnerHTML={{ __html: product.description }} />
          </motion.div>

          {/* Key Features */}
          <motion.div className="mb-10 fiber-glass refraction-border rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              KEY FEATURES
            </h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <motion.li key={i} className="flex items-start gap-3 text-gray-300 text-sm" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}>
                  <div className="mt-1.5 connection-node w-2 h-2 rounded-full flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Use Cases */}
          {product.useCases && product.useCases.length > 0 && (
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5 font-mono flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                IDEAL FOR
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.useCases.map((uc, i) => {
                  const Icon = iconMap[uc.icon] || Monitor;
                  return (
                    <motion.div key={i} className="fiber-glass refraction-border rounded-xl p-5 hover:border-cyan-500/40 transition-colors" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 + i * 0.08 }}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h4 className="text-sm font-bold text-white">{uc.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed">{uc.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Compatible Software */}
          {product.compatibleSoftware && product.compatibleSoftware.length > 0 && (
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
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
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.42 }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
            <motion.div className="mb-10 fiber-glass refraction-border rounded-2xl p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono flex items-center gap-2">
                <Radio className="w-4 h-4 text-cyan-400" />
                FULL SPECIFICATIONS
              </h3>
              <div className="divide-y divide-cyan-500/10">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center py-3 gap-1 sm:gap-4">
                    <span className="text-xs text-gray-500 uppercase font-mono tracking-wide sm:w-44 flex-shrink-0">{key}</span>
                    <span className="text-sm text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FAQ Accordion */}
          {product.faqs && product.faqs.length > 0 && (
            <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
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

          {/* Purchase Card */}
          <motion.div className="fiber-glass refraction-border rounded-2xl p-8 relative overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55 }}>
            <div className="absolute inset-0 light-beam opacity-5" />
            <div className="relative z-10">
              <div className="mb-6 pb-6 border-b border-cyan-500/20">
                <span className="text-gray-400 text-sm uppercase font-bold block mb-2 font-mono">Price</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-bold text-green-400 font-mono">£{product.price}</span>
                  <span className="text-gray-400 text-lg font-mono">GBP</span>
                </div>
              </div>
              <div className="space-y-4">
                <motion.button onClick={handleAddToCart} className="w-full py-5 refraction-border text-white font-bold uppercase text-center rounded-xl transition-all flex items-center justify-center gap-3 fiber-glow relative overflow-hidden font-mono text-lg" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <span className="relative z-10 flex items-center gap-3">
                    <ShoppingCart className="w-6 h-6" />
                    {added ? 'ADDED TO CART!' : 'ADD TO CART'}
                  </span>
                </motion.button>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 p-3 glass-frosted rounded-lg border border-green-500/20">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-green-300 font-semibold font-mono">Free UK Shipping</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 glass-frosted rounded-lg border border-cyan-500/20">
                    <Shield className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span className="text-cyan-300 font-semibold font-mono">3-Year Warranty</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 glass-frosted rounded-lg border border-blue-500/20">
                    <Package className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-blue-300 font-semibold font-mono">UK Stock Ready</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 glass-frosted rounded-lg border border-blue-500/20">
                    <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-blue-300 font-semibold font-mono">Next Day Ship</span>
                  </div>
                </div>
                <Link href="/contact" className="block py-4 glass-frosted border border-cyan-500/30 hover:border-cyan-500 text-cyan-300 hover:text-white font-semibold text-center rounded-xl transition-all text-sm font-mono uppercase">
                  Technical Questions? Contact Us
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Trust Signals */}
          <motion.div className="mt-6 grid grid-cols-3 gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <div className="text-center p-4 glass-frosted rounded-xl border border-cyan-500/20">
              <Award className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-xs text-gray-400 uppercase font-mono">Official</div>
              <div className="text-sm font-bold text-white font-mono">Distributor</div>
            </div>
            <div className="text-center p-4 glass-frosted rounded-xl border border-cyan-500/20">
              <Package className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-xs text-gray-400 uppercase font-mono">UK Stock</div>
              <div className="text-sm font-bold text-white font-mono">Available</div>
            </div>
            <div className="text-center p-4 glass-frosted rounded-xl border border-cyan-500/20">
              <Shield className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-xs text-gray-400 uppercase font-mono">Support</div>
              <div className="text-sm font-bold text-white font-mono">Included</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
