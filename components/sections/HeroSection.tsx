'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import AnimatedText from '../ui/AnimatedText';

export default function HeroSection() {
  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      <div className="z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-lg font-light text-gray-400 md:text-xl">
            Software Engineer & Web Developer
          </h2>
        </motion.div>
        
        <AnimatedText 
          text="James Nesbitt" 
          el="h1"
          className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
        />
      </div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 2.5,
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <ArrowDown size={24} className="text-gray-400" />
      </motion.div>
      
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-gray-900/50 to-transparent"></div>
        <div className="absolute top-0 right-0 h-1/3 w-full bg-gradient-to-b from-gray-900/50 to-transparent"></div>
      </div>
    </section>
  );
};