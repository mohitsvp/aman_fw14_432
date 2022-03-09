//import Groceries from './components/Groceries';
import './App.css';
import { useState } from 'react';
import Stopwatch from './components/Stopwatch';

function App() {
  const [show,setShow] = useState(true);
  const startTime=0,endTime=10;
  return (
    <div className="App">
      useEffect
      {/* <Groceries /> */}
      {show ? <Stopwatch startTime={startTime} endTime={endTime} /> : ""}

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
