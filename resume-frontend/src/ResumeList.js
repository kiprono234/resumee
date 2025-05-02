// import React from 'react';

// function ResumeList({ resumes, onPreviewResume = () => {}, onEditResume = () => {} }) {
//     return (
//       <div>
//         <h2>Résumés</h2>
//         {resumes.length === 0 ? (
//           <p>No résumés created yet.</p>
//         ) : (
//           <ul>
//             {resumes.map((resume) => (
//               <li key={resume.id}>
//                 <strong>{resume.fullName}</strong>
//                 {/* Call onPreviewResume only if it is provided */}
//                 {onPreviewResume && (
//                   <button onClick={() => onPreviewResume(resume)}>View</button>
//                 )}
//                 {/* Call onEditResume only if it is provided */}
//                 {onEditResume && (
//                   <button onClick={() => onEditResume(resume)}>Edit</button>
//                 )}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
  
//   export default ResumeList;
// import React from 'react';

// function ResumeList({ resumes, onViewResume, onEditResume }) {
//   return (
//     <div>
//       <h2>Résumés</h2>
//       {resumes.length === 0 ? (
//         <p>No résumés created yet.</p>
//       ) : (
//         <ul>
//           {resumes.map((resume) => (
//             <li key={resume.id}>
//               <strong>{resume.fullName}</strong>
//               {/* View Button */}
//               <button onClick={() => onViewResume(resume)}>View</button>
//               {/* Edit Button */}
//               <button onClick={() => onEditResume(resume)}>Edit</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ResumeList;
// import React from 'react';

// function ResumeList({ resumes, onViewResume, onEditResume, onDeleteResume }) {
//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Résumés</h2>
//       {resumes.length === 0 ? (
//         <p style={styles.noResumes}>No résumés created yet.</p>
//       ) : (
//         <ul style={styles.list}>
//           {resumes.map((resume) => (
//             <li key={resume.id} style={styles.listItem}>
//               <span style={styles.fullName}>{resume.fullName}</span>
//               <div style={styles.buttonGroup}>
//                 <button onClick={() => onViewResume(resume)} style={styles.button}>
//                   View
//                 </button>
//                 <button onClick={() => onEditResume(resume)} style={{ ...styles.button, ...styles.editButton }}>
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => {
//                     if (window.confirm(`Are you sure you want to delete the résumé for ${resume.fullName}?`)) {
//                       onDeleteResume(resume.id);
//                     }
//                   }}
//                   style={{ ...styles.button, ...styles.deleteButton }}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button onClick={() => window.history.back()} style={styles.backButton}>
//         Back
//       </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     maxWidth: '600px',
//     margin: '20px auto',
//     padding: '20px',
//     borderRadius: '8px',
//     backgroundColor: '#f9f9f9',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     fontFamily: 'Arial, sans-serif',
//   },
//   heading: {
//     textAlign: 'center',
//     color: '#333',
//     marginBottom: '20px',
//   },
//   noResumes: {
//     textAlign: 'center',
//     color: '#666',
//   },
//   list: {
//     listStyleType: 'none',
//     padding: 0,
//   },
//   listItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '10px',
//     marginBottom: '10px',
//     borderRadius: '5px',
//     backgroundColor: '#fff',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//   },
//   fullName: {
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '10px',
//   },
//   button: {
//     padding: '8px 12px',
//     fontSize: '14px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     transition: 'background-color 0.3s',
//   },
//   editButton: {
//     backgroundColor: '#FFC107',
//   },
//   deleteButton: {
//     backgroundColor: '#DC3545',
//   },
//   backButton: {
//     marginTop: '20px',
//     padding: '10px 20px',
//     fontSize: '16px',
//     borderRadius: '5px',
//     border: 'none',
//     cursor: 'pointer',
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     display: 'block',
//     width: '100%',
//     textAlign: 'center',
//     transition: 'background-color 0.3s',
//   },
// };

// export default ResumeList;
import React from 'react';

function ResumeList({ resumes, onViewResume, onEditResume, onDeleteResume }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Résumés</h2>
      {resumes.length === 0 ? (
        <p style={styles.noResumes}>No résumés created yet.</p>
      ) : (
        <ul style={styles.list}>
          {resumes.map((resume) => (
            <li key={resume.id} style={styles.listItem}>
              <span style={styles.fullName}>{resume.fullName}</span>
              <div style={styles.buttonGroup}>
                <button onClick={() => onViewResume(resume)} style={styles.button}>
                  View
                </button>
                <button onClick={() => onEditResume(resume)} style={{ ...styles.button, ...styles.editButton }}>
                  Edit
                </button>
                <button
                  onClick={() => {
                    if (window.confirm(`Are you sure you want to delete the résumé for ${resume.fullName}?`)) {
                      onDeleteResume(resume.id);
                    }
                  }}
                  style={{ ...styles.button, ...styles.deleteButton }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => window.history.back()} style={styles.backButton}>
        Back
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  noResumes: {
    textAlign: 'center',
    color: '#666',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  fullName: {
    fontWeight: 'bold',
    color: '#333',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    padding: '8px 12px',
    fontSize: '14px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    transition: 'background-color 0.3s',
  },
  editButton: {
    backgroundColor: '#FFC107',
  },
  deleteButton: {
    backgroundColor: '#DC3545',
  },
  backButton: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#007BFF',
    color: '#fff',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
};

export default ResumeList;