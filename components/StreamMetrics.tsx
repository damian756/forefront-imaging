'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StreamMetrics() {
  const [metrics, setMetrics] = useState({
    bitrate: 6000,
    fps: 60,
    latency: 0.8,
  });

  useEffect(() => {
    // Simulate fluctuating metrics
    const interval = setInterval(() => {
      setMetrics({
        bitrate: 5800 + Math.floor(Math.random() * 400),
        fps: Math.random() > 0.9 ? 59 : 60,
        latency: 0.6 + Math.random() * 0.6,
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-6 font-mono text-sm">
      {/* Bitrate */}
      <motion.div 
        className="flex flex-col gap-1"
        key={metrics.bitrate}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
      >
        <span className="text-xs text-gray-400 font-semibold uppercase">Bitrate</span>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold" style={{ color: 'var(--bitrate-blue)' }}>
            {(metrics.bitrate / 1000).toFixed(1)}
          </span>
          <span className="text-xs text-gray-500">Mbps</span>
        </div>
        <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bitrate-meter"
            initial={{ width: '0%' }}
            animate={{ width: `${(metrics.bitrate / 8000) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* FPS */}
      <motion.div 
        className="flex flex-col gap-1"
        key={metrics.fps}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
      >
        <span className="text-xs text-gray-400 font-semibold uppercase">FPS</span>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold fps-counter">
            {metrics.fps}
          </span>
          <span className="text-xs text-gray-500">fps</span>
        </div>
        <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full"
            style={{ background: 'var(--fps-green)' }}
            initial={{ width: '0%' }}
            animate={{ width: `${(metrics.fps / 60) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Latency */}
      <motion.div 
        className="flex flex-col gap-1"
        key={metrics.latency}
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
      >
        <span className="text-xs text-gray-400 font-semibold uppercase">Latency</span>
        <div className="flex items-baseline gap-1">
          <span className={`text-lg font-bold ${
            metrics.latency < 1 ? 'health-good' : 
            metrics.latency < 1.5 ? 'latency-indicator' : 
            'health-critical'
          }`}>
            {metrics.latency.toFixed(2)}
          </span>
          <span className="text-xs text-gray-500">ms</span>
        </div>
        <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full"
            style={{ 
              background: metrics.latency < 1 ? 'var(--online-green)' : 
                         metrics.latency < 1.5 ? 'var(--latency-yellow)' : 
                         'var(--live-red)'
            }}
            initial={{ width: '0%' }}
            animate={{ width: `${Math.min(100, (metrics.latency / 2) * 100)}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
