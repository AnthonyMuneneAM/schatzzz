import { memo } from 'react';

interface ProgressBarProps {
  totalCards: number;
  currentIndex: number;
}

export const ProgressBar = memo(function ProgressBar({ totalCards, currentIndex }: ProgressBarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-8 md:pt-6 pointer-events-none">
      {/* Progress segments */}
      <div className="flex gap-1.5 max-w-2xl mx-auto">
        {Array.from({ length: totalCards }).map((_, index) => (
          <div 
            key={index}
            className="flex-1 h-1.5 rounded-full overflow-hidden"
            style={{ backgroundColor: 'rgba(93, 78, 60, 0.2)' }}
          >
            <div
              className="h-full rounded-full"
              style={{ 
                backgroundColor: '#5D4E3C',
                width: index <= currentIndex ? '100%' : '0%',
                transition: 'width 0.2s ease-out',
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Card counter */}
      <div className="flex justify-center mt-3">
        <span 
          className="text-sm font-bold tracking-wide tabular-nums" 
          style={{ color: '#5D4E3C' }}
        >
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
    </div>
  );
});
