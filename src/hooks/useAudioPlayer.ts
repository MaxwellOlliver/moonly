import { useCallback, useEffect } from 'react';
import { useState } from 'react';

export default function useAudioPlayer(ref: React.RefObject<HTMLAudioElement>) {
  const [data, setData] = useState({
    volume: 0.3,
    currentTime: 0,
    duration: 9999,
    isPaused: true,
    readyToPlay: false,
  });

  const pause = useCallback(
    function pause() {
      setData((state) => ({
        ...state,
        isPaused: true,
      }));
      ref.current?.pause();
    },
    [ref],
  );

  const play = useCallback(
    function play() {
      setData((state) => ({
        ...state,
        isPaused: false,
      }));
      ref.current?.play();
    },
    [ref],
  );

  function setVolume(volume: number) {
    setData((state) => ({
      ...state,
      volume,
    }));
    if (ref.current) {
      ref.current.volume = volume;
    }
  }
  function setCurrentTime(time: number) {
    setData((state) => ({
      ...state,
      currentTime: time,
    }));
    if (ref.current) {
      ref.current.currentTime = time;
    }
  }

  useEffect(() => {
    if (ref.current) {
      const audio = ref.current;

      audio.volume = data.volume;
      audio.addEventListener('loadedmetadata', () => {
        if (ref.current) {
          setData((state) => ({
            ...state,
            readyToPlay: true,
            duration: ref.current!.duration,
          }));
        }
      });
      audio.addEventListener('timeupdate', () => {
        if (ref.current) {
          setData((state) => ({
            ...state,
            currentTime: ref.current!.currentTime,
          }));
        }
      });
    }
  }, [ref]);

  return {
    data,
    pause,
    play,
    setVolume,
    setCurrentTime,
  };
}
