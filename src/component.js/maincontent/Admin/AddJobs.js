// AddJobs.js
import React, { useState } from "react";
import companylogo from "./companylogo.png";
import "./AddJobs.css";
import { useJobContext } from "../../context/JobContext";

const AddJobs = () => {
  const { details, setDetails } = useJobContext();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const obj = {
      titleObj: title,
      descriptionObj: description,
      locationObj: location,
    };

    setDetails((prevDetails) => [...prevDetails, obj]);
  };

  return (
    <div className="addjobs-container">
      <h1>
        <u>Add Jobs Here</u>
      </h1>
      <a href="/admin"><span>Home</span></a>
      <form onSubmit={submitHandler} className="form-container">
        <label>Enter job title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Enter job description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Enter the job location</label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="findjobs-maincontent">
        {details.map((obj, index) => (
          <div key={index} className="findjobs-content">
            <img src={companylogo} alt="company logo" />
            <a href="/jobdescription">
              <h5>{obj.titleObj}</h5>
            </a>
            <p>Immensphere</p>
            <p>{obj.descriptionObj}</p>
            <p>{obj.locationObj}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddJobs;
