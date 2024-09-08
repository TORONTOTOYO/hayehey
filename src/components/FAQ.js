import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    { question: 'How do I reset my password?', answer: 'To reset your password, go to the login page and click on "Forgot Password". Follow the instructions to reset your password. Just kidding, this feature isn’t implemented yet. For now, try not to forget your password!' },
    { question: 'How can I contact support?', answer: 'You can contact support by clicking the "Send Feedback" button in the sidebar or emailing us at fchristianjomar@gmail.com.' },
    { question: 'Where can I find the latest updates?', answer: 'Last update na to tinatamad na ako' },
    { question: 'How do I delete my account?', answer: 'To delete your account, go to the nearest restroom, place your cellphone in a bowl, and flush it.' },
  ];

  const toggleExpansion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
      marginBottom: '2rem',
      fontSize: '1.5rem',
    },
    card: {
      backgroundColor: '#1b2a3e',
      border: '2px solid #00ffff',
      borderRadius: '10px',
      color: '#e0e0e0',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
      padding: '1rem',
      width: '90%',
      maxWidth: '600px',
      marginTop: '2rem',
    },
    questionContainer: {
      marginBottom: '1rem',
    },
    question: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      borderRadius: '8px',
      transition: 'background-color 0.3s, box-shadow 0.3s',
      fontSize: '0.9rem',
    },
    expandedQuestion: {
      backgroundColor: '#2c3e50',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
    collapsedQuestion: {
      backgroundColor: '#1b2a3e',
    },
    questionHover: {
      backgroundColor: '#34495e',
    },
    icon: {
      marginRight: '0.5rem',
      transition: 'transform 0.3s',
    },
    expandedIcon: {
      transform: 'rotate(45deg)',
    },
    collapsedIcon: {
      transform: 'rotate(0)',
    },
    answer: {
      color: '#e0e0e0',
      marginTop: '0.5rem',
      fontSize: '0.7rem',
      lineHeight: '1.4',
      paddingLeft: '1rem',
      borderLeft: '2px solid #00ffff',
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

  return (
    <div style={defaultStyles.container}>
      <button style={defaultStyles.backButton} onClick={() => navigate('/help')}>
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      </button>
      <div style={defaultStyles.card}>
        <h1 style={defaultStyles.header}>
          Frequently Asked Questions
        </h1>
        {faqs.map((faq, index) => (
          <div key={index} style={defaultStyles.questionContainer}>
            <div 
              onClick={() => toggleExpansion(index)}
              style={{
                ...defaultStyles.question,
                ...(expandedIndex === index ? defaultStyles.expandedQuestion : defaultStyles.collapsedQuestion),
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = defaultStyles.questionHover.backgroundColor}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = expandedIndex === index ? defaultStyles.expandedQuestion.backgroundColor : defaultStyles.collapsedQuestion.backgroundColor}
            >
              <FontAwesomeIcon 
                icon={expandedIndex === index ? faMinus : faPlus} 
                style={{
                  ...defaultStyles.icon,
                  ...(expandedIndex === index ? defaultStyles.expandedIcon : defaultStyles.collapsedIcon),
                }} 
              />
              <strong>{faq.question}</strong>
            </div>
            {expandedIndex === index && (
              <p style={defaultStyles.answer}>
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
