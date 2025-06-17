
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ModelStage = () => {
  const projects = [
    {
      title: "Azure End-to-End Pipeline",
      description: "Comprehensive data pipeline using Azure Data Factory, Databricks, and Synapse Analytics",
      technologies: ["Azure Data Factory", "Databricks", "Azure Synapse", "Python"],
      icon: "☁️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Streaming Pipeline",
      description: "Apache Airflow orchestration with Spark stream processing of IoT sensor data",
      technologies: ["Apache Airflow", "Apache Spark", "Kafka", "Python"],
      icon: "🌊",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "DBT & DLT Transformation",
      description: "Modern data transformation with Delta Live Tables for real-time processing",
      technologies: ["DBT", "Delta Live Tables", "Snowflake", "SQL"],
      icon: "🔄",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Unstructured Data Processing",
      description: "ML-powered pipeline for text, images, and documents with NLP techniques",
      technologies: ["Python", "Spark", "TensorFlow", "OpenCV"],
      icon: "🤖",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Stage Header */}
      <motion.div
        className="absolute top-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg px-6 py-3 border border-indigo-500/50">
          <div className="text-indigo-400 font-mono text-sm">PIPELINE STAGE 3</div>
          <div className="text-2xl font-bold text-white">🧩 MODEL</div>
          <div className="text-slate-300 text-sm">Deploying project models...</div>
        </div>
      </motion.div>

      {/* Main Pipeline */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-20 h-full bg-gradient-to-b from-indigo-500/30 to-purple-500/30 rounded-full"
        animate={{ 
          boxShadow: [
            '0 0 50px rgba(99, 102, 241, 0.5)',
            '0 0 80px rgba(99, 102, 241, 0.8)',
            '0 0 50px rgba(99, 102, 241, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />

      {/* Conveyor Belt Animation */}
      <div className="max-w-7xl w-full z-10">
        <motion.div 
          className="flex gap-8 pb-8"
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          {[...projects, ...projects].map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              className="min-w-[400px] max-w-[400px]"
              initial={{ opacity: 0, y: 100, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                z: 50,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 hover:border-indigo-500/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="text-2xl text-white">{project.icon}</span>
                    </motion.div>
                    <CardTitle className="text-lg text-white leading-tight">
                      {project.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="text-xs bg-slate-700/50 text-slate-300 border-slate-500"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 border-slate-500 text-slate-300 hover:bg-slate-700">
                      <Github size={14} className="mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-slate-500 text-slate-300 hover:bg-slate-700">
                      <ExternalLink size={14} className="mr-2" />
                      Demo
                    </Button>
                  </div>

                  {/* Processing indicator */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, 50]
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 2,
              repeat: Infinity
            }}
          >
            {Math.random().toString(2).substr(2, 8)}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ModelStage;
