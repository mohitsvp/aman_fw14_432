import React,{useEffect, useState} from 'react'
import GroceryList from './GroceryList';
import '../App.css';
import axios from "axios";

const GroceryInput = () => {
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);
    const [page,setPage] = useState(1);


    useEffect(() => {
        getData();
    },[page])

    const handleChange = (e) => {
        setInput(e.target.value)
    }
   
    const getData = () => {
        axios.get(`http://localhost:4001/groceries?_limit=3&_page=${page}`).then((res) => {
          setList(res.data);
        })
      }
    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`http://localhost:4001/groceries`,{
            method:"POST",
            body:JSON.stringify({title:input,purchased:false}),
            headers:{
              "content-type":"application/json",
            },
          }).then(() => {
            getData();
          }) 
          setInput("");
      }  

      const deleteGrocery = (a) => {
          const finalList = list.filter((cirEle,index) => {
              return index !== a;
          })
          setList(finalList)
      }

      
  return (
    <div className='App'>
        <form onSubmit={submitHandler}>
       <div>
          <input type="text" placeholder="add Grocery list" value={input} onChange={handleChange} />
          <button type="submit">Add</button>
       </div>
       </form>
             {
            list.map((value,index) => {
             return <GroceryList key={value.id} id={index} task={value.title} onSelect={deleteGrocery}/>
             })
            }

    <button onClick={() => {
      if(page<1){
          setPage(1);
      }else{
        setPage(page-1)
      }
    }}>Prev</button>
    
    <button onClick={() => {
      setPage(page+1)
    }}>Next</button>

    </div>
  )
}

export default GroceryInput