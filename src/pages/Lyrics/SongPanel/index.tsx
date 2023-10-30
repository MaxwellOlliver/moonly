import { useRef, useState, Fragment, useEffect } from 'react';
import {
  BsPauseCircleFill,
  BsVolumeUp,
  BsVolumeMute,
  BsPlayCircleFill,
} from 'react-icons/bs';
import { isMobile } from 'react-device-detect';

import RangeInput from '@/components/RangeInput';
import { SongPanelContainer } from './styles';
import useAudioPlayer from '@/hooks/useAudioPlayer';
import { formatSeconds } from '@/utils/formatSeconds';

import Check from '@/assets/check.png';
import Lyrics from './Lyrics';
import useShortcut from '@/hooks/useShortcut';
import { songs } from '@/lyrics';

interface SongPanelProps {
  audioReady: () => void;
}

const song = songs[0];

export default function SongPanel({ audioReady }: SongPanelProps): JSX.Element {
  const [volumeInput, setVolumeInput] = useState(30);
  const audioRef = useRef<HTMLAudioElement>(null);
  const volumeCache = useRef(volumeInput);
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

  function toggleVolume(): void {
    if (volumeInput === 0) {
      handleChangeVolumeInput(volumeCache.current);
    } else {
      volumeCache.current = volumeInput;
      handleChangeVolumeInput(0);
    }
  }

  return (
    <Fragment>
      <Lyrics time={data.currentTime} />
      <SongPanelContainer>
        <div className="song-panel__song-info">
          <img className="song-info__album-cover" src={song.cover} />
          <div className="song-info__box">
            <h4>{song.title}</h4>
            <div className="box__artist">
              <span>{song.singers.join(', ')}</span>
              <img src={Check} alt="verified singers" />
            </div>
          </div>
        </div>
        <div className="song-panel__audio-control">
          <audio ref={audioRef} src={song.audioUrl} loop />
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
                {volumeInput === 0 ? (
                  <BsVolumeMute
                    color="#fff"
                    size={30}
                    onClick={() => {
                      toggleVolume();
                    }}
                  />
                ) : (
                  <BsVolumeUp
                    color="#fff"
                    size={30}
                    onClick={() => {
                      toggleVolume();
                    }}
                  />
                )}

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
