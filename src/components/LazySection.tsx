import React, { useEffect, useRef } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  className?: string;
  onVisible?: () => void;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className,
  onVisible
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (onVisible) onVisible();
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onVisible]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default LazySection;