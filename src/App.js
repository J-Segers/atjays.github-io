import { useContext } from 'react';
import './App.css';
import Card from "./components/card/Card";
import { CSSTransition } from 'react-transition-group';
import { CardContext } from './components/context/CardContextProvider';

function App() {
  const { showFront } = useContext(CardContext);

  console.log(showFront);

  return (
  <div className="App">
    <div id="card-container">
        <CSSTransition
          in={showFront}
          timeout={1000}
          classNames={'card-flip'}
        >
          <Card />
        </CSSTransition>
    </div>
  </div>
  );
}

export default App;
