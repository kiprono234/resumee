import React, { useState } from 'react';

function ResumeEdit({ resume, updateResume }) {
  const [formData, setFormData] = useState(resume);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResume(formData);
    alert('Résumé updated successfully!');
  };

  return (
    <div>
      <h2>Edit Résumé</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        {/* Repeat for other fields */}
        <button type="submit">Update Résumé</button>
      </form>
    </div>
  );
}

export default ResumeEdit;