
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Big Data & Analytics",
      icon: "📊",
      skills: ["Apache Spark", "PySpark", "Apache Airflow", "Databricks", "Apache Kafka", "Hadoop"]
    },
    {
      title: "Data Engineering",
      icon: "🔧",
      skills: ["Data Modeling", "ETL/ELT Pipelines", "Data Warehousing", "Data Lake Architecture", "DBT", "DLT"]
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["Microsoft Azure", "Azure Data Factory", "Azure Synapse", "Azure Data Lake", "Event Hubs", "Blob Storage"]
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "Java", "SQL", "JavaScript", "Bash", "Scala"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Snowflake", "MongoDB", "Redis", "Cassandra"]
    },
    {
      title: "Data Structures & Algorithms",
      icon: "🧮",
      skills: ["Algorithms", "Data Structures", "System Design", "Problem Solving", "LeetCode", "HackerRank"]
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
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-slate-800/50 border-cyan-500/30 backdrop-blur-sm h-full hover:border-cyan-400/50 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl text-cyan-400 flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      >
                        <Badge 
                          variant="secondary" 
                          className="bg-blue-900/30 text-blue-300 hover:bg-blue-800/40 transition-colors"
                        >
                          {skill}
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

export default SkillsSection;
