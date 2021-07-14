import React,{useState} from 'react';
import "./App.css";
//import components
import Nav from './components/Nav'
import Tweets from './components/Tweets'

function App() {
  //can write JS here 
  //variables in react dont react to changes, so that's when you use State

  const [counter, setCounter] = useState(0)

  const incrementer = () => {
    setCounter(counter + 1);
  }

  return ( 
  <div className="App">
    <h1>Hello React</h1>
    <h2>Counter {counter}</h2>
    <button onClick={incrementer}>Click</button>
    <div className="home">
    <Nav />
    <Tweets />
    </div>
  </div>
  );
}

export default App;
