
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const TransformStage = () => {
  const skillPackets = [
    { name: 'Apache Spark', effect: 'sparks', color: 'from-orange-500 to-red-500', icon: '⚡' },
    { name: 'Apache Airflow', effect: 'flow', color: 'from-blue-500 to-cyan-500', icon: '🌊' },
    { name: 'Python', effect: 'snake', color: 'from-green-500 to-emerald-500', icon: '🐍' },
    { name: 'SQL', effect: 'query', color: 'from-purple-500 to-pink-500', icon: '📊' },
    { name: 'Databricks', effect: 'data', color: 'from-indigo-500 to-purple-500', icon: '🧱' },
    { name: 'Azure', effect: 'cloud', color: 'from-cyan-500 to-blue-500', icon: '☁️' },
    { name: 'Snowflake', effect: 'freeze', color: 'from-blue-400 to-cyan-400', icon: '❄️' },
    { name: 'Kafka', effect: 'stream', color: 'from-yellow-500 to-orange-500', icon: '📡' }
  ];

  const getPacketAnimation = (effect: string) => {
    switch (effect) {
      case 'sparks':
        return {
          scale: [1, 1.2, 1],
          boxShadow: [
            '0 0 20px rgba(249, 115, 22, 0.5)',
            '0 0 40px rgba(249, 115, 22, 1)',
            '0 0 20px rgba(249, 115, 22, 0.5)'
          ]
        };
      case 'flow':
        return {
          x: [0, 10, -10, 0],
          rotate: [0, 5, -5, 0]
        };
      case 'snake':
        return {
          x: [0, 20, 0, -20, 0],
          y: [0, -10, 0, 10, 0]
        };
      default:
        return {
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        };
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
      {/* Stage Header */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-500/50">
          <div className="text-purple-400 font-mono text-sm">PIPELINE STAGE 2</div>
          <div className="text-2xl font-bold text-white">🧠 TRANSFORM</div>
          <div className="text-slate-300 text-sm">Processing skill packets...</div>
        </div>
      </motion.div>

      {/* Main Pipeline */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-20 h-full bg-gradient-to-b from-purple-500/30 to-pink-500/30 rounded-full"
        animate={{ 
          boxShadow: [
            '0 0 50px rgba(168, 85, 247, 0.5)',
            '0 0 80px rgba(168, 85, 247, 0.8)',
            '0 0 50px rgba(168, 85, 247, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Skill Packets Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full z-10">
        {skillPackets.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0, rotate: 180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, zIndex: 10 }}
          >
            <motion.div
              className={`bg-gradient-to-r ${skill.color} p-6 rounded-xl shadow-2xl border border-white/20 backdrop-blur-sm group cursor-pointer`}
              animate={getPacketAnimation(skill.effect)}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl mb-3"
                  animate={{ rotate: skill.effect === 'sparks' ? 360 : 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  {skill.icon}
                </motion.div>
                <div className="text-white font-bold text-sm mb-2">{skill.name}</div>
                
                {/* Code-like effect for programming languages */}
                {skill.name === 'Python' && (
                  <motion.div
                    className="text-xs font-mono text-green-200 opacity-0 group-hover:opacity-100"
                    initial={{ x: -50 }}
                    animate={{ x: 50 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {'>>> import pandas as pd'}
                  </motion.div>
                )}
                
                {skill.name === 'SQL' && (
                  <motion.div
                    className="text-xs font-mono text-cyan-200 opacity-0 group-hover:opacity-100"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {'SELECT * FROM skills;'}
                  </motion.div>
                )}

                {/* Data packet indicator */}
                <motion.div
                  className="w-full h-1 bg-white/30 rounded-full mt-3 overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-white rounded-full"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Transformation particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50]
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 3,
            repeat: Infinity
          }}
        />
      ))}
    </section>
  );
};

export default TransformStage;
