// Hello, my name is James Nesbitt and I am a Computer Science major at the University of Michigan-Ann Arbor. I enjoy working out, listening to music and hanging out my friends. I have many intrests within the realm of Computer Science, including Machine Learning(I love spending time on Kaggle) as well as building web apps.
import React, { useEffect, useRef, useState } from 'react';

interface InViewElementProps {
  children: React.ReactNode;
}

const InViewElement: React.FC<InViewElementProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  let elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`in-view-element ${isVisible ? 'visible' : ''}`}
    >
      {children}
    </div>
  );
};

export default InViewElement;
