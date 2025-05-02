
import React from 'react';
import jsPDF from 'jspdf';
import './ViewResume.css';

function ViewResume({ resume }) {
  // Function to generate and download the resume as a PDF
  const downloadResume = async () => {
    const doc = new jsPDF();
    let y = 10; // Start y-coordinate for text

    doc.setFontSize(22);
    doc.text('Resume', 105, y, { align: 'center' });
    y += 20; // Add spacing after the title

    // Add the photo if it exists
    if (resume.photo) {
      const img = new Image();
      img.src = resume.photo;

      await new Promise((resolve) => {
        img.onload = () => {
          doc.addImage(img, 'JPEG', 80, y, 50, 50); // Adjust x, y, width, height as needed
          resolve();
        };
      });
      y += 60; // Add spacing after the photo
    }

    doc.setFontSize(12);

    // Add text fields with proper spacing
    const addText = (label, content) => {
      doc.text(`${label}:`, 10, y);
      const lines = doc.splitTextToSize(content, 180); // Split long text into multiple lines
      doc.text(lines, 40, y); // Align the text content to the right of the label
      y += lines.length * 10; // Adjust y-coordinate based on the number of lines
    };

    addText('Full Name', resume.fullName);
    addText('Phone Number', resume.phoneNumber);
    addText('Email', resume.email);
    addText('LinkedIn', resume.linkedin);
    addText('Portfolio', resume.portfolio);
    addText('Summary', resume.summary);
    addText('Skills', resume.skills);
    addText('Work Experience', resume.workExperience);
    addText('Education', resume.education);
    addText('Certifications', resume.certifications);
    addText('Projects', resume.projects);
    addText('Additional Information', resume.additional);

    doc.save(`${resume.fullName}_Resume.pdf`);
  };

  return (
    <div className="view-resume-container">
      <h2 className="view-resume-heading">{resume.fullName}'s Résumé</h2>
      {resume.photo && (
        <div className="resume-photo">
          <img src={resume.photo} alt="User Photo" className="resume-photo-image" />
        </div>
      )}
      <div className="resume-details">
        <p><strong>Phone:</strong> {resume.phoneNumber}</p>
        <p><strong>Email:</strong> {resume.email}</p>
        <p><strong>LinkedIn:</strong> {resume.linkedin}</p>
        <p><strong>Portfolio:</strong> {resume.portfolio}</p>
        <p><strong>Summary:</strong> {resume.summary}</p>
        <p><strong>Skills:</strong> {resume.skills}</p>
        <p><strong>Work Experience:</strong> {resume.workExperience}</p>
        <p><strong>Education:</strong> {resume.education}</p>
        <p><strong>Certifications:</strong> {resume.certifications}</p>
        <p><strong>Projects:</strong> {resume.projects}</p>
        <p><strong>Additional Info:</strong> {resume.additional}</p>
      </div>
      {/* Download PDF Button */}
      <button onClick={downloadResume} className="download-button">Download PDF</button>
    </div>
  );
}

export default ViewResume;