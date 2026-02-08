import { motion } from 'framer-motion';

interface ProgressBarProps {
  progress: number;
  totalCards: number;
  currentIndex: number;
}

export function ProgressBar({ progress, totalCards, currentIndex }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6">
      {/* Progress segments */}
      <div className="flex gap-1.5 max-w-2xl mx-auto">
        {Array.from({ length: totalCards }).map((_, index) => (
          <div 
            key={index}
            className="flex-1 h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(93, 78, 60, 0.2)' }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: '#5D4E3C' }}
              initial={{ width: 0 }}
              animate={{
                width: index < currentIndex 
                  ? '100%' 
                  : index === currentIndex 
                    ? `${Math.min(100, Math.max(0, (progress - (index / totalCards)) * totalCards * 100))}%`
                    : '0%'
              }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
        ))}
      </div>
      
      {/* Card counter */}
      <div className="flex justify-center mt-3">
        <span className="text-sm font-bold tracking-wide" style={{ color: '#5D4E3C' }}>
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
    </div>
  );
}
