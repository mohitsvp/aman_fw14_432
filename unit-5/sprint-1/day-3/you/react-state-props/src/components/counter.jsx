import { useState } from "react";

export function Counter(){
    const [counter,setCounter] = useState(0);
    
    const handleAdd = (value) => {
        setCounter(counter+value);
    };

    // const handleSub = () => {
    //     setCounter(counter-1); 
    // }

    const handleDouble = () => {
        setCounter(counter*2);
    }
    
    return <>
    <h3>Counter: {counter}</h3>
    <button onClick={() => {handleAdd(1)}}>increment </button>
    <button onClick={() => {handleAdd(-1)}}>decrement</button>
    <button onClick={handleDouble}>double</button>
    </>
}