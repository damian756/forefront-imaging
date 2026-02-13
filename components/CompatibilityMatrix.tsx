'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const software = [
  { name: 'OBS Studio', hdmi: true, sdi: true, aio: true },
  { name: 'vMix', hdmi: true, sdi: true, aio: true },
  { name: 'Zoom', hdmi: true, sdi: true, aio: true },
  { name: 'Microsoft Teams', hdmi: true, sdi: false, aio: true },
  { name: 'Adobe Premiere', hdmi: true, sdi: true, aio: true },
  { name: 'Wirecast', hdmi: true, sdi: true, aio: true },
];

const platforms = [
  { name: 'Windows 10/11', hdmi: true, sdi: true, aio: true },
  { name: 'macOS 12+', hdmi: true, sdi: true, aio: true },
  { name: 'Linux (Ubuntu)', hdmi: true, sdi: true, aio: false },
];

export default function CompatibilityMatrix() {
  return (
    <div className="py-20" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Universal</span> Compatibility
          </h2>
          <p className="text-slate-400 text-lg">Works with your existing software and platforms</p>
        </motion.div>

        {/* Software Compatibility */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono">SOFTWARE SUPPORT</h3>
          <div className="glass border border-cyan-500/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-500/20">
                    <th className="text-left p-4 text-slate-300 font-bold">Application</th>
                    <th className="text-center p-4 text-cyan-400 font-mono">USB HDMI</th>
                    <th className="text-center p-4 text-purple-400 font-mono">USB SDI</th>
                    <th className="text-center p-4 text-cyan-400 font-mono">USB AIO</th>
                  </tr>
                </thead>
                <tbody>
                  {software.map((app, i) => (
                    <motion.tr
                      key={app.name}
                      className="border-b border-slate-700 hover:bg-cyan-500/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <td className="p-4 text-white font-medium">{app.name}</td>
                      <td className="p-4 text-center">
                        {app.hdmi ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {app.sdi ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {app.aio ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Platform Compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold text-purple-400 mb-4 font-mono">OPERATING SYSTEMS</h3>
          <div className="glass border border-purple-500/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="text-left p-4 text-slate-300 font-bold">Platform</th>
                    <th className="text-center p-4 text-cyan-400 font-mono">USB HDMI</th>
                    <th className="text-center p-4 text-purple-400 font-mono">USB SDI</th>
                    <th className="text-center p-4 text-cyan-400 font-mono">USB AIO</th>
                  </tr>
                </thead>
                <tbody>
                  {platforms.map((platform, i) => (
                    <motion.tr
                      key={platform.name}
                      className="border-b border-slate-700 last:border-0 hover:bg-purple-500/5 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <td className="p-4 text-white font-medium">{platform.name}</td>
                      <td className="p-4 text-center">
                        {platform.hdmi ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {platform.sdi ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {platform.aio ? (
                          <Check className="w-5 h-5 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* UVC Badge */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 glass border border-cyan-500/30 px-6 py-3 rounded-full">
            <Check className="w-5 h-5 text-green-400" />
            <span className="text-slate-300 font-mono text-sm">
              <span className="text-cyan-400 font-bold">UVC 1.1</span> Compliant - No Drivers Required
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
