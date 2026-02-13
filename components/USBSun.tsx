'use client';

import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function USBSun() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {/* Sun Core */}
      <motion.div 
        className="usb-sun relative"
        style={{ width: '200px', height: '200px' }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* USB Symbol in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Zap className="w-20 h-20 text-yellow-400" style={{ filter: 'drop-shadow(0 0 20px #ffea00)' }} />
          </motion.div>
        </div>

        {/* Solar Flares */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="solar-flare"
            style={{
              animationDelay: `${i * 2}s`
            }}
          />
        ))}

        {/* Corona Rays */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="corona-ray"
            style={{
              left: '50%',
              bottom: '50%',
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}

        {/* Power Lines emanating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute"
            style={{
              width: '2px',
              height: '150px',
              background: 'linear-gradient(180deg, #ffea00, transparent)',
              left: '50%',
              top: '50%',
              transformOrigin: 'top center',
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scaleY: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        ))}
      </motion.div>

      {/* Orbital Ring */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-dashed rounded-full"
        style={{ 
          width: '400px', 
          height: '400px',
          borderColor: 'rgba(255, 234, 0, 0.2)',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
