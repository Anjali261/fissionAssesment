
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CreateForm from './CreateForm';
import FormList from './FormList';

const Dashboard = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const handleLogout = () => {
    // Clear token from local storage
    localStorage.removeItem('token');
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="buttons">
          <button
            className={`button ${selectedButton === 'createForm' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('createForm')}
          >
            Create Form
          </button>{" "}
          <button
            className={`button ${selectedButton === 'formList' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('formList')}
          >
            Form List
          </button>{" "}
          <Link to="/" className="logout" onClick={handleLogout}>Logout</Link>
        </div>
      </div>
      <div className="content">
        {selectedButton === 'createForm' && <CreateForm />}
        {selectedButton === 'formList' && <FormList />}
      </div>
    </div>
  );
};

export default Dashboard;

