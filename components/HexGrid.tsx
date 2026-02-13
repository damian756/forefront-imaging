'use client';

import { motion } from 'framer-motion';

export default function HexGrid() {
  // Create hexagon positions
  const hexagons = [];
  const rows = 8;
  const cols = 12;
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      hexagons.push({
        id: `hex-${row}-${col}`,
        x: col * 100 + (row % 2) * 50,
        y: row * 86,
        delay: (row + col) * 0.05,
      });
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <svg className="w-full h-full" style={{ minWidth: '200%', minHeight: '200%' }}>
        <defs>
          <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#00f0ff', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#ff006e', stopOpacity: 0.3 }} />
          </linearGradient>
          
          <filter id="hexGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {hexagons.map((hex) => (
          <motion.g
            key={hex.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: hex.delay,
              ease: 'easeInOut',
            }}
          >
            <polygon
              points="30,0 60,17.32 60,51.96 30,69.28 0,51.96 0,17.32"
              transform={`translate(${hex.x}, ${hex.y})`}
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="1"
              filter="url(#hexGlow)"
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
