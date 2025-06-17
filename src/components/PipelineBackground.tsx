
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface PipelineBackgroundProps {
  progress: MotionValue<number>;
}

const PipelineBackground: React.FC<PipelineBackgroundProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Vertical Pipeline with Flowing Water */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-full bg-gradient-to-b from-slate-700 to-slate-800 rounded-full shadow-2xl">
        {/* Pipeline Inner Glow */}
        <div className="absolute inset-2 bg-gradient-to-b from-cyan-900/30 to-blue-900/30 rounded-full"></div>
        
        {/* Flowing Water Animation */}
        <motion.div
          className="absolute inset-3 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 rounded-full opacity-80"
          animate={{
            background: [
              'linear-gradient(to bottom, #22d3ee, #3b82f6, #8b5cf6)',
              'linear-gradient(to bottom, #06b6d4, #1d4ed8, #7c3aed)',
              'linear-gradient(to bottom, #0891b2, #1e40af, #6d28d9)',
              'linear-gradient(to bottom, #22d3ee, #3b82f6, #8b5cf6)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Data Bubbles/Particles flowing down */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-white/80 rounded-full shadow-lg"
            style={{
              left: '50%',
              marginLeft: '-6px',
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: ['0vh', '100vh'],
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1, 0.5]
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Glowing particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute w-2 h-2 bg-cyan-300 rounded-full blur-sm"
            style={{
              left: '50%',
              marginLeft: '-4px',
            }}
            initial={{ y: -10, opacity: 0 }}
            animate={{ 
              y: ['0vh', '100vh'],
              opacity: [0, 0.8, 0.8, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Side Connection Points */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg"
        animate={{ 
          scale: [1, 1.3, 1],
          boxShadow: [
            '0 0 20px rgba(34, 211, 238, 0.5)',
            '0 0 30px rgba(34, 211, 238, 0.8)',
            '0 0 20px rgba(34, 211, 238, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-2/3 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-lg"
        animate={{ 
          scale: [1, 1.3, 1],
          boxShadow: [
            '0 0 20px rgba(168, 85, 247, 0.5)',
            '0 0 30px rgba(168, 85, 247, 0.8)',
            '0 0 20px rgba(168, 85, 247, 0.5)'
          ]
        }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
      />

      {/* Connecting Lines with Data Flow */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        <motion.path
          d="M300,200 Q450,200 600,400"
          stroke="url(#connectionGradient)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M900,530 Q750,530 600,400"
          stroke="url(#connectionGradient2)"
          strokeWidth="4"
          fill="none"
          strokeDasharray="10,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            delay: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PipelineBackground;
