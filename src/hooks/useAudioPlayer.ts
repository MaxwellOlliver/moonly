import { useCallback, useEffect, useState } from 'react';

interface IUseAudioPlayer {
  data: {
    volume: number;
    currentTime: number;
    duration: number;
    isPaused: boolean;
    readyToPlay: boolean;
  };
  pause: () => void;
  play: () => void;
  togglePlayPause: () => void;
  setVolume: (v: number) => void;
  setCurrentTime: (t: number, add?: boolean) => void;
}

export default function useAudioPlayer(
  ref: React.RefObject<HTMLAudioElement>,
): IUseAudioPlayer {
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

  const togglePlayPause = useCallback(
    function togglePlayPause() {
      if (data.isPaused) {
        setData((state) => ({
          ...state,
          isPaused: false,
        }));
        ref.current?.play();
      } else {
        setData((state) => ({
          ...state,
          isPaused: true,
        }));
        ref.current?.pause();
      }
    },
    [ref, data],
  );

  function setVolume(volume: number): void {
    setData((state) => ({
      ...state,
      volume,
    }));
    if (ref.current) {
      ref.current.volume = volume;
    }
  }

  function setCurrentTime(time: number, add?: boolean): void {
    if (ref.current) {
      pause();
      if (add) {
        ref.current.currentTime = ref.current.currentTime + time;
      } else {
        ref.current.currentTime = time;
      }
      play();
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
    togglePlayPause,
  };
}
