'use client';

import { motion } from 'framer-motion';

export default function StadiumCrowd() {
  // Generate crowd silhouettes
  const crowdRows = 3;
  const peoplePerRow = 40;
  
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10 overflow-hidden">
      {/* Crowd silhouettes */}
      {[...Array(crowdRows)].map((_, rowIndex) => (
        <div 
          key={rowIndex}
          className="absolute bottom-0 w-full flex justify-around"
          style={{
            height: `${60 + rowIndex * 30}px`,
            opacity: 0.6 - rowIndex * 0.2,
            bottom: `${rowIndex * 30}px`
          }}
        >
          {[...Array(peoplePerRow)].map((_, personIndex) => {
            const delay = (rowIndex * peoplePerRow + personIndex) * 0.02;
            const duration = 2 + Math.random() * 2;
            
            return (
              <motion.div
                key={personIndex}
                className="relative"
                style={{
                  width: '8px',
                  height: `${20 + Math.random() * 15}px`,
                  background: 'linear-gradient(180deg, #000 0%, transparent 100%)',
                }}
                animate={{
                  height: [
                    `${20 + Math.random() * 15}px`,
                    `${25 + Math.random() * 20}px`,
                    `${20 + Math.random() * 15}px`
                  ],
                  scaleY: [1, 1.1, 1]
                }}
                transition={{
                  duration,
                  repeat: Infinity,
                  delay,
                  ease: 'easeInOut'
                }}
              >
                {/* Occasional phone light */}
                {Math.random() > 0.9 && (
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                    style={{
                      background: Math.random() > 0.5 ? '#00ffff' : '#ff0080'
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 3
                    }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      ))}
      
      {/* Gradient fade to black at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
