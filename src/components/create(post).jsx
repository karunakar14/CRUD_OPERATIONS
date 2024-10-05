import React, { useState,useEffect } from 'react';
import axios from 'axios';
const AddStudent = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [submit,setSubmit]=useState("false")
  useEffect(()=>{
    const newStudent = { name, course, duration };
    if(submit=='true')
    axios.post("http://localhost:4040/student",newStudent)
    .catch(error =>console.error("Error adding student:", error)); 
    })
  return (
    <div>
      <h3>Add Student</h3>
      <form onSubmit={()=>setSubmit("true")}>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          <label>Course:</label>
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)}/>
          <label>Duration:</label>
          <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddStudent;