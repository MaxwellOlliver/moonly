import { useEffect, useState } from 'react';

import Background from './Background';
import SongPanel from './SongPanel';
import Loader from './Loader';

import { Container } from './styles';

interface ReadyToPlay {
  audio: boolean;
  background: boolean;
}

export default function Lyrics(): JSX.Element {
  const [readyToPlay, setReadyToPlay] = useState<ReadyToPlay>({
    audio: false,
    background: false,
  });
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    let timeout: number;
    if (
      Object.keys(readyToPlay).every(
        (key) => !!readyToPlay[key as keyof ReadyToPlay],
      )
    ) {
      setHideLoader(true);
    }

    return () => {
      timeout && clearInterval(timeout);
    };
  }, [readyToPlay]);

  function audioReady(): void {
    setReadyToPlay((state) => ({ ...state, audio: true }));
  }

  function backgroundReady(): void {
    setReadyToPlay((state) => ({ ...state, background: true }));
  }

  return (
    <Container>
      <Loader hideLoader={hideLoader} />
      <Background backgroundReady={backgroundReady} />
      <SongPanel audioReady={audioReady} />
    </Container>
  );
}
