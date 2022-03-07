// import {useState} from 'react';
import './App.css';
import GroceryInput from './componets/GroceryInput';

function App() {
  // const [counter,setCounter] = useState(0);
  // const getData = (data) => {
  //   console.log("recieved from child",data)
  //   setCounter(data);
  // }
  return (
    <div>
      {/* <Left fn={getData} />
      <Right data={counter} /> */}
      <GroceryInput />
    </div>
  );
}


// function Left({fn}){
//   const counter = 10;
//   fn(counter);
//   return <div>Left:</div>
// }

// function Right({data}){
//   return <div>right:{data}</div>
// }
export default App;
