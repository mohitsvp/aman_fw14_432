import React, { useEffect, useState } from 'react'

const Stopwatch = () => {
    const [timer,setTimer] = useState(10);
    useEffect(() => {
     const id= setInterval(() => {
            console.log("Interval",timer);
            setTimer((prev) => {
            //    if(prev <= 1){
            //    clearInterval(id);
            //    return 0;
            //    }
               return prev - 1;
            })
        },1000);
        return () => {
            clearInterval(id);
            console.log("unmounted Timer");
        }
    },[])
  return (
    <div>Timer:{timer}</div>
  )
}

export default Stopwatch