import SunflowerAudio from '@/assets/sunflower.mp3';
import SunflowerCover from '@/assets/sunflower-cover.jpg';
import SunflowerBackground from '@/assets/background-video.gif';
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
  background: string;
  audioUrl: string;
  singers: string[];
  lyrics: LyricSentence[];
}

export const songs: Song[] = [
  {
    id: 'song-1',
    title: 'Sunflower',
    cover: SunflowerCover,
    background: SunflowerBackground,
    audioUrl: SunflowerAudio,
    singers: ['Post Malone', 'Swae Lee'],
    lyrics: sunflowerLyrics,
  },
];
