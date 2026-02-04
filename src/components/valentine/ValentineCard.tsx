import { motion } from 'framer-motion';
import type { SongCard } from './CardData';

interface ValentineCardProps {
  card: SongCard;
  index: number;
  isActive: boolean;
}

const bgColorClasses = {
  coral: 'bg-coral',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  magenta: 'bg-magenta',
  sky: 'bg-sky',
  lavender: 'bg-lavender',
  purple: 'bg-purple',
};

const textColorClasses = {
  coral: 'text-coral',
  yellow: 'text-yellow',
  pink: 'text-pink',
  magenta: 'text-magenta',
  sky: 'text-sky',
  lavender: 'text-lavender',
  purple: 'text-purple',
  cream: 'text-cream',
};

const accentBgClasses = {
  coral: 'bg-coral',
  yellow: 'bg-yellow',
  pink: 'bg-pink',
  magenta: 'bg-magenta',
  sky: 'bg-sky',
  lavender: 'bg-lavender',
  purple: 'bg-purple',
  cream: 'bg-cream',
};

// Sparkle SVG component
const Sparkle = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Star burst component
const StarBurst = ({ className }: { className?: string }) => (
  <svg width="60" height="60" viewBox="0 0 60 60" fill="currentColor" className={className}>
    <path d="M30 0L33.5 26.5L60 30L33.5 33.5L30 60L26.5 33.5L0 30L26.5 26.5L30 0Z" />
  </svg>
);

// Blob shape component
const Blob = ({ className, variant = 1 }: { className?: string; variant?: number }) => {
  const paths = [
    "M50 0C77.6142 0 100 22.3858 100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0Z",
    "M45 5C70 -5 95 15 98 40C101 65 85 90 60 95C35 100 10 85 5 60C0 35 20 15 45 5Z",
    "M50 0C75 10 100 30 95 55C90 80 65 100 40 95C15 90 -5 65 5 40C15 15 25 -10 50 0Z",
  ];
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d={paths[variant % paths.length]} />
    </svg>
  );
};

// Pixel heart component
const PixelHeart = ({ className }: { className?: string }) => (
  <svg width="40" height="36" viewBox="0 0 40 36" fill="currentColor" className={className}>
    <rect x="8" y="0" width="8" height="4" />
    <rect x="24" y="0" width="8" height="4" />
    <rect x="4" y="4" width="16" height="4" />
    <rect x="20" y="4" width="16" height="4" />
    <rect x="0" y="8" width="40" height="4" />
    <rect x="0" y="12" width="40" height="4" />
    <rect x="4" y="16" width="32" height="4" />
    <rect x="8" y="20" width="24" height="4" />
    <rect x="12" y="24" width="16" height="4" />
    <rect x="16" y="28" width="8" height="4" />
    <rect x="18" y="32" width="4" height="4" />
  </svg>
);

// Flower pixel component
const PixelFlower = ({ className }: { className?: string }) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" className={className}>
    <rect x="12" y="0" width="8" height="4" />
    <rect x="8" y="4" width="4" height="4" />
    <rect x="20" y="4" width="4" height="4" />
    <rect x="0" y="12" width="4" height="8" />
    <rect x="28" y="12" width="4" height="8" />
    <rect x="4" y="8" width="4" height="4" />
    <rect x="24" y="8" width="4" height="4" />
    <rect x="4" y="20" width="4" height="4" />
    <rect x="24" y="20" width="4" height="4" />
    <rect x="8" y="24" width="4" height="4" />
    <rect x="20" y="24" width="4" height="4" />
    <rect x="12" y="28" width="8" height="4" />
    <rect x="12" y="12" width="8" height="8" fill="currentColor" opacity="0.6" />
  </svg>
);

