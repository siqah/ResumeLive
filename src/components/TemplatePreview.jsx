/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import React from "react";
// import TemplatePreviewWithExport from "./TemplatePreviewWithExport";

const TemplatePreview = React.forwardRef(({ userInfo, template }, ref) => {
    return (
        <div ref={ref} className={`template-${template} p-6`}>
            <h1 className="text-3xl font-bold">{userInfo.name}</h1>
            <p className="text-lg">{userInfo.title}</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Skills</h2>
                <ul>
                    {userInfo.skills.map((skill, index) => (
                        <li key={index}>- {skill}</li>
                    ))}
                </ul>
            </div>
            {/* Add more sections like experience, education */}
        </div>
    );
});



export default TemplatePreview;
