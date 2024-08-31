import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc,getDoc, setDoc, collection, query, where, getDocs, updateDoc} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";


const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <StyledModal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </StyledModal>
  );
};

const EnvelopeMessage = ({ message, onClick, isNew }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <StyledEnvelope onClick={handleClick} isNew={isNew}>
      <div className="tooltip-container">
        <span className="tooltip">{isNew ? "NEW MESSAGE" : "MESSAGE"}</span>  
        <span className="text">@</span>
      </div>
    </StyledEnvelope>
  );
};

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [customLink, setCustomLink] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = getAuth();
  const db = getFirestore();
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);


  const generateUniqueLink = useCallback(async (userId) => {
    const userDoc = doc(db, "users", userId);
    const docSnap = await getDoc(userDoc);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      if (!userData.customLink) {
        // Generate a unique link identifier
        const uniqueLinkId = uuidv4();
        // Use localhost for development
        const uniqueLink = `https://anonytalks.vercel.app/message/${uniqueLinkId}/${userId}`;

        // Store the unique link in Firestore
        await setDoc(userDoc, { customLink: uniqueLink }, { merge: true });

        setCustomLink(uniqueLink); // Update state with the new link
        console.log("Generated unique link:", uniqueLink);
      }
    }
  }, [db]);

  const fetchMessages = useCallback(async (userId) => {
    try {
      const messagesRef = collection(db, "messages");
      const q = query(messagesRef, where("recipientId", "==", userId));
      const querySnapshot = await getDocs(q);

      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setMessages(fetchedMessages);
      
      // Count unread messages
      const unreadMessages = fetchedMessages.filter(message => !message.isRead);
      setUnreadCount(unreadMessages.length);
    } catch (error) {
      console.error("Error fetching messages: ", error);
    }
  }, [db]);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUsername(userData.username || "");
          setProfilePicture(userData.profilePictureUrl || "");
          setCustomLink(userData.customLink || "");

          // Generate a unique link if not already set
          if (!userData.customLink) {
            await generateUniqueLink(user.uid);
          }

          // Fetch messages for the user
          await fetchMessages(user.uid);
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
          alert("Link copied to clipboard!");
        })
        .catch((error) => {
          console.error("Failed to copy link: ", error);
        });
    }
  };

  const handleMessageClick = useCallback(async (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);

    // Mark the message as read if it wasn't already
    if (!message.isRead) {
      const messageRef = doc(db, "messages", message.id);
      await updateDoc(messageRef, { isRead: true });

      // Update the local state
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

  

  return (
    <StyledWrapper>
      <div className="container">
        <div className="profile_info">
          {profilePicture && (
            <img
              className="profile_picture"
              src={profilePicture}
              alt="Profile"
            />
          )}
          <div className="username">
            <span className="label">Username:</span> {username}
            <button className="button" onClick={handleShareClick}>
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
              </svg>
              Share
            </button>
          </div>
        </div>

        <div className="messages_section">
          <h3>Anonymous Messages {unreadCount > 0 && `(${unreadCount} new)`}</h3>
          {messages.length > 0 ? (
            <div className="messages_grid">
              {messages.map((message) => (
                <EnvelopeMessage
                  key={message.id}
                  message={message}
                  onClick={() => handleMessageClick(message)}
                  isNew={!message.isRead}
                />
              ))}
            </div>
          ) : (
            <p>No messages received yet.</p>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedMessage && (
              <div className="modal-content">
                  <div className="message-content">
                    <h4>Message</h4>
                    <p>{selectedMessage.content}</p>
                    <small>
                      Received on:{" "}
                      {new Date(selectedMessage.createdAt.seconds * 1000).toLocaleDateString()}
                    </small>
                  </div>
                  <button className="butt">
                  <svg  
            className="svgIcon"
            viewBox="0 0 448 512"
            height="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
                  </button>
              </div>
        )}
      </Modal>
    </StyledWrapper>
  );
};

const StyledModal = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 11, 30, 0.85); /* Dark space background with transparency */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: #132040; /* Dark blue background from Among Us */
    color: #ffffff; /* White text for contrast */
    border-radius: 12px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
    max-height: 80vh;
    overflow-y: auto;
    text-align: center;
    border: 2px solid #00ffff; /* Cyan border like task outlines */
    box-shadow: 0 8px 16px rgba(0, 255, 255, 0.3); /* Cyan glow for depth */
  }

  .message-content {
    font-family: 'VT323', monospace; /* Among Us style font */
    text-align: left;
  }

  .message-content h4 {
    margin: 0;
    font-size: 1.6em;
    font-weight: bold;
    color: #00ffff; /* Cyan color for headers */
    text-shadow: 1px 1px 4px #000; /* Shadow for a popping effect */
  }

  .message-content p {
    margin: 15px 0;
    font-size: 1em;
    line-height: 1.6;
    color: #ffffff;
  }

  .message-content small {
    color: #00ffff; /* Cyan color for timestamps */
    font-size: 0.9em;
  }

  .butt {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid #00ffff; /* Cyan accent */
    background: #ff1616; /* Among Us red for button */
    color: #ffffff;
    font-size: 1.4em;
    font-family: 'VT323', monospace; /* Among Us style font */
    margin-top: 20px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 8px rgba(0, 255, 255, 0.3); /* Cyan glow */
  }

  .butt:hover {
    background-color: #cc0000; /* Darker red on hover */
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 255, 255, 0.4); /* Enhanced cyan glow */
  }

  @media (max-width: 480px) {
    .modal-content {
      width: 90%;
      padding: 15px;
    }

    .message-content h4 {
      font-size: 1.4em;
    }

    .message-content p {
      font-size: 0.95em;
    }

    .butt {
      height: 44px;
      width: 44px;
    }
  }
