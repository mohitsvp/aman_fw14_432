import { useState } from "react";

export function Counter(){
    const [counter,setCounter] = useState(0);
    
    const handleAdd = (value) => {
        if(counter + value <0){
            return;
        }
        setCounter(counter+value);
    };

    // const handleSub = () => {
    //     setCounter(counter-1); 
    // }

    const handleReset = () => {
        setCounter(0);
    }
    
    return <>
    <h3>Counter: {counter}</h3>
    <button onClick={() => {handleAdd(1)}}>Add 1</button>
    <button onClick={() => {handleAdd(-1)}}>Subtract 1</button>
    <button onClick={handleReset}>Reset</button>
    </>
}