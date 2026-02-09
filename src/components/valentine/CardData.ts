export interface SongCard {
  id: string;
  type: 'intro' | 'song' | 'outro';
  title?: string;
  artist?: string;
  vibe?: string;
  message?: string;
  trackNumber?: number;
  layout?: 'centered' | 'minimal' | 'split' | 'bold';
  // Each card gets its own unique color combo
  bgGradient: string;
  textColor: string;
  accentColor: string;
}

export const cards: SongCard[] = [
  {
    id: 'intro',
    type: 'intro',
    message: "Your Move...",
    bgGradient: '#7B9FD3',
    textColor: '#5D4E3C',
    accentColor: '#FFFFFF',
  },
  {
    id: 'song-1',
    type: 'song',
    title: 'Passenger Princess',
    artist: 'Valiant',
    vibe: '...your legs, them get so weak',
    bgGradient: '#F5E6D3',
    textColor: '#5D4E3C',
    accentColor: '#FF6B35',
    trackNumber: 1,
    layout: 'centered',
  },
  {
    id: 'song-2',
    type: 'song',
    title: 'Day One',
    artist: 'Mutoriah, Ayrosh',
    vibe: 'Best thing in the city',
    bgGradient: '#FF6B35',
    textColor: '#5D4E3C',
    accentColor: '#FFFFFF',
    trackNumber: 2,
    layout: 'bold',
  },
  {
    id: 'song-3',
    type: 'song',
    title: 'Wrong Places',
    artist: 'Joshua Baraka',
    vibe: 'Shottos for the Hottos',
    bgGradient: '#9B7EBD',
    textColor: '#FFFFFF',
    accentColor: '#FFD93D',
    trackNumber: 3,
    layout: 'split',
  },
  {
    id: 'song-4',
    type: 'song',
    title: 'Real Bad Gal',
    artist: 'Vybz Kartel',
    vibe: 'The energy you bring? Unmatched.',
    bgGradient: '#FFD93D',
    textColor: '#5D4E3C',
    accentColor: '#9B7EBD',
    trackNumber: 4,
    layout: 'bold',
  },
  {
    id: 'song-5',
    type: 'song',
    title: 'Twinkle',
    artist: 'Dexta Daps',
    vibe: 'Next time we f... me ah guh mek a statement',
    bgGradient: '#4ECDC4',
    textColor: '#5D4E3C',
    accentColor: '#FF6B6B',
    trackNumber: 5,
    layout: 'centered',
  },
  {
    id: 'song-6',
    type: 'song',
    title: 'Moment for Life',
    artist: 'Nicki Minaj',
    vibe: 'not lucky but blessed',
    bgGradient: '#FF6B6B',
    textColor: '#FFFFFF',
    accentColor: '#FFD93D',
    trackNumber: 6,
    layout: 'split',
  },
  {
    id: 'song-7',
    type: 'song',
    title: 'Follow the Leader',
    artist: 'The Soca Boys',
    vibe: 'Left.... Right',
    bgGradient: '#95E1D3',
    textColor: '#5D4E3C',
    accentColor: '#9B7EBD',
    trackNumber: 7,
    layout: 'minimal',
  },
  {
    id: 'song-8',
    type: 'song',
    title: 'My Type',
    artist: 'Popcaan',
    vibe: 'Exactly what I was looking for.',
    bgGradient: '#9B7EBD',
    textColor: '#FFFFFF',
    accentColor: '#4ECDC4',
    trackNumber: 8,
    layout: 'split',
  },
  {
    id: 'outro',
    type: 'outro',
    message: '8 ball,\ncorner pocket',
    bgGradient: '#FFB6C1',
    textColor: '#5D4E3C',
    accentColor: '#9B7EBD',
  },
];
