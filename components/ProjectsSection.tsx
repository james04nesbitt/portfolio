'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects = [
    { title: "E-commerce Platform", description: "A full-stack e-commerce site built with Next.js, Stripe for payments, and a custom CMS.", tags: ["Next.js", "React", "Stripe", "Tailwind"], github: "#", live: "#", image: "https://placehold.co/600x400/000000/ffffff?text=E-commerce" },
    { title: "Project Management Tool", description: "A collaborative Trello-like board with real-time updates using WebSockets.", tags: ["React", "Node.js", "Express", "MongoDB"], github: "#", live: "#", image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Project+Tool" },
    { title: "Portfolio Website", description: "The very portfolio you're looking at! Designed with Next.js and Framer Motion.", tags: ["Next.js", "Framer Motion", "Tailwind"], github: "#", live: "#", image: "https://placehold.co/600x400/0a0a0a/ffffff?text=Portfolio" },
    { title: "Data Visualization Dashboard", description: "An interactive dashboard for visualizing complex datasets using D3.js and React.", tags: ["React", "D3.js", "Redux"], github: "#", live: "#", image: "https://placehold.co/600x400/111111/ffffff?text=Data+Viz" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section ref={ref} className="flex min-h-screen w-full flex-col items-center justify-center bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <motion.h2 
          className="text-4xl font-bold text-white sm:text-5xl text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition-all hover:border-gray-600 hover:shadow-2xl hover:shadow-purple-500/10">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-2 flex-1 text-gray-300">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-purple-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={24} /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};