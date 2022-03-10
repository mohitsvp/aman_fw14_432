import React, { useState } from 'react'
import axios from 'axios';
import '../App.css';

const Forms = () => {
    const [list,setList] = useState([]);
    const [formData,setFormData] = useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
    });
    const handleChange = (e) => {
        let {id,value,checked,type} = e.target;
        value = type ==="checkbox" ? checked :value;
        setFormData({
            ...formData,[id]:value
        })
    }
    const getData = () => {
        axios.get(`http://localhost:3005/users`).then((res) => {
            setList(res.data);
        })
    }
    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3005/users",formData).then(() => {
            alert("user created successfully");
        }).then(() =>{
             getData();
        })
    }
  const {isMarried}= formData
  return (
    <div>
       <form onSubmit={submitForm}>
           <h3>Employee Details</h3>
         <input id="name" type="text" onChange={handleChange} placeholder='enter name'/><br></br><br></br>
         <input id="age" type="number" onChange={handleChange} placeholder='enter age' /> <br></br><br></br>
         <input id="address" type="text" placeholder='address' onChange={handleChange} /><br></br><br></br>
         Department
         <select name="" id="department" onChange={handleChange}><br></br><br></br>
          <option value="">----</option>
          <option value="production">production</option>
          <option value="quality">quality</option>
          <option value="developing">developing</option>
         </select>   
          <br></br><br></br><br></br><br></br>
         <input id="salary" type="number" placeholder='salary' onChange={handleChange} /><br></br><br></br>
         martial State<input id="maritalState" type="checkbox"  onChange={handleChange} checked={isMarried} /><br></br><br></br>
         <input type="submit" value="submit" />    
       </form>

       <div className='detail'>
       <table className='table table-bordered text-center'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Department</th>
                            <th>Salary</th>
                            <th>Martial State</th>
                        </tr>
                    </thead>
                    <tbody>
         {list.map((data,index) => (
             
                    <>   
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            <td>{data.address}</td>
                            <td>{data.department}</td>
                            <td>{data.salary}</td>
                            <td>{(data.maritalState===true) ? "true" :"false"}</td> 
                        </tr>
                  </>  
            ))}
        </tbody>
        </table>
       </div> 
    </div>
  )
}

export default Forms