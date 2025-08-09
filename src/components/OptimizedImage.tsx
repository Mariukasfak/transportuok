import React from 'react';

interface OptimizedImageProps {
  src: string; // path without size suffix (ends with base e.g. /images/optimized/baldai.webp OR without extension)
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string; // responsive sizes hint
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  priority = false,
  sizes = '100vw'
}) => {
  // Extract image path without extension
  const basePath = src.substring(0, src.lastIndexOf('.')) || src;
  const baseDir = basePath.substring(0, basePath.lastIndexOf('/') + 1);
  const fileName = basePath.substring(basePath.lastIndexOf('/') + 1);
  // Build width-descriptor srcset (approx widths). If -large exists we include it.
  const small = `${baseDir}${fileName}-small.webp`;
  const medium = `${baseDir}${fileName}-medium.webp`;
  const largeCandidate = `${baseDir}${fileName}-large.webp`;
  const base = `${baseDir}${fileName}.webp`;

  // We can't check existence synchronously; include -large and browser will 404 if missing (avoid). Prefer to include only known set.
  // Convention in repo shows -large present for optimized images; keep it.
  const srcSet = `${small} 400w, ${medium} 800w, ${largeCandidate} 1200w, ${base} 1600w`;

  return (
    <img
      src={medium}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      style={{ objectFit: 'cover' }}
    />
  );
};

export default OptimizedImage;