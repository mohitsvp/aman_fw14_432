import React, { useEffect, useState } from 'react';
import axios from "axios";

const Groceries = () => {
const [text,setText] = useState("");

const [groceries,setGroceries] = useState([]);

const [page,setPage] = useState(1);

useEffect(() => {
  getData();
},[page]);

const getData = () => {
  axios.get("http://localhost:3001/groceries").then((res) => {
    setGroceries(res.data);
  })
}
  return (
    <div><input type="text" onChange={(e) => setText(e.target.value)} />
    <button onClick={() => {
      fetch(`http://localhost:3001/groceries?_limit=3&_page=${page}`,{
        method:"POST",
        body:JSON.stringify({title:text,purchased:false}),
        headers:{
          "content-type":"application/json",
        },
      }).then(() => {
        getData();
      }) 
    }}>
     Save Grocery
    </button>
    {groceries.map( (g) => <div key={g.id}>{g.title}</div>)}

    <button onClick={() => {
      setPage(page-1)
    }}>Prev</button>
    
    <button onClick={() => {
      setPage(page+1)
    }}>Next</button>
    </div>
  )

}

export default Groceries