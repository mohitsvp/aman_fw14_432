import React from 'react'


const GroceryList = (props) => {
  return (
    <div>
      <tr>
        <td>{props.task}</td>
        <td><button onClick={() => {
          props.onSelect(props.id)
        }}>Delete</button></td>
      </tr>
    </div>
  )
}

export default GroceryList