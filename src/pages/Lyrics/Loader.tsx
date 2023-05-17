import { classNames } from '../../utils/classNames';
import { ReactComponent as LoaderSvg } from '../../assets/loader.svg';
import { LoaderContainer } from './styles';

interface LoaderProps {
  hideLoader?: boolean;
}

export default function Loader({ hideLoader }: LoaderProps): JSX.Element {
  return (
    <LoaderContainer
      className={classNames({
        '--hide': hideLoader,
      })}
    >
      <LoaderSvg width={30} height={30} />
      <span className="loader__title">moonly</span>
    </LoaderContainer>
  );
}
