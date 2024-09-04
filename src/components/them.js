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
        fontFamily: "'Comic Sans MS', cursive, sans-serif",
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
        fontFamily: "'Pirata One', cursive",
      },
      onePieceSwalContent: {
        color: '#FFFFFF',
        fontFamily: "'Pirata One', cursive",
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
    jujutsuKaisen: {
      container: {
        background: 'linear-gradient(to bottom, #1a1a1a, #333333)', // Dark gradient background
        minHeight: '100vh',
        color: '#e0e0e0',
        fontFamily: "'Roboto', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#e53935', // Crimson red
        textAlign: 'center',
        fontFamily: "'Bebas Neue', cursive",
      },
      card: {
        backgroundColor: '#212121', // Very dark gray
        border: '2px solid #e53935', // Crimson red border
        borderRadius: '10px',
        color: '#e0e0e0',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#e53935', // Crimson red
        color: '#e0e0e0',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#333333', // Dark gray
        border: '2px solid #e53935', // Crimson red border
        color: '#e0e0e0',
        boxShadow: '0 0 15px #333333',
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
        color: '#e53935',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #e53935',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#e53935',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#e0e0e0',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#e53935'
      },
      dateStyle: {
        color: '#b3b3b3', // Light gray
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      jujutsuKaisenSwalContainer: {
        backgroundColor: '#212121', // Dark gray
      },
      jujutsuKaisenSwalPopup: {
        backgroundColor: '#333333', // Dark gray
        border: '2px solid #e53935', // Crimson red border
        borderRadius: '12px',
      },
      jujutsuKaisenSwalTitle: {
        color: '#e53935',
        fontFamily: "'Bebas Neue', cursive",
      },
      jujutsuKaisenSwalContent: {
        color: '#e0e0e0',
        fontFamily: "'Roboto', sans-serif",
      },
      jujutsuKaisenSwalConfirm: {
        backgroundColor: '#e53935',
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
      },
      jujutsuKaisenSwalConfirmHover: {
        backgroundColor: '#d32f2f',
      },
      jujutsuKaisenSwalCancel: {
        backgroundColor: '#424242', // Dark gray
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
      },
      jujutsuKaisenSwalCancelHover: {
        backgroundColor: '#616161', // Slightly lighter gray
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#e53935', // Crimson red
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#212121', // Dark gray
        border: '2px solid #e53935', // Crimson red border
        color: '#e53935',
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
        borderColor: '#e53935',
        color: '#e53935',
      },
      StylesEject: {
        borderColor: '#424242',
        color: '#424242',
      },
      hoverStylesShare: {
        backgroundColor: '#e53935',
        color: '#ffffff',
        borderColor: '#212121',
      },
      hoverStylesEject: {
        backgroundColor: '#424242',
        color: '#ffffff',
        borderColor: '#424242',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#e91e63',
        textShadow: '0 0 5px rgba(233, 30, 99, 0.8), 0 0 10px rgba(233, 30, 99, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#d81b60',
        textShadow: '0 0 5px rgba(216, 27, 96, 0.8), 0 0 10px rgba(216, 27, 96, 0.6)',
      }
    },
    philippines: {
      container: {
        background: 'linear-gradient(to bottom, #0033A0, #FFD700)', // Blue to yellow gradient
        minHeight: '100vh',
        color: '#000000',
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#FF0000', // Red color
        textAlign: 'center',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '2rem',
      },
      card: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #0033A0', // Blue border
        borderRadius: '10px',
        color: '#000000',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#0033A0', // Blue
        color: '#FFFFFF',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent dark background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #0033A0', // Blue border
        color: '#000000',
        boxShadow: '0 0 15px #0033A0',
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
        color: '#0033A0',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #0033A0',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#0033A0',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#000000',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#0033A0',
      },
      dateStyle: {
        color: '#FF0000', // Red
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      philippinesSwalContainer: {
        backgroundColor: '#FFFFFF', // White
      },
      philippinesSwalPopup: {
        backgroundColor: '#FFFFFF', // White
        border: '2px solid #0033A0', // Blue border
        borderRadius: '12px',
      },
      philippinesSwalTitle: {
        color: '#0033A0',
        fontFamily: "'Poppins', sans-serif",
      },
      philippinesSwalContent: {
        color: '#000000',
        fontFamily: "'Arial', sans-serif",
      },
      philippinesSwalConfirm: {
        backgroundColor: '#0033A0', // Blue
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
      },
      philippinesSwalConfirmHover: {
        backgroundColor: '#002080', // Darker blue
      },
      philippinesSwalCancel: {
        backgroundColor: '#FF0000', // Red
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '8px',
      },
      philippinesSwalCancelHover: {
        backgroundColor: '#CC0000', // Darker red
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#0033A0', // Blue
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#FFD700', // Yellow
        border: '2px solid #0033A0', // Blue border
        color: '#0033A0',
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
        borderColor: '#0033A0',
        color: '#0033A0',
      },
      StylesEject: {
        borderColor: '#FF0000',
        color: '#FF0000',
      },
      hoverStylesShare: {
        backgroundColor: '#0033A0',
        color: '#FFFFFF',
        borderColor: '#0033A0',
      },
      hoverStylesEject: {
        backgroundColor: '#FF0000',
        color: '#FFFFFF',
        borderColor: '#FF0000',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#0033a0',
        textShadow: '0 0 5px rgba(0, 51, 160, 0.8), 0 0 10px rgba(0, 51, 160, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#002f6c',
        textShadow: '0 0 5px rgba(0, 47, 108, 0.8), 0 0 10px rgba(0, 47, 108, 0.6)',
      }
    },
    adorableHome: {
      container: {
        background: 'linear-gradient(to bottom, #FDE2E4, #FAD0C4)', // Soft pink to peach gradient
        minHeight: '100vh',
        color: '#333333',
        fontFamily: "'Comic Sans MS', cursive",
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
    supermanVsBatman: {
      container: {
        background: 'linear-gradient(to bottom, #1c1c1c, #0033ff)', // Dark gray to blue gradient
        minHeight: '100vh',
        color: '#ffffff',
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#ffcc00', // Superman yellow
        textAlign: 'center',
        fontFamily: "'Verdana', sans-serif",
        fontSize: '2rem',
      },
      card: {
        backgroundColor: '#333333', // Dark gray
        border: '2px solid #ffcc00', // Superman yellow border
        borderRadius: '12px',
        color: '#ffffff',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#ffcc00', // Superman yellow
        color: '#000000',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#1a1a1a', // Very dark gray
        border: '2px solid #ffcc00', // Superman yellow border
        color: '#ffffff',
        boxShadow: '0 0 15px rgba(255, 204, 0, 0.5)',
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
        color: '#ffcc00',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '2px solid #ffcc00',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#ffcc00',
        fontSize: '1.5rem',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#ffffff',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#ffcc00',
      },
      dateStyle: {
        color: '#9e9e9e', // Light gray
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      supermanVsBatmanSwalContainer: {
        backgroundColor: '#1a1a1a', // Very dark gray
      },
      supermanVsBatmanSwalPopup: {
        backgroundColor: '#333333', // Dark gray
        border: '2px solid #ffcc00', // Superman yellow border
        borderRadius: '12px',
      },
      supermanVsBatmanSwalTitle: {
        color: '#ffcc00', // Superman yellow
        fontFamily: "'Verdana', sans-serif",
      },
      supermanVsBatmanSwalContent: {
        color: '#ffffff',
        fontFamily: "'Arial', sans-serif",
      },
      supermanVsBatmanSwalConfirm: {
        backgroundColor: '#ffcc00', // Superman yellow
        color: '#000000',
        border: 'none',
        borderRadius: '8px',
      },
      supermanVsBatmanSwalConfirmHover: {
        backgroundColor: '#f5c300', // Darker yellow
      },
      supermanVsBatmanSwalCancel: {
        backgroundColor: '#333333', // Dark gray
        color: '#ffffff',
        border: 'none',
        borderRadius: '8px',
      },
      supermanVsBatmanSwalCancelHover: {
        backgroundColor: '#4d4d4d', // Slightly lighter gray
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#0033ff', // Superman blue
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#0033ff', // Superman blue
        border: '2px solid #ffcc00', // Superman yellow border
        color: '#ffffff',
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
        borderColor: '#ffcc00',
        color: '#ffcc00',
      },
      StylesEject: {
        borderColor: '#ffcc00',
        color: '#ffcc00',
      },
      hoverStylesShare: {
        backgroundColor: '#ffcc00',
        color: '#000000',
        borderColor: '#ffcc00',
      },
      hoverStylesEject: {
        backgroundColor: '#ffcc00',
        color: '#000000',
        borderColor: '#ffcc00',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#ff0000',
        textShadow: '0 0 5px rgba(255, 0, 0, 0.8), 0 0 10px rgba(255, 0, 0, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#e60000',
        textShadow: '0 0 5px rgba(230, 0, 0, 0.8), 0 0 10px rgba(230, 0, 0, 0.6)',
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
        fontFamily: "'Press Start 2P', cursive",
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
        fontFamily: "'Press Start 2P', cursive",
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
    superDark: {
      container: {
        background: '#121212', // Very dark background
        minHeight: '100vh',
        color: '#e0e0e0', // Light gray text for contrast
        fontFamily: "'Arial', sans-serif",
        padding: '20px',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '10px',
      },
      header: {
        color: '#bb86fc', // Light purple color for header text
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
      },
      card: {
        backgroundColor: '#1e1e1e', // Slightly lighter dark background for cards
        border: '1px solid #333', // Dark gray border
        borderRadius: '10px',
        color: '#e0e0e0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s',
        margin: '0 auto',
        cursor: 'pointer',
      },
      badge: {
        backgroundColor: '#bb86fc', // Accent color for badges
        color: '#121212',
        borderRadius: '8px',
        padding: '2px 6px',
      },
      modalOverlay: {
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      },
      modalContent: {
        backgroundColor: '#1e1e1e',
        border: '1px solid #333',
        color: '#e0e0e0',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
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
        color: '#bb86fc',
        fontSize: '1.5rem',
        cursor: 'pointer',
      },
      modalHeader: {
        borderBottom: '1px solid #333',
        paddingBottom: '10px',
        marginBottom: '10px',
        color: '#bb86fc',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
      modalTextStyle: {
        marginBottom: '1rem',
        color: '#e0e0e0',
        wordBreak: 'break-word',
      },
      modalFont: {
        color: '#bb86fc',
      },
      dateStyle: {
        color: '#bb86fc',
        fontSize: '0.9rem',
        fontStyle: 'italic',
      },
      superDarkSwalContainer: {
        backgroundColor: '#1e1e1e',
      },
      superDarkSwalPopup: {
        backgroundColor: '#1e1e1e',
        border: '1px solid #333',
        borderRadius: '12px',
      },
      superDarkSwalTitle: {
        color: '#bb86fc',
        fontFamily: "'Arial', sans-serif",
        fontWeight: 'bold',
      },
      superDarkSwalContent: {
        color: '#e0e0e0',
        fontFamily: "'Arial', sans-serif",
      },
      superDarkSwalConfirm: {
        backgroundColor: '#bb86fc',
        color: '#121212',
        border: 'none',
        borderRadius: '8px',
      },
      superDarkSwalConfirmHover: {
        backgroundColor: '#8c4fff',
      },
      superDarkSwalCancel: {
        backgroundColor: '#333',
        color: '#e0e0e0',
        border: 'none',
        borderRadius: '8px',
      },
      superDarkSwalCancelHover: {
        backgroundColor: '#444',
      },
      profilePicture: {
        width: '50px',
        height: '50px',
        backgroundColor: '#333',
        borderRadius: '50%',
        marginRight: '10px',
      },
      usernameContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
      },
      buttonStyle: {
        backgroundColor: '#1e1e1e',
        border: '1px solid #333',
        color: '#bb86fc',
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
        borderColor: '#bb86fc',
        color: '#bb86fc',
      },
      StylesEject: {
        borderColor: '#333',
        color: '#333',
      },
      hoverStylesShare: {
        backgroundColor: '#bb86fc',
        color: '#121212',
        borderColor: '#bb86fc',
      },
      hoverStylesEject: {
        backgroundColor: '#444',
        color: '#e0e0e0',
        borderColor: '#444',
      },
      MagicIcon: {
        fontSize: '1rem',
        color: '#bb86fc',
        textShadow: '0 0 5px rgba(187, 134, 252, 0.8), 0 0 10px rgba(187, 134, 252, 0.6)',
        cursor: 'pointer',
        transition: 'all 0.3s',
      },
      MagicIconHover: {
        color: '#8c2f8c',
        textShadow: '0 0 5px rgba(140, 47, 140, 0.8), 0 0 10px rgba(140, 47, 140, 0.6)',
      }
    }, 

    
    // Add more themes here
  };
  
  export default themes;