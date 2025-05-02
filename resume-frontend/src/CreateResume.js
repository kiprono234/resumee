
// import React, { useState } from 'react';
// import './CreateResume.css';

// function CreateResume({ addResume, onViewCreatedResume }) {
//   const [resume, setResume] = useState({
//     fullName: '',
//     phoneNumber: '',
//     email: '',
//     linkedin: '',
//     portfolio: '',
//     summary: '',
//     skills: '',
//     workExperience: '',
//     education: '',
//     certifications: '',
//     projects: '',
//     additional: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setResume((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newResume = { ...resume, id: Date.now() };
//     addResume(newResume);
//     onViewCreatedResume(newResume);
//     setResume({
//       fullName: '',
//       phoneNumber: '',
//       email: '',
//       linkedin: '',
//       portfolio: '',
//       summary: '',
//       skills: '',
//       workExperience: '',
//       education: '',
//       certifications: '',
//       projects: '',
//       additional: '',
//     });
//   };

//   return (
//     <div className="create-resume-container">
//       <h2 className="create-resume-heading">Create Résumé</h2>
//       <form onSubmit={handleSubmit} className="create-resume-form">
//         <Section title="Contact Information">
//           <Input name="fullName" placeholder="Full Name" value={resume.fullName} onChange={handleChange} required />
//           <Input name="phoneNumber" placeholder="Phone Number" type="tel" value={resume.phoneNumber} onChange={handleChange} required />
//           <Input name="email" placeholder="Email" type="email" value={resume.email} onChange={handleChange} required />
//           <Input name="linkedin" placeholder="LinkedIn Profile" type="url" value={resume.linkedin} onChange={handleChange} />
//           <Input name="portfolio" placeholder="Portfolio URL" type="url" value={resume.portfolio} onChange={handleChange} />
//         </Section>

//         <Section title="Summary">
//           <Textarea name="summary" placeholder="Professional Summary" value={resume.summary} onChange={handleChange} />
//         </Section>

//         <Section title="Skills">
//           <Textarea name="skills" placeholder="Skills (comma-separated)" value={resume.skills} onChange={handleChange} />
//         </Section>

//         <Section title="Work Experience">
//           <Textarea name="workExperience" placeholder="Work Experience" value={resume.workExperience} onChange={handleChange} />
//         </Section>

//         <Section title="Education">
//           <Textarea name="education" placeholder="Education" value={resume.education} onChange={handleChange} />
//         </Section>

//         <Section title="Certifications">
//           <Textarea name="certifications" placeholder="Certifications" value={resume.certifications} onChange={handleChange} />
//         </Section>

//         <Section title="Projects">
//           <Textarea name="projects" placeholder="Projects" value={resume.projects} onChange={handleChange} />
//         </Section>

//         <Section title="Additional Info">
//           <Textarea name="additional" placeholder="Additional Information" value={resume.additional} onChange={handleChange} />
//         </Section>

//         <div className="create-resume-actions">
//           <button type="submit" className="submit-button">Save Résumé</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// const Section = ({ title, children }) => (
//   <div className="create-resume-section">
//     <h3 className="section-title">{title}</h3>
//     {children}
//   </div>
// );

// const Input = ({ name, value, onChange, placeholder, type = 'text', required = false }) => (
//   <input
//     className="input-field"
//     type={type}
//     name={name}
//     value={value}
//     placeholder={placeholder}
//     onChange={onChange}
//     required={required}
//   />
// );

// const Textarea = ({ name, value, onChange, placeholder }) => (
//   <textarea
//     className="textarea-field"
//     name={name}
//     value={value}
//     placeholder={placeholder}
//     onChange={onChange}
//     rows={4}
//   />
// );

// export default CreateResume;
import React, { useState } from 'react';
import './CreateResume.css';

function CreateResume({ addResume, onViewCreatedResume }) {
  const [resume, setResume] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    linkedin: '',
    portfolio: '',
    summary: '',
    skills: '',
    workExperience: '',
    education: '',
    certifications: '',
    projects: '',
    additional: '',
    photo: null, // Add a photo field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResume((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const photoURL = URL.createObjectURL(file); // Create a URL for the uploaded photo
      setResume((prev) => ({ ...prev, photo: photoURL })); // Save the photo URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newResume = { ...resume, id: Date.now() };
    addResume(newResume);
    onViewCreatedResume(newResume);
    setResume({
      fullName: '',
      phoneNumber: '',
      email: '',
      linkedin: '',
      portfolio: '',
      summary: '',
      skills: '',
      workExperience: '',
      education: '',
      certifications: '',
      projects: '',
      additional: '',
      photo: null, // Reset the photo field
    });
  };

  return (
    <div className="create-resume-container">
      <h2 className="create-resume-heading">Create Résumé</h2>
      <form onSubmit={handleSubmit} className="create-resume-form">
        <Section title="Contact Information">
          <Input name="fullName" placeholder="Full Name" value={resume.fullName} onChange={handleChange} required />
          <Input name="phoneNumber" placeholder="Phone Number" type="tel" value={resume.phoneNumber} onChange={handleChange} required />
          <Input name="email" placeholder="Email" type="email" value={resume.email} onChange={handleChange} required />
          <Input name="linkedin" placeholder="LinkedIn Profile" type="url" value={resume.linkedin} onChange={handleChange} />
          <Input name="portfolio" placeholder="Portfolio URL" type="url" value={resume.portfolio} onChange={handleChange} />
        </Section>

        <Section title="Upload Photo">
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="photo-upload-input"
          />
          {resume.photo && (
            <div className="photo-preview">
              <img src={resume.photo} alt="Uploaded" className="photo-preview-image" />
            </div>
          )}
        </Section>

        <Section title="Summary">
          <Textarea name="summary" placeholder="Professional Summary" value={resume.summary} onChange={handleChange} />
        </Section>

        <Section title="Skills">
          <Textarea name="skills" placeholder="Skills (comma-separated)" value={resume.skills} onChange={handleChange} />
        </Section>

        <Section title="Work Experience">
          <Textarea name="workExperience" placeholder="Work Experience" value={resume.workExperience} onChange={handleChange} />
        </Section>

        <Section title="Education">
          <Textarea name="education" placeholder="Education" value={resume.education} onChange={handleChange} />
        </Section>

        <Section title="Certifications">
          <Textarea name="certifications" placeholder="Certifications" value={resume.certifications} onChange={handleChange} />
        </Section>

        <Section title="Projects">
          <Textarea name="projects" placeholder="Projects" value={resume.projects} onChange={handleChange} />
        </Section>

        <Section title="Additional Info">
          <Textarea name="additional" placeholder="Additional Information" value={resume.additional} onChange={handleChange} />
        </Section>

        <div className="create-resume-actions">
          <button type="submit" className="submit-button">Save Résumé</button>
        </div>
      </form>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div className="create-resume-section">
    <h3 className="section-title">{title}</h3>
    {children}
  </div>
);

const Input = ({ name, value, onChange, placeholder, type = 'text', required = false }) => (
  <input
    className="input-field"
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
  />
);

const Textarea = ({ name, value, onChange, placeholder }) => (
  <textarea
    className="textarea-field"
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    rows={4}
  />
);

export default CreateResume;