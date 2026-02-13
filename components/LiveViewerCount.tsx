'use client';

import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LiveViewerCount() {
  const [viewers, setViewers] = useState(1247);

  useEffect(() => {
    // Simulate live viewer count changes
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.floor(Math.random() * 20) - 8; // Random change between -8 and +11
        return Math.max(1000, Math.min(5000, prev + change));
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="viewer-count flex items-center gap-2 px-4 py-2 rounded-lg"
      key={viewers}
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 0.3 }}
    >
      <Eye className="w-4 h-4 text-purple-400" />
      <span className="font-mono font-bold text-white">{viewers.toLocaleString()}</span>
      <span className="text-xs text-gray-400 font-semibold">LIVE</span>
    </motion.div>
  );
}
