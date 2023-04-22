import { BackgroundContainer } from './styles';

import BgVideo from '../../assets/background-video.mp4';

interface BackgroundProps {
  setReadyToPlay: React.Dispatch<
    React.SetStateAction<{
      video: boolean;
      audio: boolean;
    }>
  >;
}

export default function Background({
  setReadyToPlay,
}: BackgroundProps): JSX.Element {
  return (
    <BackgroundContainer>
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        onCanPlay={() => {
          setReadyToPlay((state) => ({ ...state, video: true }));
        }}
      />
      <div className="bg-blur"></div>
    </BackgroundContainer>
  );
}
