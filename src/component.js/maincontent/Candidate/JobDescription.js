import React, { useState } from "react";
import companylogo from "./companylogo.png";
import { useNavigate } from "react-router-dom";
import { FaLocationDot, FaBuildingUser } from "react-icons/fa6";
import { toast } from "react-toastify";
import "./JobDescription.css"; // Import CSS file

const JobDescription = () => {
  const [save, setSave] = useState("Save");
  const navigate = useNavigate();

  const saveHandler = () => {
    setSave("Saved");
    toast.success("Job Saved Successfully");
  };

  const easyApply = () => {
    navigate("/apply");
  };

  return (
    <div className="jobdescription-container">
      <div className="row">
        <div className="column1">
          <div className="logo-heading">
            <img src={companylogo} alt="company logo" />
            <p className="companyname">
              <FaBuildingUser className="icon" /> Immensphere{" "}
            </p>
            <p className="location">
              <FaLocationDot className="icon" />
              Bangalore, Karnataka
            </p>
          </div>
        </div>
        <div className="column2">
          <div className="heading">
            <h1>Software Development Engineer</h1>
            <h3>About the job</h3>
            <div className="job-description">
              <p><b>Project Role:</b> Software Development Engineer</p>
              <p><b>Project Role Description:</b> Analyze, design, code and test multiple components of application code across one or more clients. Perform maintenance, enhancements and/or development work.</p>
              <ul>
                <li><b>Must have skills:</b> Advanced Embedded System Engineering</li>
                <li><b>Good to have skills:</b> Android Application Development, Core Java, MVVM Architecture</li>
                <li><b>Minimum 2 Year(s) Of Experience Is Required</b></li>
              </ul>
              <p><b>Educational Qualification:</b> BE or BTech with Automotive experience.</p>
            </div>
            <h3>Key Responsibilities</h3>
            <ul>
              <li>Hands-on experience in Kotlin and Java with unit test cases</li>
              <li>Experience in developing Android Application for Automotive is highly appreciated</li>
              <li>Experience in architecting multiple Android applications including MVVM architecture (LiveData, LifeCycle, ViewModels, Flow)</li>
              <li>Good to have experience in Android JetPack Components, Custom Components, RoomDB, WorkManager, Coroutines, Maps, Bluetooth, BLE, Wi-Fi, Socket-Connections</li>
              <li>Experience in Agile development environments Develop and maintain apps and framework components for Automotive Android Apps with the latest technology stack.</li>
              <li>Collaborate with cross-functional teams in an agile delivery-team to design, develop and ship new features and bug fixes</li>
              <li>Plan the development tasks using Scrum/Kanban</li>
              <li>Produce and maintain well-documented code</li>
              <li>Perform Code reviews, deep level debugging of complex issues</li>
              <li>Write modular code and perform unit testing</li>
              <li>App certification process and releasing to app stores Technical Experience</li>
              <li>Expert level skills in Android Programming</li>
              <li>Expert level knowledge in Kotlin and Core Java with OOPS concepts and design patterns.</li>
              <li>Good knowledge in designing and consuming SOAP/Rest based interfaces</li>
              <li>Ability to write production quality code and to work from and maintain existing code-bases Professional Attributes</li>
              <li>Good communication skills</li>
              <li>Team Player</li>
            </ul>
          </div>
          <div className="description-resume">
            <button className="apply" onClick={easyApply}>Easy Apply</button>
            <button className="save" onClick={saveHandler}>{save}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
