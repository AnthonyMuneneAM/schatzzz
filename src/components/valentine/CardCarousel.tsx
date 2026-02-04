import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cards } from './CardData';
import { ValentineCard } from './ValentineCard';
import { ProgressBar } from './ProgressBar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CardCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updateProgress = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollLeft = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newProgress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    
    setProgress(newProgress);
    
    // Calculate current card index based on scroll position
    const cardWidth = container.scrollWidth / cards.length;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(Math.min(newIndex, cards.length - 1));
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateProgress, { passive: true });
    return () => container.removeEventListener('scroll', updateProgress);
  }, [updateProgress]);

  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const cardWidth = container.scrollWidth / cards.length;
    const targetScroll = cardWidth * index;
    
    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToCard(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      scrollToCard(currentIndex + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: 'linear-gradient(to right, hsl(273 32% 64%), hsl(340 40% 80%), hsl(45 60% 85%), hsl(50 70% 82%))' }}>
      <ProgressBar 
        progress={progress} 
        totalCards={cards.length}
        currentIndex={currentIndex}
      />

      {/* Cards container */}
      <div
        ref={containerRef}
        className="flex items-center gap-4 md:gap-6 px-[7.5vw] md:px-[10vw] pt-24 pb-24 overflow-x-auto hide-scrollbar snap-x snap-mandatory h-screen"
        style={{ 
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: 'smooth',
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {cards.map((card, index) => (
          <motion.div 
            key={card.id}
            className="snap-center flex-shrink-0"
            style={{ scrollSnapAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <ValentineCard 
              card={card} 
              index={index}
              isActive={currentIndex === index}
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation arrows - hidden on mobile */}
      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            onClick={handlePrev}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentIndex < cards.length - 1 && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={handleNext}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-cream/10 hover:bg-cream/20 text-cream transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Swipe hint for mobile */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.p 
          className="text-cream/40 text-sm tracking-wider"
          animate={{ x: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
        >
          swipe →
        </motion.p>
      </motion.div>

      {/* Abstract background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-lavender/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-pink/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
}
