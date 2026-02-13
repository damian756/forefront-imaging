'use client';

import { motion } from 'framer-motion';

export default function FiberCore() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central Fiber Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
        {/* Outer Cladding */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, rgba(0, 128, 255, 0.05) 40%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Middle Core */}
        <motion.div
          className="absolute inset-[100px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3) 0%, rgba(0, 128, 255, 0.15) 50%, transparent 80%)',
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Inner Core */}
        <motion.div
          className="absolute inset-[200px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(0, 255, 255, 0.6) 30%, rgba(0, 128, 255, 0.3) 60%, transparent 90%)',
            boxShadow: '0 0 100px rgba(0, 255, 255, 0.5), 0 0 200px rgba(0, 128, 255, 0.3)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Bright Center Point */}
        <motion.div
          className="absolute inset-[350px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 255, 255, 0.9) 50%, transparent 100%)',
            boxShadow: '0 0 50px rgba(255, 255, 255, 0.8), 0 0 100px rgba(0, 255, 255, 0.6)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Light Rays */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 w-2 h-[150%] origin-bottom"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(0, 255, 255, 0.2) 50%, transparent 100%)`,
            transform: `translateX(-50%) rotate(${i * 45}deg)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}
