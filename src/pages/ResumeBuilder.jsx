import { useResume } from '../contexts/ResumeContext';
import Navbar from '../components/Navbar';

const ResumeBuilder = () => {
  const { resumeData, updateResumeData } = useResume();

  const handleChange = (section, field, value) => {
    updateResumeData(section, {
      ...resumeData[section],
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Resume Data:', resumeData);
  };

  const renderInput = (type, placeholder, section, field) => (
    <input
      type={type}
      placeholder={placeholder}
      value={resumeData[section][field] || ''}
      onChange={(e) => handleChange(section, field, e.target.value)}
      className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
    />
  );

  const renderTextarea = (rows, placeholder, section, field) => (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={resumeData[section][field] || ''}
      onChange={(e) => handleChange(section, field, e.target.value)}
      className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
    ></textarea>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Resume Builder</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-700">Personal Details</h2>
              {renderInput('text', 'Name', 'personalDetails', 'name')}
              {renderInput('email', 'Email', 'personalDetails', 'email')}
              {renderInput('text', 'Phone', 'personalDetails', 'phone')}
              {renderInput('text', 'Github', 'personalDetails', 'github')}
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-700">Summary</h2>
              {renderTextarea(4, 'Brief summary about yourself', 'summary', 'text')}
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-700">Skills</h2>
              <textarea
                rows="2"
                placeholder="e.g., JavaScript, React, Tailwind CSS"
                value={Array.isArray(resumeData.skills) ? resumeData.skills.join(', ') : ''}
                onChange={(e) =>
                  handleChange('skills', 'skills', e.target.value.split(',').map((skill) => skill.trim()))
                }
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              ></textarea>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-700">Work Experience</h2>
              {renderTextarea(4, 'e.g., Software Engineer at XYZ Company', 'experience', 0)}
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-700">Education</h2>
              {renderTextarea(4, "e.g., Bachelor's in Computer Science from ABC University", 'education', 0)}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
            >
              Save Resume
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResumeBuilder;
