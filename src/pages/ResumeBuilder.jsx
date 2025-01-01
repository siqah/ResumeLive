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

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Resume Builder</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Personal Details Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Personal Details</h2>
            <input
              type="text"
              placeholder="Name"
              value={resumeData.personalDetails.name}
              onChange={(e) => handleChange('personalDetails', 'name', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={resumeData.personalDetails.email}
              onChange={(e) => handleChange('personalDetails', 'email', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
            {/* Add other personal details fields similarly */}
          </div>

          {/* Summary Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Summary</h2>
            <textarea
              rows="4"
              placeholder="Brief summary about yourself"
              value={resumeData.summary}
              onChange={(e) => handleChange('summary', '', e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Skills</h2>
            <textarea
              rows="2"
              placeholder="e.g., JavaScript, React, Tailwind CSS"
              value={resumeData.skills.join(', ')}
              onChange={(e) =>
                handleChange('skills', '', e.target.value.split(',').map((skill) => skill.trim()))
              }
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            ></textarea>
          </div>

          {/* Work Experience Section */}
          <div>
            <h2 className="text-lg font-medium text-gray-700">Work Experience</h2>
            {/* For simplicity, assuming single entry; modify to handle multiple entries */}
            <textarea
              rows="4"
              placeholder="e.g., Software Engineer at XYZ Company"
              value={resumeData.experience[0] || ''}
              onChange={(e) =>
                handleChange('experience', '', [e.target.value])
              }
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            ></textarea>
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