`;

const StyledEnvelope = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  justify-content: center;
  padding: 1rem;

  .tooltip-container {
    height: 80px;
    width: 120px;
    border-radius: 12px;
    background: ${({ isNew }) => (isNew ? '#ff1616' : '#132040')}; /* Red for new messages, dark blue for old */
    border: 2px solid #00ffff; /* Cyan border like task outlines */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 8px 16px rgba(0, 255, 255, 0.2); /* Cyan glow for depth */
    position: relative;
    transition: all 0.3s ease;
    margin: 0 auto;
    margin-top: 1rem;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px rgba(0, 255, 255, 0.3); /* Enhanced cyan glow on hover */
    }

    &::before {
      content: "";
      position: absolute;
      top: -30%;
      left: 0;
      right: 0;
      height: 30%;
      background: #00ffff; /* Cyan top accent */
      border-bottom: 2px solid #ffffff;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transition: all 0.3s ease;
      z-index: -1;
    }

    &:hover::before {
      transform: scaleY(1.1);
    }

    .text {
      color: #ffffff; /* White text for high contrast */
      font-weight: 700;
      font-size: 30px;
      transition: all 0.3s ease;
      text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
      font-family: 'VT323', monospace; /* Among Us style font */
    }

    &:hover .text {
      transform: scale(1.2);
    }
  }

  .tooltip {
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    background: #132040; /* Dark blue background */
    padding: 10px 15px;
    border: 1px solid #00ffff; /* Cyan border */
    border-radius: 8px;
    box-shadow: 0 6px 10px rgba(0, 255, 255, 0.2);
    transition: all 0.3s ease;
    pointer-events: none;
    width: max-content;
    max-width: 180px;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    color: #00ffff; /* Cyan text for readability */
    letter-spacing: 0.5px;
    z-index: 2;
    font-family: 'VT323', monospace; /* Among Us style font */
  }

  .tooltip-container:hover .tooltip {
    top: -70px;
    opacity: 1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr)); /* Ensure grid responsiveness */
    gap: 0.8rem;

    .tooltip-container {
      height: 70px;
      width: 100px;
      margin: 0 auto;
    }

    .text {
      font-size: 26px;
    }

    .tooltip {
      font-size: 12px;
      max-width: 150px;
    }

    .tooltip-container:hover .tooltip {
      top: -60px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr)); /* Ensure grid responsiveness */
    gap: 0.6rem;

    .tooltip-container {
      height: 60px;
      width: 85px;
    }

    .text {
      font-size: 22px;
    }

    .tooltip {
      font-size: 11px;
      max-width: 130px;
      padding: 6px 10px;
    }

    .tooltip-container:hover .tooltip {
      top: -55px;
    }
  }

  @media (max-width: 300px) {
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr)); /* Ensure grid responsiveness */
    gap: 0.4rem;

    .tooltip-container {
      height: 50px;
      width: 70px;
    }

    .text {
      font-size: 18px;
    }

    .tooltip {
      font-size: 10px;
      max-width: 100px;
      padding: 4px 8px;
    }

    .tooltip-container:hover .tooltip {
      top: -50px;
    }
  }

  .new-indicator {
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: #ff1616; /* Red for new message indicator */
    color: #fff;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
    font-family: 'VT323', monospace; /* Among Us style font */
  }

  ${props => props.isNew && `
    .tooltip-container .tooltip {
      background-color: #ff1616; /* Red background for new messages */
      font-weight: bold;
    }
    
    .text {
      color: #ff1616; /* Red text for new messages */
    }
  `}
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000b1e; /* Dark space background */
  padding: 20px;
  box-sizing: border-box;

  .container {
    width: 100%;
    max-width: 900px;
    border-radius: 16px;
    overflow: hidden;
    background: #132040; /* Dark blue background reminiscent of the Skeld map */
    color: #ffffff;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    border: 2px solid #00ffff; /* Cyan border like task outlines */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .profile_info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
  }

  .profile_picture {
    width: 120px;
    height: 120px;
    border-radius: 50% 50% 35% 35%; /* Crewmate shape */
    object-fit: cover;
    margin-right: 20px;
    border: 5px solid #ff1616; /* Red border like a crewmate */
    box-shadow: 0 0 8px rgba(255, 22, 22, 0.5);
  }

  .username {
    font-size: 1.8em;
    font-weight: 700;
    color: #00ffff; /* Cyan color for username */
    position: relative;
    padding-right: 150px;
    text-shadow: 1px 1px 3px rgba(0, 255, 255, 0.4);
  }

  .label {
    font-weight: 600;
    color: #ff1616; /* Red color for labels */
  }

  .button {
    height: 40px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.6em 0.2em;
    font-size: 1em;
    color: #fff;
    background: #ff1616; /* Red background like emergency button */
    border-radius: 8px;
    border: none;
    box-shadow: 0 6px 12px rgba(255, 22, 22, 0.4);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.3s, transform 0.3s;
    font-family: 'VT323', monospace; /* Retro font similar to Among Us */
  }

  .button:hover {
    background: #cc0000; /* Darker red on hover */
    transform: scale(1.1);
  }

  .icon {
    fill: #ffffff;
    width: 24px;
    margin-right: 8px;
  }

  .messages_section {
    margin-top: 20px;
    width: 100%;
  }

  .messages_section h3 {
    margin-bottom: 15px;
    font-size: 1.6em;
    color: #00ffff; /* Cyan for headings */
    text-shadow: 1px 1px 3px rgba(0, 255, 255, 0.4);
  }

  .messages_grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
  }

  .message_item {
    background: #1c2b4f; /* Slightly lighter blue background */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    border: 1px solid #00ffff; /* Cyan border */
    transition: transform 0.2s;
  }

  .message_item:hover {
    transform: translateY(-5px);
  }

  .message_item p {
    margin: 0;
    font-size: 1em;
    color: #ffffff;
  }

  .message_item small {
    display: block;
    margin-top: 5px;
    font-size: 0.9em;
    color: #ff1616; /* Red color for timestamps */
  }

  @media (max-width: 480px) {
    padding: 10px;

    .container {
      padding: 15px;
    }

    .profile_info {
      flex-direction: column;
      align-items: flex-start;
    }

    .profile_picture {
      width: 100px;
      height: 100px;
      margin-right: 0;
      margin-bottom: 15px;
    }

    .username {
      font-size: 1.4em;
      padding-right: 0;
      margin-bottom: 10px;
    }

    .button {
      position: static;
      transform: none;
      margin-top: 10px;
      padding: 0.6em 1.2em;
      font-size: 0.9em;
    }

    .messages_section h3 {
      font-size: 1.4em;
    }

    .messages_grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 15px;
    }

    .message_item {
      padding: 15px;
    }

    .message_item p {
      font-size: 0.9em;
    }

    .message_item small {
      font-size: 0.8em;
    }
  }
`;

export default Profile;
