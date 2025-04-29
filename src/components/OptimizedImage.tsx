import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false
}) => {
  // Extract image path without extension
  const basePath = src.substring(0, src.lastIndexOf('.')) || src;
  const baseDir = basePath.substring(0, basePath.lastIndexOf('/') + 1);
  const fileName = basePath.substring(basePath.lastIndexOf('/') + 1);
  
  return (
    <picture>
      {/* Mobile devices */}
      <source
        media="(max-width: 640px)"
        srcSet={`${baseDir}${fileName}-small.webp`}
        type="image/webp"
      />
      {/* Tablet devices */}
      <source
        media="(max-width: 1024px)"
        srcSet={`${baseDir}${fileName}-medium.webp`}
        type="image/webp"
      />
      {/* Desktop devices */}
      <source
        srcSet={`${baseDir}${fileName}.webp`}
        type="image/webp"
      />
      <img
        src={`${baseDir}${fileName}.webp`}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading={loading}
        fetchPriority={priority ? "high" : "auto"}
      />
    </picture>
  );
};

export default OptimizedImage;