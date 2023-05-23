import PaperWallsAudio from '@/assets/paper-walls.mp3';
import PaperWallsCover from '@/assets/paper-walls-cover.jpg';
import PaperWallsBackground from '@/assets/paper-walls-background.gif';
import { paperWallsLyrics } from './paper-walls';

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
    title: 'Paper walls',
    cover: PaperWallsCover,
    background: PaperWallsBackground,
    audioUrl: PaperWallsAudio,
    singers: ['Elliot Kings', 'Riggs', 'Mykyl'],
    lyrics: paperWallsLyrics,
  },
];
