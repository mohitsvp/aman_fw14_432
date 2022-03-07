import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoItems from './TodoItems';


const Todo = () => {
    const [todos,setTodos] =useState([]);
    const addTodo = (data) => {
        setTodos([...todos,data]);
    }
  return (
   <div>
    <TodoInput addTodo={addTodo} />
    {todos.map((e) => (
        <TodoItems todo={e}/>
    ))}
   </div>
  )
}

export default Todo;