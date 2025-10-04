"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RotatingQuotesProps {
  quotes: string[];
}

const RotatingQuotes = ({ quotes }: RotatingQuotesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (quotes.length <= 1) return;

    const intervalId = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
        setIsAnimating(true);
      }, 200); // A small delay to restart animation
    }, 5000); // 4.5s for display, 0.5s for fade out

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <p className={cn(
      "transition-opacity duration-500",
      isAnimating ? "opacity-100" : "opacity-0"
    )}>
      {quotes[currentIndex]}
    </p>
  );
};

export default RotatingQuotes;
