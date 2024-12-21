import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Progress bar component
const ProgressBar = ({ isActive, progress }) => (
  <div className="h-1 bg-gray-200/30 rounded-full overflow-hidden flex-1">
    <div
      className={`h-full bg-white transition-all duration-300 ease-linear ${
        isActive ? '' : 'w-0'
      }`}
      style={{ width: `${progress}%` }}
    />
  </div>
);

// HighlightModal Component
export function HighlightModal({ highlights, initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = () => {
    setProgress(0);
    if (currentIndex < highlights.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const goToPrevious = () => {
    setProgress(0);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto-advance progress
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 0.5;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious, onClose]);

  return (
    <motion.div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl h-[80vh] bg-gray-900 rounded-xl overflow-hidden z-20"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 z-30 p-4 flex gap-2">
          {highlights.map((_, idx) => (
            <ProgressBar
              key={idx}
              isActive={idx <= currentIndex}
              progress={idx === currentIndex ? progress : idx < currentIndex ? 100 : 0}
            />
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-4 z-40 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        {/* Main content */}
        <div className="relative h-full flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm opacity-30"
            style={{ backgroundImage: `url(${highlights[currentIndex].image})` }}
          />

          <div className="relative z-30 h-full w-full flex flex-col items-center justify-center p-8">
            <div className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden">
              <img
                src={highlights[currentIndex].image}
                alt={highlights[currentIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 text-center max-w-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                {highlights[currentIndex].title}
              </h3>
              <p className="text-lg text-white/90">{highlights[currentIndex].content}</p>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={goToPrevious}
            aria-label="Previous"
            className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-40 ${
              currentIndex === 0 ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next"
            className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/40 transition-colors focus:outline-none focus:ring-2 focus:ring-white z-40 ${
              currentIndex === highlights.length - 1 ? 'opacity-50 pointer-events-none' : ''
            }`}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
