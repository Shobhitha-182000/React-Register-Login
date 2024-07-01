import React from "react";
import "./HomePageAdmin.css";
import companylogo from "./companylogo.png";
import { useNavigate } from "react-router-dom";

const HomePageAdmin = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-container">
      <div className="navbar">
        <div className="top-side">
          <img src={companylogo} alt="company logo" title="company logo" />
        </div>
        <div className="top-center">
          <a href="/addjobs">Add Jobs</a>
          <a href="https://immensphere.com/">About</a>
          <div className="dropdown">
            <button className="dropbtn" style={{backgroundColor:"grey"}}>Admin</button>
            <div className="dropdown-content">
              <a href="/employee">HR page</a>
              <a href="/candidate">Candidate Page</a>
            </div>
          </div>
        </div>
        <div className="top-end">
          <a href="/login">Login</a>
          <a href="/register">Sign out</a>
        </div>
      </div>
      <div className="main-content">
        <h2>Transforming careers and Streamlining Hiring</h2>
        <p>
          Discover thousands of job listings tailored to your skills, interests,
          and career goals. Join our community of professionals and take the
          next step towards success.
        </p>
        <button className="hire" onClick={() => navigate("/addjobs")}>
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

export default HomePageAdmin;
