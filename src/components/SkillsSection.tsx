
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Big Data & Analytics",
      icon: "📊",
      skills: ["Apache Spark", "PySpark", "Apache Airflow", "Databricks", "Apache Kafka", "Hadoop"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Engineering",
      icon: "🔧",
      skills: ["Data Modeling", "ETL/ELT Pipelines", "Data Warehousing", "Data Lake Architecture", "DBT", "DLT"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud Platforms",
      icon: "☁️",
      skills: ["Microsoft Azure", "Azure Data Factory", "Azure Synapse", "Azure Data Lake", "Event Hubs", "Blob Storage"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Programming",
      icon: "💻",
      skills: ["Python", "Java", "SQL", "JavaScript", "Bash", "Scala"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "Snowflake", "MongoDB", "Redis", "Cassandra"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Structures & Algorithms",
      icon: "🧮",
      skills: ["Algorithms", "Data Structures", "System Design", "Problem Solving", "LeetCode", "HackerRank"],
      color: "from-teal-500 to-blue-500"
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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for modern data engineering and analytics
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <CardTitle className="text-xl text-slate-900">
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
                          className="bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors border border-slate-200"
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
