
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { FileText } from 'lucide-react';

interface FloatingFileProps {
  filename: string;
  position: { x: number; y: number };
  delay: number;
  scrollProgress: MotionValue<number>;
}

const FloatingFile: React.FC<FloatingFileProps> = ({ filename, position, delay, scrollProgress }) => {
  const y = useTransform(scrollProgress, [0, 0.5], [0, -200]);
  const opacity = useTransform(scrollProgress, [0, 0.3, 0.5], [1, 0.5, 0]);
  const scale = useTransform(scrollProgress, [0, 0.5], [1, 0.3]);

  return (
    <motion.div
      className="absolute z-10"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        y,
        opacity,
        scale
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        className="bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 flex items-center gap-3"
        whileHover={{ scale: 1.1, borderColor: '#00bcd4' }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FileText className="w-6 h-6 text-cyan-400" />
        <span className="text-sm font-mono text-white">{filename}</span>
      </motion.div>
    </motion.div>
  );
};

export default FloatingFile;
