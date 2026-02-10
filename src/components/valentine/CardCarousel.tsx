import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cards } from './CardData';
import { ValentineCard } from './ValentineCard';
import { ProgressBar } from './ProgressBar';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function CardCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Use Intersection Observer for accurate card detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1 && index !== currentIndex) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: [0.5, 0.75, 1.0],
        rootMargin: '0px',
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [currentIndex]);

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
    <div className="relative min-h-screen overflow-hidden" style={{ background: '#E8DED2' }}>
      <ProgressBar 
        totalCards={cards.length}
        currentIndex={currentIndex}
      />

      {/* Cards container */}
      <div
        ref={containerRef}
        className="flex items-center gap-4 md:gap-6 px-[5vw] md:px-[10vw] pt-20 pb-20 overflow-x-auto hide-scrollbar snap-x snap-mandatory h-screen"
        style={{ 
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollBehavior: isDragging ? 'auto' : 'smooth',
          touchAction: 'pan-x',
          overscrollBehaviorX: 'contain',
          willChange: 'scroll-position',
        }}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {cards.map((card, index) => (
          <div 
            key={card.id}
            ref={(el) => (cardRefs.current[index] = el)}
            className="snap-center flex-shrink-0"
            style={{ scrollSnapAlign: 'center' }}
          >
            <ValentineCard 
              card={card} 
              index={index}
              isActive={currentIndex === index}
            />
          </div>
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
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors shadow-lg"
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
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-800 transition-colors shadow-lg"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Swipe hint for mobile */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden"
        style={{ 
          opacity: currentIndex === 0 ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <p 
          className="text-gray-600 text-sm tracking-wider font-medium"
          style={{
            animation: 'swipeHint 1.5s ease-in-out infinite'
          }}
        >
          swipe →
        </p>
      </div>

      {/* Abstract background shapes - simplified */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-50">
        <div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ 
            backgroundColor: '#9B7EBD20',
            animation: 'float1 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-32 left-32 w-96 h-96 rounded-full blur-3xl"
          style={{ 
            backgroundColor: '#FF6B3520',
            animation: 'float2 10s ease-in-out infinite 2s'
          }}
        />
      </div>
    </div>
  );
}
