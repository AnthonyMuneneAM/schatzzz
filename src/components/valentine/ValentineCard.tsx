import { motion } from 'framer-motion';
import type { SongCard } from './CardData';

interface ValentineCardProps {
  card: SongCard;
  index: number;
  isActive: boolean;
}

// Sparkle SVG component
const Sparkle = ({ color, size = 24, className }: { color: string; size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

// Wavy line component
const WavyLine = ({ color, className }: { color: string; className?: string }) => (
  <svg viewBox="0 0 200 20" fill="none" className={className}>
    <path 
      d="M0 10C20 0 30 20 50 10C70 0 80 20 100 10C120 0 130 20 150 10C170 0 180 20 200 10" 
      stroke={color} 
      strokeWidth="2.5" 
      strokeLinecap="round"
    />
  </svg>
);

// Circle ring component
const CircleRing = ({ color, className }: { color: string; className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className}>
    <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="3" strokeDasharray="12 8" />
  </svg>
);

// Zigzag component
const Zigzag = ({ color, className }: { color: string; className?: string }) => (
  <svg viewBox="0 0 120 40" fill="none" className={className}>
    <path d="M0 30L15 10L30 30L45 10L60 30L75 10L90 30L105 10L120 30" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Dot grid component
const DotGrid = ({ color, className }: { color: string; className?: string }) => (
  <svg viewBox="0 0 80 80" className={className}>
    {[0, 20, 40, 60].map(x =>
      [0, 20, 40, 60].map(y => (
        <circle key={`${x}-${y}`} cx={x + 10} cy={y + 10} r="3" fill={color} />
      ))
    )}
  </svg>
);

// Arrow shape
const ArrowShape = ({ color, className }: { color: string; className?: string }) => (
  <svg viewBox="0 0 60 30" fill={color} className={className}>
    <path d="M0 15L45 15M45 15L30 5M45 15L30 25" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export function ValentineCard({ card, index, isActive }: ValentineCardProps) {
  const layout = card.layout || 'centered';
  const tc = card.textColor;
  const ac = card.accentColor;

  return (
    <motion.div
      className="relative flex-shrink-0 w-[85vw] max-w-[380px] h-[70vh] max-h-[600px] rounded-3xl overflow-hidden cursor-pointer"
      style={{
        background: card.bgGradient,
        boxShadow: isActive 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)' 
          : '0 10px 30px -12px rgba(0, 0, 0, 0.25)',
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
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          {/* Decorative corner shapes */}
          <motion.div className="absolute top-6 left-6" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <Sparkle color={ac} size={32} className="opacity-50" />
          </motion.div>
          <motion.div className="absolute top-6 right-6" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <Sparkle color={ac} size={20} className="opacity-40" />
          </motion.div>
          <motion.div className="absolute bottom-8 right-8" animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Sparkle color={tc} size={28} className="opacity-30" />
          </motion.div>
          
          {/* Wavy decoration */}
          <motion.div className="absolute top-16 left-0 right-0 px-8" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 0.5 }}>
            <WavyLine color={tc} className="w-full" />
          </motion.div>
          <motion.div className="absolute bottom-16 left-0 right-0 px-8" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 0.6 }}>
            <WavyLine color={tc} className="w-full" />
          </motion.div>

          {/* Circle ring */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px]" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
            <CircleRing color={tc} className="w-full h-full opacity-15" />
          </motion.div>

          <motion.div 
            className="w-24 h-1.5 rounded-full mb-10"
            style={{ backgroundColor: ac }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          />
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-center leading-tight whitespace-pre-line"
            style={{ color: tc }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          >
            {card.message}
          </motion.p>
          <motion.div 
            className="w-24 h-1.5 rounded-full mt-10"
            style={{ backgroundColor: ac }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}

      {/* === CENTERED LAYOUT === */}
      {card.type === 'song' && layout === 'centered' && (
        <div className="flex flex-col justify-between h-full p-8 relative z-10">
          {/* Big track number as background element */}
          <motion.div 
            className="absolute -top-4 -right-4 text-[140px] font-bold leading-none select-none pointer-events-none"
            style={{ color: tc, opacity: 0.08 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.08, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.div>

          {/* Sparkle decorations */}
          <motion.div className="absolute top-8 right-8" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}>
            <Sparkle color={ac} size={28} className="opacity-50" />
          </motion.div>
          <motion.div className="absolute bottom-28 right-10" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Sparkle color={tc} size={14} className="opacity-30" />
          </motion.div>

          {/* Dot grid */}
          <motion.div className="absolute bottom-6 right-6 w-20 h-20" initial={{ opacity: 0 }} animate={{ opacity: 0.12 }} transition={{ delay: 0.4 }}>
            <DotGrid color={tc} className="w-full h-full" />
          </motion.div>

          {/* Track label */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
              Track {String(card.trackNumber).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Content */}
          <div className="space-y-4">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-[1.1]"
              style={{ color: tc }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className="text-lg font-medium"
              style={{ color: tc, opacity: 0.7 }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 0.7, x: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
            >
              {card.artist}
            </motion.p>
            <motion.div 
              className="w-16 h-1 rounded-full"
              style={{ backgroundColor: ac }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.35 }}
            />
            <motion.p 
              className="text-base italic leading-relaxed"
              style={{ color: tc, opacity: 0.55 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.55, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {/* === MINIMAL LAYOUT === */}
      {card.type === 'song' && layout === 'minimal' && (
        <div className="flex flex-col justify-center h-full p-8 pl-10 relative z-10">
          {/* Side accent bar */}
          <motion.div 
            className="absolute top-0 left-0 w-2 h-full rounded-r-full"
            style={{ backgroundColor: ac, opacity: 0.5 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          />

          {/* Zigzag decoration */}
          <motion.div className="absolute top-12 right-6 w-24" initial={{ opacity: 0 }} animate={{ opacity: 0.2 }} transition={{ delay: 0.4 }}>
            <Zigzag color={tc} className="w-full" />
          </motion.div>

          {/* Floating sparkles */}
          <motion.div className="absolute bottom-12 right-12" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
            <Sparkle color={ac} size={22} className="opacity-40" />
          </motion.div>

          {/* Circle ring bg */}
          <motion.div className="absolute -bottom-16 -right-16 w-48 h-48" animate={{ rotate: -360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <CircleRing color={tc} className="w-full h-full opacity-10" />
          </motion.div>

          <motion.span 
            className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: ac }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Track {String(card.trackNumber).padStart(2, '0')}
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-[1.1] mb-3"
            style={{ color: tc }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          >
            {card.title}
          </motion.h2>
          
          <motion.p 
            className="text-xl font-medium mb-8"
            style={{ color: tc, opacity: 0.6 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
          >
            {card.artist}
          </motion.p>
          
          <motion.p 
            className="text-lg italic max-w-[80%]"
            style={{ color: tc, opacity: 0.45 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.45 }}
            transition={{ delay: 0.35, duration: 0.4 }}
          >
            "{card.vibe}"
          </motion.p>
        </div>
      )}

      {/* === SPLIT LAYOUT === */}
      {card.type === 'song' && layout === 'split' && (
        <div className="flex flex-col h-full relative z-10">
          {/* Top accent bar */}
          <motion.div 
            className="w-full h-2"
            style={{ backgroundColor: ac, opacity: 0.6 }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: 'easeOut' }}
          />

          {/* Background number */}
          <motion.div 
            className="absolute top-8 left-6 text-[120px] font-bold leading-none select-none pointer-events-none"
            style={{ color: tc, opacity: 0.06 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.div>

          {/* Wavy line decoration */}
          <motion.div className="absolute top-1/3 -right-4 w-32" initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 0.5 }}>
            <WavyLine color={ac} className="w-full" />
          </motion.div>

          {/* Sparkles */}
          <motion.div className="absolute top-20 right-8" animate={{ rotate: 360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
            <Sparkle color={ac} size={22} className="opacity-45" />
          </motion.div>
          <motion.div className="absolute top-12 left-1/2" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <Sparkle color={tc} size={12} className="opacity-25" />
          </motion.div>

          <div className="flex-1" />
          
          <div className="p-8 pt-4">
            <motion.span 
              className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block"
              style={{ color: ac }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Track {String(card.trackNumber).padStart(2, '0')}
            </motion.span>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-[1.1] mb-2"
              style={{ color: tc }}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className="text-lg font-medium mb-4"
              style={{ color: tc, opacity: 0.6 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.6, x: 0 }}
              transition={{ delay: 0.25, duration: 0.4, ease: 'easeOut' }}
            >
              {card.artist}
            </motion.p>
            <motion.p 
              className="text-base italic"
              style={{ color: tc, opacity: 0.45 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ delay: 0.35, duration: 0.4 }}
            >
              "{card.vibe}"
            </motion.p>
          </div>
        </div>
      )}

      {/* === BOLD LAYOUT === */}
      {card.type === 'song' && layout === 'bold' && (
        <div className="flex flex-col justify-center h-full p-8 relative z-10">
          {/* Large background number */}
          <motion.div 
            className="absolute top-4 right-4 text-[160px] font-bold leading-none select-none pointer-events-none"
            style={{ color: tc, opacity: 0.07 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.07, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.div>

          {/* Dot grid */}
          <motion.div className="absolute top-8 left-8 w-16 h-16" initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 0.3 }}>
            <DotGrid color={tc} className="w-full h-full" />
          </motion.div>

          {/* Animated sparkle */}
          <motion.div className="absolute bottom-8 right-8" animate={{ rotate: 360, scale: [1, 1.15, 1] }} transition={{ rotate: { duration: 14, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}>
            <Sparkle color={ac} size={30} className="opacity-50" />
          </motion.div>
          <motion.div className="absolute top-1/3 left-6" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}>
            <Sparkle color={ac} size={16} className="opacity-35" />
          </motion.div>

          {/* Accent bar */}
          <motion.div 
            className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-24 rounded-full"
            style={{ backgroundColor: ac, opacity: 0.3 }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />

          <motion.span 
            className="text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: ac }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
          >
            Track {String(card.trackNumber).padStart(2, '0')}
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold leading-[1.1] mb-4"
            style={{ color: tc }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4, ease: 'easeOut' }}
          >
            {card.title}
          </motion.h2>
          
          <motion.p 
            className="text-xl font-medium mb-6"
            style={{ color: tc, opacity: 0.7 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {card.artist}
          </motion.p>
          
          <motion.div 
            className="w-20 h-1.5 rounded-full mb-6"
            style={{ backgroundColor: ac }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.35 }}
          />
          
          <motion.p 
            className="text-lg italic"
            style={{ color: tc, opacity: 0.55 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ delay: 0.35, duration: 0.4, ease: 'easeOut' }}
          >
            "{card.vibe}"
          </motion.p>
        </div>
      )}

      {/* === OUTRO CARD === */}
      {card.type === 'outro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          {/* Layered circle rings */}
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px]" animate={{ rotate: 360 }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }}>
            <CircleRing color={tc} className="w-full h-full opacity-10" />
          </motion.div>
          <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]" animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
            <CircleRing color={ac} className="w-full h-full opacity-15" />
          </motion.div>

          {/* Corner sparkles */}
          <motion.div className="absolute top-6 left-6" animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
            <Sparkle color={ac} size={28} className="opacity-45" />
          </motion.div>
          <motion.div className="absolute top-8 right-8" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
            <Sparkle color={tc} size={20} className="opacity-30" />
          </motion.div>
          <motion.div className="absolute bottom-8 left-10" animate={{ y: [0, -6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
            <Sparkle color={ac} size={16} className="opacity-35" />
          </motion.div>
          <motion.div className="absolute bottom-10 right-10" animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Sparkle color={tc} size={22} className="opacity-25" />
          </motion.div>

          {/* Wavy accents */}
          <motion.div className="absolute top-20 left-0 right-0 px-10" initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 0.5 }}>
            <WavyLine color={ac} className="w-full" />
          </motion.div>
          <motion.div className="absolute bottom-20 left-0 right-0 px-10" initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ delay: 0.6 }}>
            <WavyLine color={ac} className="w-full" />
          </motion.div>

          {/* Heart emoji with spring animation */}
          <motion.div
            className="text-5xl mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 15 }}
          >
            💜
          </motion.div>
          <motion.p 
            className="text-4xl md:text-5xl font-bold text-center whitespace-pre-line leading-tight"
            style={{ color: tc }}
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
