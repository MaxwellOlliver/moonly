import { BackgroundContainer } from './styles';

import BgVideo from '../../assets/background-video.mp4';

export default function Background(): JSX.Element {
  return (
    <BackgroundContainer>
      <video src={BgVideo} loop muted autoPlay controls />
      <div className="bg-blur"></div>
    </BackgroundContainer>
  );
}
