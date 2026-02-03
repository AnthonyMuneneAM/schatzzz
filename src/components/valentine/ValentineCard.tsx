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
      {/* Layout-specific decorative shapes */}
      {layout === 'centered' && (
        <>
          <div className={`absolute top-0 right-0 w-32 h-32 ${accentBg} opacity-20 rounded-full -translate-y-1/2 translate-x-1/2`} />
          <div className={`absolute bottom-0 left-0 w-24 h-24 ${accentBg} opacity-15 rounded-full translate-y-1/2 -translate-x-1/2`} />
        </>
      )}
      
      {layout === 'minimal' && (
        <div className={`absolute top-8 left-8 w-2 h-24 ${accentBg} opacity-40 rounded-full`} />
      )}
      
      {layout === 'split' && (
        <>
          <div className={`absolute top-0 left-0 w-full h-1/3 ${accentBg} opacity-10`} />
          <div className={`absolute bottom-0 right-0 w-20 h-20 ${accentBg} opacity-25 rounded-full translate-x-1/2 translate-y-1/2`} />
        </>
      )}
      
      {layout === 'bold' && (
        <>
          <div className={`absolute -top-10 -left-10 w-40 h-40 ${accentBg} opacity-15 rounded-full`} />
          <div className={`absolute -bottom-20 -right-20 w-56 h-56 ${accentBg} opacity-10 rounded-full`} />
          <div className={`absolute top-1/2 right-8 w-1 h-32 ${accentBg} opacity-30 rounded-full -translate-y-1/2`} />
        </>
      )}
      
      {card.type === 'intro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          <motion.div 
            className={`w-16 h-1 ${accentBg} rounded-full mb-12`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          />
          <motion.p 
            className={`text-3xl md:text-4xl font-bold ${textClass} text-center leading-tight whitespace-pre-line`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
          >
            {card.message}
          </motion.p>
          <motion.div 
            className={`w-16 h-1 ${accentBg} rounded-full mt-12`}
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
            <span className={`text-8xl md:text-9xl font-bold ${textClass} opacity-30 leading-none`}>
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
              className={`w-12 h-0.5 ${accentBg} rounded-full`}
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
        <div className="flex flex-col justify-center h-full p-8 pl-16 relative z-10">
          <motion.span 
            className={`text-sm ${textClass} opacity-50 tracking-widest mb-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            TRACK {String(card.trackNumber).padStart(2, '0')}
          </motion.span>
          
          <motion.h2 
            className={`text-4xl md:text-5xl font-bold ${textClass} leading-tight mb-2`}
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
            <span className={`text-7xl md:text-8xl font-bold ${textClass} opacity-20 leading-none`}>
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
            className={`text-5xl md:text-6xl font-bold ${textClass} leading-tight mb-4`}
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
            className={`w-16 h-1 ${accentBg} rounded-full mb-6`}
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
            className={`absolute top-8 right-8 text-6xl font-bold ${textClass} opacity-15`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            {String(card.trackNumber).padStart(2, '0')}
          </motion.span>
        </div>
      )}

      {card.type === 'outro' && (
        <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 180, damping: 15 }}
            className={`w-20 h-20 ${accentBg} rounded-full flex items-center justify-center mb-12`}
          >
            <span className="text-4xl">♡</span>
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
