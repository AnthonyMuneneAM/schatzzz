import { motion } from 'framer-motion';
import type { SongCard } from './CardData';

interface ValentineCardProps {
  card: SongCard;
  index: number;
  isActive: boolean;
}

// Pool ball component for track numbers
const PoolBall = ({ number, size = 'md', className = '' }: { number: number; size?: 'sm' | 'md' | 'lg'; className?: string }) => {
  const sizeClasses = {
    sm: 'w-10 h-10 md:w-12 md:h-12',
    md: 'w-14 h-14 md:w-16 md:h-16',
    lg: 'w-16 h-16 md:w-20 md:h-20',
  };
  
  const textSizes = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
  };

  // 8-ball is special (solid black)
  const is8Ball = number === 8;
  
  return (
    <div className={`${sizeClasses[size]} ${className} rounded-full flex items-center justify-center relative`}
         style={{ 
           backgroundColor: is8Ball ? '#000000' : '#FFFFFF',
           boxShadow: '0 4px 8px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(0,0,0,0.1)',
         }}>
      <span className={`${textSizes[size]} font-black`} 
            style={{ color: is8Ball ? '#FFFFFF' : '#000000' }}>
        {number}
      </span>
      {/* Shine effect */}
      <div className="absolute top-1 left-1/4 w-1/3 h-1/3 rounded-full bg-white opacity-40 blur-sm" />
    </div>
  );
};

// Decorative pool ball (for background elements)
const DecorativePoolBall = ({ number, className = '', animate = false }: { number: number; className?: string; animate?: boolean }) => {
  const is8Ball = number === 8;
  
  const ball = (
    <div className={`rounded-full flex items-center justify-center ${className}`}
         style={{ 
           backgroundColor: is8Ball ? '#000000' : '#FFFFFF',
           boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
           opacity: 0.3,
         }}>
      <span className="text-2xl md:text-3xl font-black" 
            style={{ color: is8Ball ? '#FFFFFF' : '#000000', opacity: 0.8 }}>
        {number}
      </span>
    </div>
  );

  if (animate) {
    return (
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      >
        {ball}
      </motion.div>
    );
  }

  return ball;
};

