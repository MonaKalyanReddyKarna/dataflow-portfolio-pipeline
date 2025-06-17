
import React from 'react';
import { motion } from 'framer-motion';

const DataLake = () => {
  const files = [
    'user_data.parquet', 'sales_records.csv', 'logs.json', 'images.zip',
    'models.pkl', 'metrics.avro', 'events.json', 'profiles.csv'
  ];

  return (
    <motion.section 
      className="relative py-20 px-4 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-cyan-400"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Data Lake
        </motion.h2>
        
        {/* Data Lake Visualization */}
        <div className="relative h-96 mx-auto max-w-4xl">
          {/* Lake Base */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-blue-600/40 to-cyan-400/20 rounded-full blur-lg"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Lake Surface */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-80 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full"
            animate={{ 
              scaleX: [1, 1.05, 1],
              scaleY: [1, 0.95, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Falling Files Animation */}
          {files.map((file, index) => (
            <motion.div
              key={file}
              className="absolute top-0 bg-slate-700/80 backdrop-blur-sm border border-cyan-400/50 rounded-lg p-2 text-xs font-mono text-cyan-300"
              style={{
                left: `${10 + (index * 10)}%`,
              }}
              initial={{ y: -50, opacity: 0, rotateZ: 0 }}
              animate={{ 
                y: [0, 300, 320],
                opacity: [0, 1, 1, 0],
                rotateZ: [0, 180, 360],
                scale: [1, 1, 0.5]
              }}
              transition={{
                duration: 3,
                delay: index * 0.3,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              📄 {file}
            </motion.div>
          ))}

          {/* Ripple Effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-16 left-1/2 transform -translate-x-1/2 border border-cyan-400/30 rounded-full"
              animate={{
                scale: [0, 2, 3],
                opacity: [0.8, 0.3, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                repeat: Infinity,
                repeatDelay: 1
              }}
              style={{
                width: '100px',
                height: '50px',
              }}
            />
          ))}
        </div>

        <motion.p 
          className="text-lg text-gray-300 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          All data streams converge into our centralized data lake for processing, analysis, and insights generation.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default DataLake;
