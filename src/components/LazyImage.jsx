import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  containerClassName = "",
  placeholderClassName = ""
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${containerClassName}`}>
      {isInView && (
        <>
          <img
            src={src}
            alt={alt}
            className={`${className} ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && (
            <div className={`absolute inset-0 bg-gray-800 animate-pulse ${placeholderClassName}`} />
          )}
        </>
      )}
    </div>
  );
};

export default LazyImage;