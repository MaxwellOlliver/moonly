import { useRef, useState, Fragment, useEffect } from 'react';
import {
  BsPauseCircleFill,
  BsVolumeUp,
  BsPlayCircleFill,
} from 'react-icons/bs';

import RangeInput from '../../components/RangeInput';
import { PlayerContainer } from './styles';
import useAudioPlayer from '../../hooks/useAudioPlayer';
import { formatSeconds } from '../../utils/formatSeconds';

import Sunflower from '../../assets/sunflower.mp3';
import AlbumCover from '../../assets/sunflower-cover.jpg';
import Check from '../../assets/check.png';
import LyricsPanel from './LyricsPanel';
import { isMobile } from 'react-device-detect';
import useShortcut from '../../hooks/useShortcut';

interface PanelProps {
  setReadyToPlay: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Panel({ setReadyToPlay }: PanelProps): JSX.Element {
  const [volumeInput, setVolumeInput] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { data, pause, play, setVolume, setCurrentTime, togglePlayPause } =
    useAudioPlayer(audioRef);

  useEffect(() => {
    setReadyToPlay(data.readyToPlay);
  }, [data.readyToPlay]);

  useShortcut([
    {
      key: 'ArrowLeft',
      onTrigger: () => {
        setCurrentTime(-5, true);
      },
    },
    {
      key: 'ArrowRight',
      onTrigger: () => {
        setCurrentTime(5, true);
      },
    },
    {
      key: 'Space',
      onTrigger: () => {
        togglePlayPause();
      },
    },
  ]);

  function handleChangeVolumeInput(value: number): void {
    setVolumeInput(value);
    setVolume(value / 100);
  }

  function handleChangeTime(value: number): void {
    setCurrentTime((data.duration * value) / 100);
  }

  return (
    <Fragment>
      <LyricsPanel time={data.currentTime} />
      <PlayerContainer>
        <div className="player__song-info">
          <img className="song-info__album-cover" src={AlbumCover} />
          <div className="song-info__box">
            <h4>Sunflower</h4>
            <div className="box__artist">
              <span>Post Malone, Swae Lee</span>
              <img src={Check} alt="" />
            </div>
          </div>
        </div>
        <div className="player__audio-control">
          <audio ref={audioRef} src={Sunflower} data-a-id="audio-sn" loop />
          <div className="player__controls">
            {data.isPaused ? (
              <BsPlayCircleFill
                className="controls__play-pause"
                color="#fff"
                size={60}
                onClick={play}
              />
            ) : (
              <BsPauseCircleFill
                className="controls__play-pause"
                color="#fff"
                size={60}
                onClick={pause}
              />
            )}
            {!isMobile && (
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
            )}
          </div>
          <span className="player__time">
            {formatSeconds(data.currentTime)}
          </span>
          <RangeInput
            value={parseFloat(
              ((data.currentTime * 100) / data.duration).toFixed(1),
            )}
            onChange={handleChangeTime}
            step={0.1}
          />
        </div>
      </PlayerContainer>
    </Fragment>
  );
}
