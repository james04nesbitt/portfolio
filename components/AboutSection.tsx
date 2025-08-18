'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const experience = [
    { role: "Senior Frontend Developer", company: "Tech Solutions Inc.", period: "2020 - Present", description: "Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%." },
    { role: "Software Engineer", company: "Innovate Co.", period: "2018 - 2020", description: "Developed and maintained features for a large-scale e-commerce platform using Next.js and GraphQL." },
    { role: "Junior Web Developer", company: "Digital Creations", period: "2016 - 2018", description: "Built responsive websites for small to medium-sized businesses using HTML, CSS, and JavaScript." }
  ];

  return (
    <section ref={ref} className="flex min-h-screen w-full items-center justify-center bg-black py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl w-full space-y-12"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold text-white sm:text-5xl text-center">About Me</h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
            I'm a passionate software engineer with over 8 years of experience creating dynamic and user-friendly web applications. My expertise lies in the JavaScript ecosystem, particularly with React, Next.js, and Node.js.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white sm:text-4xl text-center mb-8">Work Experience</h3>
          <div className="relative border-l-2 border-gray-700 space-y-10 pl-8">
            {experience.map((job, index) => (
              <motion.div 
                key={index} 
                className="relative"
                custom={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0, transition: { delay: 0.5 + index * 0.2 } } : {}}
              >
                <div className="absolute -left-10 h-5 w-5 rounded-full bg-white mt-1"></div>
                <h4 className="text-xl font-semibold text-white">{job.role}</h4>
                <p className="text-md font-medium text-gray-400">{job.company} | {job.period}</p>
                <p className="mt-2 text-gray-300">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};