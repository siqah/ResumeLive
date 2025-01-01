/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";

const ChildComponent = React.forwardRef(({ userInfo, template }, ref) => {
    return (
        <div ref={ref} className={`template-${template} p-6 border rounded-md shadow-lg`}>
            <header className="mb-6">
                <h1 className="text-3xl font-bold">{userInfo.name || "Your Name"}</h1>
                <p className="text-lg text-gray-600">{userInfo.title || "Your Title"}</p>
            </header>
            <section className="skills-section">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <ul className="list-disc pl-5">
                    {userInfo.skills?.length > 0 ? (
                        userInfo.skills.map((skill, index) => (
                            <li key={index} className="mb-1 text-gray-700">
                                {skill}
                            </li>
                        ))
                    ) : (
                        <li className="text-gray-500">No skills added yet</li>
                    )}
                </ul>
            </section>
            {/* Add more sections like experience, education, certifications */}
        </div>
    );
});

ChildComponent.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    template: PropTypes.string.isRequired,
};

const TemplatePreview = React.forwardRef((props, ref) => {
    return <ChildComponent {...props} ref={ref} />;
});

TemplatePreview.propTypes = {
    userInfo: PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
    template: PropTypes.string.isRequired,
};

export default TemplatePreview;
