import React, { useEffect, useRef } from 'react'
import './MainPage.css'
import { click } from '@testing-library/user-event/dist/click'
import JobHomePage from './Candidate/JobHomePage'
import { useNavigate } from 'react-router-dom'


const MainPage = () => {
  useEffect(() => {
    document.body.classList.add("main-page");
    return () => {
      document.body.classList.remove("main-page");
    };
  }, []);

  const navigate=useNavigate();
  const jobRef=useRef();
  let clickHandlerForCandidate=()=>{
    navigate('/candidate');
   
  }
  let clickHandlerForAdmin=()=>{
    navigate('/admin');
  }
  let clickHandlerForEmployee=()=>{
    navigate('/employee');
  }
  return (
    <div className='mainpage-container'>
      <button onClick={clickHandlerForAdmin} > Admin</button>
      <button onClick={clickHandlerForEmployee}>Employee</button>
      <button onClick={clickHandlerForCandidate}>Candidate</button> 
    </div>
  )
}

export default MainPage
