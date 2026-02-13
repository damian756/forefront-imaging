'use client';

import { motion } from 'framer-motion';
import { Activity, Zap, Radio } from 'lucide-react';

interface SpeedIndicatorProps {
  speed: string;
  label: string;
  unit: string;
  icon?: 'activity' | 'zap' | 'radio';
}

export default function SpeedIndicator({ speed, label, unit, icon = 'zap' }: SpeedIndicatorProps) {
  const IconComponent = icon === 'activity' ? Activity : icon === 'radio' ? Radio : Zap;
  
  return (
    <motion.div
      className="fiber-glass p-6 rounded-2xl relative overflow-hidden group"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated light beam background */}
      <div className="absolute inset-0 light-beam opacity-20" />
      
      {/* Light streak on hover */}
      <motion.div
        className="absolute inset-0 transmission-line opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10 flex items-center gap-4">
        {/* Icon with glow */}
        <motion.div
          className="p-3 rounded-xl photonic"
          style={{ background: 'rgba(0, 255, 255, 0.1)' }}
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <IconComponent className="w-8 h-8 text-cyan-400" />
        </motion.div>

        <div className="flex-1">
          <div className="text-xs text-gray-400 uppercase font-semibold tracking-wider mb-1 font-mono">
            {label}
          </div>
          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-4xl font-bold prismatic-text font-mono"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 255, 255, 0.6)',
                  '0 0 30px rgba(0, 255, 255, 0.8)',
                  '0 0 20px rgba(0, 255, 255, 0.6)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {speed}
            </motion.span>
            <span className="text-sm text-gray-500 font-mono">{unit}</span>
          </div>
          
          {/* Bandwidth visualization */}
          <div className="mt-3 h-2 bg-gray-900/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full bandwidth-bar"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
