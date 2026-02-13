'use client';

import { motion } from 'framer-motion';
import { Video, Usb, MonitorPlay, Wifi } from 'lucide-react';

export default function SignalFlow() {
  return (
    <div className="relative py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            How The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Signal Flows</span>
          </h2>
          <p className="text-slate-400 text-lg">Zero latency, hardware-accelerated video processing</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Source */}
          <motion.div
            className="glass p-6 rounded-xl relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-center font-bold text-white mb-2">Source</h3>
            <p className="text-xs text-slate-400 text-center">Camera, Console, Medical Device</p>
            <div className="mt-4 text-[10px] text-cyan-400 font-mono text-center">
              HDMI / SDI
            </div>
          </motion.div>

          {/* Arrow 1 */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <motion.div 
                className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-cyan-400"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>

          {/* StreamTek Device */}
          <motion.div
            className="relative p-6 rounded-xl border-2 border-cyan-500/50 neon-cyan"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
              STREAMTEK
            </div>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center mx-auto mb-4">
              <Usb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-center font-bold text-white mb-2">USB Capture</h3>
            <div className="space-y-1 text-[10px] text-slate-400 text-center font-mono">
              <div>├─ Deinterlace</div>
              <div>├─ Scale</div>
              <div>├─ Color Convert</div>
              <div>└─ FPGA Process</div>
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-400"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Arrow 2 */}
          <div className="hidden md:flex items-center justify-center">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-purple-400"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </motion.div>
          </div>

          {/* Output */}
          <motion.div
            className="glass p-6 rounded-xl relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center mx-auto mb-4">
              <MonitorPlay className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-center font-bold text-white mb-2">Your Software</h3>
            <p className="text-xs text-slate-400 text-center">OBS, vMix, Zoom, Premiere</p>
            <div className="mt-4 text-[10px] text-purple-400 font-mono text-center">
              UVC 1.1
            </div>
          </motion.div>
        </div>

        {/* Technical Details */}
        <motion.div
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { label: 'Max Resolution', value: '1080p60' },
            { label: 'Latency', value: '<1 Frame' },
            { label: 'Processing', value: 'Hardware FPGA' },
            { label: 'Standard', value: 'UVC 1.1' }
          ].map((spec, i) => (
            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 font-mono mb-1">{spec.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">{spec.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
