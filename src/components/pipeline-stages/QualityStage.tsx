
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const QualityStage = () => {
  const certifications = [
    { name: 'Google Cloud Professional Data Engineer', provider: 'Google', status: 'In Progress', color: 'from-blue-500 to-cyan-500', icon: '🔵' },
    { name: 'Azure Data Engineer Associate', provider: 'Microsoft', status: 'Planned', color: 'from-cyan-500 to-blue-500', icon: '☁️' },
    { name: 'Databricks Certified Data Engineer', provider: 'Databricks', status: 'Planned', color: 'from-orange-500 to-red-500', icon: '🧱' },
    { name: 'Apache Spark Developer', provider: 'Coursera', status: 'Completed', color: 'from-green-500 to-emerald-500', icon: '⚡' }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Stage Header */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-green-500/50">
          <div className="text-green-400 font-mono text-sm">PIPELINE STAGE 4</div>
          <div className="text-2xl font-bold text-white">🧾 QUALITY</div>
          <div className="text-slate-300 text-sm">Validating certifications...</div>
        </div>
      </motion.div>

      {/* Main Pipeline */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-20 h-full bg-gradient-to-b from-green-500/30 to-emerald-500/30 rounded-full"
        animate={{ 
          boxShadow: [
            '0 0 50px rgba(34, 197, 94, 0.5)',
            '0 0 80px rgba(34, 197, 94, 0.8)',
            '0 0 50px rgba(34, 197, 94, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Validation Gates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full z-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, scale: 0, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <Card className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 hover:border-green-500/50 transition-all duration-300 relative overflow-hidden group">
              <CardContent className="p-6">
                {/* Certification Gate Visual */}
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center relative`}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    
                    {/* Scanning beam */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-white/50"
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [1, 0, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{cert.name}</h3>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-slate-300 border-slate-500">
                        {cert.provider}
                      </Badge>
                      <Badge 
                        className={`${
                          cert.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border-green-500/50' 
                            : cert.status === 'In Progress'
                            ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50'
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/50'
                        }`}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Validation Animation */}
                <motion.div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${
                        cert.status === 'Completed' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    <span className="text-slate-300 font-mono">
                      {cert.status === 'Completed' ? 'VERIFIED ✓' : 'VALIDATING...'}
                    </span>
                  </div>
                  
                  {/* Progress bar for non-completed certs */}
                  {cert.status !== 'Completed' && (
                    <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        animate={{ 
                          x: cert.status === 'In Progress' ? ['-100%', '100%'] : ['-100%', '0%']
                        }}
                        transition={{ 
                          duration: cert.status === 'In Progress' ? 2 : 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>
                  )}
                </motion.div>

                {/* Stamp effect for completed */}
                {cert.status === 'Completed' && (
                  <motion.div
                    className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12"
                    initial={{ scale: 0, rotate: 0 }}
                    whileInView={{ scale: 1, rotate: 12 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    CERTIFIED
                  </motion.div>
                )}

                {/* Background scan lines */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-full h-0.5 bg-green-500"
                      style={{ top: `${20 + i * 15}%` }}
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ 
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Floating validation particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-green-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 360]
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

export default QualityStage;
