import { useRef } from 'react';
import { type Lyric } from '../../mock/lyrics';
import { sunflowerLyrics } from '../../mock/lyrics/sunflower';
import { LyricsPanelContainer } from './styles';

interface LyricsPanelProps {
  time: number;
}

interface LyricsWithFocus extends Lyric {
  focus: 'none' | 'semi' | 'total';
}

export default function LyricsPanel({ time }: LyricsPanelProps): JSX.Element {
  const lastCurrent = useRef<Lyric | null>(null);
  const scrollRef = useRef<HTMLUListElement>(null);

  function getLyrics(): LyricsWithFocus[] {
    const current: Lyric | undefined = sunflowerLyrics.find((lyric, index) => {
      const next = sunflowerLyrics[index + 1];

      return lyric.time <= time && ((next && next.time > time) || !next);
    });

    if (!current && !lastCurrent.current) {
      scrollRef.current?.scrollTo({
        behavior: 'smooth',
        top: 0,
      });
    } else if (!current && lastCurrent.current) {
      scrollRef.current?.scrollTo({
        behavior: 'smooth',
        top: scrollRef.current?.scrollHeight,
      });
    }

    if (
      (!lastCurrent.current && current) ||
      (current && lastCurrent.current?.id !== current.id)
    ) {
      const lyricElement = document.querySelector(
        `[data-lyrics-id="lyric-${current.id}"]`,
      );

      console.log(lyricElement);

      if (lyricElement) {
        lyricElement.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }

    lastCurrent.current = current ?? null;

    return sunflowerLyrics.map((lyric, index) => {
      const previous = current
        ? sunflowerLyrics[sunflowerLyrics.indexOf(current) - 1]
        : null;
      const next = current
        ? sunflowerLyrics[sunflowerLyrics.indexOf(current) + 1]
        : null;

      return {
        ...lyric,
        focus:
          current?.id === lyric.id
            ? 'total'
            : (previous && previous.id === lyric.id) ||
              (next && next.id === lyric.id)
            ? 'semi'
            : 'none',
      };
    });
  }

  return (
    <LyricsPanelContainer>
      <ul className="lyrics-panel__scroll-list" ref={scrollRef}>
        {getLyrics().map((lyric) => (
          <li
            key={lyric.id}
            data-lyrics-id={`lyric-${lyric.id}`}
            className={`scroll-list__lyric --focus-${lyric.focus}`}
            dangerouslySetInnerHTML={{ __html: lyric.text }}
          ></li>
        ))}
      </ul>
    </LyricsPanelContainer>
  );
}
