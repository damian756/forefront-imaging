'use client';

import { motion } from 'framer-motion';

export default function SignalFlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal Signal Paths */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-0.5"
          style={{
            top: `${20 + i * 20}%`,
            left: 0,
            right: 0,
            background: 'linear-gradient(90deg, transparent, #00ff88, transparent)',
            opacity: 0.3,
          }}
        >
          <motion.div
            className="absolute inset-0 signal-path"
            animate={{
              x: ['-100%', '200%'],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.5,
            }}
          />
          
          {/* Connection nodes along path */}
          {[...Array(4)].map((_, j) => (
            <motion.div
              key={j}
              className="absolute top-1/2 -translate-y-1/2 connection-node-large"
              style={{
                left: `${j * 33}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: j * 0.3,
              }}
            />
          ))}
        </div>
      ))}

      {/* Vertical Signal Paths */}
      {[...Array(3)].map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-0.5"
          style={{
            left: `${30 + i * 20}%`,
            top: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, transparent, #ff9500, transparent)',
            opacity: 0.3,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, transparent, #ff9500, transparent)',
            }}
            animate={{
              y: ['-100%', '200%'],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.7,
            }}
          />
        </div>
      ))}

      {/* Corner Nodes */}
      {[
        { top: '10%', left: '10%' },
        { top: '10%', right: '10%' },
        { bottom: '10%', left: '10%' },
        { bottom: '10%', right: '10%' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={pos}
        >
          <motion.div
            className="connection-node-large"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
          {/* Radiating circles */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-green-500"
            style={{ top: '-6px', left: '-6px', width: '24px', height: '24px' }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
