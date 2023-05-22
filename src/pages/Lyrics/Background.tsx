import { BackgroundContainer } from './styles';
import { songs } from '@/lyrics';

interface BackgroundProps {
  backgroundReady: () => void;
}

const sunflower = songs[0];

export default function Background({
  backgroundReady,
}: BackgroundProps): JSX.Element {
  return (
    <BackgroundContainer>
      <img
        src={sunflower.background}
        alt="background"
        onLoad={backgroundReady}
      />
      <div className="bg-blur"></div>
    </BackgroundContainer>
  );
}
