import React,{useState} from 'react'
import GroceryList from './GroceryList';
import '../App.css'

const GroceryInput = () => {
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const newList = input;
        setList([...list,newList])
        setInput("")
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
             return <GroceryList key={index} id={index} task={value} onSelect={deleteGrocery}/>
             })
            }
    </div>
  )
}

export default GroceryInput