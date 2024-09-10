export const defaultStyles = {
    container: {
      background: 'linear-gradient(to bottom, #000b1e, #1c2b4f)',
      minHeight: '93vh',
      color: '#e0e0e0',
      fontFamily: "'VT323', monospace",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: 'hsl(49, 98%, 60%)',
      textAlign: 'center', // Center text horizontally
    },
    card: {
      backgroundColor: '#1b2a3e',
      border: '2px solid #00ffff',
      borderRadius: '10px',
      color: '#e0e0e0',
      transition: 'all 0.3s',
      margin: '0 auto', // Center the card horizontally
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#ff1616',
      color: '#e0e0e0',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#0a1a2f',
      border: '2px solid #00ffff',
      color: '#e0e0e0',
      boxShadow: '0 0 15px #0a1a2f',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh', // Max height to limit modal size
      overflowY: 'auto', // Allows vertical scrolling for long content
      width: '80%', // Width adjustment
      maxWidth: '400px', // Max width of the modal
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#00ffff',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #00ffff',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#00ffff',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#e0e0e0',
      wordBreak: 'break-word', // Ensures long words or URLs break properly
    },
    modalFont: {
      color: '#00ffff' 
    },
    dateStyle: {
      color: '#f5a9a9',
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    amongUsSwalContainer: {
      // Define a class name, not an inline style
      backgroundColor: '#202020', // Fallback color if gradient doesn't apply
    },
    amongUsSwalPopup: {
      backgroundColor: '#2a2a2a',
      border: '2px solid #00ffff',
      borderRadius: '12px',
    },
    amongUsSwalTitle: {
      color: '#00ffff',
      fontFamily: "'Press Start 2P', cursive",
    },
    amongUsSwalContent: {
      color: '#ffffff',
      fontFamily: "'Press Start 2P', cursive",
    },
    amongUsSwalConfirm: {
      backgroundColor: '#00ffff',
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
    },
    amongUsSwalConfirmHover: {
      backgroundColor: '#00cccc',
    },
    amongUsSwalCancel: {
      backgroundColor: '#ff1616',
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
    },
    amongUsSwalCancelHover: {
      backgroundColor: '#cc0000',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#ccc', // Placeholder color
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
      buttonStyle: {
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
  MagicIcon: {
    fontSize: '1rem', /* Adjust size as needed */
    color: '#ffcc00', /* Gold color for a magical look */
    textShadow: '0 0 5px rgba(255, 204, 0, 0.8), 0 0 10px rgba(255, 204, 0, 0.6)',
    cursor: 'pointer'
  },
  StylesShare: {
    borderColor: '#00ffff',
    color: '#00ffff',
  },
  StylesEject: {
    borderColor: '#ff1616',
    color: '#ff1616',
  },

  hoverStylesShare: {
    backgroundColor: '#00ffff',
    color: '#fff',
    borderColor: '#1b2a3e',
  },
  hoverStylesEject: {
    backgroundColor: '#ff1616',
    color: '#fff',
    borderColor: '#ff1616',
  },

  dotsP:{
    color: 'F5F7F8',
    fontSize: '1.2rem',
    fontWeight: 'bold' 
  },
  gearIcon: {
    cursor: 'pointer',
    transition: 'transform 0.5s ease', // Animation for spinning
  },
  sidebar: {
    position: 'fixed',
    top: 0,
    right: 0,
    width: '180px',
    height: '30vh',
    borderRadius: '10px 0 10px 10px',
    background: '#1b2a3e', // Match the sidebar background with the theme
    boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
    transform: 'translateX(100%)', // Sidebar starts off-screen
    transition: 'transform 0.3s ease',
    zIndex: 1000,
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  sidebarVisible: {
    transform: 'translateX(0)', // Sidebar slides in
  },
  closeButton: {
    position: 'absolute',
    top: '0.6rem',
    right: '1rem',
    fontSize: '1.5rem',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#00ffff', // Color of the close button icon
  },
  content: {
    width: '100%',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    width: '100%',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s ease, color 0.3s ease', // Add transition for hover effects
    color: '#e0e0e0', // Default text color
  },
  menuItemIcon: {
    marginRight: '0.5rem',
  },
  menuItemText: {
    fontSize: '1rem',
  },
  menuItemHover: {
    background: '#00ffff', // Hover background color
    color: '#000000', // Hover text color
  },
  reverseSpinning: {
    transform: 'rotate(-360deg)',
  },

  '@media (max-width: 600px)': {
    sidebar: {
      height: '20vh', // Height for mobile view
    },
  },

  '@media (max-width: 768px)': {
    sidebar: {
      height: '20vh', // Height for mobile view
    },
  },
  };

  export default defaultStyles;