export const themes = {
    amongUs: {
        container: {
            background: 'linear-gradient(to bottom, #000b1e, #1c2b4f)',
            minHeight: '100vh',
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
            fontFamily: "'Press Start 2P'",
          },
          amongUsSwalContent: {
            color: '#ffffff',
            fontFamily: "'Press Start 2P'",
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
        MagicIcon: {
          fontSize: '1rem', /* Adjust size as needed */
          color: '#ffcc00', /* Gold color for a magical look */
          textShadow: '0 0 5px rgba(255, 204, 0, 0.8), 0 0 10px rgba(255, 204, 0, 0.6)',
          cursor: 'pointer'
        },
        MagicIconHover:{

        }
    },
    onePiece: {
      container: {
        background: 'linear-gradient(to bottom, #87CEFA, #4682B4)', // Sky blue gradient
        minHeight: '100vh',
        color: '#FFFFFF',
        fontFamily: "'Comic Sans MS', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#FFD700', // Gold color
        textAlign: 'center',
        fontFamily: "'Pirata One'",
      },
      card: {
        backgroundColor: '#FF6347', // Tomato red
        border: '2px solid #FFD700', // Gold border
        borderRadius: '15px',
        color: '#FFFFFF',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#FF4500', // Orange red
        color: '#FFFFFF',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#2E8B57', // Sea green
        border: '2px solid #FFD700', // Gold border
        color: '#FFFFFF',
        boxShadow: '0 0 15px #2E8B57',
        borderRadius: '8px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '400px',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#FFD700',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #FFD700',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#FFD700',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#FFFFFF',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#FFD700'
      },
      dateStyle: {
        color: '#F4A460', // Sandy brown
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      amongUsSwalContainer: {
        backgroundColor: '#000080', // Navy blue
      },
      amongUsSwalPopup: {
        backgroundColor: '#4682B4', // Steel blue
        border: '2px solid #FFD700',
        borderRadius: '12px',
      },
      amongUsSwalTitle: {
        color: '#FFD700',
        fontFamily: "'Pirata One'",
      },
      amongUsSwalContent: {
        color: '#FFFFFF',
        fontFamily: "'Pirata One'",
      },
      amongUsSwalConfirm: {
        backgroundColor: '#FFD700',
        color: '#000000',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalConfirmHover: {
        backgroundColor: '#FFC107',
      },
      amongUsSwalCancel: {
        backgroundColor: '#FF4500',
        color: '#000000',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalCancelHover: {
        backgroundColor: '#FF6347',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#FFD700', // Gold color
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FF6347',
        border: '2px solid #FFD700',
        color: '#FFD700',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#FFD700',
        color: '#FFD700',
      },
      StylesEject: {
        borderColor: '#FF4500',
        color: '#FFD700',
      },
      hoverStylesShare: {
        backgroundColor: '#FFD700',
        color: '#000000',
        borderColor: '#FF6347',
      },
      hoverStylesEject: {
        backgroundColor: '#FF4500',
        color: '#FFFFFF',
        borderColor: '#FF4500',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#ffbb00',
        textShadow: '0 0 5px rgba(255, 187, 0, 0.8), 0 0 10px rgba(255, 187, 0, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#ff9900',
        textShadow: '0 0 5px rgba(255, 153, 0, 0.8), 0 0 10px rgba(255, 153, 0, 0.6)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#87CEFA', // Sky blue gradient background
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
        color: '#FFD700', // Gold color to match the theme
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
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#FFFFFF', // White text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#FF6347', // Tomato red for hover effect
        color: '#FFFFFF', // White text color for hover effect
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    adorableHome: {
      container: {
        background: 'linear-gradient(to bottom, #FDE2E4, #FAD0C4)', // Soft pink to peach gradient
        minHeight: '100vh',
        color: '#333333',
        fontFamily: "'Comic Sans MS'",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#FF6F61', // Coral color
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '2rem',
      },
      card: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #FF6F61', // Coral border
        borderRadius: '12px',
        color: '#333333',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#FF6F61', // Coral
        color: '#FFFFFF',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light semi-transparent white
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #FF6F61', // Coral border
        color: '#333333',
        boxShadow: '0 0 15px rgba(255, 111, 97, 0.5)',
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '400px',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#FF6F61',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #FF6F61',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#FF6F61',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#333333',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#FF6F61',
      },
      dateStyle: {
        color: '#FF9AA2', // Light pink
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      amongUsSwalContainer: {
        backgroundColor: '#FFFFFF', // White
      },
      amongUsSwalPopup: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #FF6F61', // Coral border
        borderRadius: '12px',
      },
      amongUsSwalTitle: {
        color: '#FF6F61',
        fontFamily: "'Poppins', sans-serif",
      },
      amongUsSwalContent: {
        color: '#333333',
        fontFamily: "'Comic Sans MS'",
      },
      amongUsSwalConfirm: {
        backgroundColor: '#FF6F61', // Coral
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalConfirmHover: {
        backgroundColor: '#FF4F47', // Darker coral
      },
      amongUsSwalCancel: {
        backgroundColor: '#FF9AA2', // Light pink
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalCancelHover: {
        backgroundColor: '#FF7F9A', // Darker light pink
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#FF6F61', // Coral
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FF6F61', // Coral
        border: '2px solid #FF6F61', // Coral border
        color: '#FFFFFF',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#FF6F61',
        color: '#333333',
      },
      StylesEject: {
        borderColor: '#FF9AA2',
        color: '#333333',
      },
      hoverStylesShare: {
        backgroundColor: '#FF6F61',
        color: '#FFFFFF',
        borderColor: '#FF6F61',
      },
      hoverStylesEject: {
        backgroundColor: '#FF9AA2',
        color: '#FFFFFF',
        borderColor: '#FF9AA2',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#ff9aa2',
        textShadow: '0 0 5px rgba(255, 154, 162, 0.8), 0 0 10px rgba(255, 154, 162, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#e63946',
        textShadow: '0 0 5px rgba(230, 57, 70, 0.8), 0 0 10px rgba(230, 57, 70, 0.6)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#FAD0C4', // Peach background to match the theme
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
        color: '#FF6F61', // Coral color to match the theme
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
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#333333', // Dark text color to contrast with background
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#FF6F61', // Coral hover background
        color: '#FFFFFF', // White text on hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    retroAesthetic: {
      container: {
        background: 'linear-gradient(to bottom, #f0e8d0, #f7a8a6)', // Soft cream to pink gradient
        minHeight: '100vh',
        color: '#333',
        fontFamily: "'Press Start 2P'",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#ff6f61', // Retro coral color
        textAlign: 'center',
      },
      card: {
        backgroundColor: '#fff', // Classic white
        border: '2px solid #ff6f61', // Retro coral border
        borderRadius: '12px',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#ff6f61',
        color: '#fff',
        borderRadius: '8px',
        padding: '2px 6px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#fff',
        border: '2px solid #ff6f61',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '400px',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#ff6f61',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #ff6f61',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#ff6f61',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#333',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#ff6f61',
      },
      dateStyle: {
        color: '#ff6f61',
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      amongUsSwalContainer: {
        backgroundColor: '#fff',
      },
      amongUsSwalPopup: {
        backgroundColor: '#fff',
        border: '2px solid #ff6f61',
        borderRadius: '12px',
      },
      amongUsSwalTitle: {
        color: '#ff6f61',
        fontFamily: "'Press Start 2P'",
      },
      amongUsSwalContent: {
        color: '#333',
        fontFamily: "'Press Start 2P'",
      },
      amongUsSwalConfirm: {
        backgroundColor: '#ff6f61',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalConfirmHover: {
        backgroundColor: '#e85a5a',
      },
      amongUsSwalCancel: {
        backgroundColor: '#f8b400',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalCancelHover: {
        backgroundColor: '#e2a92d',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#ff6f61',
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#fff',
        border: '2px solid #ff6f61',
        color: '#ff6f61',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#ff6f61',
        color: '#ff6f61',
      },
      StylesEject: {
        borderColor: '#f8b400',
        color: '#f8b400',
      },
      hoverStylesShare: {
        backgroundColor: '#ff6f61',
        color: '#fff',
        borderColor: '#ff6f61',
      },
      hoverStylesEject: {
        backgroundColor: '#f8b400',
        color: '#fff',
        borderColor: '#f8b400',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#ff007f',
        textShadow: '0 0 5px rgba(255, 0, 127, 0.8), 0 0 10px rgba(255, 0, 127, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#e6006c',
        textShadow: '0 0 5px rgba(230, 0, 108, 0.8), 0 0 10px rgba(230, 0, 108, 0.6)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
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
      }
    },
    taylorSwiftRed: {
      container: {
        background: 'linear-gradient(to bottom, #f4c2c2, #e80039)', // Light pink to red gradient
        minHeight: '100vh',
        color: '#fff',
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      card: {
        backgroundColor: '#fff',
        border: '2px solid #e80039', // Red border
        borderRadius: '10px',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#e80039',
        color: '#fff',
        borderRadius: '8px',
        padding: '2px 6px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay for contrast
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#fff',
        border: '2px solid #e80039',
        color: '#333',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '400px',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#e80039',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #e80039',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#e80039',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#333',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#e80039',
      },
      dateStyle: {
        color: '#e80039',
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      amongUsSwalContainer: {
        backgroundColor: '#fff',
      },
      amongUsSwalPopup: {
        backgroundColor: '#fff',
        border: '2px solid #e80039',
        borderRadius: '12px',
      },
      amongUsSwalTitle: {
        color: '#e80039',
        fontFamily: "'Arial', sans-serif",
        fontWeight: 'bold',
      },
      amongUsSwalContent: {
        color: '#333',
        fontFamily: "'Arial', sans-serif",
      },
      amongUsSwalConfirm: {
        backgroundColor: '#e80039',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalConfirmHover: {
        backgroundColor: '#c70039',
      },
      amongUsSwalCancel: {
        backgroundColor: '#f4c2c2',
        color: '#333',
        border: 'none',
        borderRadius: '8px',
      },
      amongUsSwalCancelHover: {
        backgroundColor: '#f2a5a5',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#e80039',
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#fff',
        border: '2px solid #e80039',
        color: '#e80039',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#e80039',
        color: '#e80039',
      },
      StylesEject: {
        borderColor: '#f4c2c2',
        color: '#f4c2c2',
      },
      hoverStylesShare: {
        backgroundColor: '#e80039',
        color: '#fff',
        borderColor: '#e80039',
      },
      hoverStylesEject: {
        backgroundColor: '#f4c2c2',
        color: '#333',
        borderColor: '#f4c2c2',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#e63946',
        textShadow: '0 0 5px rgba(230, 57, 70, 0.8), 0 0 10px rgba(230, 57, 70, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#d62839',
        textShadow: '0 0 5px rgba(214, 40, 40, 0.8), 0 0 10px rgba(214, 40, 40, 0.6)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '220px', // Adjusted width for better fit
        height: '35%', // Full height for the sidebar
        borderRadius: '10px 0 0 10px',
        background: '#e80039', // Sidebar background matches the theme
        boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
        transform: 'translateX(100%)', // Sidebar starts off-screen
        transition: 'transform 0.3s ease',
        zIndex: 1000,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: '#fff', // Text color inside the sidebar
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
        color: '#fff', // Color of the close button icon to stand out
      },
      content: {
        width: '100%',
      },
      menuItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.75rem 1rem', // Adjusted padding for better spacing
        width: '100%',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#fff', // Default text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#c70039', // Hover background color
        color: '#fff', // Hover text color
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    Bohemian: {
      container: {
        background: 'linear-gradient(to bottom, #f4e9d8, #e3d1ba)', // Soft beige to light brown gradient
        minHeight: '100vh',
        color: '#5b4636', // Warm brown text
        fontFamily: "'Cormorant Garamond', serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#7c5c40', // Rich brown
        textAlign: 'center',
        fontFamily: "'Great Vibes'",
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#fff7f0', // Very light cream
        border: '2px solid #c1a383', // Soft brown border
        borderRadius: '10px',
        color: '#5b4636', // Warm brown text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#a67b5b', // Earthy tan
        color: '#fff',
        borderRadius: '12px',
        padding: '5px 10px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(255, 243, 224, 0.9)', // Soft semi-transparent beige
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#f5ebe2', // Pale cream
        border: '2px solid #c1a383', // Soft brown border
        color: '#5b4636', // Warm brown text
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#c1a383',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #c1a383',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#7c5c40',
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#5b4636',
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#7c5c40',
      },
      dateStyle: {
        color: '#a67b5b', // Earthy tan
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#c1a383', // Soft brown
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#f5ebe2', // Pale cream
        border: '2px solid #c1a383',
        color: '#5b4636',
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#a67b5b',
        color: '#a67b5b',
      },
      StylesEject: {
        borderColor: '#c1a383',
        color: '#c1a383',
      },
      hoverStylesShare: {
        backgroundColor: '#a67b5b',
        color: '#ffffff',
        borderColor: '#f5ebe2',
      },
      hoverStylesEject: {
        backgroundColor: '#c1a383',
        color: '#ffffff',
        borderColor: '#f5ebe2',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#a67b5b',
        textShadow: '0 0 5px rgba(165, 123, 91, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#7c5c40',
        textShadow: '0 0 5px rgba(165, 123, 91, 0.8)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#f4e9d8', // Soft beige gradient
        boxShadow: '-2px 0 5px rgba(0,0,0,0.1)', // Soft shadow
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
        right: '1rem',
        fontSize: '1.5rem',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        color: '#c1a383', // Soft brown color for the close button
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
        color: '#5b4636', // Warm brown text
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#a67b5b', // Earthy tan for hover background
        color: '#ffffff', // White text for hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    ModernTeal: {
      container: {
        background: 'linear-gradient(to bottom, #B5F7E6, #53C0A2)', // Very Light Teal to Light Teal gradient
        minHeight: '100vh',
        color: '#266352', // Dark Teal text
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#128061', // Medium Teal
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        letterSpacing: '1.5px',
      },
      card: {
        backgroundColor: '#FFFFFF', // White card background
        border: '2px solid #53C0A2', // Light Teal border
        borderRadius: '8px',
        color: '#266352', // Dark Teal text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#128061', // Medium Teal
        color: '#FFFFFF',
        borderRadius: '10px',
        padding: '5px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(181, 247, 230, 0.8)', // Semi-transparent Very Light Teal
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #53C0A2', // Light Teal border
        color: '#266352', // Dark Teal text
        borderRadius: '10px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '12px',
        right: '12px',
        background: 'none',
        border: 'none',
        color: '#128061', // Medium Teal
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #53C0A2', // Light Teal border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#128061', // Medium Teal
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#266352', // Dark Teal
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#266352', // Dark Teal
      },
      dateStyle: {
        color: '#53C0A2', // Light Teal
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#128061', // Medium Teal
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #266352', // Dark Teal border
        color: '#266352', // Dark Teal text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '30px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#128061', // Medium Teal
        color: '#128061', // Medium Teal
      },
      StylesEject: {
        borderColor: '#53C0A2', // Light Teal
        color: '#53C0A2', // Light Teal
      },
      hoverStylesShare: {
        backgroundColor: '#128061', // Medium Teal
        color: '#FFFFFF',
        borderColor: '#FFFFFF', // White
      },
      hoverStylesEject: {
        backgroundColor: '#53C0A2', // Light Teal
        color: '#FFFFFF',
        borderColor: '#FFFFFF', // White
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#53C0A2', // Light Teal
        textShadow: '0 0 5px rgba(83, 192, 162, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#128061', // Medium Teal
        textShadow: '0 0 5px rgba(19, 128, 97, 0.7)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#B5F7E6', // Very Light Teal
        boxShadow: '-2px 0 5px rgba(0,0,0,0.2)', // Softer shadow
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
        color: '#128061', // Medium Teal color for the close button
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
        color: '#266352', // Dark Teal text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#53C0A2', // Light Teal for hover background
        color: '#FFFFFF', // White text color on hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    CoralTeal: {
      container: {
        background: 'linear-gradient(to bottom, #F3F7EC, #E88D67)', // Soft Cream to Warm Coral gradient
        minHeight: '100vh',
        color: '#005C78', // Dark Teal text
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#006989', // Deep Teal
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        letterSpacing: '1.5px',
      },
      card: {
        backgroundColor: '#FFFFFF', // White card background
        border: '2px solid #E88D67', // Warm Coral border
        borderRadius: '8px',
        color: '#005C78', // Dark Teal text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#006989', // Deep Teal
        color: '#F3F7EC', // Soft Cream
        borderRadius: '10px',
        padding: '5px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(243, 247, 236, 0.9)', // Semi-transparent Soft Cream
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #006989', // Deep Teal border
        color: '#005C78', // Dark Teal text
        borderRadius: '10px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '12px',
        right: '12px',
        background: 'none',
        border: 'none',
        color: '#E88D67', // Warm Coral
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #E88D67', // Warm Coral border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#006989', // Deep Teal
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#005C78', // Dark Teal
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#005C78', // Dark Teal
      },
      dateStyle: {
        color: '#006989', // Deep Teal
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#005C78', // Dark Teal
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #006989', // Deep Teal border
        color: '#005C78', // Dark Teal text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '30px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#006989', // Deep Teal
        color: '#006989', // Deep Teal
      },
      StylesEject: {
        borderColor: '#E88D67', // Warm Coral
        color: '#E88D67', // Warm Coral
      },
      hoverStylesShare: {
        backgroundColor: '#006989', // Deep Teal
        color: '#FFFFFF',
        borderColor: '#FFFFFF', // White
      },
      hoverStylesEject: {
        backgroundColor: '#E88D67', // Warm Coral
        color: '#FFFFFF',
        borderColor: '#FFFFFF', // White
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#006989', // Deep Teal
        textShadow: '0 0 5px rgba(0, 105, 137, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#005C78', // Dark Teal
        textShadow: '0 0 5px rgba(0, 105, 137, 0.7)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#F3F7EC', // Soft Cream background
        boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)',
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
        color: '#E88D67', // Warm Coral close button color
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
        color: '#005C78', // Dark Teal text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#006989', // Deep Teal hover background color
        color: '#FFFFFF', // White text color on hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    CharcoalCoral: {
      container: {
        background: 'linear-gradient(to bottom, #0C0C0C, #481E14)', // Deep Charcoal to Dark Brown gradient
        minHeight: '100vh',
        color: '#F2613F', // Vibrant Coral text
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#F2613F', // Vibrant Coral
        textAlign: 'center',
        fontFamily: "'Helvetica', sans-serif",
        letterSpacing: '2px',
      },
      card: {
        backgroundColor: '#481E14', // Dark Brown
        border: '2px solid #9B3922', // Burnt Red border
        borderRadius: '8px',
        color: '#F2613F', // Vibrant Coral text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#9B3922', // Burnt Red
        color: '#F3F3F3', // Light text
        borderRadius: '10px',
        padding: '5px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(12, 12, 12, 0.8)', // Semi-transparent Deep Charcoal
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#481E14', // Dark Brown
        border: '2px solid #F2613F', // Vibrant Coral border
        color: '#F2613F', // Vibrant Coral text
        borderRadius: '10px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.6)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#F2613F', // Vibrant Coral
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #F2613F', // Vibrant Coral border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#F2613F', // Vibrant Coral
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#F2613F', // Vibrant Coral
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#F2613F', // Vibrant Coral
      },
      dateStyle: {
        color: '#9B3922', // Burnt Red
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#0C0C0C', // Deep Charcoal
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#481E14', // Dark Brown
        border: '2px solid #F2613F', // Vibrant Coral border
        color: '#F2613F', // Vibrant Coral text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '30px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#9B3922', // Burnt Red
        color: '#9B3922', // Burnt Red
      },
      StylesEject: {
        borderColor: '#F2613F', // Vibrant Coral
        color: '#F2613F', // Vibrant Coral
      },
      hoverStylesShare: {
        backgroundColor: '#9B3922', // Burnt Red
        color: '#FFFFFF', // White
        borderColor: '#FFFFFF', // White
      },
      hoverStylesEject: {
        backgroundColor: '#F2613F', // Vibrant Coral
        color: '#FFFFFF', // White
        borderColor: '#FFFFFF', // White
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#F2613F', // Vibrant Coral
        textShadow: '0 0 5px rgba(242, 97, 63, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#9B3922', // Burnt Red
        textShadow: '0 0 5px rgba(242, 97, 63, 0.7)',
      }, 
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#0C0C0C', // Deep Charcoal background
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
        color: '#F2613F', // Vibrant Coral for close button
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
        color: '#F3F3F3', // Light text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#F2613F', // Vibrant Coral for hover
        color: '#000000', // Black text for hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    PeachyPinkDelight: {
      container: {
        background: 'linear-gradient(to bottom, #FFF3C7, #FEC7B4)', // Light Cream to Soft Peach gradient
        minHeight: '100vh',
        color: '#F7418F', // Deep Pink text
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#F7418F', // Deep Pink
        textAlign: 'center',
        fontFamily: "'Comic Sans MS'",
        letterSpacing: '2px',
      },
      card: {
        backgroundColor: '#FEC7B4', // Soft Peach
        border: '2px solid #FC819E', // Bright Pink border
        borderRadius: '10px',
        color: '#F7418F', // Deep Pink text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#FC819E', // Bright Pink
        color: '#FFF3C7', // Light Cream text
        borderRadius: '10px',
        padding: '5px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(255, 243, 199, 0.8)', // Semi-transparent Light Cream
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#FEC7B4', // Soft Peach
        border: '2px solid #FC819E', // Bright Pink border
        color: '#F7418F', // Deep Pink text
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#F7418F', // Deep Pink
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #FC819E', // Bright Pink border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#F7418F', // Deep Pink
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#F7418F', // Deep Pink
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#F7418F', // Deep Pink
      },
      dateStyle: {
        color: '#FC819E', // Bright Pink
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#FEC7B4', // Soft Peach
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FFF3C7', // Light Cream
        border: '2px solid #FC819E', // Bright Pink border
        color: '#F7418F', // Deep Pink text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#FC819E', // Bright Pink
        color: '#FC819E', // Bright Pink
      },
      StylesEject: {
        borderColor: '#F7418F', // Deep Pink
        color: '#F7418F', // Deep Pink
      },
      hoverStylesShare: {
        backgroundColor: '#FC819E', // Bright Pink
        color: '#FFF3C7', // Light Cream
        borderColor: '#FFF3C7', // Light Cream
      },
      hoverStylesEject: {
        backgroundColor: '#F7418F', // Deep Pink
        color: '#FFF3C7', // Light Cream
        borderColor: '#FFF3C7', // Light Cream
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#F7418F', // Deep Pink
        textShadow: '0 0 5px rgba(247, 65, 143, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#FC819E', // Bright Pink
        textShadow: '0 0 5px rgba(247, 65, 143, 0.7)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#FEC7B4', // Soft Peach background
        boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.2)', // Soft shadow
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
        color: '#F7418F', // Deep Pink for the close button icon
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
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#F7418F', // Deep Pink text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#FC819E', // Bright Pink background on hover
        color: '#FFF3C7', // Light Cream text color on hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    ClassicElegance: {
      container: {
        background: 'linear-gradient(to bottom, #F5F5F5, #F2EAD3)', // Light Gray to Light Beige gradient
        minHeight: '100vh',
        color: '#3F2305', // Deep Brown text
        fontFamily: "'Georgia', serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#3F2305', // Deep Brown
        textAlign: 'center',
        fontFamily: "'Times New Roman', serif",
        letterSpacing: '1px',
        textShadow: '2px 2px #DFD7BF', // Soft Taupe shadow
      },
      card: {
        backgroundColor: '#F2EAD3', // Light Beige
        border: '2px solid #DFD7BF', // Soft Taupe border
        borderRadius: '12px',
        color: '#3F2305', // Deep Brown text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#DFD7BF', // Soft Taupe
        color: '#3F2305', // Deep Brown
        borderRadius: '10px',
        padding: '6px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent dark overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#F5F5F5', // Light Gray
        border: '2px solid #DFD7BF', // Soft Taupe border
        color: '#3F2305', // Deep Brown text
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.2)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#3F2305', // Deep Brown
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #DFD7BF', // Soft Taupe border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#3F2305', // Deep Brown
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#3F2305', // Deep Brown
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#3F2305', // Deep Brown
      },
      dateStyle: {
        color: '#DFD7BF', // Soft Taupe
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#DFD7BF', // Soft Taupe
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#F2EAD3', // Light Beige
        border: '2px solid #DFD7BF', // Soft Taupe border
        color: '#3F2305', // Deep Brown text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#DFD7BF', // Soft Taupe
        color: '#DFD7BF', // Soft Taupe
      },
      StylesEject: {
        borderColor: '#3F2305', // Deep Brown
        color: '#3F2305', // Deep Brown
      },
      hoverStylesShare: {
        backgroundColor: '#DFD7BF', // Soft Taupe
        color: '#3F2305', // Deep Brown
        borderColor: '#F5F5F5', // Light Gray
      },
      hoverStylesEject: {
        backgroundColor: '#3F2305', // Deep Brown
        color: '#F5F5F5', // Light Gray
        borderColor: '#F5F5F5', // Light Gray
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#DFD7BF', // Soft Taupe
        textShadow: '0 0 5px rgba(223, 215, 191, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#3F2305', // Deep Brown
        textShadow: '0 0 5px rgba(223, 215, 191, 0.8)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#F2EAD3', // Light Beige background
        boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)',
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
        color: '#3F2305', // Deep Brown for the close button icon
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
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#3F2305', // Deep Brown text color
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#DFD7BF', // Soft Taupe for hover background
        color: '#3F2305', // Deep Brown text color on hover
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    UrbanSleek: {
      container: {
        background: '#0F0F0F', // Jet Black
        minHeight: '100vh',
        color: '#E0E0E0', // Light Gray text for contrast
        fontFamily: "'Helvetica Neue', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#008170', // Teal
        textAlign: 'center',
        fontFamily: "'Arial Black', sans-serif",
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#232D3F', // Dark Slate Blue
        border: '2px solid #005B41', // Deep Green border
        borderRadius: '8px',
        color: '#E0E0E0', // Light Gray text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#005B41', // Deep Green
        color: '#E0E0E0', // Light Gray
        borderRadius: '10px',
        padding: '6px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(15, 15, 15, 0.8)', // Semi-transparent Jet Black
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#232D3F', // Dark Slate Blue
        border: '2px solid #005B41', // Deep Green border
        color: '#E0E0E0', // Light Gray text
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#E0E0E0', // Light Gray
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #005B41', // Deep Green border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#008170', // Teal
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#E0E0E0', // Light Gray
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#E0E0E0', // Light Gray
      },
      dateStyle: {
        color: '#008170', // Teal
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#232D3F', // Dark Slate Blue
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#008170', // Teal
        border: '2px solid #005B41', // Deep Green border
        color: '#E0E0E0', // Light Gray text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#005B41', // Deep Green
        color: '#005B41', // Deep Green
      },
      StylesEject: {
        borderColor: '#008170', // Teal
        color: '#005B41', // Deep Green
      },
      hoverStylesShare: {
        backgroundColor: '#005B41', // Deep Green
        color: '#E0E0E0', // Light Gray
        borderColor: '#232D3F', // Dark Slate Blue
      },
      hoverStylesEject: {
        backgroundColor: '#008170', // Teal
        color: '#E0E0E0', // Light Gray
        borderColor: '#232D3F', // Dark Slate Blue
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#005B41', // Deep Green
        textShadow: '0 0 5px rgba(0, 91, 65, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#008170', // Teal
        textShadow: '0 0 5px rgba(0, 91, 65, 0.8)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#232D3F', // Dark Slate Blue (UrbanSleek theme)
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
        color: '#E0E0E0', // Light Gray (UrbanSleek theme)
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
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#E0E0E0', // Light Gray (UrbanSleek theme)
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#005B41', // Deep Green (UrbanSleek theme)
        color: '#E0E0E0', // Light Gray (UrbanSleek theme)
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
    EarthyElegance: {
      container: {
        background: '#FFF5E4', // Creamy Beige
        minHeight: '100vh',
        color: '#6A9C89', // Sage Green text
        fontFamily: "'Roboto', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#CD5C08', // Dark Orange
        textAlign: 'center',
        fontFamily: "'Merriweather', serif",
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#C1D8C3', // Light Sage Green
        border: '2px solid #6A9C89', // Sage Green border
        borderRadius: '10px',
        color: '#6A9C89', // Sage Green text
        transition: 'all 0.3s',
        margin: '0 auto',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#CD5C08', // Dark Orange
        color: '#FFF5E4', // Creamy Beige
        borderRadius: '12px',
        padding: '5px 10px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(255, 245, 228, 0.9)', // Soft semi-transparent Creamy Beige
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#FFF5E4', // Creamy Beige
        border: '2px solid #6A9C89', // Sage Green border
        color: '#6A9C89', // Sage Green text
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#CD5C08', // Dark Orange
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #6A9C89', // Sage Green border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#CD5C08', // Dark Orange
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#6A9C89', // Sage Green
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#6A9C89', // Sage Green
      },
      dateStyle: {
        color: '#CD5C08', // Dark Orange
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#C1D8C3', // Light Sage Green
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#6A9C89', // Sage Green
        border: '2px solid #CD5C08', // Dark Orange border
        color: '#FFF5E4', // Creamy Beige text
        fontWeight: 'bold',
        transition: 'all 0.3s',
        borderRadius: '50px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        outline: 'none',
        margin: '5px',
      },
      StylesShare: {
        borderColor: '#CD5C08', // Dark Orange
        color: '#CD5C08', // Dark Orange
      },
      StylesEject: {
        borderColor: '#6A9C89', // Sage Green
        color: '#FFF5E4', // Creamy Beige

      },
      hoverStylesShare: {
        backgroundColor: '#CD5C08', // Dark Orange
        color: '#FFF5E4', // Creamy Beige
        borderColor: '#FFF5E4', // Creamy Beige
      },
      hoverStylesEject: {
        backgroundColor: '#6A9C89', // Sage Green
        color: '#CD5C08', // Dark Orange
        borderColor: '#FFF5E4', // Creamy Beige
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#6A9C89', // Sage Green
        textShadow: '0 0 5px rgba(106, 156, 137, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#CD5C08', // Dark Orange
        textShadow: '0 0 5px rgba(106, 156, 137, 0.8)',
      },
      sidebar: {
        position: 'fixed',
        top: 0,
        right: 0,
        width: '180px',
        height: '35%',
        borderRadius: '10px 0 10px 10px',
        background: '#C1D8C3', // Light Sage Green
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
        transition: 'background 0.3s ease, color 0.3s ease',
        color: '#6A9C89', // Sage Green
      },
      menuItemIcon: {
        marginRight: '0.5rem',
      },
      menuItemText: {
        fontSize: '1rem',
      },
      menuItemHover: {
        background: '#CD5C08', // Dark Orange
        color: '#FFF5E4', // Creamy Beige
      },
      reverseSpinning: {
        transform: 'rotate(-360deg)',
      },
    },
  SerenityTheme:{
    container: {
      background: 'linear-gradient(to bottom, #EAE4DD, #E1D7C6)', // Light beige gradient
      minHeight: '100vh',
      color: '#295F98', // Dark blue for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#295F98', // Dark blue
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#CDC2A5', // Soft tan
      border: '2px solid #295F98', // Dark blue border
      borderRadius: '10px',
      color: '#295F98',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#295F98', // Dark blue
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#EAE4DD', // Light beige
      border: '2px solid #295F98', // Dark blue border
      color: '#295F98',
      boxShadow: '0 0 15px #295F98',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#295F98',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #295F98',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#295F98',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#295F98',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#295F98',
    },
    dateStyle: {
      color: '#CDC2A5', // Soft tan
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#295F98', // Dark blue
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#CDC2A5', // Soft tan
      border: '2px solid #295F98',
      color: '#295F98',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#295F98', // Dark blue on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#295F98', // Dark blue
      color: '#295F98',
    },
    StylesEject: {
      borderColor: '#CDC2A5', // Soft tan
      color: '#FFFFFF',
    },
    
    hoverStylesShare: {
      backgroundColor: '#295F98', // Dark blue on hover
      color: '#FFFFFF',
      borderColor: '#E1D7C6', // Light beige border
    },
    hoverStylesEject: {
      backgroundColor: '#CDC2A5', // Soft tan on hover
      color: '#295F98',
      borderColor: '#E1D7C6',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#295F98',
      textShadow: '0 0 5px rgba(41, 95, 152, 0.8), 0 0 10px rgba(41, 95, 152, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#E1D7C6', // Lighter beige on hover
      textShadow: '0 0 5px rgba(225, 215, 198, 0.8), 0 0 10px rgba(225, 215, 198, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#EAE4DD', // Light beige background
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
      color: '#295F98', // Dark blue
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#295F98', // Dark blue text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#295F98', // Dark blue background on hover
      color: '#FFFFFF', // White text on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Earthy:{
    container: {
      background: 'linear-gradient(to bottom, #FEFAE0, #A6B37D)', // Cream to muted green gradient
      minHeight: '100vh',
      color: '#B99470', // Earthy brown for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#B99470', // Earthy brown
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#A6B37D', // Muted green
      border: '2px solid #B99470', // Earthy brown border
      borderRadius: '10px',
      color: '#B99470',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#B99470', // Earthy brown
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#FEFAE0', // Cream
      border: '2px solid #B99470', // Earthy brown border
      color: '#B99470',
      boxShadow: '0 0 15px #B99470',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#B99470',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #B99470',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#B99470',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#B99470',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#B99470',
    },
    dateStyle: {
      color: '#A6B37D', // Muted green
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#B99470', // Earthy brown
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#A6B37D', // Muted green
      border: '2px solid #B99470',
      color: '#B99470',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#B99470', // Earthy brown on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#B99470', // Earthy brown
      color: '#B99470',
    },
    StylesEject: {
      borderColor: '#A6B37D', // Muted green
      color: '#FFFFFF',
    },
    
    hoverStylesShare: {
      backgroundColor: '#B99470', // Earthy brown on hover
      color: '#FFFFFF',
      borderColor: '#FEFAE0', // Cream border
    },
    hoverStylesEject: {
      backgroundColor: '#A6B37D', // Muted green on hover
      color: '#B99470',
      borderColor: '#FEFAE0',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#B99470',
      textShadow: '0 0 5px rgba(185, 148, 112, 0.8), 0 0 10px rgba(185, 148, 112, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#FEFAE0', // Cream on hover
      textShadow: '0 0 5px rgba(254, 250, 224, 0.8), 0 0 10px rgba(254, 250, 224, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#FEFAE0', // Cream background
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
      color: '#B99470', // Earthy brown
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#B99470', // Earthy brown text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#A6B37D', // Muted green background on hover
      color: '#FEFAE0', // Cream text color on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Verdant:{
    container: {
      background: 'linear-gradient(to bottom, #F5F7F8, #E8B86D)', // Light gray to soft orange gradient
      minHeight: '100vh',
      color: '#185519', // Deep green for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#185519', // Deep green
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#FCDE70', // Soft yellow
      border: '2px solid #185519', // Deep green border
      borderRadius: '10px',
      color: '#185519',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#185519', // Deep green
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#F5F7F8', // Light gray
      border: '2px solid #185519', // Deep green border
      color: '#185519',
      boxShadow: '0 0 15px #185519',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#185519',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #185519',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#185519',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#185519',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#185519',
    },
    dateStyle: {
      color: '#E8B86D', // Soft orange
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#185519', // Deep green
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#FCDE70', // Soft yellow
      border: '2px solid #185519',
      color: '#185519',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#185519', // Deep green on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#185519', // Deep green
      color: '#185519',
    },
    StylesEject: {
      borderColor: '#E8B86D', // Soft orange
      color: '#185519',
    },
    
    hoverStylesShare: {
      backgroundColor: '#185519', // Deep green on hover
      color: '#FFFFFF',
      borderColor: '#FCDE70', // Soft yellow border
    },
    hoverStylesEject: {
      backgroundColor: '#E8B86D', // Soft orange on hover
      color: '#185519',
      borderColor: '#FCDE70',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#E8B86D', // Soft orange
      textShadow: '0 0 5px rgba(232, 184, 109, 0.8), 0 0 10px rgba(232, 184, 109, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#FCDE70', // Soft yellow on hover
      textShadow: '0 0 5px rgba(252, 222, 112, 0.8), 0 0 10px rgba(252, 222, 112, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#F5F7F8', // Light gray background
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
      color: '#185519', // Deep green for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#185519', // Deep green text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#E8B86D', // Soft orange background on hover
      color: '#185519', // Deep green text color on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Rustic:{
    container: {
      background: 'linear-gradient(to bottom, #F2E8C6, #DAD4B5)', // Light beige to soft tan gradient
      minHeight: '100vh',
      color: '#800000', // Dark red for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#800000', // Dark red
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#DAD4B5', // Soft tan
      border: '2px solid #800000', // Dark red border
      borderRadius: '10px',
      color: '#800000',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#800000', // Dark red
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#F2E8C6', // Light beige
      border: '2px solid #800000', // Dark red border
      color: '#800000',
      boxShadow: '0 0 15px #800000',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#800000',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #800000',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#800000',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#800000',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#800000',
    },
    dateStyle: {
      color: '#DAD4B5', // Soft tan
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#800000', // Dark red
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#DAD4B5', // Soft tan
      border: '2px solid #800000',
      color: '#800000',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#800000', // Dark red on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#800000', // Dark red
      color: '#800000',
    },
    StylesEject: {
      borderColor: '#DAD4B5', // Soft tan
      color: '#800000',
    },
    
    hoverStylesShare: {
      backgroundColor: '#800000', // Dark red on hover
      color: '#FFFFFF',
      borderColor: '#F2E8C6', // Light beige border
    },
    hoverStylesEject: {
      backgroundColor: '#DAD4B5', // Soft tan on hover
      color: '#800000',
      borderColor: '#F2E8C6',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#E8B86D', // Soft orange
      textShadow: '0 0 5px rgba(232, 184, 109, 0.8), 0 0 10px rgba(232, 184, 109, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#FCDE70', // Soft yellow on hover
      textShadow: '0 0 5px rgba(252, 222, 112, 0.8), 0 0 10px rgba(252, 222, 112, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#F2E8C6', // Light beige background
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
      color: '#800000', // Dark red for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#800000', // Dark red text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#DAD4B5', // Soft tan background on hover
      color: '#800000', // Dark red text color on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Warm:{
    container: {
      background: 'linear-gradient(to bottom, #F6FDC3, #CDFADB)', // Soft gradient from light yellow to light teal
      minHeight: '100vh',
      color: '#FF8080', // Warm blush for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#FF8080', // Warm blush
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#FFCF96', // Soft peach
      border: '2px solid #FF8080', // Warm blush border
      borderRadius: '10px',
      color: '#FF8080',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#FF8080', // Warm blush
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#F6FDC3', // Light yellow
      border: '2px solid #FF8080', // Warm blush border
      color: '#FF8080',
      boxShadow: '0 0 15px #FF8080',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#FF8080',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #FF8080',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#FF8080',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#FF8080',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#FF8080',
    },
    dateStyle: {
      color: '#FFCF96', // Soft peach
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#FF8080', // Warm blush
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#FFCF96', // Soft peach
      border: '2px solid #FF8080',
      color: '#FF8080',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#FF8080', // Warm blush on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#FF8080', // Warm blush
      color: '#FF8080',
    },
    StylesEject: {
      borderColor: '#FFCF96', // Soft peach
      color: '#FF8080',
    },
    
    hoverStylesShare: {
      backgroundColor: '#FF8080', // Warm blush on hover
      color: '#FFFFFF',
      borderColor: '#F6FDC3', // Light yellow border
    },
    hoverStylesEject: {
      backgroundColor: '#FFCF96', // Soft peach on hover
      color: '#FF8080',
      borderColor: '#F6FDC3',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#FFCF96', // Soft peach
      textShadow: '0 0 5px rgba(255, 207, 150, 0.8), 0 0 10px rgba(255, 207, 150, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#F6FDC3', // Light yellow on hover
      textShadow: '0 0 5px rgba(246, 253, 195, 0.8), 0 0 10px rgba(246, 253, 195, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#F6FDC3', // Light yellow background to match the Warm theme
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
      color: '#FF8080', // Warm blush for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#FF8080', // Warm blush text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#FFCF96', // Soft peach background on hover
      color: '#FF8080', // Warm blush text color on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Autumn:{
    container: {
      background: 'linear-gradient(to bottom, #E2DFD0, #524C42)', // Soft gradient from light beige to dark brown
      minHeight: '100vh',
      color: '#F97300', // Warm orange for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#F97300', // Warm orange
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#E2DFD0', // Light beige
      border: '2px solid #F97300', // Warm orange border
      borderRadius: '10px',
      color: '#524C42', // Dark brown
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#F97300', // Warm orange
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#E2DFD0', // Light beige
      border: '2px solid #F97300', // Warm orange border
      color: '#524C42', // Dark brown
      boxShadow: '0 0 15px #F97300',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#F97300',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #F97300',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#F97300',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#524C42', // Dark brown
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#524C42', // Dark brown
    },
    dateStyle: {
      color: '#E2DFD0', // Light beige
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#F97300', // Warm orange
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#E2DFD0', // Light beige
      border: '2px solid #F97300', // Warm orange
      color: '#524C42', // Dark brown
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#F97300', // Warm orange on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#F97300', // Warm orange
      color: '#F97300',
    },
    StylesEject: {
      borderColor: '#E2DFD0', // Light beige
      color: '#524C42', // Dark brown
    },
    
    hoverStylesShare: {
      backgroundColor: '#F97300', // Warm orange on hover
      color: '#FFFFFF',
      borderColor: '#F97300',
    },
    hoverStylesEject: {
      backgroundColor: '#E2DFD0', // Light beige on hover
      color: '#524C42',
      borderColor: '#F97300',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#F97300', // Warm orange
      textShadow: '0 0 5px rgba(249, 115, 0, 0.8), 0 0 10px rgba(249, 115, 0, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#E2DFD0', // Light beige on hover
      textShadow: '0 0 5px rgba(226, 223, 208, 0.8), 0 0 10px rgba(226, 223, 208, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#E2DFD0', // Light beige to match the Autumn theme
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
      color: '#F97300', // Warm orange for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#524C42', // Dark brown for default text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#F97300', // Warm orange for hover background
      color: '#FFFFFF', // White text color on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  FreshGreen:{
    container: {
      background: 'linear-gradient(to bottom, #F3FF90, #9BEC00)', // Soft gradient from light yellow-green to bright green
      minHeight: '100vh',
      color: '#059212', // Deep green for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#059212', // Deep green
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#9BEC00', // Bright green
      border: '2px solid #059212', // Deep green border
      borderRadius: '10px',
      color: '#F3FF90', // Light yellow-green
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#059212', // Deep green
      color: '#FFFFFF',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#F3FF90', // Light yellow-green
      border: '2px solid #059212', // Deep green border
      color: '#059212', // Deep green
      boxShadow: '0 0 15px #059212',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#059212',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #059212',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#059212',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#059212', // Deep green
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#059212', // Deep green
    },
    dateStyle: {
      color: '#9BEC00', // Bright green
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#059212', // Deep green
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#9BEC00', // Bright green
      border: '2px solid #059212', // Deep green
      color: '#F3FF90', // Light yellow-green
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#059212', // Deep green on hover
      color: '#FFFFFF',
    },
    StylesShare: {
      borderColor: '#059212', // Deep green
      color: '#059212',
    },
    StylesEject: {
      borderColor: '#9BEC00', // Bright green
      color: '#F3FF90', // Light yellow-green
    },
    
    hoverStylesShare: {
      backgroundColor: '#059212', // Deep green on hover
      color: '#FFFFFF',
      borderColor: '#F3FF90', // Light yellow-green border
    },
    hoverStylesEject: {
      backgroundColor: '#9BEC00', // Bright green on hover
      color: '#059212',
      borderColor: '#F3FF90',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#059212', // Deep green
      textShadow: '0 0 5px rgba(5, 146, 18, 0.8), 0 0 10px rgba(5, 146, 18, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#F3FF90', // Light yellow-green on hover
      textShadow: '0 0 5px rgba(243, 255, 144, 0.8), 0 0 10px rgba(243, 255, 144, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#F3FF90', // Light yellow-green to match the FreshGreen theme
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
      color: '#059212', // Deep green for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#059212', // Deep green for default text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#9BEC00', // Bright green for hover background
      color: '#F3FF90', // Light yellow-green text color on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  RetroAutumn:{
    container: {
      background: 'linear-gradient(to bottom, #C5FF95, #5DEBD7)', // Gradient from light green to aqua blue
      minHeight: '100vh',
      color: '#074173', // Dark blue for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#074173', // Dark blue
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#1679AB', // Medium blue
      border: '2px solid #074173', // Dark blue border
      borderRadius: '10px',
      color: '#FFFFFF', // White text
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#074173', // Dark blue
      color: '#FFFFFF', // White text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#5DEBD7', // Aqua blue
      border: '2px solid #074173', // Dark blue border
      color: '#074173', // Dark blue text
      boxShadow: '0 0 15px #074173',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#074173', // Dark blue
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #074173',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#074173', // Dark blue
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#074173', // Dark blue text
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#074173', // Dark blue
    },
    dateStyle: {
      color: '#C5FF95', // Light green
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#1679AB', // Medium blue
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#1679AB', // Medium blue
      border: '2px solid #074173', // Dark blue border
      color: '#FFFFFF', // White text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#074173', // Dark blue on hover
      color: '#C5FF95', // Light green text
    },
    StylesShare: {
      borderColor: '#074173', // Dark blue
      color: '#074173',
    },
    StylesEject: {
      borderColor: '#1679AB', // Medium blue
      color: '#FFFFFF', // White text
    },
    
    hoverStylesShare: {
      backgroundColor: '#074173', // Dark blue on hover
      color: '#C5FF95', // Light green text
      borderColor: '#5DEBD7', // Aqua blue border
    },
    hoverStylesEject: {
      backgroundColor: '#1679AB', // Medium blue on hover
      color: '#074173', // Dark blue text
      borderColor: '#5DEBD7', // Aqua blue border
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#074173', // Dark blue
      textShadow: '0 0 5px rgba(7, 65, 115, 0.8), 0 0 10px rgba(7, 65, 115, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#C5FF95', // Light green on hover
      textShadow: '0 0 5px rgba(197, 255, 149, 0.8), 0 0 10px rgba(197, 255, 149, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#5DEBD7', // Aqua blue from RetroAutumn theme
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
      color: '#074173', // Dark blue from RetroAutumn theme
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#074173', // Dark blue from RetroAutumn theme
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#1679AB', // Medium blue from RetroAutumn theme
      color: '#C5FF95', // Light green from RetroAutumn theme
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Greeny:{
    container: {
      background: 'linear-gradient(to bottom, #FFFFDD, #A2C579)', // Gradient from light cream to soft green
      minHeight: '100vh',
      color: '#61A3BA', // Soft blue for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#61A3BA', // Soft blue
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#D2DE32', // Bright green
      border: '2px solid #61A3BA', // Soft blue border
      borderRadius: '10px',
      color: '#FFFFFF', // White text
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#61A3BA', // Soft blue
      color: '#FFFFFF', // White text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#FFFFDD', // Light cream
      border: '2px solid #61A3BA', // Soft blue border
      color: '#61A3BA', // Soft blue text
      boxShadow: '0 0 15px #61A3BA',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#61A3BA', // Soft blue
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #61A3BA',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#61A3BA', // Soft blue
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#61A3BA', // Soft blue text
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#61A3BA', // Soft blue
    },
    dateStyle: {
      color: '#A2C579', // Soft green
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#D2DE32', // Bright green
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#A2C579', // Soft green
      border: '2px solid #61A3BA', // Soft blue border
      color: '#FFFFFF', // White text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#61A3BA', // Soft blue on hover
      color: '#FFFFDD', // Light cream text
    },
    StylesShare: {
      borderColor: '#61A3BA', // Soft blue
      color: '#61A3BA',
    },
    StylesEject: {
      borderColor: '#A2C579', // Soft green
      color: '#FFFFFF', // White text
    },
    
    hoverStylesShare: {
      backgroundColor: '#61A3BA', // Soft blue on hover
      color: '#FFFFDD', // Light cream text
      borderColor: '#A2C579', // Soft green border
    },
    hoverStylesEject: {
      backgroundColor: '#A2C579', // Soft green on hover
      color: '#61A3BA', // Soft blue text
      borderColor: '#FFFFDD', // Light cream border
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#61A3BA', // Soft blue
      textShadow: '0 0 5px rgba(97, 163, 186, 0.8), 0 0 10px rgba(97, 163, 186, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#A2C579', // Soft green on hover
      textShadow: '0 0 5px rgba(162, 197, 139, 0.8), 0 0 10px rgba(162, 197, 139, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#A2C579', // Soft green to match the Greeny theme
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
      color: '#61A3BA', // Soft blue to match the Greeny theme
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
      color: '#61A3BA', // Soft blue to match the Greeny theme
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#61A3BA', // Soft blue hover background
      color: '#FFFFDD', // Light cream text on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  }, 
  Noir:{
    container: {
      background: 'linear-gradient(to bottom, #282A3A, #000000)', // Gradient from dark gray to black
      minHeight: '100vh',
      color: '#C69749', // Gold for text
      fontFamily: "'Arial', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#C69749', // Gold
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
    },
    card: {
      backgroundColor: '#735F32', // Warm brown
      border: '2px solid #C69749', // Gold border
      borderRadius: '10px',
      color: '#C69749', // Gold text
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#C69749', // Gold
      color: '#000000', // Black text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#282A3A', // Dark gray
      border: '2px solid #C69749', // Gold border
      color: '#C69749', // Gold text
      boxShadow: '0 0 15px #C69749',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#C69749', // Gold
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #C69749', // Gold
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#C69749', // Gold
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#C69749', // Gold
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#C69749', // Gold
    },
    dateStyle: {
      color: '#735F32', // Warm brown
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#C69749', // Gold
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#735F32', // Warm brown
      border: '2px solid #C69749', // Gold border
      color: '#C69749', // Gold text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#C69749', // Gold on hover
      color: '#000000', // Black text
    },
    StylesShare: {
      borderColor: '#C69749', // Gold
      color: '#C69749',
    },
    StylesEject: {
      borderColor: '#735F32', // Warm brown
      color: '#C69749', // Gold text
    },
    
    hoverStylesShare: {
      backgroundColor: '#C69749', // Gold on hover
      color: '#000000', // Black text
      borderColor: '#282A3A', // Dark gray border
    },
    hoverStylesEject: {
      backgroundColor: '#735F32', // Warm brown on hover
      color: '#C69749', // Gold text
      borderColor: '#282A3A', // Dark gray border
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#C69749', // Gold
      textShadow: '0 0 5px rgba(199, 151, 73, 0.8), 0 0 10px rgba(199, 151, 73, 0.6)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#735F32', // Warm brown on hover
      textShadow: '0 0 5px rgba(115, 95, 50, 0.8), 0 0 10px rgba(115, 95, 50, 0.6)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#282A3A', // Dark gray to match the theme
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
      color: '#C69749', // Gold close button icon
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
      background: '#C69749', // Gold on hover
      color: '#000000', // Black text
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  }, 
  OceanPurple:{
    container: {
      background: 'linear-gradient(to bottom, #A5F2E7, #FFFCEA)', // Gradient from aqua to light cream
      minHeight: '100vh',
      color: '#3A0077', // Deep purple for text
      fontFamily: "'Roboto', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    header: {
      color: '#3A0077', // Deep purple for the header
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '2rem',
    },
    card: {
      backgroundColor: '#A5F2E7', // Aqua for the card background
      border: '2px solid #8983F3', // Soft purple border
      borderRadius: '10px',
      color: '#3A0077', // Deep purple text
      transition: 'all 0.3s ease-in-out',
      margin: '0 auto',
      cursor: 'pointer',
      boxShadow: '0 0 10px rgba(58, 0, 119, 0.2)',
    },
    badge: {
      backgroundColor: '#8983F3', // Soft purple
      color: '#FFFCEA', // Cream text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#FFFCEA', // Light cream background
      border: '2px solid #3A0077', // Deep purple border
      color: '#3A0077', // Deep purple text
      boxShadow: '0 0 15px #8983F3',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#3A0077', // Deep purple
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #8983F3', // Soft purple border
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#3A0077', // Deep purple
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#3A0077', // Deep purple
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#3A0077', // Deep purple
    },
    dateStyle: {
      color: '#8983F3', // Soft purple
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#8983F3', // Soft purple
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#8983F3', // Soft purple
      border: '2px solid #3A0077', // Deep purple border
      color: '#FFFCEA', // Cream text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#3A0077', // Deep purple on hover
      color: '#FFFCEA', // Cream text
    },
    StylesShare: {
      borderColor: '#8983F3', // Soft purple
      color: '#3A0077', // Deep purple text
    },
    StylesEject: {
      borderColor: '#3A0077', // Deep purple
      color: '#FFFCEA', // Cream text
    },
    hoverStylesShare: {
      backgroundColor: '#3A0077', // Deep purple on hover
      color: '#FFFCEA', // Cream text
    },
    hoverStylesEject: {
      backgroundColor: '#8983F3', // Soft purple on hover
      color: '#3A0077', // Deep purple text
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#8983F3', // Soft purple
      textShadow: '0 0 5px rgba(137, 131, 243, 0.8)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#3A0077', // Deep purple on hover
      textShadow: '0 0 5px rgba(58, 0, 119, 0.8)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#A5F2E7', // Aqua to match the theme
      boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)',
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
      color: '#3A0077', // Deep purple for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#3A0077', // Deep purple for menu item text
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#8983F3', // Soft purple for hover background
      color: '#FFFCEA', // Cream for hover text color
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  }, 
  DeepBlack:{
    container: {
      backgroundColor: '#000000', // Deep black background
      minHeight: '100vh',
      color: '#FFFFFF', // White text
      fontFamily: "'Roboto', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    header: {
      color: '#FFFFFF', // White text for the header
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '2rem',
    },
    card: {
      backgroundColor: '#000000', // Deep black background for the card
      border: '2px solid #FFFFFF', // White border
      borderRadius: '10px',
      color: '#FFFFFF', // White text
      transition: 'all 0.3s ease-in-out',
      margin: '0 auto',
      cursor: 'pointer',
      boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
    },
    badge: {
      backgroundColor: '#FFFFFF', // White badge
      color: '#000000', // Deep black text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Slightly transparent black
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#000000', // Deep black background for modal
      border: '2px solid #FFFFFF', // White border
      color: '#FFFFFF', // White text
      boxShadow: '0 0 15px #FFFFFF',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#FFFFFF', // White close button
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #FFFFFF', // White border
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#FFFFFF', // White header text
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#FFFFFF', // White text
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#FFFFFF', // White text
    },
    dateStyle: {
      color: '#FFFFFF', // White text
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#FFFFFF', // White background for profile picture
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#000000', // Deep black background for button
      border: '2px solid #FFFFFF', // White border
      color: '#FFFFFF', // White text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    hoverButtonStyle: {
      backgroundColor: '#FFFFFF', // White background on hover
      color: '#000000', // Deep black text on hover
    },
    StylesShare: {
      borderColor: '#FFFFFF', // White border
      color: '#FFFFFF', // White text
    },
    StylesEject: {
      borderColor: '#FFFFFF', // White border
      color: '#FFFFFF', // White text
    },
    hoverStylesShare: {
      backgroundColor: '#FFFFFF', // White background on hover
      color: '#000000', // Deep black text on hover
    },
    hoverStylesEject: {
      backgroundColor: '#FFFFFF', // White background on hover
      color: '#000000', // Deep black text on hover
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#FFFFFF', // White icon
      textShadow: '0 0 5px rgba(255, 255, 255, 0.8)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#000000', // Deep black on hover
      textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#000000', // Deep black background for sidebar
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
      color: '#FFFFFF', // White close button icon
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
      background: '#FFFFFF', // White background on hover
      color: '#000000', // Deep black text on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  }, 
  SoftBold:{
    container: {
      backgroundColor: '#FFF5E1', // Soft warm background
      minHeight: '100vh',
      color: '#0C1844', // Dark blue for text
      fontFamily: "'Roboto', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    header: {
      color: '#C80036', // Bold red for the header
      textAlign: 'center',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '2rem',
    },
    card: {
      backgroundColor: '#FFF5E1', // Soft warm background for the card
      border: '2px solid #FF6969', // Soft red border
      borderRadius: '10px',
      color: '#0C1844', // Dark blue text
      transition: 'all 0.3s ease-in-out',
      margin: '0 auto',
      cursor: 'pointer',
      boxShadow: '0 0 10px rgba(0, 24, 68, 0.2)', // Light shadow with dark blue tint
    },
    badge: {
      backgroundColor: '#FF6969', // Soft red badge
      color: '#FFF5E1', // Light warm text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 24, 68, 0.8)', // Slightly transparent dark blue overlay
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#FFF5E1', // Soft warm background for modal
      border: '2px solid #C80036', // Bold red border
      color: '#0C1844', // Dark blue text
      boxShadow: '0 0 15px #FF6969', // Soft red shadow
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#C80036', // Bold red close button
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #FF6969', // Soft red border
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#C80036', // Bold red header text
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#0C1844', // Dark blue text
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#0C1844', // Dark blue text
    },
    dateStyle: {
      color: '#C80036', // Bold red text for dates
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#FF6969', // Soft red background for profile picture
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#C80036', // Bold red background for button
      border: '2px solid #FF6969', // Soft red border
      color: '#FFF5E1', // Soft warm text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
    },
    hoverButtonStyle: {
      backgroundColor: '#FF6969', // Soft red background on hover
      color: '#C80036', // Bold red text on hover
    },
    StylesShare: {
      borderColor: '#FF6969', // Soft red border
      color: '#FFF5E1', // Soft warm text on hover
    },
    StylesEject: {
      borderColor: '#FF6969', // Soft red border
      color: '#FFF5E1', // Soft warm text on hover
    },
    hoverStylesShare: {
      backgroundColor: '#0C1844', // Soft red background on hover
      color: '#FFF5E1', // Soft warm text on hover
    },
    hoverStylesEject: {
      backgroundColor: '#FF6969', // Soft red background on hover
      color: '#0C1844', // Soft warm text on hover
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#C80036', // Bold red icon
      textShadow: '0 0 5px rgba(200, 0, 54, 0.8)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#0C1844', // Dark blue on hover
      textShadow: '0 0 5px rgba(12, 24, 68, 0.8)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#FFF5E1', // Soft warm background for the sidebar
      boxShadow: '-2px 0 5px rgba(0, 24, 68, 0.3)', // Light shadow with dark blue tint
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
      color: '#C80036', // Bold red for the close button icon
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
      transition: 'background 0.3s ease, color 0.3s ease', // Transition for hover effects
      color: '#0C1844', // Dark blue text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#FF6969', // Soft red background on hover
      color: '#C80036', // Bold red text on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Regae:{
    container: {
      backgroundColor: '#E0F7FA', // Light cyan background
      minHeight: '100vh',
      color: '#004D40', // Deep teal for text
      fontFamily: "'Montserrat', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    header: {
      color: '#00796B', // Teal green for the header
      textAlign: 'center',
      fontFamily: "'Lobster', cursive",
      fontSize: '2.5rem',
    },
    card: {
      backgroundColor: '#E0F7FA', // Light cyan background for the card
      border: '2px solid #00796B', // Teal green border
      borderRadius: '10px',
      color: '#004D40', // Deep teal text
      transition: 'all 0.3s ease-in-out',
      margin: '0 auto',
      cursor: 'pointer',
      boxShadow: '0 0 10px rgba(0, 77, 64, 0.2)', // Light shadow with teal tint
    },
    badge: {
      backgroundColor: '#00796B', // Teal green badge
      color: '#E0F7FA', // Light cyan text
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 77, 64, 0.8)', // Slightly transparent deep teal overlay
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#E0F7FA', // Light cyan background for modal
      border: '2px solid #00796B', // Teal green border
      color: '#004D40', // Deep teal text
      boxShadow: '0 0 15px #00796B', // Teal green shadow
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#00796B', // Teal green close button
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #00796B', // Teal green border
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#00796B', // Teal green header text
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#004D40', // Deep teal text
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#004D40', // Deep teal text
    },
    dateStyle: {
      color: '#004D40', // Deep teal text for dates
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#00796B', // Teal green background for profile picture
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#00796B', // Teal green background for button
      border: '2px solid #004D40', // Deep teal border
      color: '#E0F7FA', // Light cyan text
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
    },
    hoverButtonStyle: {
      backgroundColor: '#004D40', // Deep teal background on hover
      color: '#E0F7FA', // Light cyan text on hover
    },
    StylesShare: {
      borderColor: '#00796B', // Teal green border
      color: '#E0F7FA', // Light cyan text on hover
    },
    StylesEject: {
      borderColor: '#00796B', // Teal green border
      color: '#E0F7FA', // Light cyan text on hover
    },
    hoverStylesShare: {
      backgroundColor: '#004D40', // Deep teal background on hover
      color: '#E0F7FA', // Light cyan text on hover
    },
    hoverStylesEject: {
      backgroundColor: '#00796B', // Teal green background on hover
      color: '#004D40', // Deep teal text on hover
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#00796B', // Teal green icon
      textShadow: '0 0 5px rgba(0, 121, 107, 0.8)',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    MagicIconHover: {
      color: '#004D40', // Deep teal on hover
      textShadow: '0 0 5px rgba(0, 77, 64, 0.8)',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#E0F7FA', // Light cyan background to match the theme
      boxShadow: '-2px 0 5px rgba(0, 77, 64, 0.3)', // Light shadow with teal tint
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
      color: '#00796B', // Teal green color for close button
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
      color: '#004D40', // Deep teal for menu item text
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#004D40', // Deep teal background on hover
      color: '#E0F7FA', // Light cyan text on hover
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  Regao:{
    container: {
      background: 'linear-gradient(to bottom, #FFDE95, #ADD899)',
      minHeight: '100vh',
      color: '#BC5A94',
      fontFamily: "'VT323', monospace",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#F075AA',
      textAlign: 'center', // Center text horizontally
    },
    card: {
      backgroundColor: '#FFDE95',
      border: '2px solid #F075AA',
      borderRadius: '10px',
      color: '#BC5A94',
      transition: 'all 0.3s',
      margin: '0 auto', // Center the card horizontally
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#BC5A94',
      color: '#FFDE95',
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
      backgroundColor: '#ADD899',
      border: '2px solid #F075AA',
      color: '#BC5A94',
      boxShadow: '0 0 15px #ADD899',
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
      color: '#F075AA',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #F075AA',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#F075AA',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#BC5A94',
      wordBreak: 'break-word', // Ensures long words or URLs break properly
    },
    modalFont: {
      color: '#F075AA',
    },
    dateStyle: {
      color: '#F075AA',
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    amongUsSwalContainer: {
      backgroundColor: '#FFDE95', // Fallback color if gradient doesn't apply
    },
    amongUsSwalPopup: {
      backgroundColor: '#ADD899',
      border: '2px solid #F075AA',
      borderRadius: '12px',
    },
    amongUsSwalTitle: {
      color: '#F075AA',
      fontFamily: "'Press Start 2P'",
    },
    amongUsSwalContent: {
      color: '#BC5A94',
      fontFamily: "'Press Start 2P'",
    },
    amongUsSwalConfirm: {
      backgroundColor: '#F075AA',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '8px',
    },
    amongUsSwalConfirmHover: {
      backgroundColor: '#F05B9D',
    },
    amongUsSwalCancel: {
      backgroundColor: '#BC5A94',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '8px',
    },
    amongUsSwalCancelHover: {
      backgroundColor: '#A53D72',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#F075AA', // Placeholder color
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#ADD899',
      border: '2px solid #F075AA',
      color: '#F075AA',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    StylesShare: {
      borderColor: '#F075AA',
      color: '#F075AA',
    },
    StylesEject: {
      borderColor: '#BC5A94',
      color: '#BC5A94',
    },
    hoverStylesShare: {
      backgroundColor: '#F075AA',
      color: '#FFFFFF',
      borderColor: '#ADD899',
    },
    hoverStylesEject: {
      backgroundColor: '#BC5A94',
      color: '#FFFFFF',
      borderColor: '#BC5A94',
    },
    MagicIcon: {
      fontSize: '1rem', // Adjust size as needed
      color: '#BC5A94', // Color for a magical look
      textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
      cursor: 'pointer',
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#FFDE95', // Updated to match the theme
      boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.3)',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      zIndex: 1000,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    sidebarVisible: {
      transform: 'translateX(0)',
    },
    closeButton: {
      position: 'absolute',
      top: '0.6rem',
      right: '1rem',
      fontSize: '1.5rem',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#F075AA', // Updated to match the theme
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#BC5A94', // Updated to match the theme
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#F075AA', // Updated hover background color
      color: '#FFFFFF', // Updated hover text color
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  }, 
  monochrome: {
    container: {
      background: 'linear-gradient(to bottom, #2d2d2d, #1b1b1b)',
      minHeight: '100vh',
      color: '#e0e0e0',
      fontFamily: "'Courier New', monospace",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#f0f0f0',
      textAlign: 'center',
    },
    card: {
      backgroundColor: '#3a3a3a',
      border: '2px solid #5e5e5e',
      borderRadius: '10px',
      color: '#e0e0e0',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#5e5e5e',
      color: '#f0f0f0',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#2c2c2c',
      border: '2px solid #5e5e5e',
      color: '#e0e0e0',
      boxShadow: '0 0 15px #1b1b1b',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '400px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#5e5e5e',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '2px solid #5e5e5e',
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#f0f0f0',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#e0e0e0',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#5e5e5e',
    },
    dateStyle: {
      color: '#c0c0c0',
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    amongUsSwalContainer: {
      backgroundColor: '#202020',
    },
    amongUsSwalPopup: {
      backgroundColor: '#2a2a2a',
      border: '2px solid #5e5e5e',
      borderRadius: '12px',
    },
    amongUsSwalTitle: {
      color: '#f0f0f0',
      fontFamily: "'Courier New', monospace",
    },
    amongUsSwalContent: {
      color: '#c0c0c0',
      fontFamily: "'Courier New', monospace",
    },
    amongUsSwalConfirm: {
      backgroundColor: '#5e5e5e',
      color: '#000000',
      border: 'none',
      borderRadius: '8px',
    },
    amongUsSwalConfirmHover: {
      backgroundColor: '#707070',
    },
    amongUsSwalCancel: {
      backgroundColor: '#3a3a3a',
      color: '#e0e0e0',
      border: 'none',
      borderRadius: '8px',
    },
    amongUsSwalCancelHover: {
      backgroundColor: '#2c2c2c',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#3a3a3a',
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#3a3a3a',
      border: '2px solid #5e5e5e',
      color: '#5e5e5e',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '50px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    StylesShare: {
      borderColor: '#5e5e5e',
      color: '#5e5e5e',
    },
    StylesEject: {
      borderColor: '#3a3a3a',
      color: '#5e5e5e',
    },
    hoverStylesShare: {
      backgroundColor: '#5e5e5e',
      color: '#fff',
      borderColor: '#3a3a3a',
    },
    hoverStylesEject: {
      backgroundColor: '#3a3a3a',
      color: '#fff',
      borderColor: '#3a3a3a',
    },
    MagicIcon: {
      fontSize: '1rem', // Adjust size as needed
      color: '#c0c0c0',
      textShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6)',
      cursor: 'pointer',
    },
    MagicIconHover: {
      // Add hover styles if needed
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#1b1b1b', // Updated to match the theme
      boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease',
      zIndex: 1000,
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    sidebarVisible: {
      transform: 'translateX(0)',
    },
    closeButton: {
      position: 'absolute',
      top: '0.6rem',
      right: '1rem',
      fontSize: '1.5rem',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#e0e0e0', // Color updated to match theme
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
      transition: 'background 0.3s ease, color 0.3s ease',
      color: '#e0e0e0',
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#333333', // Hover background color updated
      color: '#ffffff', // Hover text color updated
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },
  youtube: {
    container: {
      background: '#181818',
      minHeight: '100vh',
      color: '#fff',
      fontFamily: "'Roboto', sans-serif",
      padding: '20px',
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '10px',
    },
    header: {
      color: '#FF0000', // YouTube Red
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '2rem',
    },
    card: {
      backgroundColor: '#282828',
      border: '1px solid #383838',
      borderRadius: '10px', 
      color: '#fff',
      transition: 'all 0.3s',
      margin: '0 auto',
      cursor: 'pointer',
    },
    badge: {
      backgroundColor: '#FF0000', // YouTube Red
      color: '#fff',
      fontWeight: 'bold',
    },
    modalOverlay: {
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    },
    modalContent: {
      backgroundColor: '#202020',
      border: '1px solid #383838',
      color: '#fff',
      boxShadow: '0 0 15px rgba(0, 0, 0, 0.7)',
      borderRadius: '8px',
      padding: '20px',
      maxHeight: '80vh',
      overflowY: 'auto',
      width: '80%',
      maxWidth: '500px',
    },
    modalCloseButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      color: '#fff',
      fontSize: '1.5rem',
      cursor: 'pointer',
    },
    modalHeader: {
      borderBottom: '1px solid #FF0000', // YouTube Red
      paddingBottom: '10px',
      marginBottom: '10px',
      color: '#fff',
      fontSize: '1.5rem',
    },
    modalTextStyle: {
      marginBottom: '1rem',
      color: '#ccc',
      wordBreak: 'break-word',
    },
    modalFont: {
      color: '#FF0000', // YouTube Red
    },
    dateStyle: {
      color: '#aaa',
      fontSize: '0.9rem',
      fontStyle: 'italic',
    },
    youtubeSwalContainer: {
      backgroundColor: '#202020',
    },
    youtubeSwalPopup: {
      backgroundColor: '#282828',
      border: '2px solid #FF0000', // YouTube Red
      borderRadius: '12px',
    },
    youtubeSwalTitle: {
      color: '#FF0000',
      fontFamily: "'Roboto', sans-serif",
    },
    youtubeSwalContent: {
      color: '#fff',
      fontFamily: "'Roboto', sans-serif",
    },
    youtubeSwalConfirm: {
      backgroundColor: '#FF0000',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
    },
    youtubeSwalConfirmHover: {
      backgroundColor: '#CC0000',
    },
    youtubeSwalCancel: {
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
    },
    youtubeSwalCancelHover: {
      backgroundColor: '#444',
    },
    profilePicture: {
      width: '50px',
      height: '50px',
      backgroundColor: '#555',
      borderRadius: '50%',
      marginRight: '10px',
    },
    usernameContainer: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
    },
    buttonStyle: {
      backgroundColor: '#FF0000', // YouTube Red
      border: 'none',
      color: '#fff',
      fontWeight: 'bold',
      transition: 'all 0.3s',
      borderRadius: '4px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      outline: 'none',
      margin: '5px',
    },
    StylesShare: {
      borderColor: '#FF0000',
      color: '#444',
    },
    StylesEject: {
      borderColor: '#444',
      color: '#444',
    },
    hoverStylesShare: {
      backgroundColor: '#FF0000',
      color: '#fff',
      borderColor: '#383838',
    },
    hoverStylesEject: {
      backgroundColor: '#444',
      color: '#fff',
      borderColor: '#444',
    },
    MagicIcon: {
      fontSize: '1rem',
      color: '#FF0000',
      textShadow: '0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.6)',
      cursor: 'pointer',
    },
    MagicIconHover: {
      // Hover styles if needed
    },
    sidebar: {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '180px',
      height: '35%',
      borderRadius: '10px 0 10px 10px',
      background: '#282828', // YouTube theme background color
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
      color: '#FF0000', // YouTube Red close button icon
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
      color: '#fff', // Default text color
    },
    menuItemIcon: {
      marginRight: '0.5rem',
    },
    menuItemText: {
      fontSize: '1rem',
    },
    menuItemHover: {
      background: '#FF0000', // YouTube Red hover background color
      color: '#000000', // Hover text color
    },
    reverseSpinning: {
      transform: 'rotate(-360deg)',
    },
  },

  };
  
  export default themes;