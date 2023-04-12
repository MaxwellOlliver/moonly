import { createStitches } from '@stitches/react';

export const { styled, css } = createStitches({
  media: {
    bp1: '(min-width: 0px)',
    bp2: '(min-width: 576px)',
    bp3: '(min-width: 768px)',
    bp4: '(min-width: 992px)',
    bp5: '(min-width: 1200px)',
    bp6: '(min-width: 1400px)',
  },
});
