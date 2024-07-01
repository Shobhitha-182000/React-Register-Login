
import React from "react";
import "./App.css";
import RegisterPage from "./component.js/RegisterPage";
import LoginPage from "./component.js/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./component.js/maincontent/MainPage";
import JobHomePage from "./component.js/maincontent/Candidate/JobHomePage";
import FindJobs from "./component.js/maincontent/Candidate/FindJobs";
import HomePageEmployee from "./component.js/maincontent/Employee/HomePageEmployee";
import HomePageAdmin from "./component.js/maincontent/Admin/HomePageAdmin";
import JobDescription from "./component.js/maincontent/Candidate/JobDescription";
import AddJobs from "./component.js/maincontent/Admin/AddJobs";
import UpdateJob from "./component.js/maincontent/Employee/UpdateJob";
import { JobProvider } from "./component.js/context/JobContext";
import Success from "./component.js/maincontent/Candidate/Success";
import ResumeApply from "./component.js/maincontent/Candidate/ResumeApply";
import EmployeeJD from "./component.js/maincontent/Employee/EmployeeJD";

function App() {
  return (
    <JobProvider>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/candidate" element={<JobHomePage />} />
          <Route path="/findjobs" element={<FindJobs />} />
          <Route path="/employee" element={<HomePageEmployee />} />
          <Route path="/admin" element={<HomePageAdmin />} />
          <Route path="/jobdescription" element={<JobDescription />} />
          <Route path="/addjobs" element={<AddJobs />} />
          <Route path="/updatejobs" element={<UpdateJob />} />
          <Route path="/success" element={<Success />} />
          <Route path="/apply" element={<ResumeApply />} />
          <Route path="/empjob" element={<EmployeeJD />} />
        </Routes>
        <ToastContainer />
      </Router>
    </JobProvider>
  );
}
 

export default App;
