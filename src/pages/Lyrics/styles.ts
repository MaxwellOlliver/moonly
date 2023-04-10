import { styled } from '@stitches/react';

const Container = styled('div', {
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateRows: 'calc(100vh - 320px) 320px',
  footer: {
    width: '100%',
    maxWidth: '100vw',
    padding: '4rem',
    display: 'flex',
    alignItems: 'center',
    gap: '10rem',
    '.song-info': {
      display: 'flex',
      gap: '2rem',
      minWidth: 'max-content',
      alignItems: 'flex-end',
      '.song-info__album-cover': {
        width: '190px',
        height: '190px',
        objectFit: 'cover',
        borderRadius: '15px',
      },
      '.song-info__box': {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'end',
        padding: '0.75rem 0',
        h4: {
          fontWeight: 400,
          fontSize: '2rem',
        },
        '.box__artist': {
          display: 'flex',
          alignItems: 'center',
          gap: 5,
          span: {
            fontSize: '1.225rem',
            fontWeight: 300,
          },
          img: {
            width: 15,
            height: 15,
          },
        },
      },
    },
  },
});

const BackgroundContainer = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  minHeight: '100vh',
  zIndex: -1,
  video: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  '.bg-blur': {
    height: '100%',
    width: '100%',
    backdropFilter: 'blur(26px)',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'linear-gradient(to top, #0B0B0Be6, #0B0B0Bb3 60%, #0B0B0Be6)',
  },
});

const PlayerContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '.player__controls': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: '2.225rem',
    marginBottom: '1.875rem',
    svg: {
      cursor: 'pointer',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      '&:active': {
        transform: 'scale(0.9)',
      },
    },
    '.controls__volume': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      '&:hover': {
        '.volume__range-wrapper': {
          maxWidth: '100px',
        },
      },
      '.volume__range-wrapper': {
        width: '100%',
        maxWidth: '0px',
        transition: 'max-width 0.2s ease-in',
        overflow: 'hidden',
        '.range-wrapper__input': {
          padding: '0 8px',
        },
      },
    },
  },
  '.player__time': {
    opacity: 0.8,
  },
});

const LyricsPanelContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  paddingTop: '5rem',
  '.lyrics-panel__scroll-list': {
    listStyle: 'none',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'hidden',
    '.scroll-list__lyric': {
      minHeight: '20%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      color: '#ffffff80',
      transition: 'color 0.3s',
      '&.--focus-total': {
        color: '#fff',
      },
      '&.--focus-semi': {
        color: '#ffffff80',
      },
      '&.--focus-none': {
        color: '#ffffff33',
      },
    },
  },
});

export {
  Container,
  BackgroundContainer,
  PlayerContainer,
  LyricsPanelContainer,
};