export function ValentineCard({ card, index, isActive }: ValentineCardProps) {
  const bgClass = bgColorClasses[card.bgColor];
  const textClass = textColorClasses[card.accentColor];
  const accentBg = accentBgClasses[card.accentColor];
  const layout = card.layout || 'centered';

  return (
    <motion.div
      className={`relative flex-shrink-0 w-[85vw] max-w-[380px] h-[70vh] max-h-[600px] rounded-2xl overflow-hidden ${bgClass} cursor-pointer`}
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
      style={{
        boxShadow: isActive 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -12px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Creative decorative elements based on layout */}
      {layout === 'centered' && (
        <>
          <motion.div 
            className="absolute top-6 right-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkle className={`${textClass} opacity-40`} size={32} />
          </motion.div>
          <motion.div 
            className="absolute top-20 left-8"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-30`} size={16} />
          </motion.div>
          <Blob className={`absolute -bottom-20 -left-20 w-48 h-48 ${textClass} opacity-10`} variant={1} />
          <Blob className={`absolute -top-16 -right-16 w-40 h-40 ${textClass} opacity-8`} variant={2} />
          <motion.div 
            className="absolute bottom-32 right-8"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <PixelFlower className={`${textClass} opacity-25`} />
          </motion.div>
        </>
      )}
      
      {layout === 'minimal' && (
        <>
          <div className={`absolute top-0 left-0 w-2 h-full ${accentBg} opacity-30`} />
          <motion.div 
            className="absolute top-12 right-12"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <StarBurst className={`${textClass} opacity-20`} />
          </motion.div>
          <motion.div 
            className="absolute bottom-20 right-20"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-25`} size={20} />
          </motion.div>
          <div className={`absolute bottom-0 right-0 w-32 h-32 ${accentBg} opacity-10 rounded-full translate-x-1/2 translate-y-1/2`} />
        </>
      )}
      
      {layout === 'split' && (
        <>
          <div className={`absolute top-0 left-0 w-full h-2 ${accentBg} opacity-40`} />
          <Blob className={`absolute -bottom-24 -right-24 w-56 h-56 ${textClass} opacity-8`} variant={0} />
          <motion.div 
            className="absolute top-16 right-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Sparkle className={`${textClass} opacity-30`} size={24} />
          </motion.div>
          <motion.div 
            className="absolute top-8 left-1/2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-20`} size={12} />
          </motion.div>
          <div className={`absolute bottom-40 left-6 w-1 h-20 ${accentBg} opacity-25 rounded-full`} />
        </>
      )}
      
      {layout === 'bold' && (
        <>
          <Blob className={`absolute -top-24 -left-24 w-64 h-64 ${textClass} opacity-10`} variant={1} />
          <Blob className={`absolute -bottom-32 -right-32 w-72 h-72 ${textClass} opacity-8`} variant={2} />
          <motion.div 
            className="absolute top-8 right-8"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
          >
            <StarBurst className={`${textClass} opacity-25`} />
          </motion.div>
          <motion.div 
            className="absolute bottom-24 left-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkle className={`${textClass} opacity-35`} size={28} />
          </motion.div>
          <motion.div 
            className="absolute top-1/3 left-6"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-20`} size={14} />
          </motion.div>
          <div className={`absolute top-1/2 right-4 w-1.5 h-28 ${accentBg} opacity-20 rounded-full -translate-y-1/2`} />
        </>
      )}
      
      {card.type === 'intro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          {/* Decorative elements for intro */}
          <motion.div 
            className="absolute top-8 left-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <StarBurst className={`${textClass} opacity-30`} />
          </motion.div>
          <motion.div 
            className="absolute bottom-12 right-12"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-40`} size={36} />
          </motion.div>
          <motion.div 
            className="absolute top-1/4 right-10"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-25`} size={18} />
          </motion.div>
          
          <motion.div 
            className={`w-20 h-1.5 ${accentBg} rounded-full mb-12`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          />
          <motion.p 
            className={`text-4xl md:text-5xl font-bold ${textClass} text-center leading-tight whitespace-pre-line`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          >
            {card.message}
          </motion.p>
          <motion.div 
            className={`w-20 h-1.5 ${accentBg} rounded-full mt-12`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}

      {card.type === 'song' && layout === 'centered' && (
        <div className="flex flex-col justify-between h-full p-8 relative z-10">
          <motion.div 
            className="flex items-start justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <span className={`text-8xl md:text-9xl font-bold ${textClass} opacity-20 leading-none`}>
              {String(card.trackNumber).padStart(2, '0')}
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold ${textClass} leading-tight`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className={`text-lg ${textClass} opacity-70`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
            >
              {card.artist}
            </motion.p>
            <motion.div 
              className={`w-16 h-1 ${accentBg} rounded-full`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            />
            <motion.p 
              className={`text-base ${textClass} opacity-60 italic leading-relaxed`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {card.type === 'song' && layout === 'minimal' && (
        <div className="flex flex-col justify-center h-full p-8 pl-12 relative z-10">
          <motion.span 
            className={`text-sm ${textClass} opacity-50 tracking-widest mb-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            TRACK {String(card.trackNumber).padStart(2, '0')}
          </motion.span>
          
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold ${textClass} leading-tight mb-3`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          >
            {card.title}
          </motion.h2>
          
          <motion.p 
            className={`text-xl ${textClass} opacity-60 mb-8`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
          >
            {card.artist}
          </motion.p>
          
          <motion.p 
            className={`text-lg ${textClass} opacity-50 italic max-w-[80%]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            "{card.vibe}"
          </motion.p>
        </div>
      )}

      {card.type === 'song' && layout === 'split' && (
        <div className="flex flex-col h-full relative z-10">
          <motion.div 
            className="flex-1 flex items-end p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <span className={`text-7xl md:text-8xl font-bold ${textClass} opacity-15 leading-none`}>
              {String(card.trackNumber).padStart(2, '0')}
            </span>
          </motion.div>
          
          <div className="p-8 pt-4">
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold ${textClass} leading-tight mb-2`}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className={`text-lg ${textClass} opacity-60 mb-4`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
            >
              {card.artist}
            </motion.p>
            <motion.p 
              className={`text-base ${textClass} opacity-50 italic`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {card.type === 'song' && layout === 'bold' && (
        <div className="flex flex-col justify-center h-full p-8 relative z-10">
          <motion.h2 
            className={`text-3xl md:text-4xl font-bold ${textClass} leading-tight mb-4`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          >
            {card.title}
          </motion.h2>
          
          <motion.p 
            className={`text-xl ${textClass} opacity-70 mb-6`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {card.artist}
          </motion.p>
          
          <motion.div 
            className={`w-20 h-1.5 ${accentBg} rounded-full mb-6`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.35 }}
          />
          
          <motion.p 
            className={`text-lg ${textClass} opacity-60 italic`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
          >
            "{card.vibe}"
          </motion.p>
          
          <motion.span 
            className={`absolute top-8 right-8 text-7xl font-bold ${textClass} opacity-10`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.span>
        </div>
      )}

      {card.type === 'outro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          {/* Extra decorative elements for outro */}
          <motion.div 
            className="absolute top-6 left-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <Sparkle className={`${textClass} opacity-35`} size={28} />
          </motion.div>
          <motion.div 
            className="absolute top-10 right-10"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <StarBurst className={`${textClass} opacity-25`} />
          </motion.div>
          <motion.div 
            className="absolute bottom-16 left-12"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-30`} size={20} />
          </motion.div>
          <motion.div 
            className="absolute bottom-20 right-8"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkle className={`${textClass} opacity-25`} size={16} />
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 15 }}
          >
            <PixelHeart className={`${textClass} opacity-80 w-16 h-14 mb-10`} />
          </motion.div>
          <motion.p 
            className={`text-4xl md:text-5xl font-bold ${textClass} text-center whitespace-pre-line`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          >
            {card.message}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}