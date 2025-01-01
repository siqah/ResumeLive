import { useState } from "react";

const templates = [
    {
        id: 1,
        name: "Serif Resume",
        previewImage: "https://www.livecareer.co.uk/sites/default/files/styles/template_thumbnail/public/2020-06/serif-resume-template.png",
        description: "A classic and elegant resume template.",
    },
    {
        id: 2,
        name: "Coral Resume",
        previewImage: "link-to-coral-template-image",
        description: "A modern and vibrant resume template.",
    },
    {
        id: 3,
        name: "Geometric Brochure",
        previewImage: "link-to-brochure-template-image",
        description: "A creative template for showcasing your skills.",
    },
];

const TemplateGallery = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

return (
    <div className="bg-gray-100 min-h-screen p-10">
        <h1 className="text-3xl font-bold text-center mb-8">Template Gallery</h1>
        <div className="flex flex-wrap -mx-3">
            {templates.map((template) => (
                <div
                    key={template.id}
                    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-2xl transition m-3 flex-1 min-w-[300px]"
                    onClick={() => setSelectedTemplate(template)}
                >
                    <img
                        src={template.previewImage}
                        alt={template.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold">{template.name}</h2>
                        <p className="text-gray-600 mt-2">{template.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Template Preview Modal */}
        {selectedTemplate && (
            <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-4">
                            {selectedTemplate.name}
                        </h2>
                        <img
                            src={selectedTemplate.previewImage}
                            alt={selectedTemplate.name}
                            className="w-full h-64 object-cover mb-4"
                        />
                        <p className="text-gray-600">{selectedTemplate.description}</p>
                        <div className="mt-4 flex justify-end space-x-4">
                            <button
                                onClick={() => setSelectedTemplate(null)}
                                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => alert("Template Selected!")}
                                className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                            >
                                Use Template
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
);
};

export default TemplateGallery;
