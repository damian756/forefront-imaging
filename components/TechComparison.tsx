'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, X, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'USB Capture HDMI',
    slug: 'magewell-usb-capture-hdmi-gen-2',
    price: 100,
    input: 'HDMI 1.4',
    maxRes: '1080p60',
    loopThrough: false,
    audio: 'Embedded',
    fpga: true,
    latency: '<1 Frame',
    tag: 'Best Seller'
  },
  {
    name: 'USB Capture SDI',
    slug: 'magewell-usb-capture-sdi-gen-2',
    price: 100,
    input: '3G-SDI',
    maxRes: '1080p60',
    loopThrough: true,
    audio: 'Embedded',
    fpga: true,
    latency: '<1 Frame',
    tag: 'Broadcast'
  },
  {
    name: 'USB Capture AIO',
    slug: 'magewell-usb-capture-aio',
    price: 100,
    input: 'HDMI/SDI/DVI',
    maxRes: '1080p60',
    loopThrough: false,
    audio: 'Analog I/O',
    fpga: true,
    latency: '<1 Frame',
    tag: 'Universal'
  }
];

export default function TechComparison() {
  return (
    <div className="py-20" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Technical</span> Comparison
          </h2>
          <p className="text-slate-400 text-lg">Choose the right capture device for your needs</p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            className="glass border border-cyan-500/30 rounded-xl overflow-hidden min-w-[800px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-cyan-500/20">
                  <th className="text-left p-4 text-slate-300 font-bold w-1/4">Specification</th>
                  {products.map((product, i) => (
                    <th key={i} className="text-center p-4 w-1/4">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 mb-2">
                        <span className="text-xs text-cyan-400 font-mono font-bold">{product.tag}</span>
                      </div>
                      <div className="text-white font-bold text-sm">{product.name}</div>
                      <div className="text-cyan-400 font-mono text-lg mt-1">£{product.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-mono text-sm">
                <motion.tr
                  className="border-b border-slate-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <td className="p-4 text-slate-400">Input Type</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center text-white font-semibold">{product.input}</td>
                  ))}
                </motion.tr>
                <motion.tr
                  className="border-b border-slate-700 bg-slate-900/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <td className="p-4 text-slate-400">Max Resolution</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center text-cyan-400 font-bold">{product.maxRes}</td>
                  ))}
                </motion.tr>
                <motion.tr
                  className="border-b border-slate-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <td className="p-4 text-slate-400">Loop-Through</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center">
                      {product.loopThrough ? (
                        <Check className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 mx-auto" />
                      )}
                    </td>
                  ))}
                </motion.tr>
                <motion.tr
                  className="border-b border-slate-700 bg-slate-900/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <td className="p-4 text-slate-400">Audio Input</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center text-purple-400 font-semibold">{product.audio}</td>
                  ))}
                </motion.tr>
                <motion.tr
                  className="border-b border-slate-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <td className="p-4 text-slate-400">FPGA Processing</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center">
                      {product.fpga && <Check className="w-5 h-5 text-green-400 mx-auto" />}
                    </td>
                  ))}
                </motion.tr>
                <motion.tr
                  className="bg-slate-900/30"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                >
                  <td className="p-4 text-slate-400">Latency</td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center text-green-400 font-bold">{product.latency}</td>
                  ))}
                </motion.tr>
                <motion.tr
                  className="border-t-2 border-cyan-500/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <td className="p-4"></td>
                  {products.map((product, i) => (
                    <td key={i} className="p-4 text-center">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-lg transition-all text-sm neon-cyan"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-slate-400 text-sm">
            All models feature <span className="text-cyan-400 font-bold">UVC 1.1</span> compliance, 
            <span className="text-purple-400 font-bold"> USB 3.0</span> connectivity, and 
            <span className="text-cyan-400 font-bold"> driver-free</span> operation
          </p>
        </motion.div>
      </div>
    </div>
  );
}
