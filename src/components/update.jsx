import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditStudent = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [originalName, setOriginalName] = useState('');
  const [originalCourse, setOriginalCourse] = useState('');
  const [originalDuration, setOriginalDuration] = useState('');
  
  const { id } = useParams();
  const navigate = useNavigate(); 
  useEffect(() => {
    const fetchStudent = () => {
      
        const response =axios.get(`http://localhost:4040/student/${id}`)
        .then(setName(response.data.name))
        .then(setCourse(response.data.course))
        .then(setDuration(response.data.duration))
        .then(setOriginalName(response.data.name))
        .then(setOriginalCourse(response.data.course))
        .then(setOriginalDuration(response.data.duration))
       .catch () 
        console.error('Error fetching student data:');
    };

    fetchStudent();
  }, [id]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedStudent = { name, course, duration };

    try {
      await axios.put(`http://localhost:4040/student/${id}`, updatedStudent);
      alert('Student updated successfully!');
      navigate('/'); 
    } catch (error) {
      console.error('Error updating student:', error);
      alert('Failed to update student.');
    }
  };

  return (
    <div>
      <h3>Edit Student</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value === '' ? originalName : e.target.value);
          }}
          required
        />
        <br />
        <label>Course:</label>
        <input
          type="text"
          value={course}
          onChange={(e) => {
            setCourse(e.target.value === '' ? originalCourse : e.target.value);
          }}
          required
        />
        <br />
        <label>Duration:</label>
        <input
          type="text"
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value === '' ? originalDuration : e.target.value);
          }}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditStudent;
