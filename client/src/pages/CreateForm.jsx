import React, { useState } from "react";
import axios from "axios";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contactNumber: "",
  });

  const { name, age, gender, contactNumber } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/forms", formData);
      console.log(res.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
      <h2>Create Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Age"
          name="age"
          value={age}
          onChange={handleChange}
          required
        />
        <select name="gender" value={gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="text"
          placeholder="Contact Number"
          name="contactNumber"
          value={contactNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateForm;
