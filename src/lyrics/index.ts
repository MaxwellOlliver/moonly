import { sunflowerLyrics } from './sunflower';
import { sunflowerLyrics as sEwj } from './sunflowerEwj';

export interface LyricSentence {
  id: number;
  text: string;
  time: number;
}

export { sEwj as sunflower };
