import Background from './Background';
import { Container } from './styles';
import Player from './Panel';
import Help from './Help';
import { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import Loader from '../../assets/loader.svg';
import { classNames } from '../../utils/classNames';

export default function Lyrics(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);
  const [readyToPlay, setReadyToPlay] = useState({
    video: false,
    audio: false,
  });

  function toggle(): void {
    setIsOpen((state) => !state);
  }

  return (
    <Container>
      <button className="lyrics__help-btn" onClick={toggle}>
        <BiHelpCircle />
        <span>ajuda</span>
      </button>
      <Background setReadyToPlay={setReadyToPlay} />
      <Player setReadyToPlay={setReadyToPlay} />
      <Help toggleHelp={toggle} isOpen={isOpen} />
      <div
        className={classNames('lyrics__loader', {
          '--hide': readyToPlay.audio && readyToPlay.video,
        })}
      >
        <img src={Loader} alt="carregando" />
        <span className="loader__title">moonly</span>
      </div>
    </Container>
  );
}
