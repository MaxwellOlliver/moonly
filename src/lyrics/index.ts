import { sunflowerLyrics } from './sunflower';

export interface LyricSentence {
  id: number;
  text: string;
  time: number;
}

export { sunflowerLyrics as sunflower };