export function ValentineCard({ card, index, isActive }: ValentineCardProps) {
  const layout = card.layout || 'centered';
  const tc = card.textColor;
  const ac = card.accentColor;

  return (
    <motion.div
      className="relative flex-shrink-0 w-[85vw] max-w-[380px] h-[70vh] max-h-[650px] rounded-2xl overflow-hidden"
      style={{
        backgroundColor: card.bgGradient,
        boxShadow: isActive 
          ? '0 20px 40px -10px rgba(0, 0, 0, 0.3)' 
          : '0 10px 25px -8px rgba(0, 0, 0, 0.2)',
        willChange: 'transform',
      }}
      initial={false}
      animate={{ 
        scale: isActive ? 1 : 0.96,
        y: isActive ? 0 : 6,
      }}
      transition={{ 
        duration: 0.2, 
        ease: 'easeOut',
      }}
    >
      {/* === INTRO CARD === */}
      {card.type === 'intro' && (
        <div className="flex flex-col items-center justify-center h-full p-10 relative">
          {/* 8 ball at top */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ scale: 0, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <PoolBall number={8} size="lg" />
          </motion.div>

          {/* Large brand-style text */}
          <motion.div
            className="text-center space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <motion.p
              className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight whitespace-pre-line px-4"
              style={{ color: tc }}
            >
              {card.message}
            </motion.p>
            
            {/* Animated arrow */}
            <div
              className="flex justify-center"
              style={{
                animation: 'swipeHint 1.5s ease-in-out infinite'
              }}
            >
              <svg width="60" height="60" viewBox="0 0 80 80" fill="none" className="md:w-20 md:h-20">
                <path 
                  d="M20 40H60M60 40L45 25M60 40L45 55" 
                  stroke={tc} 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      )}

      {/* === CENTERED LAYOUT === */}
      {card.type === 'song' && layout === 'centered' && (
        <div className="flex flex-col justify-between h-full p-8 relative">
          {/* Huge background track number */}
          <motion.div 
            className="absolute top-0 right-0 text-[200px] font-black leading-none select-none pointer-events-none opacity-[0.08]"
            style={{ color: tc }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.div>

          {/* Track label with pool ball */}
          <motion.div 
            className="relative z-10 flex items-center gap-3"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <PoolBall number={card.trackNumber!} size="sm" />
          </motion.div>

          {/* Content */}
          <div className="space-y-3 md:space-y-4 relative z-10">
            <motion.h2 
              className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight"
              style={{ color: tc }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl font-bold"
              style={{ color: tc, opacity: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
            >
              {card.artist}
            </motion.p>
            <motion.div 
              className="w-16 md:w-20 h-1.5 rounded-full"
              style={{ backgroundColor: ac }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.25, duration: 0.3 }}
            />
            <motion.p 
              className="text-sm md:text-base font-medium italic"
              style={{ color: tc, opacity: 0.6 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {/* === MINIMAL LAYOUT === */}
      {card.type === 'song' && layout === 'minimal' && (
        <div className="flex flex-col justify-center h-full p-8 md:p-10 relative">
          {/* Side accent bar */}
          <motion.div 
            className="absolute top-0 left-0 w-2 md:w-3 h-full"
            style={{ backgroundColor: ac }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />

          {/* Pool ball badge */}
          <motion.div
            className="absolute top-6 right-6 md:top-8 md:right-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          >
            <PoolBall number={card.trackNumber!} size="lg" />
          </motion.div>

          <motion.div
            className="space-y-3 md:space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 
              className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight"
              style={{ color: tc }}
            >
              {card.title}
            </h2>
            <p 
              className="text-lg md:text-xl font-bold"
              style={{ color: tc, opacity: 0.7 }}
            >
              {card.artist}
            </p>
            <div 
              className="w-12 md:w-16 h-1.5 rounded-full"
              style={{ backgroundColor: ac }}
            />
            <p 
              className="text-sm md:text-base font-medium italic max-w-[85%]"
              style={{ color: tc, opacity: 0.6 }}
            >
              "{card.vibe}"
            </p>
          </motion.div>
        </div>
      )}

      {/* === SPLIT LAYOUT === */}
      {card.type === 'song' && layout === 'split' && (
        <div className="flex flex-col h-full relative">
          {/* Top accent bar */}
          <motion.div 
            className="w-full h-2 md:h-3"
            style={{ backgroundColor: ac }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          />

          {/* Background number */}
          <motion.div 
            className="absolute top-8 left-4 md:top-12 md:left-6 text-[100px] md:text-[140px] font-black leading-none select-none pointer-events-none opacity-[0.06]"
            style={{ color: tc }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 0.15 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.div>

          {/* Decorative pool ball */}
          <div
            className="absolute top-1/3 right-4 md:right-6"
            style={{
              animation: 'float1 25s linear infinite'
            }}
          >
            <DecorativePoolBall number={card.trackNumber!} className="w-20 h-20 md:w-24 md:h-24" />
          </div>

          <div className="flex-1" />
          
          <div className="p-6 md:p-8 pt-4 relative z-10">
            <motion.div
              className="flex items-center gap-2 mb-3 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <PoolBall number={card.trackNumber!} size="sm" />
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-2 md:mb-3"
              style={{ color: tc }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl font-bold mb-3 md:mb-4"
              style={{ color: tc, opacity: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.25 }}
            >
              {card.artist}
            </motion.p>
            <motion.p 
              className="text-sm md:text-base font-medium italic"
              style={{ color: tc, opacity: 0.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.3 }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {/* === BOLD LAYOUT === */}
      {card.type === 'song' && layout === 'bold' && (
        <div className="flex flex-col justify-center items-center h-full p-6 md:p-8 text-center relative">
          {/* Large circular background element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full opacity-[0.08]"
            style={{ backgroundColor: tc }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />

          {/* Pool ball badge */}
          <motion.div
            className="absolute top-6 left-6 md:top-8 md:left-8"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          >
            <PoolBall number={card.trackNumber!} size="md" />
          </motion.div>

          <motion.div
            className="space-y-4 md:space-y-5 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
          >
            <h2 
              className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter px-2"
              style={{ color: tc }}
            >
              {card.title}
            </h2>
            <p 
              className="text-xl md:text-2xl font-bold"
              style={{ color: tc, opacity: 0.7 }}
            >
              {card.artist}
            </p>
            <div 
              className="w-20 md:w-24 h-1.5 md:h-2 rounded-full mx-auto"
              style={{ backgroundColor: ac }}
            />
            <p 
              className="text-base md:text-lg font-medium italic max-w-[90%] mx-auto px-2"
              style={{ color: tc, opacity: 0.6 }}
            >
              "{card.vibe}"
            </p>
          </motion.div>
        </div>
      )}

      {/* === OUTRO CARD === */}
      {card.type === 'outro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 md:p-10 relative">
          {/* Large decorative circles */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-full border-4 md:border-8 opacity-[0.1]"
            style={{ 
              borderColor: tc,
              animation: 'float1 30s linear infinite'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[200px] md:h-[200px] rounded-full border-4 md:border-8 opacity-[0.15]"
            style={{ 
              borderColor: ac,
              animation: 'float2 20s linear infinite'
            }}
          />

          {/* Purple heart emoji */}
          <motion.div
            className="text-6xl md:text-7xl mb-8 md:mb-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 180 }}
          >
            💜
          </motion.div>

          {/* Message */}
          <motion.div
            className="text-center space-y-3 md:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <p 
              className="text-4xl md:text-5xl font-black leading-[0.95] tracking-tight whitespace-pre-line px-4"
              style={{ color: tc }}
            >
              {card.message}
            </p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
