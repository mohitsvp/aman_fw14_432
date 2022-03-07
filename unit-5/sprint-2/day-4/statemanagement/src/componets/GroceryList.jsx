import React from 'react'


const GroceryList = (props) => {
  return (
    <div className='list'>
       
       <div>{props.task}</div>
        <div><button onClick={() => {
          props.onSelect(props.id)
        }}>Delete</button></div>
       
    </div>
  )
}

export default GroceryList