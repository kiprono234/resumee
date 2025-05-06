
// import React, { useState } from 'react';
// import LandingPage from './LandingPage';
// import CreateResume from './CreateResume';
// import ResumeList from './ResumeList';
// import ViewResume from './ViewResume';
// import './App.css';

// function App() {
//   const [currentPage, setCurrentPage] = useState('landing');
//   const [resumes, setResumes] = useState(() => {
//     const savedResumes = localStorage.getItem('resumes');
//     return savedResumes ? JSON.parse(savedResumes) : [];
//   });
//   const [selectedResume, setSelectedResume] = useState(null);

//   // Navigate to Create Résumé page
//   const handleCreateResume = () => setCurrentPage('create');

//   // Navigate to View Résumé page
//   const handleViewResume = (resume) => {
//     setSelectedResume(resume);
//     setCurrentPage('view');
//   };

//   // Navigate to Edit Résumé page
//   const handleEditResume = (resume) => {
//     setSelectedResume(resume);
//     setCurrentPage('create'); // Reuse the create page for editing
//   };

//   // Navigate back to Landing Page
//   const handleBackToLanding = () => {
//     setCurrentPage('landing');
//     setSelectedResume(null);
//   };

//   // Add or update a résumé
//   const addOrUpdateResume = (newResume) => {
//     let updatedResumes;
//     if (selectedResume) {
//       // Update existing résumé
//       updatedResumes = resumes.map((resume) =>
//         resume.id === selectedResume.id ? newResume : resume
//       );
//     } else {
//       // Add new résumé
//       updatedResumes = [...resumes, newResume];
//     }
//     setResumes(updatedResumes);
//     localStorage.setItem('resumes', JSON.stringify(updatedResumes));
//   };

//   // Delete a résumé
//   const handleDeleteResume = (id) => {
//     const updatedResumes = resumes.filter((resume) => resume.id !== id);
//     setResumes(updatedResumes);
//     localStorage.setItem('resumes', JSON.stringify(updatedResumes));
//   };

//   return (
//     <div>
//       {/* Landing Page */}
//       {currentPage === 'landing' && (
//         <LandingPage
//           onCreateResume={handleCreateResume}
//           onViewResume={() => setCurrentPage('list')}
//         />
//       )}

//       {/* Create Résumé Page */}
//       {currentPage === 'create' && (
//         <CreateResume
//           addResume={(data) => {
//             addOrUpdateResume(data);
//             setCurrentPage('list'); // Navigate to Résumé List after creation/editing
//           }}
//           resume={selectedResume} // Pass the selected résumé for editing
//         />
//       )}

//       {/* Résumé List Page */}
//       {currentPage === 'list' && (
//         <ResumeList
//           resumes={resumes}
//           onViewResume={handleViewResume} // Handle View action
//           onEditResume={handleEditResume} // Handle Edit action
//           onDeleteResume={handleDeleteResume} // Pass delete function
//         />
//       )}

//       {/* View Résumé Page */}
//       {currentPage === 'view' && selectedResume && (
//         <ViewResume
//           resume={selectedResume}
//           onDeleteResume={handleDeleteResume} // Pass delete function
//           onBack={handleBackToLanding}
//         />
//       )}

//       {/* Back Button */}
//       {currentPage !== 'landing' && (
//         <button onClick={handleBackToLanding} className="back-button">
//           Back
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import LandingPage from './LandingPage';
// import CreateResume from './CreateResume';
// import ResumeList from './ResumeList';
// import ViewResume from './ViewResume';
// import './App.css';

// function App() {
//   const [currentPage, setCurrentPage] = useState('landing');
//   const [resumes, setResumes] = useState(() => {
//     const savedResumes = localStorage.getItem('resumes');
//     return savedResumes ? JSON.parse(savedResumes) : [];
//   });
//   const [selectedResume, setSelectedResume] = useState(null);

//   // Navigate to Create Résumé page
//   const handleCreateResume = () => setCurrentPage('create');

//   // Navigate to View Résumé page
//   const handleViewResume = (resume) => {
//     setSelectedResume(resume);
//     setCurrentPage('view');
//   };

//   // Navigate to Edit Résumé page
//   const handleEditResume = (resume) => {
//     setSelectedResume(resume);
//     setCurrentPage('create'); // Reuse the create page for editing
//   };

//   // Navigate back to Landing Page
//   const handleBackToLanding = () => {
//     setCurrentPage('landing');
//     setSelectedResume(null);
//   };

//   // Add or update a résumé
//   const addOrUpdateResume = (newResume) => {
//     let updatedResumes;
//     if (selectedResume) {
//       // Update existing résumé
//       updatedResumes = resumes.map((resume) =>
//         resume.id === selectedResume.id ? newResume : resume
//       );
//     } else {
//       // Add new résumé
//       updatedResumes = [...resumes, newResume];
//     }
//     setResumes(updatedResumes);
//     localStorage.setItem('resumes', JSON.stringify(updatedResumes));
//   };

