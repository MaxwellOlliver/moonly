import { styled } from '@/styles/stitches';

const Container = styled('div', {
  width: '100%',
  maxWidth: '100vw',
  height: '100%',
  maxHeight: '100vh',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  '&::after': {
    content: 'moonly',
    fontFamily: "'Dancing Script', cursive",
    position: 'absolute',
    top: '1rem',
    left: '1.5rem',
    fontSize: '1.5rem',
    '@bp1': {
      fontSize: '1.5rem',
      transform: 'translateX(-50%)',
      left: '50%',
    },
    '@bp3': {
      fontSize: '2rem',
      top: '1rem',
      left: '1.5rem',
      transform: 'none',
    },
  },
  '@bp1': {
    gridTemplateRows: '70vh 30vh',
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
  img: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  '.bg-blur': {
    height: '100%',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: 'linear-gradient(to bottom, #0B0B0Be6, #0B0B0Bb3, #0B0B0Be6)',
    '.blur': {
      height: '100%',
      width: '100%',
      backdropFilter: 'blur(5px)',
    },
  },
});

const LoaderContainer = styled('div', {
  position: 'fixed',
  bottom: 0,
  left: 0,
  background: '#000',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  fontSize: '2rem',
  fontWeight: '300',
  opacity: 1,
  pointerEvents: 'all',
  transition: 'bottom 0.6s ease-in-out',
  zIndex: 999999,
  img: {
    width: '30px',
  },
  span: {
    fontFamily: "'Dancing Script', cursive",
    fontSize: '2.5rem',
  },
  '&.--hide': {
    bottom: '100%',
    pointerEvents: 'none',
  },
});

export { Container, BackgroundContainer, LoaderContainer };
