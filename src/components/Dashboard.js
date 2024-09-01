import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs, updateDoc, onSnapshot } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Modal, Badge, Container, Row, Col } from 'react-bootstrap';
import Switch from "./Switch";


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

  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();

  const generateUniqueLink = useCallback(async (userId) => {
    const userDoc = doc(db, "users", userId);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const username = userData.username;

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
            toast.success("You have a new message!", { position: "top-right" });
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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUsername(userData.username || "");
          setCustomLink(userData.customLink || "");

          if (!userData.customLink) {
            await generateUniqueLink(user.uid);
          }

          const messagesUnsubscribe = fetchMessages(user.uid);
          return () => messagesUnsubscribe();
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db, generateUniqueLink, fetchMessages]);

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

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  }, []);

  const handleLogout = async () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      try {
        await signOut(auth);
        navigate("/"); 
      } catch (error) {
        console.error("Error signing out: ", error);
        toast.error("Failed to log out. Please try again.");
      }
    } else {
      console.log("Logout canceled");
    }
  };
  

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots === '...') return '';
        return prevDots + '.';
      });
    }, 500); // Adjust the interval as needed

    return () => clearInterval(dotInterval); // Cleanup interval on unmount
  }, []);

  const amongUsStyles = {
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
      pointer: 'cursor',
    },
    badge: {
      backgroundColor: '#ff1616',
      color: '#e0e0e0',
    },
    modal: {
      backgroundColor: '#1b2a3e',
      border: '2px solid #00ffff',
      color: '#e0e0e0',
    },
    modalDialog: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    catIcon: {
      width: '60px', // Adjust this value to resize the icon
      height: '60px', // Adjust this value to resize the icon
      margin: '0 auto',
    },
  };

  const buttonStyle = {
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
    margin: '5px'
  };

  const hoverStylesShare = {
    backgroundColor: '#00ffff',
    color: '#1b2a3e',
    borderColor: '#1b2a3e'
  };
  
  const hoverStylesEject = {
    backgroundColor: '#ff1616',
    color: '#fff',
    borderColor: '#ff1616'
  };

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
  

  return (
    <div style={amongUsStyles.container}>
            <ToastContainer />
      <Container>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
          <h2 style={amongUsStyles.header}>Meowmate: {username}</h2>
          <div style={amongUsStyles.buttonContainer}>
          <button
            style={{
              ...buttonStyle,
              borderColor: '#00ffff',
              color: '#00ffff',
              ...(hoveredButton === 'share' ? hoverStylesShare : {})
            }}
            onMouseEnter={() => setHoveredButton('share')}
            onMouseLeave={() => setHoveredButton('')}
            onClick={handleShareClick}
          >
            Share
          </button>
          <button
            style={{
              ...buttonStyle,
              borderColor: '#ff1616',
              color: '#ff1616',
              ...(hoveredButton === 'eject' ? hoverStylesEject : {})
            }}
            onMouseEnter={() => setHoveredButton('eject')}
            onMouseLeave={() => setHoveredButton('')}
                onClick={handleLogout}
          >
            Eject
          </button>
          </div>
        </div>

        <h3 style={{...amongUsStyles.header, fontSize: '1.5rem'}}>
          {unreadCount > 0 && <Badge style={amongUsStyles.badge}></Badge>}
        </h3>

        {messages.length > 0 ? (
            <Row>
              {messages.map((message) => (
                <Col xs={6} sm={4} md={4} lg={2} key={message.id}>
                  <Card style={amongUsStyles.card} className="mb-3" onClick={() => handleMessageClick(message)}>
                    <Card.Body className="text-center">
                      <CatFaceIcon status={message.isRead ? "read" : "unread"} />
                      <Card.Title>{message.sender}</Card.Title>
                      <Card.Text>{message.text}</Card.Text>
                      {message.isRead ? (
                        <Badge style={amongUsStyles.badge}>meowssage</Badge>
                      ) : (
                        <Badge style={amongUsStyles.badge}>mystery meowssage</Badge>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p style={{ color: '#f5a9a9', fontSize: '1.2rem' }}>
            No meowssages yet. The cats are quiet{dots}
          </p>          
          )}

        <Modal show={isModalOpen} onHide={closeModal} dialogClassName="modal-dialog-centered">
          <Modal.Header style={amongUsStyles.modal}>
            <Modal.Title style={{color: '#00ffff'}}>Meowsage</Modal.Title>
          </Modal.Header>
          <Modal.Body style={amongUsStyles.modal}>
            {selectedMessage && (
              <>
                <p>{selectedMessage.content}</p>
                <p>
                  <small style={{color: '#f5a9a9'}}>
                    Meowed on:{" "}
                    {new Date(selectedMessage.createdAt.seconds * 1000).toLocaleDateString()}
                  </small>
                </p>
                {selectedMessage.audio && (
                <div style={{ textAlign: 'center' }}>
                  <audio controls style={{ width: '70%', maxWidth: '100%' }}>
                    <source src={selectedMessage.audio} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
                )}
              </>
            )}
          </Modal.Body>
        </Modal>
        <Switch/>
      </Container>
    </div>
  );
};

export default Profile;
