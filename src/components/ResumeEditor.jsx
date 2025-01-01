import { useState } from "react";
import TemplatePreviewWithExport from "./TemplatePreviewWithExport";
import TemplateSelector from "./TemplateSelector";
import { useResume } from '../context/ResumeContext';

const ResumeEditor = () => {
  const { userInfo, setUserInfo } = useResume();
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

      {/* Template Preview with Export */}
      <div className="w-full lg:w-2/3 bg-gray-50 p-4 rounded shadow">
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
        <TemplatePreviewWithExport
          userInfo={userInfo}
          template={selectedTemplate}
        />
      </div>
    </div>
  );
};

export default ResumeEditor;
