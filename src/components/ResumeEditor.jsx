import { useState } from "react";
import TemplatePreview from "./TemplatePreview";
import TemplateSelector from "./TemplateSelector";

const ResumeEditor = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Faruoq Muhammed",
    title: "Software Engineer",
    email: "faruoqmuhammed@gmail.com",
    phone: "08012345678",
    LinkedIn: "https://www.linkedin.com/in/faruoqmuhammed",
    github: "faruoqmuhammed",
    summary:
      "A software engineer with 5 years of experience in building web applications. Proficient in JavaScript, React, and Node.js.",
    skills: ["JavaScript", "React", "Node.js", "Express.js"],
    experience: [
      {
        id: 1,
        title: "Software Engineer",
        company: "Tech Solutions",
        location: "Lagos, Nigeria",
        startDate: "2018-06-01",
        endDate: "2020-06-01",
        description:
          "Developed and maintained web applications for clients. Collaborated with the design team to create user-friendly interfaces.",
      },
      {
        id: 2,
        title: "Frontend Developer",
        company: "Web Designs",
        location: "Abuja, Nigeria",
        startDate: "2016-06-01",
        endDate: "2018-06-01",
        description:
          "Built responsive websites using HTML, CSS, and JavaScript. Worked closely with the backend team to integrate APIs.",
      },
    ],
    education: [
      {
        degree: "BSc Computer Science",
        school: "University of Nairobi",
        location: "Nairobi, Kenya",
        year: "2016",
      },
    ],
    certifications: ["React Developer Certification", "Node.js Certification"],
  });

  const [selectedTemplate, setSelectedTemplate] = useState("template1");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* Editor Panel */}
      <div className="w-full lg:w-1/3 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Resume Editor</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Summary</label>
            <textarea
              name="summary"
              value={userInfo.summary}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </div>

      {/* Template Preview */}
      <div className="w-full lg:w-2/3 bg-gray-50 p-4 rounded shadow">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <TemplatePreview userInfo={userInfo} template={selectedTemplate} />
      </div>
    </div>
  );
};

export default ResumeEditor;
