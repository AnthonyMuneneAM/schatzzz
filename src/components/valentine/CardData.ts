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
    vibe: 'The one where you let me drive your life.',
    bgColor: 'golden',
    accentColor: 'navy',
    trackNumber: 1,
  },
  {
    id: 'song-2',
    type: 'song',
    title: 'Day One',
    artist: 'Mutoriah, Ayrosh',
    vibe: 'From the very beginning, it was always you.',
    bgColor: 'blush',
    accentColor: 'navy',
    trackNumber: 2,
  },
  {
    id: 'song-3',
    type: 'song',
    title: 'Wrong Places',
    artist: 'Joshua Baraka',
    vibe: 'Looked everywhere. Found you nowhere expected.',
    bgColor: 'navy',
    accentColor: 'blush',
    trackNumber: 3,
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
  },
  {
    id: 'song-5',
    type: 'song',
    title: 'Twinkle',
    artist: 'Dexta Daps',
    vibe: 'The way your eyes catch the light.',
    bgColor: 'golden',
    accentColor: 'navy',
    trackNumber: 5,
  },
  {
    id: 'song-6',
    type: 'song',
    title: 'Not Lucky but Blessed',
    artist: 'Nicki Minaj',
    vibe: 'You\'re not chance. You\'re chosen.',
    bgColor: 'blush',
    accentColor: 'navy',
    trackNumber: 6,
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
  },
  {
    id: 'outro',
    type: 'outro',
    message: 'Be my Valentine.',
    bgColor: 'golden',
    accentColor: 'navy',
  },
];
