
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Azure End-to-End Data Pipeline",
      description: "Comprehensive data pipeline using Azure Data Factory, Databricks, and Synapse Analytics for processing and analyzing large-scale enterprise data.",
      technologies: ["Azure Data Factory", "Databricks", "Azure Synapse", "Python", "SQL", "Power BI"],
      icon: "☁️"
    },
    {
      title: "Real-Time Streaming with Airflow & Spark",
      description: "Built a real-time data processing pipeline using Apache Airflow for orchestration and Spark for stream processing of IoT sensor data.",
      technologies: ["Apache Airflow", "Apache Spark", "Kafka", "Python", "Docker", "Kubernetes"],
      icon: "🌊"
    },
    {
      title: "DBT & DLT Data Transformation",
      description: "Modern data transformation pipeline using DBT for SQL-based transformations and Delta Live Tables for real-time data processing.",
      technologies: ["DBT", "Delta Live Tables", "Snowflake", "SQL", "Git", "CI/CD"],
      icon: "🔄"
    },
    {
      title: "Unstructured Data Processing",
      description: "ML-powered pipeline for processing unstructured data including text, images, and documents using NLP and computer vision techniques.",
      technologies: ["Python", "Spark", "TensorFlow", "OpenCV", "ElasticSearch", "MongoDB"],
      icon: "🤖"
    },
    {
      title: "Data Modeling & Warehouse Design",
      description: "Designed and implemented a scalable data warehouse with optimized data models for analytics and reporting using dimensional modeling.",
      technologies: ["Snowflake", "SQL", "Dimensional Modeling", "Talend", "Tableau", "Python"],
      icon: "🏗️"
    },
    {
      title: "Cloud Data Lake Architecture",
      description: "Architected and deployed a multi-zone data lake on cloud platforms with automated data ingestion, processing, and governance.",
      technologies: ["Azure Data Lake", "Apache Spark", "Azure Functions", "Python", "Terraform", "Apache Atlas"],
      icon: "🏞️"
    }
  ];

  return (
    <motion.section 
      className="py-20 px-4 relative z-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm h-full hover:border-purple-400/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-purple-400 flex items-center gap-2">
                    <span className="text-2xl">{project.icon}</span>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      >
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-purple-900/20 text-purple-300 border-purple-500/30 hover:bg-purple-800/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
