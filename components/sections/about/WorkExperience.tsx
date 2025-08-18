'use client';

import { motion } from 'framer-motion';

// Define the props type, it will receive the isInView boolean to trigger animations
type WorkExperienceProps = {
  isInView: boolean;
};

const experience = [
  { role: "Senior Frontend Developer", company: "Tech Solutions Inc.", period: "2020 - Present", description: "Led the development of a new client-facing dashboard using React and TypeScript, improving user engagement by 25%." },
  { role: "Software Engineer", company: "Innovate Co.", period: "2018 - 2020", description: "Developed and maintained features for a large-scale e-commerce platform using Next.js and GraphQL." },
  { role: "Junior Web Developer", company: "Digital Creations", period: "2016 - 2018", description: "Built responsive websites for small to medium-sized businesses using HTML, CSS, and JavaScript." }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WorkExperience({ isInView }: WorkExperienceProps) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
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
  );
}