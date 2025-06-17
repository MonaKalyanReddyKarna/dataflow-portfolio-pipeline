
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Azure End-to-End Data Pipeline",
      description: "Comprehensive data pipeline using Azure Data Factory, Databricks, and Synapse Analytics for processing and analyzing large-scale enterprise data with real-time monitoring and alerting.",
      technologies: ["Azure Data Factory", "Databricks", "Azure Synapse", "Python", "SQL", "Power BI"],
      icon: "☁️",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Streaming with Airflow & Spark",
      description: "Built a real-time data processing pipeline using Apache Airflow for orchestration and Spark for stream processing of IoT sensor data with fault tolerance and scalability.",
      technologies: ["Apache Airflow", "Apache Spark", "Kafka", "Python", "Docker", "Kubernetes"],
      icon: "🌊",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "DBT & DLT Data Transformation",
      description: "Modern data transformation pipeline using DBT for SQL-based transformations and Delta Live Tables for real-time data processing with automated testing and documentation.",
      technologies: ["DBT", "Delta Live Tables", "Snowflake", "SQL", "Git", "CI/CD"],
      icon: "🔄",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Unstructured Data Processing",
      description: "ML-powered pipeline for processing unstructured data including text, images, and documents using NLP and computer vision techniques with automated classification.",
      technologies: ["Python", "Spark", "TensorFlow", "OpenCV", "ElasticSearch", "MongoDB"],
      icon: "🤖",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Data Modeling & Warehouse Design",
      description: "Designed and implemented a scalable data warehouse with optimized data models for analytics and reporting using dimensional modeling and performance optimization.",
      technologies: ["Snowflake", "SQL", "Dimensional Modeling", "Talend", "Tableau", "Python"],
      icon: "🏗️",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Data Lake Architecture",
      description: "Architected and deployed a multi-zone data lake on cloud platforms with automated data ingestion, processing, governance, and compliance management.",
      technologies: ["Azure Data Lake", "Apache Spark", "Azure Functions", "Python", "Terraform", "Apache Atlas"],
      icon: "🏞️",
      gradient: "from-teal-500 to-blue-500"
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
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real-world data engineering solutions that drive business impact
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-4`}>
                    <span className="text-2xl text-white">{project.icon}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-900 leading-tight">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50">
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    </div>
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
