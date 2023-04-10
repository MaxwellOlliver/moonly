import { globalStyles } from './global/globalStyles';
import Lyrics from './pages/Lyrics';

function App(): JSX.Element {
  globalStyles();

  return <Lyrics />;
}

export default App;
