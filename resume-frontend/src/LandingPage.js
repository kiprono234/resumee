import React from 'react';
import './LandingPage.css';
import CreateResume from './CreateResume';

function LandingPage({ onCreateResume, onViewResume, onEditResume }) {
  return (
    <div className="landing-page">
      <h1> Resume Builder</h1>
      <div className="button-container">
        <button onClick={onCreateResume} className="landing-button">
          Create Resume
        </button>
        <button onClick={onViewResume} className="landing-button">
          View Created Resume
        </button>
        {/* <button onClick={onviewResumeList} className="landing-button">
          View Resume List
        </button> */}
      </div>
    </div>
  );
}

export default LandingPage;