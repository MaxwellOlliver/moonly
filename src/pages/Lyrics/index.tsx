import Background from './Background';
import { Container } from './styles';
import SongPanel from './SongPanel';
import { useEffect, useState } from 'react';
import Loader from './Loader';

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
      timeout = setTimeout(() => {
        setHideLoader(true);
      }, 1000);
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
      <Background backgroundReady={backgroundReady} />
      <SongPanel audioReady={audioReady} />
      <Loader hideLoader={hideLoader} />
    </Container>
  );
}
