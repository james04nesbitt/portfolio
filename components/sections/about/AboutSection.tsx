'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import WorkExperience from './WorkExperience'; // Import the new component
import Education from './Education';       // Import the new component

export default function AboutSection() {
  const ref = useRef(null);
  // This hook now controls the animation for the whole section and its children
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className="flex min-h-screen w-full items-center justify-center bg-black py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl w-full"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* About Me Text */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white sm:text-5xl text-center">About Me</h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
            I'm a passionate software engineer with over 8 years of experience creating dynamic and user-friendly web applications. My expertise lies in the JavaScript ecosystem, particularly with React, Next.js, and Node.js.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {/* Render the modular components, passing the isInView prop */}
          <WorkExperience isInView={isInView} />
          <Education isInView={isInView} />
        </div>
        
      </motion.div>
    </section>
  );
};