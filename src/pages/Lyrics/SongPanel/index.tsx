import { useRef, useState, Fragment, useEffect } from 'react';
import {
  BsPauseCircleFill,
  BsVolumeUp,
  BsPlayCircleFill,
} from 'react-icons/bs';

import RangeInput from '../../../components/RangeInput';
import { SongPanelContainer } from './styles';
import useAudioPlayer from '../../../hooks/useAudioPlayer';
import { formatSeconds } from '../../../utils/formatSeconds';

import Check from '../../../assets/check.png';
import Lyrics from './Lyrics';
import { isMobile } from 'react-device-detect';
import useShortcut from '../../../hooks/useShortcut';
import { lyrics } from '../../../lyrics';

interface SongPanelProps {
  audioReady: () => void;
}

const sunflower = lyrics[0];

export default function SongPanel({ audioReady }: SongPanelProps): JSX.Element {
  const [volumeInput, setVolumeInput] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { data, pause, play, setVolume, setCurrentTime, togglePlayPause } =
    useAudioPlayer(audioRef);

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

  useEffect(() => {
    if (data.readyToPlay) {
      audioReady();
    }
  }, [data.readyToPlay]);

  function handleChangeVolumeInput(value: number): void {
    setVolumeInput(value);
    setVolume(value / 100);
  }

  function handleChangeTime(value: number): void {
    setCurrentTime((data.duration * value) / 100);
  }

  return (
    <Fragment>
      <Lyrics time={data.currentTime} />
      <SongPanelContainer>
        <div className="song-panel__song-info">
          <img className="song-info__album-cover" src={sunflower.cover} />
          <div className="song-info__box">
            <h4>{sunflower.title}</h4>
            <div className="box__artist">
              <span>{sunflower.singers.join(', ')}</span>
              <img src={Check} alt="verified singers" />
            </div>
          </div>
        </div>
        <div className="song-panel__audio-control">
          <audio ref={audioRef} src={sunflower.audioUrl} loop />
          <div className="song-panel__controls">
            {data.isPaused ? (
              <BsPlayCircleFill
                className="controls__play-pause"
                color="#fff"
                size={60}
                onClick={play}
                aria-label="play"
              />
            ) : (
              <BsPauseCircleFill
                className="controls__play-pause"
                color="#fff"
                size={60}
                onClick={pause}
                aria-label="pause"
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
          <span className="song-panel__time">
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
      </SongPanelContainer>
    </Fragment>
  );
}
