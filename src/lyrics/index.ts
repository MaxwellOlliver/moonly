import SunflowerAudio from '../assets/sunflower.mp3';
import SunflowerCover from '../assets/sunflower-cover.jpg';
import { sunflowerLyrics } from './sunflower';

export interface LyricSentence {
  id: number;
  text: string;
  time: number;
}

export interface Song {
  id: string;
  title: string;
  cover: string;
  audioUrl: string;
  singers: string[];
  lyrics: LyricSentence[];
}

export const lyrics: Song[] = [
  {
    id: 'song-1',
    title: 'Sunflower',
    cover: SunflowerCover,
    audioUrl: SunflowerAudio,
    singers: ['Post Malone', 'Swae Lee'],
    lyrics: sunflowerLyrics,
  },
];
