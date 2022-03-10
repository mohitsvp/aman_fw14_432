import React, { useState } from 'react'
import axios from 'axios';

const Forms = () => {

    const [formData,setFormData] = useState({
        username:"",
        age:"",
        email:"",
    });

    const handleChange = (e) => {
       const {id,value} = e.target;
    
       setFormData({
           ...formData,[id]:value
       })
    }
    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3005/users",formData).then(() => {
            alert("user created successfully");
        })
    }
  return (
    <div>
       <form onSubmit={submitForm}>
           <h3>Sign up</h3>
         <input id="username" type="text" onChange={handleChange} placeholder='enter username'/>
         <input id="age" type="number" onChange={handleChange} placeholder='enter age' /> 
         <input id="email" type="email" onChange={handleChange} placeholder='enter email' /> 
         <input type="submit" value="sign up" />    
       </form> 
    </div>
  )
}

export default Forms