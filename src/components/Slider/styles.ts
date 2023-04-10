import { styled } from '@stitches/react';

const RangeContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: '5px',
  padding: '8px 0',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '&:hover, &[data-mouse-down="true"]': {
    '.range__thumb': {
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
  height: '5px',
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
  left: '-8px',
  height: '16px',
  width: '16px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  cursor: 'pointer',
  zIndex: 3,
  transform: 'scale(0)',
  transition: 'transform 0.3s',
});

export { RangeContainer, RangeSlider, RangeValue, RangeThumb };
