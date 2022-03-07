// import {useState} from 'react';
import Todo from './componets/Todo';
import './App.css';
import TodoItems from './componets/TodoItems';

function App() {
  // const [counter,setCounter] = useState(0);
  // const getData = (data) => {
  //   console.log("recieved from child",data)
  //   setCounter(data);
  // }
  return (
    <div className="App">
      {/* <Left fn={getData} />
      <Right data={counter} /> */}
      <Todo />
      <TodoItems />
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
