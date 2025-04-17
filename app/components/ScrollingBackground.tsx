'use client'
import { useEffect, useState } from 'react';

const images = [
  '/waterfall.jpg',
  '/domestic_1.jpg',
  '/mainImages/IMG_6073.jpg',
  '/mainImages/IMG_4559.jpg'
];

export default function ScrollingBackground() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const backgroundImage = `url(${images[currentImageIndex]})`;

    return (
        <div
        className="h-screen w-full bg-center bg-cover transition-all duration-1000 ease-in-out"
        style={{ backgroundImage }}
        >
        <div className="flex items-center justify-center h-full bg-opacity-40">
            {/*<h1 className="text-gray-700 text-4xl font-bold">Joe Matthews Landscaping & Paving</h1>*/}
        </div>
        </div>
    );
}