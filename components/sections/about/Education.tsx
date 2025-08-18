'use client';

import { motion } from 'framer-motion';

// Define the props type
type EducationProps = {
  isInView: boolean;
};

const educationHistory = [
  { degree: "M.S. in Computer Science", institution: "University of Technology", period: "2014 - 2016", description: "Focused on advanced algorithms, machine learning, and distributed systems. Published a paper on data compression techniques." },
  { degree: "B.S. in Software Engineering", institution: "State University", period: "2010 - 2014", description: "Graduated with honors. President of the coding club and participated in multiple hackathons." }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } }, // Added a slight delay
};

export default function Education({ isInView }: EducationProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <h3 className="text-3xl font-bold text-white sm:text-4xl text-center mb-8 mt-16">Education</h3>
      <div className="relative border-l-2 border-gray-700 space-y-10 pl-8">
        {educationHistory.map((edu, index) => (
          <motion.div
            key={index}
            className="relative"
            custom={index}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0, transition: { delay: 0.8 + index * 0.2 } } : {}}
          >
            <div className="absolute -left-10 h-5 w-5 rounded-full bg-white mt-1"></div>
            <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
            <p className="text-md font-medium text-gray-400">{edu.institution} | {edu.period}</p>
            <p className="mt-2 text-gray-300">{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}