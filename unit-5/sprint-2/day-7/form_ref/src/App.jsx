
// import { useState } from 'react';
import './App.css';
import Forms from './components/Forms';

function App() {
  // const [text,setText] = useState("");
  return (
    <div className="App"  >
    {/* onMouseMove={(e) => {
      setText(`${e.clientX},${e.clientY}`);
    }} */}
      {/* <button >click me</button>
      <input type="text" onChange={((e) => (e.target.value))} />
      <p>{text}</p> */}
      <Forms />
    </div>
  );
}

export default App;
