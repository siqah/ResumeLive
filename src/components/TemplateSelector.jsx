/* eslint-disable react/prop-types */
const templates = ["Template1", "Template2", "Template3"];
const TempleteSelector = ({ selectedTemplate, setSelectedTemplate }) => {
  return (
    <div className="flex space-x-4 mb-4">
      {templates.map((template) => (
        <button
          key={template}
          className={`px-4 py-2 rounded-lg ${
            selectedTemplate === template
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setSelectedTemplate(template)}
        >
          {template}
        </button>
      ))}
    </div>
  );
};

export default TempleteSelector;
