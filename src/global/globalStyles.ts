import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    outline: 'none',
    border: 'none',
    boxSizing: 'border-box',
  },
  html: {
    fontFamily: '"Poppins", Arial, Helvetica, sans-serif;',
    fontSize: '1rem',
    color: '#fff',
  },
  '.no-select': {
    userSelect: 'none',
    '-webkit-user-select': 'none',
  },
});

export { globalStyles };
