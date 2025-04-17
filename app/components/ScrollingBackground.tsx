'use client';

import { useEffect, useState } from 'react';

const images = [
  '/waterfall.jpg',
  '/domestic_1.jpg',
  '/mainImages/IMG_6073.jpg',
  '/mainImages/IMG_4559.jpg'
];

export default function ScrollingBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all images once on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Set up the interval for image swapping
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className={`
            absolute top-0 left-0 w-full h-full object-cover 
            transition-opacity duration-1000 ease-in-out
            ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        {/* Optional overlay content here */}
        {/* <h1 className="text-white text-4xl font-bold">Joe Matthews Landscaping & Paving</h1> */}
      </div>
    </div>
  );
}
