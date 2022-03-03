
import './App.css';

function App() {
   const data=[
     {name:"Aman",age:20},
     {name:"ripu",age:22},
     {name:"Tarniza",age:26},
     {name:"kiran",age:28}
   ]
  return (
      <div>
        {data.map((e) => (
          <UserComponent name={e.name} age={e.age} />
          //UserComponent(e)
        ))}
        </div>
  );
}

function UserComponent({name,age}){
  return(
    <div className='borderBox'>
      <h2>hello {name}</h2>
      <h3>Your age is {age}</h3>
    </div>
  )
}

export default App;
