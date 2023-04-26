import { BackgroundContainer } from './styles';

import BgGif from '../../assets/background-video.gif';

interface BackgroundProps {
  backgroundReady: () => void;
}

export default function Background({
  backgroundReady,
}: BackgroundProps): JSX.Element {
  return (
    <BackgroundContainer>
      <img src={BgGif} alt="background" onLoad={backgroundReady} />
      <div className="bg-blur"></div>
    </BackgroundContainer>
  );
}
