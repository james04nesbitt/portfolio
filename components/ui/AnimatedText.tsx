'use client'; // This component uses Framer Motion, so it's a client component

import { motion } from 'framer-motion';

// Define the props type for our component
type AnimatedTextProps = {
  text: string;
  el?: keyof JSX.IntrinsicElements; // The HTML tag to use
  className?: string;
};

export default function AnimatedText({ text, el: Wrapper = 'p', className }: AnimatedTextProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-label={text}
        className="sr-only"
      >
        {text}
      </motion.span>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            className="inline-block"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
};