//   // Delete a résumé
//   const handleDeleteResume = (id) => {
//     const updatedResumes = resumes.filter((resume) => resume.id !== id);
//     setResumes(updatedResumes);
//     localStorage.setItem('resumes', JSON.stringify(updatedResumes));
//   };

//   return (
//     <div>
//       {/* Landing Page */}
//       {currentPage === 'landing' && (
//         <LandingPage
//           onCreateResume={handleCreateResume}
//           onViewResume={() => setCurrentPage('list')}
//         />
//       )}

//       {/* Create Résumé Page */}
//       {currentPage === 'create' && (
//         <CreateResume
//           addResume={(data) => {
//             addOrUpdateResume(data);
//             setCurrentPage('list'); // Navigate to Résumé List after creation/editing
//           }}
//           onViewCreatedResume={(createdResume) => {
//             setSelectedResume(createdResume);
//             setCurrentPage('view'); // Navigate to View Résumé after creation
//           }}
//           resume={selectedResume} // Pass the selected résumé for editing
//         />
//       )}

//       {/* Résumé List Page */}
//       {currentPage === 'list' && (
//         <ResumeList
//           resumes={resumes}
//           onViewResume={handleViewResume} // Handle View action
//           onEditResume={handleEditResume} // Handle Edit action
//           onDeleteResume={handleDeleteResume} // Pass delete function
//         />
//       )}

//       {/* View Résumé Page */}
//       {currentPage === 'view' && selectedResume && (
//         <ViewResume
//           resume={selectedResume}
//           onDeleteResume={handleDeleteResume} // Pass delete function
//           onBack={handleBackToLanding}
//         />
//       )}

//       {/* Back Button */}
//       {currentPage !== 'landing' && (
//         <button onClick={handleBackToLanding} className="back-button">
//           Back
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import LandingPage from './LandingPage';
import CreateResume from './CreateResume';
import ResumeList from './ResumeList';
import ViewResume from './ViewResume';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [resumes, setResumes] = useState(() => {
    const savedResumes = localStorage.getItem('resumes');
    return savedResumes ? JSON.parse(savedResumes) : [];
  });
  const [selectedResume, setSelectedResume] = useState(null);

  // Navigate to Create Résumé page
  const handleCreateResume = () => {
    setSelectedResume(null); // Clear selected resume for a fresh form
    setCurrentPage('create');
  };

  // Navigate to View Résumé page
  const handleViewResume = (resume) => {
    setSelectedResume(resume); // Set the selected resume to view
    setCurrentPage('view');
  };

  // Navigate to Edit Résumé page
  const handleEditResume = (resume) => {
    setSelectedResume(resume); // Set the selected resume for editing
    setCurrentPage('create'); // Reuse the create page for editing
  };

  // Navigate back to Landing Page
  const handleBackToLanding = () => {
    setCurrentPage('landing');
    setSelectedResume(null); // Clear selected resume when going back to the landing page
  };

  // Add or update a résumé
  const addOrUpdateResume = (newResume) => {
    let updatedResumes;
    if (selectedResume) {
      // Update existing résumé
      updatedResumes = resumes.map((resume) =>
        resume.id === selectedResume.id ? newResume : resume
      );
    } else {
      // Add new résumé
      updatedResumes = [...resumes, newResume];
    }
    setResumes(updatedResumes);
    localStorage.setItem('resumes', JSON.stringify(updatedResumes));
  };

  // Delete a résumé
  const handleDeleteResume = (id) => {
    const updatedResumes = resumes.filter((resume) => resume.id !== id);
    setResumes(updatedResumes);
    localStorage.setItem('resumes', JSON.stringify(updatedResumes));
  };

  return (
    <div>
      {/* Landing Page */}
      {currentPage === 'landing' && (
        <LandingPage
          onCreateResume={handleCreateResume}
          onViewResume={() => setCurrentPage('list')}
        />
      )}

      {/* Create Résumé Page */}
      {currentPage === 'create' && (
        <CreateResume
          addResume={(data) => {
            addOrUpdateResume(data);
            setCurrentPage('list'); // Navigate to Résumé List after creation/editing
          }}
          onViewCreatedResume={(createdResume) => {
            setSelectedResume(createdResume);
            setCurrentPage('view'); // Navigate to View Résumé after creation
          }}
          resume={selectedResume} // Pass the selected résumé for editing
        />
      )}

      {/* Résumé List Page */}
      {currentPage === 'list' && (
        <ResumeList
          resumes={resumes}
          onViewResume={handleViewResume} // Handle View action
          onEditResume={handleEditResume} // Handle Edit action
          onDeleteResume={handleDeleteResume} // Pass delete function
        />
      )}

      {/* View Résumé Page */}
      {currentPage === 'view' && selectedResume && (
        <ViewResume
          resume={selectedResume}
          onEditResume={handleEditResume} // Pass Edit function to the ViewResume component
          onDeleteResume={handleDeleteResume} // Pass delete function
          onBack={() => setCurrentPage('list')} // Go back to Résumé List
        />
      )}

      {/* Back Button */}
      {currentPage !== 'landing' && (
        <button onClick={handleBackToLanding} className="back-button">
          Back
        </button>
      )}
    </div>
  );
}

export default App;