
import React from 'react';
import { motion } from 'framer-motion';

const DataLake = () => {
  const files = [
    'user_data.parquet', 'sales_records.csv', 'transaction_logs.json', 'product_images.zip',
    'ml_models.pkl', 'performance_metrics.avro', 'click_events.json', 'customer_profiles.csv',
    'sensor_data.json', 'audit_logs.txt', 'config_files.yaml', 'reports.pdf'
  ];

  return (
    <motion.section 
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-slate-900 to-indigo-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Data Lake Repository
        </motion.h2>
        
        {/* Enhanced Data Lake Visualization */}
        <div className="relative h-[500px] mx-auto max-w-5xl">
          {/* Lake Base with Multiple Layers */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-40 bg-gradient-to-t from-blue-800/60 via-cyan-600/40 to-transparent rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[500px] h-32 bg-gradient-to-t from-cyan-500/50 via-blue-500/30 to-transparent rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 0.9, 0.7]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Lake Surface with Waves */}
          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-[450px] h-24 bg-gradient-to-r from-cyan-400/40 via-blue-500/40 to-purple-500/40 rounded-full"
            animate={{ 
              scaleX: [1, 1.08, 1],
              scaleY: [1, 0.92, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Enhanced Falling Files Animation */}
          {files.map((file, index) => (
            <motion.div
              key={file}
              className="absolute top-0 bg-gradient-to-r from-slate-700/90 to-slate-800/90 backdrop-blur-sm border border-cyan-400/60 rounded-lg p-3 text-sm font-mono text-cyan-200 shadow-xl"
              style={{
                left: `${8 + (index * 7)}%`,
                zIndex: 10 - index
              }}
              initial={{ y: -80, opacity: 0, rotateZ: 0, scale: 1 }}
              animate={{ 
                y: [0, 320, 360, 400],
                opacity: [0, 1, 1, 1, 0],
                rotateZ: [0, 180, 270, 360],
                scale: [1, 1, 0.8, 0.3],
                filter: ['blur(0px)', 'blur(0px)', 'blur(1px)', 'blur(2px)']
              }}
              transition={{
                duration: 4,
                delay: index * 0.4,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeIn"
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                {file}
              </div>
            </motion.div>
          ))}

          {/* Enhanced Ripple Effects */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border-2 border-cyan-400/40 rounded-full"
              animate={{
                scale: [0, 3, 4],
                opacity: [0.9, 0.4, 0],
                borderColor: [
                  'rgba(34, 211, 238, 0.4)',
                  'rgba(59, 130, 246, 0.3)',
                  'rgba(168, 85, 247, 0.2)'
                ]
              }}
              transition={{
                duration: 3,
                delay: i * 0.6,
                repeat: Infinity,
                repeatDelay: 2
              }}
              style={{
                width: '120px',
                height: '60px',
              }}
            />
          ))}

          {/* Data Processing Bubbles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`bubble-${i}`}
              className="absolute w-4 h-4 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-lg"
              style={{
                bottom: '80px',
                left: `${35 + Math.random() * 30}%`,
              }}
              animate={{
                y: [0, -60, -120, -180],
                x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30, Math.random() * 80 - 40],
                opacity: [0, 0.8, 0.6, 0],
                scale: [0.5, 1, 1.2, 0.3]
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Lake Glow Effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-20 bg-gradient-to-t from-cyan-500/20 to-transparent rounded-full blur-xl"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          className="mt-12 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <p className="text-xl text-gray-300">
            🌊 <strong>Centralized Data Repository</strong> - All data streams converge here
          </p>
          <p className="text-lg text-cyan-200">
            Processing terabytes of structured and unstructured data for analytics, ML, and business intelligence
          </p>
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">500TB+</div>
              <div className="text-sm text-gray-400">Data Processed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400">Data Sources</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">24/7</div>
              <div className="text-sm text-gray-400">Real-time Processing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DataLake;
