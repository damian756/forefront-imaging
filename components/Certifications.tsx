'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Zap, FileCheck, CheckCircle, Lock } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'CE Certified',
    desc: 'European Conformity',
    color: 'cyan'
  },
  {
    icon: Award,
    title: 'FCC Compliant',
    desc: 'USA Standards',
    color: 'purple'
  },
  {
    icon: Zap,
    title: 'RoHS Compliant',
    desc: 'Environmentally Safe',
    color: 'cyan'
  },
  {
    icon: FileCheck,
    title: 'ISO 9001',
    desc: 'Quality Management',
    color: 'purple'
  },
  {
    icon: CheckCircle,
    title: 'UVC 1.1',
    desc: 'Universal Standard',
    color: 'cyan'
  },
  {
    icon: Lock,
    title: '3-Year Warranty',
    desc: 'Full Coverage',
    color: 'purple'
  }
];

export default function Certifications() {
  return (
    <div className="py-20 border-y border-cyan-500/20" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Excellence</span>
          </h2>
          <p className="text-slate-400 text-lg">Industry-leading standards and certifications</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className="glass border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 rounded-xl ${
                  cert.color === 'cyan' ? 'bg-cyan-500/10' : 'bg-purple-500/10'
                } flex items-center justify-center`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <cert.icon className={`w-8 h-8 ${cert.color === 'cyan' ? 'text-cyan-400' : 'text-purple-400'}`} />
              </motion.div>
              <h3 className="text-white font-bold mb-1 text-sm">{cert.title}</h3>
              <p className="text-slate-500 text-xs font-mono">{cert.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Magewell Official Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="inline-block glass border-2 border-cyan-500/50 rounded-2xl p-8 neon-cyan">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white mb-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Magewell Official Distributor
                  </span>
                </div>
                <p className="text-slate-400 text-sm font-mono">Authorized UK Partner Since 2020</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
