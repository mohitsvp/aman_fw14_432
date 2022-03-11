// import {useEffect, useRef, useState} from 'react';
import { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  // const [counter,setCounter] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //  startTimer();
  // },[])

  // const startTimer = () => {
  //   // if already started return 
  //   ref.current = setInterval(() => {
  //     setCounter((p) => p+1);
  //   },1000)
  // }
  const [theme,setTheme] = useState("light");

  return (
    <div className="App">
       {/* <h3>counter : {counter}</h3>

       <button onClick={startTimer}>start</button>

       <button onClick={() => {
         clearInterval(ref.current)
       }}>Stop</button>

       <button onClick={() => {
         clearInterval(ref.current)
         setCounter(0);
       }}>Reset</button> */}


       {/* <button
        onClick={() => {
          setCounter(counter + 1);
        }}
       >Add 1</button>

       <button
       onClick={() => {
         ref.current = "MasaiSchool changed";
         console.log("Name is",ref.current);
       }}
       >Change Name</button> */}


       <Button theme={theme} onClick={() => {console.log("Sub1")}}>Sub1</Button>
       <Button theme={theme} onClick={() => {console.log("add1")}}>Add 1</Button>
       <br></br>
       <button onClick={() => {
         setTheme(theme === "light" ? "dark" :"light")
       }}>Change Theme</button>
    </div>
  );
}

export default App;
