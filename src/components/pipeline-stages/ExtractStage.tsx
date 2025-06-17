
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, User } from 'lucide-react';

const ExtractStage = () => {
  const profileData = [
    { icon: User, label: 'Name', value: 'K Mona Kalyan Reddy', color: 'from-blue-500 to-cyan-500' },
    { icon: MapPin, label: 'Location', value: 'Hyderabad, India', color: 'from-green-500 to-emerald-500' },
    { icon: Phone, label: 'Phone', value: '+91-8520087549', color: 'from-purple-500 to-pink-500' },
    { icon: Mail, label: 'Email', value: 'monakalyanreddykarna@gmail.com', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden">
      {/* Stage Header */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-cyan-500/50">
          <div className="text-cyan-400 font-mono text-sm">PIPELINE STAGE 1</div>
          <div className="text-2xl font-bold text-white">🌀 EXTRACT</div>
          <div className="text-slate-300 text-sm">Extracting profile data...</div>
        </div>
      </motion.div>

      {/* Main Pipeline Glow */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-20 h-full bg-gradient-to-b from-cyan-500/30 to-blue-500/30 rounded-full"
        animate={{ 
          boxShadow: [
            '0 0 50px rgba(34, 211, 238, 0.5)',
            '0 0 80px rgba(34, 211, 238, 0.8)',
            '0 0 50px rgba(34, 211, 238, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Floating Data Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full z-10">
        {profileData.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              z: 50
            }}
          >
            <Card className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <item.icon className="text-white" size={20} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-slate-400 text-sm font-mono">{item.label}</div>
                    <div className="text-white font-medium">{item.value}</div>
                  </div>
                </div>
                
                {/* Data flow animation */}
                <motion.div
                  className="mt-4 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity
          }}
        />
      ))}
    </section>
  );
};

export default ExtractStage;
