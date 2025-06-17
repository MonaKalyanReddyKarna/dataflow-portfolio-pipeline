
import React from 'react';
import { motion, MotionValue } from 'framer-motion';

interface PipelineBackgroundProps {
  progress: MotionValue<number>;
}

const PipelineBackground: React.FC<PipelineBackgroundProps> = ({ progress }) => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Vertical Pipeline with Flowing Water */}
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

      {/* Data Sources (Top Left & Right) */}
      <motion.div 
        className="absolute top-16 left-16 w-24 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg shadow-xl flex items-center justify-center"
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 20px rgba(34, 197, 94, 0.5)',
            '0 0 30px rgba(34, 197, 94, 0.8)',
            '0 0 20px rgba(34, 197, 94, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">API</span>
      </motion.div>

      <motion.div 
        className="absolute top-16 right-16 w-24 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg shadow-xl flex items-center justify-center"
        animate={{ 
          scale: [1, 1.05, 1],
          boxShadow: [
            '0 0 20px rgba(249, 115, 22, 0.5)',
            '0 0 30px rgba(249, 115, 22, 0.8)',
            '0 0 20px rgba(249, 115, 22, 0.5)'
          ]
        }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">FILES</span>
      </motion.div>

      {/* Data Injection Tools */}
      <motion.div 
        className="absolute top-1/6 left-1/4 w-20 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-xl flex items-center justify-center border-2 border-cyan-300"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">KAFKA</span>
      </motion.div>

      <motion.div 
        className="absolute top-1/6 right-1/4 w-20 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-xl flex items-center justify-center border-2 border-purple-300"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">SPARK</span>
      </motion.div>

      {/* Processing Stages */}
      <motion.div 
        className="absolute top-1/3 left-1/5 w-28 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-2xl flex flex-col items-center justify-center border-2 border-blue-400"
        animate={{ 
          scale: [1, 1.08, 1],
          boxShadow: [
            '0 0 25px rgba(59, 130, 246, 0.6)',
            '0 0 35px rgba(59, 130, 246, 0.9)',
            '0 0 25px rgba(59, 130, 246, 0.6)'
          ]
        }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">ETL</span>
        <span className="text-xs text-blue-200">TRANSFORM</span>
      </motion.div>

      <motion.div 
        className="absolute top-1/3 right-1/5 w-28 h-16 bg-gradient-to-r from-teal-600 to-cyan-700 rounded-xl shadow-2xl flex flex-col items-center justify-center border-2 border-teal-400"
        animate={{ 
          scale: [1, 1.08, 1],
          boxShadow: [
            '0 0 25px rgba(20, 184, 166, 0.6)',
            '0 0 35px rgba(20, 184, 166, 0.9)',
            '0 0 25px rgba(20, 184, 166, 0.6)'
          ]
        }}
        transition={{ duration: 2.5, delay: 0.8, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">DBT</span>
        <span className="text-xs text-teal-200">MODELING</span>
      </motion.div>

      {/* Middle Processing Hub */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 bg-gradient-to-r from-violet-600 to-purple-700 rounded-2xl shadow-2xl flex flex-col items-center justify-center border-3 border-violet-400 z-10"
        animate={{ 
          scale: [1, 1.12, 1],
          rotate: [0, 2, -2, 0],
          boxShadow: [
            '0 0 30px rgba(139, 92, 246, 0.7)',
            '0 0 45px rgba(139, 92, 246, 1)',
            '0 0 30px rgba(139, 92, 246, 0.7)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span className="text-sm font-bold text-white">AIRFLOW</span>
        <span className="text-xs text-violet-200">ORCHESTRATION</span>
      </motion.div>

      {/* Data Quality & Monitoring */}
      <motion.div 
        className="absolute top-2/3 left-1/6 w-26 h-14 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg shadow-xl flex flex-col items-center justify-center border-2 border-amber-400"
        animate={{ 
          scale: [1, 1.06, 1],
          boxShadow: [
            '0 0 20px rgba(245, 158, 11, 0.6)',
            '0 0 30px rgba(245, 158, 11, 0.9)',
            '0 0 20px rgba(245, 158, 11, 0.6)'
          ]
        }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">QUALITY</span>
        <span className="text-xs text-amber-200">CHECK</span>
      </motion.div>

      <motion.div 
        className="absolute top-2/3 right-1/6 w-26 h-14 bg-gradient-to-r from-rose-500 to-pink-600 rounded-lg shadow-xl flex flex-col items-center justify-center border-2 border-rose-400"
        animate={{ 
          scale: [1, 1.06, 1],
          boxShadow: [
            '0 0 20px rgba(244, 63, 94, 0.6)',
            '0 0 30px rgba(244, 63, 94, 0.9)',
            '0 0 20px rgba(244, 63, 94, 0.6)'
          ]
        }}
        transition={{ duration: 2.2, delay: 0.6, repeat: Infinity }}
      >
        <span className="text-xs font-bold text-white">MONITOR</span>
        <span className="text-xs text-rose-200">ALERTS</span>
      </motion.div>

      {/* Connecting Data Flow Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800">
        {/* Source to Injection Tools */}
        <motion.path
          d="M150,80 Q250,80 300,150"
          stroke="url(#flowGradient1)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.path
          d="M1050,80 Q950,80 900,150"
          stroke="url(#flowGradient2)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Injection to Processing */}
        <motion.path
          d="M340,180 Q450,220 550,280"
          stroke="url(#flowGradient3)"
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
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M860,180 Q750,220 650,280"
          stroke="url(#flowGradient4)"
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

        {/* Processing to Central Hub */}
        <motion.path
          d="M270,320 Q400,380 550,400"
          stroke="url(#flowGradient5)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="12,6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3.5,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M930,320 Q800,380 650,400"
          stroke="url(#flowGradient6)"
          strokeWidth="5"
          fill="none"
          strokeDasharray="12,6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3.5,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Central Hub to Quality/Monitoring */}
        <motion.path
          d="M550,450 Q350,500 200,530"
          stroke="url(#flowGradient7)"
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
            delay: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.path
          d="M650,450 Q850,500 1000,530"
          stroke="url(#flowGradient8)"
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
            delay: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Final flow to main pipeline */}
        <motion.path
          d="M600,480 L600,600"
          stroke="url(#flowGradient9)"
          strokeWidth="6"
          fill="none"
          strokeDasharray="15,8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4,
            delay: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <defs>
          <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="flowGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="flowGradient5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="flowGradient6" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="flowGradient7" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="flowGradient8" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="flowGradient9" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Data Packets */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`packet-${i}`}
          className="absolute w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-sm shadow-lg"
          style={{
            left: `${20 + i * 15}%`,
            top: `${15 + i * 8}%`,
          }}
          animate={{
            y: [0, 10, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 2 + i * 0.3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default PipelineBackground;
