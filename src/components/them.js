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
            fontFamily: "'Press Start 2P', cursive",
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
        fontFamily: "'Pirata One', cursive",
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
      onePieceSwalContainer: {
        backgroundColor: '#000080', // Navy blue
      },
      onePieceSwalPopup: {
        backgroundColor: '#4682B4', // Steel blue
        border: '2px solid #FFD700',
        borderRadius: '12px',
      },
      onePieceSwalTitle: {
        color: '#FFD700',
        fontFamily: "'Pirata One'",
      },
      onePieceSwalContent: {
        color: '#FFFFFF',
        fontFamily: "'Pirata One'",
      },
      onePieceSwalConfirm: {
        backgroundColor: '#FFD700',
        color: '#000000',
        border: 'none',
        borderRadius: '8px',
      },
      onePieceSwalConfirmHover: {
        backgroundColor: '#FFC107',
      },
      onePieceSwalCancel: {
        backgroundColor: '#FF4500',
        color: '#000000',
        border: 'none',
        borderRadius: '8px',
      },
      onePieceSwalCancelHover: {
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
      }
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
      adorableHomeSwalContainer: {
        backgroundColor: '#FFFFFF', // White
      },
      adorableHomeSwalPopup: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #FF6F61', // Coral border
        borderRadius: '12px',
      },
      adorableHomeSwalTitle: {
        color: '#FF6F61',
        fontFamily: "'Poppins', sans-serif",
      },
      adorableHomeSwalContent: {
        color: '#333333',
        fontFamily: "'Comic Sans MS', cursive",
      },
      adorableHomeSwalConfirm: {
        backgroundColor: '#FF6F61', // Coral
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
      },
      adorableHomeSwalConfirmHover: {
        backgroundColor: '#FF4F47', // Darker coral
      },
      adorableHomeSwalCancel: {
        backgroundColor: '#FF9AA2', // Light pink
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
      },
      adorableHomeSwalCancelHover: {
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
      }
    },
    programmerDream: {
      container: {
        background: 'linear-gradient(to bottom, #282c34, #2c3e50)', // Dark gray to dark blue gradient
        minHeight: '100vh',
        color: '#abb2bf', // Light gray text
        fontFamily: "'Fira Code', monospace",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#61dafb', // Light blue
        textAlign: 'center',
        fontFamily: "'Fira Code', monospace",
        fontSize: '2rem',
      },
      card: {
        backgroundColor: '#1e1e1e', // Dark gray
        border: '2px solid #61dafb', // Light blue border
        borderRadius: '10px',
        color: '#abb2bf',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#98c379', // Green
        color: '#ffffff',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#2c3e50', // Dark blue-gray
        border: '2px solid #61dafb', // Light blue border
        color: '#abb2bf',
        boxShadow: '0 0 15px rgba(97, 218, 251, 0.5)',
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
        color: '#61dafb',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #61dafb',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#61dafb',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#abb2bf',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#61dafb',
      },
      dateStyle: {
        color: '#e06c75', // Red
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      programmerDreamSwalContainer: {
        backgroundColor: '#2c3e50', // Dark blue-gray
      },
      programmerDreamSwalPopup: {
        backgroundColor: '#1e1e1e', // Dark gray
        border: '2px solid #61dafb', // Light blue border
        borderRadius: '12px',
      },
      programmerDreamSwalTitle: {
        color: '#61dafb',
        fontFamily: "'Fira Code', monospace",
      },
      programmerDreamSwalContent: {
        color: '#abb2bf',
        fontFamily: "'Fira Code', monospace",
      },
      programmerDreamSwalConfirm: {
        backgroundColor: '#61dafb', // Light blue
        color: '#000000',
        border: 'none',
        borderRadius: '8px',
      },
      programmerDreamSwalConfirmHover: {
        backgroundColor: '#4da3c0', // Darker light blue
      },
      programmerDreamSwalCancel: {
        backgroundColor: '#e06c75', // Red
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
      },
      programmerDreamSwalCancelHover: {
        backgroundColor: '#c75c6b', // Darker red
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#282c34', // Dark gray
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#282c34', // Dark gray
        border: '2px solid #61dafb', // Light blue border
        color: '#61dafb',
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
        borderColor: '#61dafb',
        color: '#61dafb',
      },
      StylesEject: {
        borderColor: '#e06c75',
        color: '#e06c75',
      },
      hoverStylesShare: {
        backgroundColor: '#61dafb',
        color: '#000000',
        borderColor: '#61dafb',
      },
      hoverStylesEject: {
        backgroundColor: '#e06c75',
        color: '#ffffff',
        borderColor: '#e06c75',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#00c853',
        textShadow: '0 0 5px rgba(0, 200, 83, 0.8), 0 0 10px rgba(0, 200, 83, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#00e676',
        textShadow: '0 0 5px rgba(0, 230, 118, 0.8), 0 0 10px rgba(0, 230, 118, 0.6)',
      }
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
        fontSize: '2.5rem',
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
      retroSwalContainer: {
        backgroundColor: '#fff',
      },
      retroSwalPopup: {
        backgroundColor: '#fff',
        border: '2px solid #ff6f61',
        borderRadius: '12px',
      },
      retroSwalTitle: {
        color: '#ff6f61',
        fontFamily: "'Press Start 2P', cursive",
      },
      retroSwalContent: {
        color: '#333',
        fontFamily: "'Press Start 2P'",
      },
      retroSwalConfirm: {
        backgroundColor: '#ff6f61',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
      },
      retroSwalConfirmHover: {
        backgroundColor: '#e85a5a',
      },
      retroSwalCancel: {
        backgroundColor: '#f8b400',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
      },
      retroSwalCancelHover: {
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
        fontSize: '2.5rem',
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
      taylorSwiftSwalContainer: {
        backgroundColor: '#fff',
      },
      taylorSwiftSwalPopup: {
        backgroundColor: '#fff',
        border: '2px solid #e80039',
        borderRadius: '12px',
      },
      taylorSwiftSwalTitle: {
        color: '#e80039',
        fontFamily: "'Arial', sans-serif",
        fontWeight: 'bold',
      },
      taylorSwiftSwalContent: {
        color: '#333',
        fontFamily: "'Arial', sans-serif",
      },
      taylorSwiftSwalConfirm: {
        backgroundColor: '#e80039',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
      },
      taylorSwiftSwalConfirmHover: {
        backgroundColor: '#c70039',
      },
      taylorSwiftSwalCancel: {
        backgroundColor: '#f4c2c2',
        color: '#333',
        border: 'none',
        borderRadius: '8px',
      },
      taylorSwiftSwalCancelHover: {
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
      }
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
        fontFamily: "'Great Vibes', cursive",
        fontSize: '2.5rem',
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#fff7f0', // Very light cream
        border: '2px solid #c1a383', // Soft brown border
        borderRadius: '10px',
        color: '#5b4636', // Warm brown text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
      }
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
        gap: '15px',
      },
      header: {
        color: '#128061', // Medium Teal
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '2.5rem',
        letterSpacing: '1.5px',
      },
      card: {
        backgroundColor: '#FFFFFF', // White card background
        border: '2px solid #53C0A2', // Light Teal border
        borderRadius: '8px',
        color: '#266352', // Dark Teal text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        fontSize: '1.2rem',
        color: '#53C0A2', // Light Teal
        textShadow: '0 0 5px rgba(83, 192, 162, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#128061', // Medium Teal
        textShadow: '0 0 5px rgba(19, 128, 97, 0.7)',
      }
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
        gap: '15px',
      },
      header: {
        color: '#006989', // Deep Teal
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '2.5rem',
        letterSpacing: '1.5px',
      },
      card: {
        backgroundColor: '#FFFFFF', // White card background
        border: '2px solid #E88D67', // Warm Coral border
        borderRadius: '8px',
        color: '#005C78', // Dark Teal text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        fontSize: '1.2rem',
        color: '#006989', // Deep Teal
        textShadow: '0 0 5px rgba(0, 105, 137, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#005C78', // Dark Teal
        textShadow: '0 0 5px rgba(0, 105, 137, 0.7)',
      }
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
        fontSize: '2.5rem',
        letterSpacing: '2px',
      },
      card: {
        backgroundColor: '#481E14', // Dark Brown
        border: '2px solid #9B3922', // Burnt Red border
        borderRadius: '8px',
        color: '#F2613F', // Vibrant Coral text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        fontSize: '1.2rem',
        color: '#F2613F', // Vibrant Coral
        textShadow: '0 0 5px rgba(242, 97, 63, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#9B3922', // Burnt Red
        textShadow: '0 0 5px rgba(242, 97, 63, 0.7)',
      }
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
        fontFamily: "'Comic Sans MS', cursive",
        fontSize: '2.5rem',
        letterSpacing: '2px',
      },
      card: {
        backgroundColor: '#FEC7B4', // Soft Peach
        border: '2px solid #FC819E', // Bright Pink border
        borderRadius: '10px',
        color: '#F7418F', // Deep Pink text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        fontSize: '1.2rem',
        color: '#F7418F', // Deep Pink
        textShadow: '0 0 5px rgba(247, 65, 143, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#FC819E', // Bright Pink
        textShadow: '0 0 5px rgba(247, 65, 143, 0.7)',
      }
    },
    PastelSerenity: {
      container: {
        background: 'linear-gradient(to bottom, #E6FFFD, #AEE2FF)', // Pale Teal to Light Blue gradient
        minHeight: '100vh',
        color: '#B799FF', // Light Purple text
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#B799FF', // Light Purple
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '2.5rem',
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#ACBCFF', // Soft Blue
        border: '2px solid #AEE2FF', // Light Blue border
        borderRadius: '10px',
        color: '#B799FF', // Light Purple text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#AEE2FF', // Light Blue
        color: '#B799FF', // Light Purple text
        borderRadius: '10px',
        padding: '5px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(230, 255, 253, 0.8)', // Semi-transparent Pale Teal
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#E6FFFD', // Pale Teal
        border: '2px solid #AEE2FF', // Light Blue border
        color: '#B799FF', // Light Purple text
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
        color: '#B799FF', // Light Purple
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #AEE2FF', // Light Blue border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#B799FF', // Light Purple
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#B799FF', // Light Purple
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#B799FF', // Light Purple
      },
      dateStyle: {
        color: '#AEE2FF', // Light Blue
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#ACBCFF', // Soft Blue
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#E6FFFD', // Pale Teal
        border: '2px solid #AEE2FF', // Light Blue border
        color: '#B799FF', // Light Purple text
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
        borderColor: '#AEE2FF', // Light Blue
        color: '#AEE2FF', // Light Blue
      },
      StylesEject: {
        borderColor: '#B799FF', // Light Purple
        color: '#B799FF', // Light Purple
      },
      hoverStylesShare: {
        backgroundColor: '#AEE2FF', // Light Blue
        color: '#E6FFFD', // Pale Teal
        borderColor: '#E6FFFD', // Pale Teal
      },
      hoverStylesEject: {
        backgroundColor: '#B799FF', // Light Purple
        color: '#E6FFFD', // Pale Teal
        borderColor: '#E6FFFD', // Pale Teal
      },
      MagicIcon: {
        fontSize: '1.2rem',
        color: '#B799FF', // Light Purple
        textShadow: '0 0 5px rgba(183, 153, 255, 0.7)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#ACBCFF', // Soft Blue
        textShadow: '0 0 5px rgba(183, 153, 255, 0.7)',
      }
    },
    VibrantContrast: {
      container: {
        background: 'linear-gradient(to bottom, #000000, #FF4191)', // Black to Bright Pink gradient
        minHeight: '100vh',
        color: '#FFF078', // Light Yellow text
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
      },
      header: {
        color: '#FFF078', // Light Yellow
        textAlign: 'center',
        fontFamily: "'Arial', sans-serif",
        fontSize: '2.5rem',
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#E90074', // Vivid Magenta
        border: '2px solid #FF4191', // Bright Pink border
        borderRadius: '10px',
        color: '#FFF078', // Light Yellow text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#FF4191', // Bright Pink
        color: '#000000', // Black text
        borderRadius: '10px',
        padding: '5px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent Black
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#E90074', // Vivid Magenta
        border: '2px solid #FF4191', // Bright Pink border
        color: '#FFF078', // Light Yellow text
        borderRadius: '12px',
        padding: '20px',
        maxHeight: '80vh',
        overflowY: 'auto',
        width: '80%',
        maxWidth: '500px',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.4)',
      },
      modalCloseButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        color: '#FFF078', // Light Yellow
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #FF4191', // Bright Pink border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#FFF078', // Light Yellow
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#FFF078', // Light Yellow
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#FFF078', // Light Yellow
      },
      dateStyle: {
        color: '#FF4191', // Bright Pink
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#E90074', // Vivid Magenta
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FFF078', // Light Yellow
        border: '2px solid #FF4191', // Bright Pink border
        color: '#000000', // Black text
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
        borderColor: '#FF4191', // Bright Pink
        color: '#FF4191', // Bright Pink
      },
      StylesEject: {
        borderColor: '#E90074', // Vivid Magenta
        color: '#E90074', // Vivid Magenta
      },
      hoverStylesShare: {
        backgroundColor: '#FF4191', // Bright Pink
        color: '#FFF078', // Light Yellow
        borderColor: '#FFF078', // Light Yellow
      },
      hoverStylesEject: {
        backgroundColor: '#E90074', // Vivid Magenta
        color: '#FFF078', // Light Yellow
        borderColor: '#FFF078', // Light Yellow
      },
      MagicIcon: {
        fontSize: '1.2rem',
        color: '#E90074', // Vivid Magenta
        textShadow: '0 0 5px rgba(233, 0, 116, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#FF4191', // Bright Pink
        textShadow: '0 0 5px rgba(233, 0, 116, 0.8)',
      }
    },
    VintageElegance: {
      container: {
        background: 'linear-gradient(to bottom, #EEE4B1, #8C6A5D)', // Light Cream to Earthy Brown gradient
        minHeight: '100vh',
        color: '#5F374B', // Dark Burgundy text
        fontFamily: "'Georgia', serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
      },
      header: {
        color: '#430A5D', // Deep Purple
        textAlign: 'center',
        fontFamily: "'Times New Roman', serif",
        fontSize: '2.5rem',
        letterSpacing: '1px',
        textShadow: '2px 2px #8C6A5D', // Earthy Brown shadow
      },
      card: {
        backgroundColor: '#EEE4B1', // Light Cream
        border: '2px solid #5F374B', // Dark Burgundy border
        borderRadius: '12px',
        color: '#5F374B', // Dark Burgundy text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#8C6A5D', // Earthy Brown
        color: '#EEE4B1', // Light Cream
        borderRadius: '10px',
        padding: '6px 12px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark semi-transparent overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#5F374B', // Dark Burgundy
        border: '2px solid #8C6A5D', // Earthy Brown border
        color: '#EEE4B1', // Light Cream text
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
        color: '#EEE4B1', // Light Cream
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #8C6A5D', // Earthy Brown border
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#EEE4B1', // Light Cream
        fontSize: '1.8rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#EEE4B1', // Light Cream
        lineHeight: '1.6',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#EEE4B1', // Light Cream
      },
      dateStyle: {
        color: '#8C6A5D', // Earthy Brown
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#5F374B', // Dark Burgundy
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#EEE4B1', // Light Cream
        border: '2px solid #5F374B', // Dark Burgundy border
        color: '#5F374B', // Dark Burgundy text
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
        borderColor: '#8C6A5D', // Earthy Brown
        color: '#8C6A5D', // Earthy Brown
      },
      StylesEject: {
        borderColor: '#5F374B', // Dark Burgundy
        color: '#5F374B', // Dark Burgundy
      },
      hoverStylesShare: {
        backgroundColor: '#8C6A5D', // Earthy Brown
        color: '#EEE4B1', // Light Cream
        borderColor: '#EEE4B1', // Light Cream
      },
      hoverStylesEject: {
        backgroundColor: '#5F374B', // Dark Burgundy
        color: '#EEE4B1', // Light Cream
        borderColor: '#EEE4B1', // Light Cream
      },
      MagicIcon: {
        fontSize: '1.2rem',
        color: '#8C6A5D', // Earthy Brown
        textShadow: '0 0 5px rgba(140, 106, 93, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#430A5D', // Deep Purple
        textShadow: '0 0 5px rgba(140, 106, 93, 0.8)',
      }
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
        gap: '12px',
      },
      header: {
        color: '#3F2305', // Deep Brown
        textAlign: 'center',
        fontFamily: "'Times New Roman', serif",
        fontSize: '2.5rem',
        letterSpacing: '1px',
        textShadow: '2px 2px #DFD7BF', // Soft Taupe shadow
      },
      card: {
        backgroundColor: '#F2EAD3', // Light Beige
        border: '2px solid #DFD7BF', // Soft Taupe border
        borderRadius: '12px',
        color: '#3F2305', // Deep Brown text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        fontSize: '1.2rem',
        color: '#DFD7BF', // Soft Taupe
        textShadow: '0 0 5px rgba(223, 215, 191, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#3F2305', // Deep Brown
        textShadow: '0 0 5px rgba(223, 215, 191, 0.8)',
      }
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
        gap: '15px',
      },
      header: {
        color: '#008170', // Teal
        textAlign: 'center',
        fontFamily: "'Arial Black', sans-serif",
        fontSize: '2.5rem',
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#232D3F', // Dark Slate Blue
        border: '2px solid #005B41', // Deep Green border
        borderRadius: '8px',
        color: '#E0E0E0', // Light Gray text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        fontSize: '1.2rem',
        color: '#005B41', // Deep Green
        textShadow: '0 0 5px rgba(0, 91, 65, 0.8)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#008170', // Teal
        textShadow: '0 0 5px rgba(0, 91, 65, 0.8)',
      }
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
        gap: '15px',
      },
      header: {
        color: '#CD5C08', // Dark Orange
        textAlign: 'center',
        fontFamily: "'Merriweather', serif",
        fontSize: '2.5rem',
        letterSpacing: '1px',
      },
      card: {
        backgroundColor: '#C1D8C3', // Light Sage Green
        border: '2px solid #6A9C89', // Sage Green border
        borderRadius: '10px',
        color: '#6A9C89', // Sage Green text
        transition: 'all 0.3s',
        margin: '20px auto',
        padding: '15px',
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
        color: '#6A9C89', // Sage Green
      },
      hoverStylesShare: {
        backgroundColor: '#CD5C08', // Dark Orange
        color: '#FFF5E4', // Creamy Beige
        borderColor: '#FFF5E4', // Creamy Beige
      },
      hoverStylesEject: {
        backgroundColor: '#6A9C89', // Sage Green
        color: '#FFF5E4', // Creamy Beige
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
      }
    },
    // Add more themes here
  };
  
  export default themes;