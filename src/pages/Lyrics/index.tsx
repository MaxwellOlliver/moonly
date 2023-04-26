import Background from './Background';
import { Container } from './styles';
import Player from './Panel';
import Help from './Help';
import { useEffect, useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { classNames } from '../../utils/classNames';

interface ReadyToPlay {
  audio: boolean;
  background: boolean;
}

export default function Lyrics(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
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

  function toggle(): void {
    setIsOpen((state) => !state);
  }

  function audioReady(): void {
    setReadyToPlay((state) => ({ ...state, audio: true }));
  }

  function backgroundReady(): void {
    setReadyToPlay((state) => ({ ...state, background: true }));
  }

  return (
    <Container>
      <button className="lyrics__help-btn" onClick={toggle}>
        <BiHelpCircle />
        <span>ajuda</span>
      </button>
      <Background backgroundReady={backgroundReady} />
      <Player audioReady={audioReady} />
      <Help toggleHelp={toggle} isOpen={isOpen} />
      <div
        className={classNames('lyrics__loader', {
          '--hide': hideLoader,
        })}
      >
        <Loader width={30} height={30} />
        <span className="loader__title">moonly</span>
      </div>
    </Container>
  );
}
