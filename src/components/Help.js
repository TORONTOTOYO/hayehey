    import React from 'react';
    import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faQuestionCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

    const defaultStyles = {
    container: {
        background: 'linear-gradient(to bottom, #000b1e, #1c2b4f)',
        minHeight: '100vh',
        color: '#e0e0e0',
        fontFamily: "'VT323', monospace",
        padding: '20px',
    },
    header: {
        color: 'hsl(49, 98%, 60%)',
        textAlign: 'center',
        marginBottom: '4rem'
    },
    card: {
        backgroundColor: '#1b2a3e',
        border: '2px solid #00ffff',
        borderRadius: '10px',
        color: '#e0e0e0',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
        padding: '20px',
        width: '80%',
        maxWidth: '600px',
        height: '80%',
        maxHeight: '600px',
    },
    cardTitle: {
        color: 'hsl(49, 98%, 60%)',
        fontSize: '1.5rem',
        marginBottom: '10px',
    },
    cardContent: {
        color: '#e0e0e0',
        fontSize: '0.6rem',
    },
    button: {
        backgroundColor: '#1b2a3e',
        border: '2px solid #00ffff',
        color: '#00ffff',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
    },
    buttonHover: {
        backgroundColor: '#00ffff',
        color: '#000000',
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
    };

    const Help = () => {
    const navigate = useNavigate();

    return (
    <div style={defaultStyles.container}>
        <button style={defaultStyles.backButton} onClick={() => navigate('/dashboard')}>
          <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        </button>
        <h1 style={defaultStyles.header}>Help Center</h1>
        <div style={defaultStyles.card}>
          <h2 style={defaultStyles.cardTitle}>Need Assistance?</h2>
          <p style={defaultStyles.cardContent}>
            I'm Soojay, the hooman behind this project. If you have any questions or need help, here are some ways to get assistance:
            <ul>
              <li>
                Explore my <a href="/FAQ" style={defaultStyles.link}>FAQ</a> section for answers to common questions.
              </li>
              <li>Reach out directly for specific issues or inquiries.</li>
            </ul>
          </p>
          <div>
          <button 
              style={defaultStyles.button}
              onClick={() => window.open('/morehelp', '_blank')} // Open in a new tab
            >
              <FontAwesomeIcon icon={faQuestionCircle} /> More Help
            </button>
          </div>
        </div>
      </div>
    );
    };

    export default Help;
