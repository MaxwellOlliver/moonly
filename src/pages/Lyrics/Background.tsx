import { BackgroundContainer } from './styles';

import BgVideo from '../../assets/background-video.mp4';
import BgGif from '../../assets/background-video.gif';

export default function Background(): JSX.Element {
  return (
    <BackgroundContainer>
      {/* <video src={BgVideo} loop muted autoPlay controls /> */}
      <img src={BgGif} alt="background" />
      <div className="bg-blur"></div>
    </BackgroundContainer>
  );
}
