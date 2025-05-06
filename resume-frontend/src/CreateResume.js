   
// import React, { useState, useEffect } from "react";
// import "./CreateResume.css";

// function CreateResume({ addResume, onViewCreatedResume, editableResume }) {
//   const [resume, setResume] = useState({
//     fullName: "",
//     phoneNumber: "",
//     email: "",
//     linkedin: "",
//     portfolio: "",
//     summary: "",
//     skills: "",
//     workExperience: "",
//     education: "",
//     certifications: "",
//     projects: "",
//     additional: "",
//     languages: "",
//     photo: null,
//   });

//   // Populate the form with the editable resume data if provided
//   useEffect(() => {
//     if (editableResume) {
//       setResume(editableResume);
//     }
//   }, [editableResume]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResume((prev) => ({ ...prev, [name]: value }));
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const photoURL = URL.createObjectURL(file); // Create a URL for the uploaded photo
//       setResume((prev) => ({ ...prev, photo: photoURL })); // Save the photo URL
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation: Ensure required fields are filled
//     if (!resume.fullName || !resume.phoneNumber || !resume.email) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const newResume = { ...resume, id: Date.now() };
//     addResume(newResume); // Add the full resume object, including photo
//     onViewCreatedResume(newResume); // Pass the resume to the ViewResume page

//     // Reset the form
//     setResume({
//       fullName: "",
//       phoneNumber: "",
//       email: "",
//       linkedin: "",
//       portfolio: "",
//       summary: "",
//       skills: "",
//       workExperience: "",
//       education: "",
//       certifications: "",
//       projects: "",
//       additional: "",
//       languages: "",
//       photo: null,
//     });
//   };

//   return (
//     <div className="create-resume-container">
//       <h2 className="create-resume-heading">
//         {editableResume ? "Edit Résumé" : "Create Résumé"}
//       </h2>
//       <form onSubmit={handleSubmit} className="create-resume-form">
//         {/* Personal Information Section */}
//         <div className="form-section">
//           <h3>Personal Information</h3>
//           <div className="form-row">
//             <label>Full Name:</label>
//             <input
//               type="text"
//               name="fullName"
//               value={resume.fullName}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-row">
//             <label>Phone Number:</label>
//             <input
//               type="text"
//               name="phoneNumber"
//               value={resume.phoneNumber}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="form-row">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={resume.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="form-section">
//           <h3>Links</h3>
//           <div className="form-row">
//             <label>LinkedIn:</label>
//             <input
//               type="url"
//               name="linkedin"
//               value={resume.linkedin}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-row">
//             <label>Portfolio:</label>
//             <input
//               type="url"
//               name="portfolio"
//               value={resume.portfolio}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         {/* Professional Details Section */}
//         <div className="form-section">
//           <h3>Professional Details</h3>
//           <div className="form-row">
//             <label>Summary:</label>
//             <textarea
//               name="summary"
//               value={resume.summary}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="form-row">
//             <label>Skills:</label>
//             <textarea
//               name="skills"
//               value={resume.skills}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="form-row">
//             <label>Work Experience:</label>
//             <textarea
//               name="workExperience"
//               value={resume.workExperience}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="form-row">
//             <label>Education:</label>
//             <textarea
//               name="education"
//               value={resume.education}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//         </div>

//         {/* Additional Information Section */}
//         <div className="form-section">
//           <h3>Additional Information</h3>
//           <div className="form-row">
//             <label>Certifications:</label>
//             <textarea
//               name="certifications"
//               value={resume.certifications}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="form-row">
//             <label>Projects:</label>
//             <textarea
//               name="projects"
//               value={resume.projects}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//           <div className="form-row">
//             <label>Languages:</label>
//             <textarea
//               name="languages"
//               value={resume.languages}
//               onChange={handleChange}
//             ></textarea>
//           </div>
//         </div>

//         {/* Photo Section */}
//         <div className="form-section">
//           <h3>Photo</h3>
//           <div className="form-row">
//             <label>Upload Photo:</label>
//             <input type="file" onChange={handlePhotoUpload} />
//           </div>
//           {resume.photo && (
//             <div className="photo-preview-container">
//               <img src={resume.photo} alt="Preview" className="photo-preview" />
//             </div>
//           )}
//         </div>

//         {/* Actions */}
//         <div className="form-actions">
//           <button type="submit">{editableResume ? "Update Résumé" : "Save Résumé"}</button>
//           <button type="button" onClick={() => onViewCreatedResume(null)}>
//             Back
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default CreateResume;
import React, { useState, useEffect } from "react";
import "./CreateResume.css";

function CreateResume({ addResume, onViewCreatedResume, resume }) {
  const [formState, setFormState] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    linkedin: "",
    portfolio: "",
    summary: "",
    skills: "",
    workExperience: "",
    education: "",
    certifications: "",
    projects: "",
    additional: "",
    languages: "",
    photo: null,
  });

  // Populate the form with the resume data if it exists
  useEffect(() => {
    if (resume) {
      setFormState(resume);
    }
  }, [resume]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file);
      setFormState((prev) => ({ ...prev, photo: photoURL }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure required fields are filled
    if (!formState.fullName || !formState.phoneNumber || !formState.email) {
      alert("Please fill in all required fields.");
      return;
    }

    const newResume = { ...formState, id: resume?.id || Date.now() };
    addResume(newResume);
    onViewCreatedResume(newResume);
  };

  return (
    <div className="create-resume-container">
      <h2 className="create-resume-heading">
        {resume ? "Edit Résumé" : "Create Résumé"}
      </h2>
      <form onSubmit={handleSubmit} className="create-resume-form">
        {/* Personal Information */}
        <div className="form-row">
          <label>Full Name:</label>
          <input
            type="text"
            name="fullName"
            value={formState.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Links */}
        <div className="form-row">
          <label>LinkedIn:</label>
          <input
            type="url"
            name="linkedin"
            value={formState.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Portfolio:</label>
          <input
            type="url"
            name="portfolio"
            value={formState.portfolio}
            onChange={handleChange}
          />
        </div>

        {/* Summary */}
        <div className="form-row">
          <label>Summary:</label>
          <textarea
            name="summary"
            value={formState.summary}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Skills */}
        <div className="form-row">
          <label>Skills:</label>
          <textarea
            name="skills"
            value={formState.skills}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Work Experience */}
        <div className="form-row">
          <label>Work Experience:</label>
          <textarea
            name="workExperience"
            value={formState.workExperience}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Education */}
        <div className="form-row">
          <label>Education:</label>
          <textarea
            name="education"
            value={formState.education}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Certifications */}
        <div className="form-row">
          <label>Certifications:</label>
          <textarea
            name="certifications"
            value={formState.certifications}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Projects */}
        <div className="form-row">
          <label>Projects:</label>
          <textarea
            name="projects"
            value={formState.projects}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Languages */}
        <div className="form-row">
          <label>Languages:</label>
          <textarea
            name="languages"
            value={formState.languages}
            onChange={handleChange}
          ></textarea>
        </div>

        {/* Photo Upload */}
        <div className="form-row">
          <label>Upload Photo:</label>
          <input type="file" onChange={handlePhotoUpload} />
          {formState.photo && (
            <img
              src={formState.photo}
              alt="Preview"
              className="photo-preview"
            />
          )}
        </div>

        {/* Form Actions */}
        <div className="form-actions">
          <button type="submit">
            {resume ? "Update Résumé" : "Save Résumé"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateResume;