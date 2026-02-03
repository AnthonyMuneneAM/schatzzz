export interface SongCard {
  id: string;
  type: 'intro' | 'song' | 'outro';
  title?: string;
  artist?: string;
  vibe?: string;
  message?: string;
  bgColor: 'navy' | 'golden' | 'blush' | 'coral';
  accentColor: 'navy' | 'golden' | 'blush' | 'coral' | 'cream';
  trackNumber?: number;
  layout?: 'centered' | 'minimal' | 'split' | 'bold';
}

export const cards: SongCard[] = [
  {
    id: 'intro',
    type: 'intro',
    message: "This isn't a playlist.\nIt's a feeling.",
    bgColor: 'navy',
    accentColor: 'golden',
  },
  {
    id: 'song-1',
    type: 'song',
    title: 'Passenger Princess',
    artist: 'Valiant',
    vibe: '...your legs, them get so weak',
    bgColor: 'golden',
    accentColor: 'navy',
    trackNumber: 1,
    layout: 'centered',
  },
  {
    id: 'song-2',
    type: 'song',
    title: 'Day One',
    artist: 'Mutoriah, Ayrosh',
    vibe: 'Best thing in the city',
    bgColor: 'blush',
    accentColor: 'navy',
    trackNumber: 2,
    layout: 'bold',
  },
  {
    id: 'song-3',
    type: 'song',
    title: 'Wrong Places',
    artist: 'Joshua Baraka',
    vibe: 'Shottos for the Hottos',
    bgColor: 'navy',
    accentColor: 'blush',
    trackNumber: 3,
    layout: 'split',
  },
  {
    id: 'song-4',
    type: 'song',
    title: 'Real Bad Gal',
    artist: 'Vybz Kartel',
    vibe: 'The energy you bring? Unmatched.',
    bgColor: 'coral',
    accentColor: 'cream',
    trackNumber: 4,
    layout: 'bold',
  },
  {
    id: 'song-5',
    type: 'song',
    title: 'Twinkle',
    artist: 'Dexta Daps',
    vibe: 'Next time we f... me ah guh mek a statement',
    bgColor: 'golden',
    accentColor: 'navy',
    trackNumber: 5,
    layout: 'centered',
  },
  {
    id: 'song-6',
    type: 'song',
    title: 'Not Lucky but Blessed',
    artist: 'Nicki Minaj',
    vibe: 'tattoo with a statement!',
    bgColor: 'blush',
    accentColor: 'navy',
    trackNumber: 6,
    layout: 'split',
  },
  {
    id: 'song-7',
    type: 'song',
    title: 'My Type',
    artist: 'Popcaan',
    vibe: 'Exactly what I was looking for.',
    bgColor: 'navy',
    accentColor: 'golden',
    trackNumber: 7,
    layout: 'split',
  },
  {
    id: 'outro',
    type: 'outro',
    message: 'Schatzzz..\nBe My Valentine',
    bgColor: 'golden',
    accentColor: 'navy',
  },
];
