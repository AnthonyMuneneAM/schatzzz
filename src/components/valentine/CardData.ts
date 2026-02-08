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
    message: "This isn't a playlist.\nIt's a feeling.",
    bgGradient: 'linear-gradient(135deg, #714F8E 0%, #A887BC 50%, #D64E83 100%)',
    textColor: '#F5F08F',
    accentColor: '#F186B4',
  },
  {
    id: 'song-1',
    type: 'song',
    title: 'Passenger Princess',
    artist: 'Valiant',
    vibe: '...your legs, them get so weak',
    bgGradient: 'linear-gradient(160deg, #F5F08F 0%, #F186B4 100%)',
    textColor: '#714F8E',
    accentColor: '#EF5031',
    trackNumber: 1,
    layout: 'centered',
  },
  {
    id: 'song-2',
    type: 'song',
    title: 'Day One',
    artist: 'Mutoriah, Ayrosh',
    vibe: 'Best thing in the city',
    bgGradient: 'linear-gradient(145deg, #EF5031 0%, #D64E83 100%)',
    textColor: '#F5F08F',
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
    bgGradient: 'linear-gradient(170deg, #714F8E 0%, #7BB1E1 100%)',
    textColor: '#F5F08F',
    accentColor: '#F186B4',
    trackNumber: 3,
    layout: 'split',
  },
  {
    id: 'song-4',
    type: 'song',
    title: 'Real Bad Gal',
    artist: 'Vybz Kartel',
    vibe: 'The energy you bring? Unmatched.',
    bgGradient: 'linear-gradient(135deg, #EF5031 0%, #F5F08F 100%)',
    textColor: '#714F8E',
    accentColor: '#D64E83',
    trackNumber: 4,
    layout: 'bold',
  },
  {
    id: 'song-5',
    type: 'song',
    title: 'Twinkle',
    artist: 'Dexta Daps',
    vibe: 'Next time we f... me ah guh mek a statement',
    bgGradient: 'linear-gradient(150deg, #7BB1E1 0%, #F186B4 100%)',
    textColor: '#FFFFFF',
    accentColor: '#F5F08F',
    trackNumber: 5,
    layout: 'centered',
  },
  {
    id: 'song-6',
    type: 'song',
    title: 'Not Lucky but Blessed',
    artist: 'Nicki Minaj',
    vibe: 'tattoo with a statement!',
    bgGradient: 'linear-gradient(140deg, #D64E83 0%, #714F8E 100%)',
    textColor: '#F5F08F',
    accentColor: '#EF5031',
    trackNumber: 6,
    layout: 'split',
  },
  {
    id: 'song-7',
    type: 'song',
    title: 'Follow the Leader',
    artist: 'The Soca Boys',
    vibe: 'Left.... Right',
    bgGradient: 'linear-gradient(155deg, #F186B4 0%, #F5F08F 100%)',
    textColor: '#714F8E',
    accentColor: '#EF5031',
    trackNumber: 7,
    layout: 'minimal',
  },
  {
    id: 'song-8',
    type: 'song',
    title: 'My Type',
    artist: 'Popcaan',
    vibe: 'Exactly what I was looking for.',
    bgGradient: 'linear-gradient(160deg, #A887BC 0%, #7BB1E1 100%)',
    textColor: '#FFFFFF',
    accentColor: '#F5F08F',
    trackNumber: 8,
    layout: 'split',
  },
  {
    id: 'outro',
    type: 'outro',
    message: 'Schatzzz..\nSei mein Valentin',
    bgGradient: 'linear-gradient(135deg, #F5F08F 0%, #F186B4 50%, #D64E83 100%)',
    textColor: '#714F8E',
    accentColor: '#EF5031',
  },
];
