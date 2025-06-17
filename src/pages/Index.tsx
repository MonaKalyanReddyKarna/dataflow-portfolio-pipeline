
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PipelineBackground from '@/components/PipelineBackground';
import FloatingFile from '@/components/FloatingFile';
import DataLake from '@/components/DataLake';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [showDataLake, setShowDataLake] = useState(false);

  // Transform scroll progress to control animations
  const pipelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const fileOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.8) {
        setShowDataLake(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-x-hidden">
      {/* Animated Pipeline Background */}
      <PipelineBackground progress={pipelineProgress} />
      
      {/* Hero Section with Floating Files */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4"
        style={{ opacity: fileOpacity }}
      >
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              K Mona Kalyan Reddy
            </h1>
            <h2 className="text-3xl mb-6 text-blue-300">Data Engineer</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-300">
              Building scalable data pipelines and transforming raw data into actionable insights
            </p>
          </motion.div>
        </div>

        {/* Floating Files */}
        <FloatingFile 
          filename="profile.json" 
          position={{ x: -200, y: -100 }} 
          delay={0}
          scrollProgress={scrollYProgress}
        />
        <FloatingFile 
          filename="skills.csv" 
          position={{ x: 200, y: 50 }} 
          delay={0.5}
          scrollProgress={scrollYProgress}
        />
        <FloatingFile 
          filename="projects.parquet" 
          position={{ x: -150, y: 150 }} 
          delay={1}
          scrollProgress={scrollYProgress}
        />
        <FloatingFile 
          filename="experience.avro" 
          position={{ x: 250, y: -50 }} 
          delay={1.5}
          scrollProgress={scrollYProgress}
        />
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-20 px-4 relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-blue-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-cyan-400">About Me</CardTitle>
            </CardHeader>
            <CardContent className="text-lg text-gray-300 leading-relaxed">
              <p>
                Detail-oriented Full Stack Developer and Data Engineer with a solid foundation in Java, SQL, 
                and cloud technologies. Experienced in building responsive web applications, working with 
                relational databases, and applying Object-Oriented Programming principles. Passionate about 
                developing scalable, high-performance data systems while adhering to best coding standards and practices.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Education</h4>
                  <p>B.Tech in Computer Science & Engineering</p>
                  <p>Anurag University, Hyderabad</p>
                  <p>CGPA: 9.2/10 (Expected April 2026)</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Location</h4>
                  <p>Hyderabad, India</p>
                  <p>+91-8520087549</p>
                  <p>monakalyanreddykarna@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Achievements Section */}
      <motion.section 
        className="py-20 px-4 relative z-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 border-green-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl text-center text-green-400">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="p-4 bg-green-900/20 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-green-400 font-semibold mb-2">🏆 Tech Hackathon 2024</h4>
                  <p className="text-gray-300">Won 1st place building scalable cloud-based applications</p>
                </motion.div>
                <motion.div 
                  className="p-4 bg-green-900/20 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-green-400 font-semibold mb-2">🚀 Open Source Contributor</h4>
                  <p className="text-gray-300">Active contributor to Java development and cloud technologies</p>
                </motion.div>
                <motion.div 
                  className="p-4 bg-green-900/20 rounded-lg md:col-span-2"
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className="text-green-400 font-semibold mb-2">💻 Problem Solver</h4>
                  <p className="text-gray-300">Solved 250+ coding problems on LeetCode and HackerRank, focusing on algorithms and data structures</p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Data Lake Section */}
      {showDataLake && <DataLake />}
    </div>
  );
};

export default Index;
