import React, { useEffect, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, updateDoc, onSnapshot } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage';
import { storage, db } from './firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Badge, Container, Row, Col } from 'react-bootstrap';
import themes from './them';
import Switch from "./Switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faSignOutAlt, faEdit, faPalette, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
  
const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [customLink, setCustomLink] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [dots, setDots] = useState('');
  const [hoveredButton, setHoveredButton] = useState('');
  const [newUsername, setNewUsername] = useState(""); // State for username input
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const inputRef = useRef(null);
  const [score, setScore] = useState(0);
  const savedTheme = localStorage.getItem('theme') || 'default';
  const [currentTheme, setCurrentTheme] = useState(savedTheme);
  const [userId, setUserId] = useState("");


  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);


  const generateUniqueLink = useCallback(async (userId) => {
    const userDoc = doc(db, "users", userId);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const username = userData.username;
      setScore(userData.score || 0);

      if (username && !userData.customLink) {
        const uniqueLink = `https://echoinbox.vercel.app/message/${userId}`;
        await setDoc(userDoc, { customLink: uniqueLink }, { merge: true });
        setCustomLink(uniqueLink);
        console.log("Generated unique link:", uniqueLink);
      }
    } else {
      console.log("User document does not exist");
    }
  }, [db]);

  const fetchMessages = useCallback(
    (userId) => {
      const messagesRef = collection(db, "messages");
      const q = query(messagesRef, where("recipientId", "==", userId));
  
      const unsubscribe = onSnapshot(
        q,
        (querySnapshot) => {
          const fetchedMessages = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          // Sort messages by creation timestamp in descending order
          const sortedMessages = fetchedMessages.sort((a, b) => 
            b.createdAt.seconds - a.createdAt.seconds
          );
  
          setMessages(sortedMessages);
  
          const unreadMessages = sortedMessages.filter((message) => !message.isRead);
          setUnreadCount(unreadMessages.length);
  
          if (unreadMessages.length > 0) {
          }
        },
        (error) => {
          console.error("Failed to fetch messages:", error);
          toast.error("Failed to fetch messages. Please try again later.");
        }
      );
  
      return unsubscribe;
    },
    [db]
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (auth.currentUser) {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, "users", userId);
        const userDocSnap = await getDoc(userDocRef);
  
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUsername(userData.username || "");
          setCustomLink(userData.customLink || "");
          setScore(userData.score || 0);
          setUserId(userId);
          
          // Set the profile picture URL
          if (userData.profilePicture) {
            setProfilePicture(userData.profilePicture);
          }
        }
      }
    };
  
    fetchUserProfile();
  }, [auth.currentUser]);
  
  const [profilePicture, setProfilePicture] = useState('');

  const handleShareClick = () => {
    if (customLink) {
      navigator.clipboard
        .writeText(customLink)
        .then(() => {
          toast.success("Link copied to clipboard!", { position: "top-right" });
        })
        .catch((error) => {
          console.error("Failed to copy link: ", error);
          toast.error("Failed to copy link. Please try again.");
        });
    }
  };

  const handleMessageClick = useCallback(async (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);

    if (!message.isRead) {
      const messageRef = doc(db, "messages", message.id);
      await updateDoc(messageRef, { isRead: true });

      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === message.id ? { ...msg, isRead: true } : msg
        )
      );
      setUnreadCount(prevCount => prevCount - 1);
    }
  }, [db]);

  // Utility function to get the correct label for the score
  const getScoreLabel = (score) => {
    return score === 0 || score === 1 ? 'point' : 'points';
  };

  const handleProfileIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically click the hidden file input
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && auth.currentUser) {
      const userId = auth.currentUser.uid;
      const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`);
  
      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        
        // Update Firestore with the new profile picture URL
        const userDocRef = doc(db, "users", userId);
        await updateDoc(userDocRef, { profilePicture: downloadURL });
  
        console.log('File uploaded successfully:', downloadURL);
        toast.success('Profile picture updated successfully!');
      } catch (error) {
        console.error('Error uploading file:', error.code, error.message);
        toast.error('Failed to upload profile picture. Please try again.');
      }
    } else {
      console.error('User is not authenticated or no file selected');
    }
  };
  
  
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  }, []);

  const handleLogout = async () => {
    const customSwal = Swal.mixin({
      customClass: {
        container: 'custom-swal-container',
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        confirmButton: 'custom-swal-confirm',
        cancelButton: 'custom-swal-cancel',
      },
      didOpen: () => {
        const container = document.querySelector('.custom-swal-container');
        if (container) {
          container.style.background = 'linear-gradient(to bottom, #000b1e, #1c2b4f)';
        }
        const popup = document.querySelector('.custom-swal-popup');
        if (popup) {
          popup.style.backgroundColor = '#2a2a2a';
          popup.style.border = '2px solid #00ffff';
          popup.style.borderRadius = '12px';
          popup.style.padding = '10px';
          popup.style.maxWidth = '350px';
          popup.style.width = '90%'; // Ensure it fits on smaller screens
        }
        const title = document.querySelector('.custom-swal-title');
        if (title) {
          title.style.color = '#00ffff';
          title.style.fontFamily = "'Press Start 2P'";
          title.style.fontSize = '1rem';
        }
        const confirmButton = document.querySelector('.custom-swal-confirm');
        if (confirmButton) {
          confirmButton.style.backgroundColor = '#00ffff';
          confirmButton.style.color = '#000000';
          confirmButton.style.border = 'none';
          confirmButton.style.borderRadius = '8px';
          confirmButton.style.padding = '5px 10px';
        }
        const cancelButton = document.querySelector('.custom-swal-cancel');
        if (cancelButton) {
          cancelButton.style.backgroundColor = '#ff1616';
          cancelButton.style.color = '#000000';
          cancelButton.style.border = 'none';
          cancelButton.style.borderRadius = '8px';
          cancelButton.style.padding = '5px 10px';
        }
  
        // Responsive adjustments for smaller screens
        if (window.innerWidth <= 480) {
          popup.style.maxWidth = '300px'; // Smaller max-width
          title.style.fontSize = '0.875rem'; // Smaller title font size
          confirmButton.style.padding = '4px 8px'; // Smaller button padding
          cancelButton.style.padding = '4px 8px'; // Smaller button padding
        }
      },
    });
  
    const result = await customSwal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out!',
      cancelButtonText: 'Cancel',
    });
  
    if (result.isConfirmed) {
      try {
        await signOut(auth);
        navigate('/');
      } catch (error) {
        console.error('Error signing out: ', error);
        toast.error('Failed to log out. Please try again.');
      }
    } else {
      console.log('Logout canceled');
    }
  };

  const handleUsernameClick = () => {
    if (score >= 5) {
      setIsEditingUsername(true);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    } else {
      toast.error("You need at least 5 points to change your username.");
    }
  };

  const handleUsernameBlur = async () => {
    if (newUsername.trim() && newUsername !== username) {
      try {
        const userDoc = doc(db, "users", user.uid);
        
        // Confirm the username change again
        const customSwal = Swal.mixin({
          customClass: {
            container: 'custom-swal-container',
            popup: 'custom-swal-popup',
            title: 'custom-swal-title',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-confirm',
            cancelButton: 'custom-swal-cancel',
          },
          didOpen: () => {
            const container = document.querySelector('.custom-swal-container');
            if (container) {
              container.style.background = 'linear-gradient(to bottom, #000b1e, #1c2b4f)';
            }
            const popup = document.querySelector('.custom-swal-popup');
            if (popup) {
              popup.style.backgroundColor = '#2a2a2a';
              popup.style.border = '2px solid #00ffff';
              popup.style.borderRadius = '12px';
              popup.style.padding = '10px';
              popup.style.maxWidth = '350px';
              popup.style.width = '90%';
            }
            const title = document.querySelector('.custom-swal-title');
            if (title) {
              title.style.color = '#00ffff';
              title.style.fontFamily = "'Press Start 2P'";
            }
            const content = document.querySelector('.custom-swal-content');
            if (content) {
              content.style.color = '#ffffff';
              content.style.fontFamily = "'Press Start 2P'";
            }
            const confirmButton = document.querySelector('.custom-swal-confirm');
            if (confirmButton) {
              confirmButton.style.backgroundColor = '#00ffff';
              confirmButton.style.color = '#000000';
              confirmButton.style.border = 'none';
              confirmButton.style.borderRadius = '8px';
            }
            const cancelButton = document.querySelector('.custom-swal-cancel');
            if (cancelButton) {
              cancelButton.style.backgroundColor = '#ff1616';
              cancelButton.style.color = '#000000';
              cancelButton.style.border = 'none';
              cancelButton.style.borderRadius = '8px';
            }
          },
        });
  
        const result = await customSwal.fire({
          title: `Change your username to "${newUsername}"?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes, change it!',
          cancelButtonText: 'Cancel',
        });
  
        if (result.isConfirmed) {
          // Update the username
          await updateDoc(userDoc, { username: newUsername });
  
          // Deduct 2 points
          const newScore = score - 5;
          await updateDoc(userDoc, { score: newScore });
  
          setScore(newScore);
          setUsername(newUsername);
          setNewUsername("");
          setIsEditingUsername(false);
  
          toast.success('Username successfully updated', { position: 'top-right' });
        } else {
          // User canceled the operation
          setNewUsername("");
          setIsEditingUsername(false);
        }
      } catch (error) {
        toast.error("Failed to update username. Please try again.");
        setIsEditingUsername(false);
      }
    } else {
      setIsEditingUsername(false);
    }
  };
  
  const handleUsernameKeyPress = (event) => {
    if (event.key === "Enter") {
      handleUsernameBlur();
    }
  };

  const handleOverlayClick = (e) => {
    // Close the modal only when clicking on the overlay itself
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsEditingUsername(false);
        setNewUsername(username); // Revert to original username on outside click
      }
    };

    if (isEditingUsername) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isEditingUsername, username]);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = doc(db, "users", user.uid);
        
        // Set up real-time listener for the user's document
        const unsubscribeUserDoc = onSnapshot(userDoc, (docSnap) => {
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUsername(userData.username || "");
            setCustomLink(userData.customLink || "");
            setScore(userData.score || 0); // Use userData here
  
            if (!userData.customLink) {
              generateUniqueLink(user.uid);
            }
          } else {
            console.log("User document does not exist");
          }
        }, (error) => {
          console.error("Failed to fetch user data:", error);
          toast.error("Failed to fetch user data. Please try again later.");
        });
        
        const messagesUnsubscribe = fetchMessages(user.uid);

        return () => {
          unsubscribeUserDoc(); // Clean up the real-time listener
          messagesUnsubscribe(); // Clean up the messages listener
        };
      }
    });

    return () => unsubscribeAuth(); // Clean up the auth listener
  }, [auth, db, generateUniqueLink, fetchMessages]);
  
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') return '';
        return prevDots + '.';
      });
    }, 500); 

    return () => clearInterval(dotInterval); 
  }, []);

  const CatFaceIcon = ({ status }) => {
    return (
      <svg width="60" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill={status === "unread" ? "#FFD700" : "#E0E0E0"} stroke="#000" strokeWidth="2"/>
        <polygon points="20,30 40,10 40,30" fill={status === "unread" ? "#FFD700" : "#E0E0E0"} stroke="#000" strokeWidth="2"/>
        <polygon points="80,30 60,10 60,30" fill={status === "unread" ? "#FFD700" : "#E0E0E0"} stroke="#000" strokeWidth="2"/>
        <circle cx="35" cy="45" r="5" fill="#fff" stroke="#000" strokeWidth="2"/>
        <circle cx="65" cy="45" r="5" fill="#fff" stroke="#000" strokeWidth="2"/>
        <circle cx="50" cy="55" r="4" fill="#FFC0CB" stroke="#000" strokeWidth="2"/>
        <path d="M45 60 Q50 65 55 60" stroke="#000" strokeWidth="2" fill="none"/>
        <line x1="20" y1="55" x2="10" y2="55" stroke="#000" strokeWidth="2"/>
        <line x1="20" y1="60" x2="10" y2="65" stroke="#000" strokeWidth="2"/>
        <line x1="20" y1="50" x2="10" y2="45" stroke="#000" strokeWidth="2"/>
        <line x1="80" y1="55" x2="90" y2="55" stroke="#000" strokeWidth="2"/>
        <line x1="80" y1="60" x2="90" y2="65" stroke="#000" strokeWidth="2"/>
        <line x1="80" y1="50" x2="90" y2="45" stroke="#000" strokeWidth="2"/>
      </svg>
    );
  };

  const defaultStyles = {
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
  };
  
  const themeStyles = {
    ...defaultStyles,
    ...themes[currentTheme], // Apply current theme styles
  };

  useEffect(() => {
    // Save the selected theme to local storage
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const handleMagicIconClick = () => {
    // Randomly select a new theme
    const themeKeys = Object.keys(themes);
    const randomTheme = themeKeys[Math.floor(Math.random() * themeKeys.length)];
    setCurrentTheme(randomTheme);
  };

  return (
    <div style={themeStyles.container}>
      <ToastContainer />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <strong style={{ fontSize: '0.5rem' }}>
          Emergency question {getScoreLabel(score)}: {score}
        </strong>
        <FontAwesomeIcon
          icon={faPalette}
          style={{ ...themeStyles.MagicIcon }}
          onClick={handleMagicIconClick}
        />
      </div>
      <Container style={themeStyles.container}>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <h2 style={themeStyles.header}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={profilePicture || ''} // Use an empty string to display the placeholder if no picture is uploaded
                    alt="profile"
                    style={{
                      fontSize: '1rem',
                      alignContent: 'center',
                      backgroundColor: 'white',
                      width: '6rem',
                      height: '6em',
                      borderRadius: '50%',
                      marginRight: '0.5rem',
                      cursor: 'pointer',
                      objectFit: profilePicture ? 'cover' : 'none', // Ensure the image is displayed correctly
                    }}
                    onClick={handleProfileIconClick}
                  />
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }} // Hides the input
                  onChange={handleFileChange} // Handles the file selection
                />
                {isEditingUsername ? (
                  <input
                    ref={inputRef}
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    onBlur={handleUsernameBlur}
                    onKeyPress={handleUsernameKeyPress}
                    style={{
                      fontSize: '1.5rem',
                      color: '#ffffff',
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      width: '100%',
                      maxWidth: '200px',
                      boxSizing: 'border-box',
                      padding: '0.2rem',
                      textTransform: 'uppercase',
                    }}
                  />
                ) : (
                  <>
                    <span
                      style={{
                        textTransform: 'uppercase', // Ensure username is formatted as uppercase
                        fontSize: '2.25rem', // Adjust size if needed
                        fontWeight: 'bold', // Adjust weight if needed
                      }}
                    >
                      {username}
                    </span>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{
                        fontSize: '0.75rem',
                        marginLeft: '10px',
                        cursor: 'pointer',
                        verticalAlign: 'middle',
                      }}
                      onClick={handleUsernameClick}
                    />
                  </>
                )}
              </span>
            </h2>
          <div style={themeStyles.buttonContainer}>
            <button
              style={{
                ...themeStyles.buttonStyle,
                ...themeStyles.StylesShare,
                ...(hoveredButton === 'share' ? themeStyles.hoverStylesShare : {}),
              }}
              onMouseEnter={() => setHoveredButton('share')}
              onMouseLeave={() => setHoveredButton('')}
              onClick={handleShareClick}
            >
              Link
              <FontAwesomeIcon icon={faLink} size="lg" />
            </button>
            <button
              style={{
                ...themeStyles.buttonStyle,
                ...themeStyles.StylesEject,
                ...(hoveredButton === 'eject' ? themeStyles.hoverStylesEject : {}),
              }}
              onMouseEnter={() => setHoveredButton('eject')}
              onMouseLeave={() => setHoveredButton('')}
              onClick={handleLogout}
            >
              Eject
              <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
            </button>
          </div>
        </div>
        <Container style={{
          padding: '1rem',
          borderRadius: '8px',
          maxHeight: '600px',
          overflowX: 'hidden',
          overflowY: 'auto',
          boxSizing: 'border-box',
        }}>
          {messages.length > 0 ? (
            <Row>
              {messages.map((message) => (
                <Col xs={6} sm={4} md={4} lg={2} key={message.id}>
                  <Card
                    style={themeStyles.card}
                    className="mb-3"
                    onClick={() => handleMessageClick(message)}
                  >
                    <Card.Body className="text-center">
                      <CatFaceIcon status={message.isRead ? 'read' : 'unread'} />
                      <Card.Title>{message.sender}</Card.Title>
                      <Card.Text>{message.text}</Card.Text>
                      {message.isRead ? (
                        <Badge style={themeStyles.badge}>meowsage</Badge>
                      ) : (
                        <Badge style={themeStyles.badge}>mystery meowssage</Badge>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p style={themeStyles.dotsP}>
              No meowssages yet. The cats are quiet{dots}
            </p>
          )}

          {isModalOpen && (
            <div style={themeStyles.modalOverlay} onClick={handleOverlayClick}>
              <div style={themeStyles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div style={themeStyles.modalHeader}>
                  <h5>Meowsage</h5>
                </div>
                <div style={themeStyles.modalBody}>
                  {selectedMessage && (
                    <>
                      <p style={themeStyles.modalTextStyle}>{selectedMessage.content}</p>
                      <p style={themeStyles.dateStyle}>
                        Meowed on:{' '}
                        {new Date(selectedMessage.createdAt.seconds * 1000).toLocaleDateString()}
                      </p>
                      {selectedMessage.audio && (
                        <div style={{ textAlign: 'center' }}>
                          <audio controls style={{
                            width: '70%',
                            maxWidth: '100%',
                            backgroundColor: '#f3f3f3',
                            borderRadius: '10px',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            padding: '5px',
                          }}>
                            <source src={selectedMessage.audio} type="audio/wav" />
                            Your browser does not support the audio element.
                          </audio>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </Container>
        <Switch />
      </Container>
    </div>
    );
  };

export default Profile;
