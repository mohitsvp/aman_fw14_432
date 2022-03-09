//import Groceries from './components/Groceries';
import './App.css';
import { useState } from 'react';
import Stopwatch from './components/Stopwatch';

function App() {
  const [show,setShow] = useState(true);
  return (
    <div className="App">
      useEffect
      {/* <Groceries /> */}
      {show ? <Stopwatch /> : ""}

      <button
      onClick={() => {
        setShow(show ? false :true);
      }}>
      {show ? "Hide Timer" : "Show Timer"}
      </button>
    </div>
  );
}

export default App;
