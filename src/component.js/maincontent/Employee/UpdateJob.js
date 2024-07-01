import React from 'react';
import { useNavigate } from 'react-router-dom';
import companylogo from './companylogo.png';
import './UpdateJob.css'

const jobList = [
  {
    id: 1,
    title: 'Software Development Engineer',
    company: 'Immensphere',
    location: 'Bangalore, Karnataka',
  },
  {
    id: 2,
    title: 'Software Test Engineer',
    company: 'Immensphere',
    location: 'Bangalore, Karnataka',
  },
  {
    id: 3,
    title: 'Business Analyst',
    company: 'Immensphere',
    location: 'Hyderabad, Karnataka',
  },
  {
    id: 4,
    title: 'Data Analyst',
    company: 'Immensphere',
    location: 'Chennai, Karnataka',
  },
  {
    id: 5,
    title: 'Graphic Designer',
    company: 'Immensphere',
    location: 'Bangalore, Karnataka',
  },
  {
    id: 6,
    title: 'Non-voice Process',
    company: 'Immensphere',
    location: 'Bangalore, Karnataka',
  },
];

const UpdateJob = () => {
  const navigate = useNavigate();

  const applyForJob = () => {
    navigate('/empjob');
  };

  return (
    <div className='updatejobs-container'>
      <h1  style={{ textAlign: 'center' }}><u>Job List</u></h1>
      <div className='job-list'>
        {jobList.map((job) => (
          <div className='findjobs-content' key={job.id}>
            <img src={companylogo} alt='company logo' />
            <div className='job-details'>
              <a href='/empjob'><h5>{job.title}</h5></a>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button onClick={applyForJob}>Update</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateJob;
