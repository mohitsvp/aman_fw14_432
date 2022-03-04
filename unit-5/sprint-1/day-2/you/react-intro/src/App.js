
import './App.css';
function App() {
  const oprSys=['Android','blackberry','iphone','Windows Phone'];
  const MobileCompany=[
    {name:'Samsung',listyle:'square'},
    {name:'HTC',listyle:'square'},
    {name:'Micromax',listyle:'disc'},
    {name:'Apple',listyle:'circle'}
  ];
 return (
     <div>
      <h1>Mobile Operating System</h1>
       {oprSys.map((ele) => (
         Operating(ele)
         //UserComponent(e)
       ))}
       <h1>Mobile Manufactures</h1>
       {MobileCompany.map((e) => (
           <Company name={e.name} listyle={e.listyle}/>
         ))}
      </div>
 );
}

function Operating(opr){
  return(
   <ul>
     <li>{opr}</li>
   </ul>
 )
}
function Company({name,listyle}){
  
  return(
    <ul>
        <li style={{listStyleType:listyle}}>{name}</li>
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
