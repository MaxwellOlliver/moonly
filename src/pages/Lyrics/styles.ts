import { styled } from '../../styles/stitches';

const Container = styled('div', {
  width: '100%',
  maxWidth: '100vw',
  height: '100vh',
  maxHeight: '100vh',
  minHeight: '100vh',
  display: 'grid',
  gridTemplateColumns: '1fr',
  '.lyrics__help-btn': {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    background: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    position: 'fixed',
    gap: '5px',
    '@bp1': {
      top: '1rem',
      left: '1rem',
    },
    '@bp3': {
      top: '2rem',
      left: '2rem',
    },
    svg: {
      fontSize: '1.2rem',
    },
  },
  '@bp1': {
    gridTemplateRows: '70vh 30vh',
  },
  '.lyrics__loader': {
    position: 'fixed',
    top: 0,
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
    transition: 'top 0.6s ease-in-out',
    zIndex: 999999,
    img: {
      width: '30px',
    },
    '&.--hide': {
      top: '-100%',
      pointerEvents: 'none',
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
  img: {
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
  '.player__song-info': {
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
            minWidth: '90px',
            opacity: 1,
            '@bp1': {
              minWidth: '90px',
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
            padding: '18px',
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
      color: '#fff',
      transition: 'opacity 0.3s',
      textAlign: 'center',
      '&.--focus-total': {
        opacity: 1,
      },
      '&.--focus-semi': {
        opacity: 0.5,
      },
      '&.--focus-none': {
        opacity: 0.2,
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
      '.lyric__catenation': {
        backgroundColor: '#4175C5',
        borderRadius: '3px',
        color: '#fff',
      },
      '.lyric__intrusion': {
        backgroundColor: '#AE6816',
        borderRadius: '3px',
        color: '#fff',
      },
      '.lyric__elision': {
        backgroundColor: '#41C58D',
        borderRadius: '3px',
        color: '#fff',
      },
      '.lyric__assimilation': {
        backgroundColor: '#8341C5',
        borderRadius: '3px',
        color: '#fff',
      },
    },
  },
});

const HelpContainer = styled('div', {
  width: '100%',
  height: '100vh',
  position: 'fixed',
  zIndex: 99999,
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

  '&.--show': {
    '.modal__overlay': {
      opacity: 1,
      pointerEvents: 'all',
    },
    '.modal__card': {
      opacity: 1,
      pointerEvents: 'all',
    },
  },

  '.modal__overlay': {
    width: '100%',
    height: '100%',
    backgroundColor: '#00000077',
    backdropFilter: 'blur(3px)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.3s',
  },
  '.modal__card': {
    padding: '2rem',
    position: 'absolute',
    backgroundColor: '#ffffff22',
    backdropFilter: 'blur(5px)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    pointerEvents: 'none',
    transition: 'opacity 0.3s',
    margin: '2rem',

    '.card__header': {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      marginBottom: '2rem',
      svg: {
        fontSize: '2rem',
      },
    },

    '.card__body': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      '.connected-speech': {
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        marginBottom: '2rem',

        '.connected-speech__type': {
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '50%',
          minWidth: 'max-content',
          marginBottom: '1rem',
          '@bp1': {
            width: '100%',
          },
          '@bp2': {
            width: '50%',
          },
          '.type__color': {
            width: '50px',
            height: '40px',
            borderRadius: '5px',
          },
        },
      },
      '.body__play-btn': {
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
        background: 'none',
        fontSize: '1rem',
        cursor: 'pointer',
        svg: {
          fontSize: '1.7rem',
        },
      },
    },
  },
});

export {
  Container,
  BackgroundContainer,
  PlayerContainer,
  LyricsPanelContainer,
  HelpContainer,
};
