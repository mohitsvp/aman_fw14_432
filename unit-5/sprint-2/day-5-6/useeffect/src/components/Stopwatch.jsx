import React, { useEffect, useState } from 'react'

const Stopwatch = (props) => {
    const [timer,setTimer] = useState(props.startTime);
    useEffect(() => {
     const id= setInterval(() => {
            console.log("Interval",timer);
            setTimer((prev) => {
               if(prev===props.endTime){
                 console.log("unmounted Timer using start and end time");
                 return clearInterval(id);
               }else{
                return prev + 1;
               }
            })
        },1000);
        return () => {
            clearInterval(id);
            console.log("unmounted Timer using show and hide button");
        }
    },[])
  return (
    <div>Timer:{timer} second have elapsed since mounting</div>
  )
}

export default Stopwatch