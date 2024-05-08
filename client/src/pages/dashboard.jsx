
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

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <div className="butons">
          <button
            className={`button ${selectedButton === 'createForm' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('createForm')}
          >
            Create Form
          </button>{ " "}
          <button
            className={`button ${selectedButton === 'formList' ? 'selected' : ''}`}
            onClick={() => handleButtonClick('formList')}
          >
            Form List
          </button>
        </div>
      </div>
      <div className="content">
        {selectedButton === 'createForm' && <h2> <CreateForm/></h2>}
        {selectedButton === 'formList' && <h2><FormList/></h2>}
      </div>
    </div>
  );
};

export default Dashboard;

