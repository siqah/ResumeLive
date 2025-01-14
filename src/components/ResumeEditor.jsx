

import  { useState } from 'react';

const ResumeEditor = () => {
  const [resume, setResume] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume({
      ...resume,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Resume submitted:', resume);
  };

  return (
    <div>
      <h2>Resume Editor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={resume.name} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={resume.email} onChange={handleChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={resume.phone} onChange={handleChange} />
        </div>
        <div>
          <label>Education:</label>
          <textarea name="education" value={resume.education} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Experience:</label>
          <textarea name="experience" value={resume.experience} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Skills:</label>
          <textarea name="skills" value={resume.skills} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeEditor;