
// import React, { useState } from "react";
// import CreateResume from "./CreateResume";
// import ViewResume from "./ViewResume";

// function ParentComponent() {
//   const [originalResume, setOriginalResume] = useState(null); // Store the original resume
//   const [editableResume, setEditableResume] = useState(null); // Store the resume being edited
//   const [isEditing, setIsEditing] = useState(false); // Track whether the user is editing

//   const addResume = (resume) => {
//     setOriginalResume(resume); // Save the new resume as the original
//     setEditableResume(null); // Clear the editable resume
//     setIsEditing(false); // Exit editing mode
//   };

//   const onEditResume = (resume) => {
//     console.log("Edit Resume triggered with data:", resume); // Debugging log
//     setEditableResume(resume); // Load the resume for editing
//     setIsEditing(true); // Enter editing mode
//   };

//   return (
//     <div>
//       {isEditing || !originalResume ? (
//         <CreateResume
//           addResume={addResume}
//           onViewCreatedResume={addResume} // Reuse addResume for viewing created resume
//           editableResume={editableResume} // Pass the editable resume for pre-filling
//         />
//       ) : (
//         <ViewResume
//           resume={originalResume} // Pass the original resume for viewing
//           onEditResume={onEditResume} // Pass the edit function
//         />
//       )}
//     </div>
//   );
// }

// export default ParentComponent;
import React, { useState } from "react";
import CreateResume from "./CreateResume";
import ViewResume from "./ViewResume";

function ParentComponent() {
  const [originalResume, setOriginalResume] = useState(null); // Store the original resume
  const [editableResume, setEditableResume] = useState(null); // Store the resume being edited
  const [isEditing, setIsEditing] = useState(false); // Track whether the user is editing

  // Function to save the resume
  const addResume = (resume) => {
    console.log("Saving resume:", resume); // Debugging log
    setOriginalResume(resume); // Save the new resume as the original
    setEditableResume(null); // Clear the editable resume
    setIsEditing(false); // Exit editing mode
  };

  // Function to handle editing
  const onEditResume = (resume) => {
    console.log("Edit Resume triggered with data:", resume); // Debugging log
    setEditableResume(resume); // Load the resume for editing
    setIsEditing(true); // Enter editing mode
  };

  return (
    <div>
      {isEditing || !originalResume ? (
        <CreateResume
          addResume={addResume}
          onViewCreatedResume={addResume} // Reuse addResume for viewing created resume
          editableResume={editableResume} // Pass the editable resume for pre-filling
        />
      ) : (
        <ViewResume
          resume={originalResume} // Pass the original resume for viewing
          onEditResume={onEditResume} // Pass the edit function
        />
      )}
    </div>
  );
}

export default ParentComponent;