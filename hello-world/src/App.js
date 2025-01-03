import logo from './logo.svg';
import './App.css';
import './components/Greet'
import {Greet} from './components/Greet';
import Hello from './components/Hello';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      {/* <Greet>heyyyscsacgyc ddddvdvych</Greet> 
      /* <Greet name="Bruce Wayne" heroName="BATMAN">
      <p>This is a child of BATMAN</p>
      </Greet>
      <Greet name="Arthur Fleck" heroName="JOKER">
      <button>Child of Joker</button>
      </Greet>
      <Greet name="Selina Kyle" heroName="CATWOMAN">
      <p>This is a child of BATMAN</p>   
      </Greet>
      <Welcome name="Bruce Wayne" heroName="BATMAN" /> */}

      <Message />

    </div>
  );
}

export default App;
