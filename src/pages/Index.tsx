
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PipelineBackground from '@/components/PipelineBackground';
import FloatingFile from '@/components/FloatingFile';
import DataLake from '@/components/DataLake';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Mail, MapPin, Phone, ExternalLink, Github, Linkedin } from 'lucide-react';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const [showDataLake, setShowDataLake] = useState(false);

  // Transform scroll progress to control animations
  const pipelineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest > 0.7) {
        setShowDataLake(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900 overflow-x-hidden">
      {/* Animated Pipeline Background */}
      <PipelineBackground progress={pipelineProgress} />
      
      {/* Navigation Bar */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="text-xl font-bold text-indigo-600"
              whileHover={{ scale: 1.05 }}
            >
              K Mona Kalyan Reddy
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 pt-16"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="text-center z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6">
              <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 mb-4">
                Data Engineer
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-900">
              Building the Future of
              <span className="block text-indigo-600">Data Architecture</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Transforming raw data into actionable insights through scalable pipelines, 
              cloud architecture, and modern engineering practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3">
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Files - Updated positions */}
        <FloatingFile 
          filename="profile.json" 
          position={{ x: -300, y: -150 }} 
          delay={0}
          scrollProgress={scrollYProgress}
        />
        <FloatingFile 
          filename="skills.csv" 
          position={{ x: 300, y: 100 }} 
          delay={0.5}
          scrollProgress={scrollYProgress}
        />
        <FloatingFile 
          filename="projects.parquet" 
          position={{ x: -250, y: 200 }} 
          delay={1}
          scrollProgress={scrollYProgress}
        />
        <FloatingFile 
          filename="experience.avro" 
          position={{ x: 350, y: -100 }} 
          delay={1.5}
          scrollProgress={scrollYProgress}
        />
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 px-4 relative z-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-4xl font-bold mb-6 text-slate-900"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                About Me
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-600 leading-relaxed mb-6"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Detail-oriented Full Stack Developer and Data Engineer with a solid foundation in Java, SQL, 
                and cloud technologies. Experienced in building responsive web applications, working with 
                relational databases, and applying Object-Oriented Programming principles.
              </motion.p>
              <motion.p 
                className="text-lg text-slate-600 leading-relaxed mb-8"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Passionate about developing scalable, high-performance data systems while adhering to best coding standards and practices.
              </motion.p>
            </div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-900 mb-3">Education</h4>
                      <p className="text-slate-700 font-medium">B.Tech in Computer Science & Engineering</p>
                      <p className="text-slate-600">Anurag University, Hyderabad</p>
                      <p className="text-slate-600">CGPA: 9.2/10 (Expected April 2026)</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-indigo-900 mb-3">Contact</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 text-slate-600">
                          <MapPin size={16} className="text-indigo-600" />
                          <span>Hyderabad, India</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <Phone size={16} className="text-indigo-600" />
                          <span>+91-8520087549</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-600">
                          <Mail size={16} className="text-indigo-600" />
                          <span>monakalyanreddykarna@gmail.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section id="skills" className="bg-slate-50">
        <SkillsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white">
        <ProjectsSection />
      </section>

      {/* Achievements Section */}
      <motion.section 
        className="py-20 px-4 relative z-20 bg-gradient-to-br from-indigo-50 to-blue-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12 text-slate-900"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Achievements & Recognition
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Tech Hackathon 2024</h4>
              <p className="text-slate-600">Won 1st place building scalable cloud-based applications</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">🚀</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Open Source Contributor</h4>
              <p className="text-slate-600">Active contributor to Java development and cloud technologies</p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg border border-indigo-100 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-1"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-4">💻</div>
              <h4 className="text-lg font-semibold text-slate-900 mb-2">Problem Solver</h4>
              <p className="text-slate-600">Solved 250+ coding problems on LeetCode and HackerRank</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Data Lake Section */}
      {showDataLake && <DataLake />}

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 relative z-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
          <p className="text-slate-300 mb-8">Ready to transform your data into actionable insights?</p>
          <div className="flex justify-center gap-6 mb-8">
            <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Github size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Linkedin size={20} />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-800">
              <Mail size={20} />
            </Button>
          </div>
          <p className="text-slate-400">© 2024 K Mona Kalyan Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
