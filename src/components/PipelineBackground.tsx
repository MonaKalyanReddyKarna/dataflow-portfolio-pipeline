
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface PipelineBackgroundProps {
  progress: MotionValue<number>;
}

const PipelineBackground: React.FC<PipelineBackgroundProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Horizontal Pipeline */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        {/* Pipeline Path */}
        <motion.path
          d="M-100,400 L300,400 L300,200 L600,200 L600,500 L900,500 L900,300 L1300,300"
          stroke="url(#pipelineGradient)"
          strokeWidth="6"
          fill="none"
          strokeDasharray="20,10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        {/* Data Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            r="4"
            fill="#00bcd4"
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              offsetPath: "path('M-100,400 L300,400 L300,200 L600,200 L600,500 L900,500 L900,300 L1300,300')"
            }}
          />
        ))}
        
        {/* Gradient Definition */}
        <defs>
          <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00bcd4" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Vertical Connecting Pipes */}
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
      <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
      
      {/* Node Points */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-4 h-4 bg-cyan-400 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-400 rounded-full"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
      />
    </div>
  );
};

export default PipelineBackground;
