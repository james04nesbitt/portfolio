'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

// Define the type for the project props for type safety
export type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  image: string;
};

// The animation variant for each card is now self-contained here
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Project({ title, description, tags, github, live, image }: ProjectProps) {
  return (
    // This motion.div will be animated by its parent's staggerChildren effect
    <motion.div variants={itemVariants}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 transition-all hover:border-gray-600 hover:shadow-2xl hover:shadow-purple-500/10">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
          // Add a placeholder for better loading experience
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgchLrEoAAAAASUVORK5CYII="
        />
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 flex-1 text-gray-300">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span key={tag} className="rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-purple-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href={live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}