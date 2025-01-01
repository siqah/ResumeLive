/* eslint-disable react/prop-types */
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import TemplatePreview from "./TemplatePreview";

const TemplatePreviewWithExport = ({ userInfo, template }) => {
    const componentRef = useRef();

    return (
        <div className="template-preview-container">
            <ReactToPrint
                trigger={() => (
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                        Export to PDF
                    </button>
                )}
                content={() => componentRef.current}
            />
            <TemplatePreview
                userInfo={userInfo}
                template={template}
                ref={componentRef}
            />
        </div>
    );
};

export default TemplatePreviewWithExport;
