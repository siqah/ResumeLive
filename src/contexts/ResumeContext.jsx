/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import  { createContext, useState, useContext } from 'react';

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personalDetails: {
      name: '',
      email: '',
      phone: '',
      address: '',
      linkedin: '',
      portfolio: '',
    },
    summary: '',
    skills: [],
    experience: [],
    education: [],
    projects: [],
    certifications: [],
    achievements: [],
  });

  const updateResumeData = (section, newData) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: newData,
    }));
  };

  return (
    <ResumeContext.Provider value={{ resumeData, updateResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};

// Hook to use the context
export const useResume = () => {
  return useContext(ResumeContext);
};
