import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Resume.css';

const ResumeApply = () => {
  const navigate = useNavigate();
  

  const submitHandler = (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('resume-upload');
    if (!fileInput.files.length) {
      fileInput.classList.add('error');
      return;
    }
    navigate("/success");
  };

  return (
    <div className="resume">
      <form onSubmit={submitHandler}>
        <h1>Upload Your Resume</h1>
        <label htmlFor="resume-upload">Choose a file</label>
        <input type="file" id="resume-upload" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeApply;
