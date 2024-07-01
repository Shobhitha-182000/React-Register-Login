import React from 'react';
import companylogo from './companylogo.png';
import './FindJobs.css';
import { useNavigate } from 'react-router-dom';

const FindJobs = () => {
  const navigate = useNavigate();

  const applyForJob = () => {
    navigate('/jobdescription');
  };

  return (
    <div className='findjobs-container'>
      <h1 className="apply-heading"><u>Apply Job Here</u></h1>

      <div className='findjobs-content'>
        <img src={companylogo} alt='company logo' />
        <a href='/jobdescription'><h5>Software Development Engineer</h5></a>
        <p>Immensphere</p>
        <p>Banglore, Karnataka</p>
        <button onClick={applyForJob}>Apply</button>
      </div>

      <div className='findjobs-content'>
        <img src={companylogo} alt='company logo' />
        <a href='/jobdescription'><h5>Software Test Engineer</h5></a>
        <p>Immensphere</p>
        <p>Banglore, Karnataka</p>
        <button onClick={applyForJob}>Apply</button>
      </div>

      <div className='findjobs-content'>
        <img src={companylogo} alt='company logo' />
        <a href='/jobdescription'><h5>Business Analyst</h5></a>
        <p>Immensphere</p>
        <p>Hyderabad, Karnataka</p>
        <button onClick={applyForJob}>Apply</button>
      </div>

      <div className='findjobs-content'>
        <img src={companylogo} alt='company logo' />
        <a href='/jobdescription'><h5>Data Analyst</h5></a>
        <p>Immensphere</p>
        <p>Chennai, Karnataka</p>
        <button onClick={applyForJob}>Apply</button>
      </div>

      <div className='findjobs-content'>
        <img src={companylogo} alt='company logo' />
        <a href='/jobdescription'><h5>Graphic Designer</h5></a>
        <p>Immensphere</p>
        <p>Banglore, Karnataka</p>
        <button onClick={applyForJob}>Apply</button>
      </div>

      <div className='findjobs-content'>
        <img src={companylogo} alt='company logo' />
        <a href='/jobdescription'><h5>Non-voice Process</h5></a>
        <p>Immensphere</p>
        <p>Banglore, Karnataka</p>
        <button onClick={applyForJob}>Apply</button>
      </div>
    </div>
  );
};

export default FindJobs;
