import { motion } from 'framer-motion';
import type { SongCard } from './CardData';

interface ValentineCardProps {
  card: SongCard;
  index: number;
  isActive: boolean;
}

export function ValentineCard({ card, index, isActive }: ValentineCardProps) {
  const layout = card.layout || 'centered';
  const tc = card.textColor;
  const ac = card.accentColor;

  return (
    <motion.div
      className="relative flex-shrink-0 w-[85vw] max-w-[380px] h-[70vh] max-h-[600px] rounded-2xl overflow-hidden cursor-pointer"
      style={{
        backgroundColor: card.bgGradient,
        boxShadow: isActive 
          ? '0 20px 40px -10px rgba(0, 0, 0, 0.3)' 
          : '0 10px 25px -8px rgba(0, 0, 0, 0.2)',
      }}
      initial={{ opacity: 0, x: 30, scale: 0.98 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: isActive ? 1 : 0.96,
        y: isActive ? 0 : 6,
      }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -6,
        transition: { duration: 0.25, ease: 'easeOut' }
      }}
    >
      {/* === INTRO CARD === */}
      {card.type === 'intro' && (
        <div className="flex flex-col items-center justify-center h-full p-10 relative">
          {/* Large brand-style text */}
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.p
              className="text-6xl md:text-7xl font-black leading-[0.95] tracking-tight whitespace-pre-line"
              style={{ color: tc }}
            >
              {card.message}
            </motion.p>
            
            {/* Animated arrow */}
            <motion.div
              className="flex justify-center"
              animate={{ x: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path 
                  d="M20 40H60M60 40L45 25M60 40L45 55" 
                  stroke={tc} 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Decorative circles */}
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 rounded-full border-4"
            style={{ borderColor: ac, opacity: 0.3 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-12 left-8 w-12 h-12 rounded-full"
            style={{ backgroundColor: ac, opacity: 0.2 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
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

          {/* Track label */}
          <motion.div 
            className="relative z-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="inline-block px-4 py-2 rounded-full" style={{ backgroundColor: ac }}>
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: card.bgGradient }}>
                Track {String(card.trackNumber).padStart(2, '0')}
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-4 relative z-10">
            <motion.h2 
              className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight"
              style={{ color: tc }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className="text-xl font-bold"
              style={{ color: tc, opacity: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.25 }}
            >
              {card.artist}
            </motion.p>
            <motion.div 
              className="w-20 h-1.5 rounded-full"
              style={{ backgroundColor: ac }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            />
            <motion.p 
              className="text-base font-medium italic"
              style={{ color: tc, opacity: 0.6 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {/* === MINIMAL LAYOUT === */}
      {card.type === 'song' && layout === 'minimal' && (
        <div className="flex flex-col justify-center h-full p-10 relative">
          {/* Side accent bar */}
          <motion.div 
            className="absolute top-0 left-0 w-3 h-full"
            style={{ backgroundColor: ac }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          />

          {/* Circular badge */}
          <motion.div
            className="absolute top-8 right-8 w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: ac }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <span className="text-2xl font-black" style={{ color: card.bgGradient }}>
              {String(card.trackNumber).padStart(2, '0')}
            </span>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight"
              style={{ color: tc }}
            >
              {card.title}
            </h2>
            <p 
              className="text-xl font-bold"
              style={{ color: tc, opacity: 0.7 }}
            >
              {card.artist}
            </p>
            <div 
              className="w-16 h-1.5 rounded-full"
              style={{ backgroundColor: ac }}
            />
            <p 
              className="text-base font-medium italic max-w-[80%]"
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
            className="w-full h-3"
            style={{ backgroundColor: ac }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          />

          {/* Background number */}
          <motion.div 
            className="absolute top-12 left-6 text-[140px] font-black leading-none select-none pointer-events-none opacity-[0.06]"
            style={{ color: tc }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 0.15 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.div>

          {/* Circular element */}
          <motion.div
            className="absolute top-1/3 right-6 w-24 h-24 rounded-full border-8"
            style={{ borderColor: ac, opacity: 0.2 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          <div className="flex-1" />
          
          <div className="p-8 pt-4 relative z-10">
            <motion.div
              className="inline-block px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: ac }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
            >
              <span className="text-xs font-bold tracking-wider uppercase" style={{ color: card.bgGradient }}>
                Track {String(card.trackNumber).padStart(2, '0')}
              </span>
            </motion.div>
            <motion.h2 
              className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-3"
              style={{ color: tc }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className="text-xl font-bold mb-4"
              style={{ color: tc, opacity: 0.7 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.25 }}
            >
              {card.artist}
            </motion.p>
            <motion.p 
              className="text-base font-medium italic"
              style={{ color: tc, opacity: 0.6 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.35 }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {/* === BOLD LAYOUT === */}
      {card.type === 'song' && layout === 'bold' && (
        <div className="flex flex-col justify-center items-center h-full p-8 text-center relative">
          {/* Large circular background element */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full opacity-[0.08]"
            style={{ backgroundColor: tc }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          />

          {/* Track badge */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: ac }}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
          >
            <span className="text-xl font-black" style={{ color: card.bgGradient }}>
              {String(card.trackNumber).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Decorative corner circles */}
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 rounded-full"
            style={{ backgroundColor: ac, opacity: 0.3 }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          <motion.div
            className="space-y-5 relative z-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 
              className="text-6xl md:text-7xl font-black leading-[0.9] tracking-tighter"
              style={{ color: tc }}
            >
              {card.title}
            </h2>
            <p 
              className="text-2xl font-bold"
              style={{ color: tc, opacity: 0.7 }}
            >
              {card.artist}
            </p>
            <div 
              className="w-24 h-2 rounded-full mx-auto"
              style={{ backgroundColor: ac }}
            />
            <p 
              className="text-lg font-medium italic max-w-[85%] mx-auto"
              style={{ color: tc, opacity: 0.6 }}
            >
              "{card.vibe}"
            </p>
          </motion.div>
        </div>
      )}

      {/* === OUTRO CARD === */}
      {card.type === 'outro' && (
        <div className="flex flex-col items-center justify-center h-full p-10 relative">
          {/* Large decorative circles */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border-8 opacity-[0.1]"
            style={{ borderColor: tc }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border-8 opacity-[0.15]"
            style={{ borderColor: ac }}
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Corner decorations */}
          <motion.div
            className="absolute top-8 left-8 w-16 h-16 rounded-full"
            style={{ backgroundColor: ac, opacity: 0.3 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-12 h-12 rounded-full"
            style={{ backgroundColor: ac, opacity: 0.25 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />

          {/* Heart emoji */}
          <motion.div
            className="text-6xl mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
          >
            💜
          </motion.div>

          {/* Message */}
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <p 
              className="text-5xl md:text-6xl font-black leading-[0.95] tracking-tight whitespace-pre-line"
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
