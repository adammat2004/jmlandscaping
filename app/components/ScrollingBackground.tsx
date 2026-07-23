'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const images = [
  '/mainImages/mainimage3.webp',
  '/dunshauglingazebo/IMG_5118.jpg',
  '/mainImages/mainimage.webp',
  '/mainImages/mainimage2.webp',
  '/mainImages/mainimage4.webp',
];

export default function ScrollingBackground() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload all images on mount
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  // Swap image every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[min(86vh,860px)] min-h-[520px] w-full overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={i === 0}
          className={`
            washed object-cover absolute top-0 left-0
            transition-opacity duration-1000 ease-in-out
            ${i === currentImageIndex ? 'opacity-100' : 'opacity-0'}
          `}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-ink/15 to-ink/68" />
    </div>
  );
}
