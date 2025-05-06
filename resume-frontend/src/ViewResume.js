// ViewResume.js
// This component is responsible for displaying the resume and providing options to edit or download it as a PDF.
// It uses the jsPDF and html2canvas libraries to convert the resume into a downloadable PDF format.
// It also includes a button to edit the resume, which triggers a function passed as a prop.
// The component is styled using CSS classes defined in the imported CSS files.
import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./ViewResume.css";
import "./Resume.css"; // Assuming you have a CSS file for styling

function ViewResume({ resume, onEditResume }) {
  if (!onEditResume) {
    console.error("onEditResume prop is not provided!"); // Debugging log
  }

  const downloadResume = async () => {
    const input = document.getElementById("resume");

    const buttons = document.querySelectorAll(".btn-download, .btn-edit");
    buttons.forEach((button) => (button.style.display = "none"));

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");

    buttons.forEach((button) => (button.style.display = "block"));

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = 190;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 10, 10, pdfWidth, pdfHeight);
    pdf.save(`${resume.fullName}_Resume.pdf`);
  };

  return (
    <div id="resume" className="resume-container">
      {/* Header Section */}
      <div className="resume-header">
        {resume.photo && (
          <img
            src={resume.photo}
            alt="Profile"
            className="resume-photo"
          />
        )}
        <div className="resume-contact">
          <h1>{resume.fullName}</h1>
          <p><strong>Phone:</strong> {resume.phoneNumber}</p>
          <p><strong>Email:</strong> {resume.email}</p>
          <p><strong>LinkedIn:</strong> <a href={resume.linkedin} className="resume-link">{resume.linkedin}</a></p>
          {resume.portfolio && (
            <p><strong>Portfolio:</strong> <a href={resume.portfolio} className="resume-link">{resume.portfolio}</a></p>
          )}
        </div>
      </div>

      {/* Body Section */}
      <div className="resume-body">
        <div className=" left-column">
        <img
            src={resume.photo}
            alt="Profile"
            className="resume-photo"
          />
          <h2>Technical Skills</h2>
          <p>{resume.skills}</p>
          <h2>Certifications</h2>
          <p>{resume.certifications}</p>
          <h2>Languages</h2>
          <p>{resume.languages}</p>
        </div>
        <div className=" right-column">
          <h2>Professional Profile</h2>
          <p>{resume.summary}</p>
          <h2>Experience</h2>
          <p>{resume.workExperience}</p>
          <h2>Education</h2>
          <p>{resume.education}</p>
          {resume.projects && (
            <>
              <h2>Projects</h2>
              <p>{resume.projects}</p>
            </>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="resume-footer">
        <button
          onClick={() => {
            if (onEditResume) {
              onEditResume(resume); // Call the edit function
            } else {
              console.error("onEditResume is not defined"); // Debugging log
            }
          }}
          className="btn-edit"
        >
          Edit Resume
        </button>
        <button onClick={downloadResume} className="btn-download">Download PDF</button>
      </div>
    </div>
  );
}

export default ViewResume;
