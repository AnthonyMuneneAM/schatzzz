import { motion } from 'framer-motion';
import type { SongCard } from './CardData';

interface ValentineCardProps {
  card: SongCard;
  index: number;
  isActive: boolean;
}

const bgColorClasses = {
  navy: 'bg-navy',
  golden: 'bg-golden',
  blush: 'bg-blush',
  coral: 'bg-coral',
};

const textColorClasses = {
  navy: 'text-navy',
  golden: 'text-golden',
  blush: 'text-blush',
  coral: 'text-coral',
  cream: 'text-cream',
};

const accentBgClasses = {
  navy: 'bg-navy',
  golden: 'bg-golden',
  blush: 'bg-blush',
  coral: 'bg-coral',
  cream: 'bg-cream',
};

export function ValentineCard({ card, index, isActive }: ValentineCardProps) {
  const bgClass = bgColorClasses[card.bgColor];
  const textClass = textColorClasses[card.accentColor];
  const accentBg = accentBgClasses[card.accentColor];

  return (
    <motion.div
      className={`relative flex-shrink-0 w-[85vw] max-w-[380px] h-[70vh] max-h-[600px] rounded-2xl overflow-hidden ${bgClass} cursor-pointer`}
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        scale: isActive ? 1 : 0.95,
        y: isActive ? 0 : 8,
      }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -8,
        transition: { duration: 0.3 }
      }}
      style={{
        boxShadow: isActive 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
          : '0 10px 30px -12px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Decorative shapes */}
      <div className={`absolute top-0 right-0 w-32 h-32 ${accentBg} opacity-20 rounded-full -translate-y-1/2 translate-x-1/2`} />
      <div className={`absolute bottom-0 left-0 w-24 h-24 ${accentBg} opacity-15 rounded-full translate-y-1/2 -translate-x-1/2`} />
      
      {card.type === 'intro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          <motion.div 
            className={`w-16 h-1 ${accentBg} rounded-full mb-12`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <motion.p 
            className={`text-3xl md:text-4xl font-bold ${textClass} text-center leading-tight whitespace-pre-line`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {card.message}
          </motion.p>
          <motion.div 
            className={`w-16 h-1 ${accentBg} rounded-full mt-12`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
        </div>
      )}

      {card.type === 'song' && (
        <div className="flex flex-col justify-between h-full p-8 relative z-10">
          {/* Track number */}
          <motion.div 
            className="flex items-start justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className={`text-8xl md:text-9xl font-bold ${textClass} opacity-30 leading-none`}>
              {String(card.trackNumber).padStart(2, '0')}
            </span>
          </motion.div>

          {/* Song info */}
          <div className="space-y-4">
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold ${textClass} leading-tight`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {card.title}
            </motion.h2>
            <motion.p 
              className={`text-lg ${textClass} opacity-70`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {card.artist}
            </motion.p>
            <motion.div 
              className={`w-12 h-0.5 ${accentBg} rounded-full`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            />
            <motion.p 
              className={`text-base ${textClass} opacity-60 italic leading-relaxed`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {card.vibe}
            </motion.p>
          </div>
        </div>
      )}

      {card.type === 'outro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className={`w-20 h-20 ${accentBg} rounded-full flex items-center justify-center mb-12`}
          >
            <span className="text-4xl">♡</span>
          </motion.div>
          <motion.p 
            className={`text-4xl md:text-5xl font-bold ${textClass} text-center`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
          >
            {card.message}
          </motion.p>
        </div>
      )}
    </motion.div>
  );
}
