import { useRef, useState } from 'react';
import {
  BsPauseCircleFill,
  BsVolumeUp,
  BsPlayCircleFill,
} from 'react-icons/bs';

import RangeInput from '../../components/Slider';
import { PlayerContainer } from './styles';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import { formatSeconds } from '../../utils/formatSeconds';

import Sunflower from '../../assets/sunflower.mp3';
import AlbumCover from '../../assets/sunflower-cover.jpg';
import Check from '../../assets/check.png';
import LyricsPanel from './LyricsPanel';

export default function Panel(): JSX.Element {
  const [volumeInput, setVolumeInput] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { data, pause, play, setVolume, setCurrentTime } =
    useAudioPlayer(audioRef);

  function handleChangeVolumeInput(value: number): void {
    setVolumeInput(value);
    setVolume(value / 100);
  }

  function handleChangeTime(value: number): void {
    setCurrentTime((data.duration * value) / 100);
  }

  return (
    <>
      <LyricsPanel time={data.currentTime} />
      <footer>
        <div className="song-info">
          <img className="song-info__album-cover" src={AlbumCover} />
          <div className="song-info__box">
            <h4>Sunflower (feat. Swae Lee)</h4>
            <div className="box__artist">
              <span>Post Malone</span>
              <img src={Check} alt="" />
            </div>
          </div>
        </div>
        <PlayerContainer>
          <audio ref={audioRef} src={Sunflower} loop />
          <div className="player__controls">
            {data.isPaused ? (
              <BsPlayCircleFill color="#fff" size={60} onClick={play} />
            ) : (
              <BsPauseCircleFill color="#fff" size={60} onClick={pause} />
            )}
            <div className="controls__volume">
              <BsVolumeUp color="#fff" size={35} />
              <div className="volume__range-wrapper">
                <div className="range-wrapper__input">
                  <RangeInput
                    step={1}
                    value={volumeInput}
                    onChange={handleChangeVolumeInput}
                  />
                </div>
              </div>
            </div>
          </div>
          <span className="player__time">
            {formatSeconds(data.currentTime)}
          </span>
          <RangeInput
            value={parseFloat(
              ((data.currentTime * 100) / data.duration).toFixed(1),
            )}
            onChange={handleChangeTime}
          />
        </PlayerContainer>
      </footer>
    </>
  );
}
