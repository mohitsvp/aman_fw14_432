
import './App.css';
function App() {
  const oprSys=['Android','blackberry','iphone','Windows Phone'];
  const MobileCompany=['Samsung','HTC','Micromax','Apple'];
 return (
     <div>
      <h1>Mobile Operating System</h1>
       {oprSys.map((e) => (
         operating(e)
         //UserComponent(e)
       ))}
       <h1>Mobile Manufactures</h1>
       {MobileCompany.map((e) => (
           company(e)
         ))}
      </div>
 );
}

function operating(e){
  return(
   <ul>
     <li>{e}</li>
   </ul>
 )
}
function company(e){
  return(
    <ul>
      <li>{e}</li>
    </ul>
  )
 }

// function App() {
//    const data=[
//      {name:"Aman",age:20},
//      {name:"ripu",age:22},
//      {name:"Tarniza",age:26},
//      {name:"kiran",age:28}
//    ]
//   return (
//       <div>
//         {data.map((e) => (
//           <UserComponent name={e.name} age={e.age} />
//           //UserComponent(e)
//         ))}
//         </div>
//   );
// }

// function UserComponent({name,age}){
//   return(
//     <div className='borderBox'>
//       <h2>hello {name}</h2>
//       <h3>Your age is {age}</h3>
//     </div>
//   )
// }

export default App;
