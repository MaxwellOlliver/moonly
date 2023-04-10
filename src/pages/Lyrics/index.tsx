import Background from './Background';
import { Container } from './styles';
import Player from './Panel';

export default function Lyrics(): JSX.Element {
  return (
    <Container>
      <Background />
      <Player />
    </Container>
  );
}
