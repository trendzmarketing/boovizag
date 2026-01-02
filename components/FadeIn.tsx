import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // in milliseconds
  className?: string;
  direction?: 'up' | 'none';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      });
    }, { threshold: 0.15, rootMargin: '50px' });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [delay]);

  // Smoother translation distance and easing
  const translateClass = direction === 'up' 
    ? (isVisible ? 'translate-y-0 blur-0' : 'translate-y-12 blur-sm')
    : '';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${translateClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;