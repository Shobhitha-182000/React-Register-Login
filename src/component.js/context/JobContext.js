// JobContext.js
import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [details, setDetails] = useState([]);

  return (
    <JobContext.Provider value={{ details, setDetails }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);
