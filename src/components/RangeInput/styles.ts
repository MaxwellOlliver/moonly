import { styled } from '@stitches/react';

const RangeContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '3px',
  padding: '6px 0',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '&[data-mouse-down="true"], &[data-is-mobile]': {
    '.range__thumb': {
      transform: 'scale(1)',
    },
  },
  '&:hover': {
    '.range__thumb': {
      boxShadow: '0 0 0px 5px #ffffff26',
      transform: 'scale(1)',
    },
  },
  '&[data-mouse-down="true"]': {
    '.range__thumb': {
      boxShadow: '0 0 0px 8px #ffffff33',
      transform: 'scale(1)',
    },
  },
});

const RangeSlider = styled('span', {
  width: '100%',
  height: '100%',
  minHeight: '5px',
  backgroundColor: '#ffffff10',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
});

const RangeValue = styled('div', {
  position: 'absolute',
  height: '3px',
  fontSize: '1em',
  fontWeight: 'bold',
  zIndex: 2,
  pointerEvents: 'none',
  backgroundColor: '#fff',
  maxWidth: '100%',
  borderRadius: '5px',
});

const RangeThumb = styled('div', {
  position: 'absolute',
  left: '-6px',
  height: '12px',
  width: '12px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  zIndex: 3,
  transform: 'scale(0)',
  transition: 'transform 0.3s, box-shadow 0.3s',
  pointerEvents: 'none',
  cursor: 'pointer',
});

export { RangeContainer, RangeSlider, RangeValue, RangeThumb };
