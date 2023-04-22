import Background from './Background';
import { Container } from './styles';
import Player from './Panel';
import Help from './Help';
import { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';

export default function Lyrics(): JSX.Element {
  const [isOpen, setIsOpen] = useState(true);

  function toggle(): void {
    setIsOpen((state) => !state);
  }

  return (
    <Container>
      <button className="lyrics__help-btn" onClick={toggle}>
        <BiHelpCircle />
        <span>ajuda</span>
      </button>
      <Background />
      <Player />
      <Help toggleHelp={toggle} isOpen={isOpen} />
    </Container>
  );
}
