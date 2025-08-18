'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Project, { type ProjectProps } from './Project';

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects: ProjectProps[] = [
    // 👇 Updated URLs to request PNGs
    { title: "E-commerce Platform", description: "A full-stack e-commerce site built with Next.js, Stripe for payments, and a custom CMS.", tags: ["Next.js", "React", "Stripe", "Tailwind"], github: "#", live: "#", image: "https://placehold.co/600x400/000000/ffffff/png?text=E-commerce" },
    { title: "Project Management Tool", description: "A collaborative Trello-like board with real-time updates using WebSockets.", tags: ["React", "Node.js", "Express", "MongoDB"], github: "#", live: "#", image: "https://placehold.co/600x400/1a1a1a/ffffff/png?text=Project+Tool" },
    { title: "Portfolio Website", description: "The very portfolio you're looking at! Designed with Next.js and Framer Motion.", tags: ["Next.js", "Framer Motion", "Tailwind"], github: "#", live: "#", image: "https://placehold.co/600x400/0a0a0a/ffffff/png?text=Portfolio" },
    { title: "Data Visualization Dashboard", description: "An interactive dashboard for visualizing complex datasets using D3.js and React.", tags: ["React", "D3.js", "Redux"], github: "#", live: "#", image: "https://placehold.co/600x400/111111/ffffff/png?text=Data+Viz" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
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
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};