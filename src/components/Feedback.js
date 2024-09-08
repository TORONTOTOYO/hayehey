import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const defaultStyles = {
  container: {
    background: 'linear-gradient(to bottom, #000b1e, #1c2b4f)',
    minHeight: '100vh',
    color: '#e0e0e0',
    fontFamily: "'VT323', monospace",
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center the contents horizontally
    justifyContent: 'center', // Center the contents vertically
  },
  cardTitle: {
    color: 'hsl(49, 98%, 60%)',
    fontSize: '1.5rem',
    marginBottom: '2rem',
    textAlign: 'center', // Center align the title text
  },
  backButton: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: '#1b2a3e',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    color: '#00ffff',
    cursor: 'pointer',
    fontSize: '0.75rem',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#00ffff',
    cursor: 'pointer',
    fontSize: '3rem', // Large icon size
  }
};

const Feedback = () => {
    const [feedback, setFeedback] = useState('');
    const navigate = useNavigate();
  
    const handleIconClick = () => {
      // Construct the mailto URL
      const mailtoURL = `mailto:fchristianjomar@gmail.com?subject=Feedback&body=${encodeURIComponent(feedback)}`;
  
      // Redirect to the mailto URL
      window.location.href = mailtoURL;
    };

  return (
    <div style={defaultStyles.container}>
      <button style={defaultStyles.backButton} onClick={() => navigate('/dashboard')}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <h1 style={defaultStyles.cardTitle}>Send Us Your Feedback</h1>
      <button style={defaultStyles.backButton} onClick={() => navigate('/dashboard')}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <button style={defaultStyles.iconButton} onClick={handleIconClick}>
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
    </div>
  );
};

export default Feedback;
