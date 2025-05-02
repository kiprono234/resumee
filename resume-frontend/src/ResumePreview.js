// import React from 'react';
// import './ResumePreview.css';

// function ResumePreview({ resume }) {
//   if (!resume) {
//     return <div>Select a resume to preview it here.</div>;
//   }

//   return (
//     <div className="resume-preview">
//       <h2>Resume Preview</h2>
//       <h3>{resume.fullName}</h3>
//       <p><strong>Phone:</strong> {resume.phoneNumber}</p>
//       <p><strong>Email:</strong> {resume.email}</p>
//       {resume.linkedin && <p><strong>LinkedIn:</strong> {resume.linkedin}</p>}
//       {resume.portfolio && <p><strong>Portfolio:</strong> {resume.portfolio}</p>}
//       <p><strong>Summary:</strong> {resume.summary}</p>
//       <p><strong>Skills:</strong> {resume.skills}</p>
//       <p><strong>Work Experience:</strong> {resume.workExperience}</p>
//       <p><strong>Education:</strong> {resume.education}</p>
//       <p><strong>Certifications:</strong> {resume.certifications}</p>
//       <p><strong>Projects:</strong> {resume.projects}</p>
//       <p><strong>Additional:</strong> {resume.additional}</p>
//     </div>
//   );
// }

// export default ResumePreview;
import React from 'react';

function ResumePreview({ resume }) {
  return (
    <div>
      <h2>Résumé Preview</h2>
      <p><strong>Full Name:</strong> {resume.fullName}</p>
      <p><strong>Phone Number:</strong> {resume.phoneNumber}</p>
      <p><strong>Email:</strong> {resume.email}</p>
      <p><strong>LinkedIn:</strong> {resume.linkedin}</p>
      <p><strong>Portfolio:</strong> {resume.portfolio}</p>
      <p><strong>Summary:</strong> {resume.summary}</p>
      <p><strong>Skills:</strong> {resume.skills}</p>
      <p><strong>Work Experience:</strong> {resume.workExperience}</p>
      <p><strong>Education:</strong> {resume.education}</p>
      <p><strong>Certifications:</strong> {resume.certifications}</p>
      <p><strong>Projects:</strong> {resume.projects}</p>
      <p><strong>Additional Information:</strong> {resume.additional}</p>
    </div>
  );
}

export default ResumePreview;

