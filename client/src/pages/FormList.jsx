
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormList = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/getforms');
        setForms(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchForms();
  }, []);

  return (
    <div>
      <h2>Form List</h2>
      <ul>
        {forms.map((form, index) => (
          <li key={index}>
            <strong>Name:</strong> {form.name}, <strong>Age:</strong> {form.age}, <strong>Gender:</strong> {form.gender}, <strong>Contact Number:</strong> {form.contactNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;

