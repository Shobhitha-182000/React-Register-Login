import React from "react";
import "./HomePageEmployee.css";
import companylogo from "./companylogo.png";
import { useNavigate } from "react-router-dom";

const HomePageEmployee = () => {
  const navigate = useNavigate();

  let hireClickHandler = () => {
    alert("You cannot add the job but you can update ");
    navigate("/updatejobs");
  };

  return (
    <div className="employee-container">
      <div className="navbar">
        <div className="top-side">
          <img src={companylogo} alt="company logo" />
        </div>
        <div className="top-center">
          <a href="/updatejobs">Update Jobs</a>
          <a href="https://immensphere.com/">About</a>
        </div>
        <div className="top-end">
          <a href="/login">Login</a>
          <a href="/register">Sign out</a>
        </div>
      </div>
      <div className="main-content">
        <h2>Transforming careers and Streamlining Hiring</h2>
        <p>
          Discover thousands of job listings tailored to your skills,
          interests, and career goals. Join our community of professionals and
          take the next step towards success.
        </p>
        <button className="hire" onClick={hireClickHandler}>
          Hire a Talent
        </button>
        <button className="job" onClick={() => navigate("/findjobs")}>
          Find job
        </button>
      </div>
      <div className="bottom-content">
        <h2>Get hired by the world's top firms</h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type.
        </p>
      </div>
    </div>
  );
};

export default HomePageEmployee;
