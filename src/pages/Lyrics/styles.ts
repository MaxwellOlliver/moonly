import { styled } from '../../styles/stitches';

const Container = styled('div', {
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
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
  maxWidth: '100vw',
  height: '100%',
  padding: '4rem',
  display: 'flex',
  '@bp1': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '1rem',
    padding: '1rem 2rem 2rem',
  },
  '@bp2': {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '2rem',
    padding: '1rem 4rem 2rem',
  },
  '@bp3': {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: '5rem',
    padding: '1rem 4rem 3rem',
  },
  '@bp4': {
    gap: '10rem',
  },
  '.song-info': {
    display: 'flex',
    gap: '2rem',
    minWidth: 'max-content',
    alignItems: 'flex-end',
    '@bp1': {
      gap: '1rem',
    },
    '.song-info__album-cover': {
      width: '100%',
      maxWidth: '190px',
      // height: '190px',
      objectFit: 'cover',
      borderRadius: '15px',
      '@bp1': {
        maxWidth: '80px',
      },
      '@bp3': {
        maxWidth: '130px',
      },
      '@bp5': {
        maxWidth: '120px',
      },
      '@bp6': {
        maxWidth: '150px',
      },
    },
    '.song-info__box': {
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'end',
      padding: '0.75rem 0',
      h4: {
        fontWeight: 400,
        fontSize: '2rem',
        '@bp1': {
          fontSize: '1.25rem',
        },
        '@bp5': {
          fontSize: '1.5rem',
        },
        '@bp6': {
          fontSize: '2rem',
        },
      },
      '.box__artist': {
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        span: {
          fontSize: '1.225rem',
          fontWeight: 300,
          '@bp1': {
            fontSize: '0.875rem',
          },
          '@bp6': {
            fontSize: '1rem',
          },
        },
        img: {
          width: 15,
          height: 15,
        },
      },
    },
  },
  '.player__audio-control': {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: 6,
    '@bp1': {
      flexDirection: 'row',
      alignItems: 'center',
    },
    '@bp2': {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'flex-start',
    },
    '.player__controls': {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      marginBottom: '1.5rem',
      '@bp1': {
        marginBottom: '0',
        gap: '10px',
        width: 'auto',
        marginRight: '1rem',
      },
      '@bp3': {
        marginBottom: '1rem',
        gap: '2rem',
      },
      '@bp4': {
        marginBottom: '1.5rem',
        gap: '2rem',
      },
      '.controls__play-pause': {
        cursor: 'pointer',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.1)',
        },
        '&:active': {
          transform: 'scale(0.9)',
        },
        '@bp1': {
          minWidth: '3rem',
          width: '3rem',
        },
      },
      '.controls__volume': {
        display: 'flex',
        alignItems: 'center',
        width: 'min-content',
        '&:hover': {
          '.volume__range-wrapper': {
            minWidth: '100px',
            opacity: 1,
            '@bp1': {
              minWidth: '80px',
            },
          },
        },
        '.volume__range-wrapper': {
          width: '100%',
          minWidth: '0px',
          transition: 'min-width 0.2s ease-in, opacity 0.3s',
          overflow: 'hidden',
          opacity: 0,
          '.range-wrapper__input': {
            padding: '8px',
          },
        },
        svg: {
          cursor: 'pointer',
          '@bp1': {
            minWidth: '25px',
            maxWidth: '25px',
          },
          '@bp3': {
            minWidth: '35px',
            maxWidth: '35px',
          },
        },
      },
    },
    '.player__time': {
      opacity: 0.8,
      '@bp1': {
        fontSize: '0.875rem',
        marginRight: '12px',
      },
      '@bp3': {
        fontSize: '1rem',
      },
    },
  },
});

const LyricsPanelContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3rem',
  paddingTop: '5rem',
  '@bp1': {
    padding: '2rem',
    paddingTop: '3rem',
  },
  '@bp2': {
    padding: '3rem',
    paddingTop: '5rem',
  },
  '.lyrics-panel__scroll-list': {
    listStyle: 'none',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'hidden',
    '.scroll-list__lyric': {
      minHeight: 'calc(100% / 5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      color: '#ffffff80',
      transition: 'color 0.3s',
      textAlign: 'center',
      '&.--focus-total': {
        color: '#fff',
      },
      '&.--focus-semi': {
        color: '#ffffff80',
      },
      '&.--focus-none': {
        color: '#ffffff33',
      },
      '@bp1': {
        fontSize: '1.5rem',
      },
      '@bp3': {
        fontSize: '2rem',
      },
      '@bp5': {
        fontSize: '2.5rem',
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