import { HelpContainer } from './styles';
import { BiHelpCircle } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';
import { classNames } from '../../utils/classNames';
import { useEffect } from 'react';
interface HelpProps {
  toggleHelp: () => void;
  isOpen: boolean;
}

export default function Help({ isOpen, toggleHelp }: HelpProps): JSX.Element {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const connectedSpeechTypes = [
    {
      desc: 'catenation',
      color: '#4175C5',
    },
    {
      desc: 'intrusion',
      color: '#AE6816',
    },
    {
      desc: 'elision',
      color: '#41C58D',
    },
    {
      desc: 'assimilation',
      color: '#8341C5',
    },
  ];

  return (
    <HelpContainer
      className={classNames('modal', {
        '--show': isOpen,
      })}
    >
      <div className="modal__overlay" onClick={toggleHelp}></div>
      <div className="modal__card">
        <header className="card__header">
          <BiHelpCircle />
          <h2>ajuda</h2>
        </header>
        <section className="card__body">
          <ul className="connected-speech">
            {connectedSpeechTypes.map((type, index) => (
              <li className="connected-speech__type" key={index}>
                <div
                  className="type__color"
                  style={{
                    backgroundColor: type.color,
                  }}
                ></div>
                <span className="type__description">{type.desc}</span>
              </li>
            ))}
          </ul>
          <button className="body__play-btn" onClick={toggleHelp}>
            <BsX />
            <span>fechar</span>
          </button>
        </section>
      </div>
    </HelpContainer>
  );
}
