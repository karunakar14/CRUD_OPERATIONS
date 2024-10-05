import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Fetched() {
  const [data, setData] = useState([]);
  let navigate=useNavigate()
  useEffect(() => {
    axios.get('http://localhost:4040/student')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);
  let deletes=(id)=>
  {
    axios.delete('http://localhost:4040/student/'+id).then(()=>navigate('/'))
  }
  return (
    <div>
      <h1>Student List</h1>
      <button onClick={() => navigate('/add')}>Add User</button>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Duration</th>
            <th colSpan={2}>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.duration}</td>
              <td><button onClick={()=>navigate(`/edit/${student.id}`)}>update</button></td>
              <td><button onClick={()=>(deletes(student.id))}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}