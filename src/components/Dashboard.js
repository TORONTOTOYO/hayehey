import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc,getDoc, setDoc, collection, query, where, getDocs,} from "firebase/firestore";
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

const EnvelopeMessage = ({ message, onClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <StyledEnvelope onClick={handleClick}>
      <div className="tooltip-container">
      <span className="tooltip">MESSAGE</span>  
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
      // Query messages where the recipientId matches the current user's ID
      const q = query(messagesRef, where("recipientId", "==", userId));
      const querySnapshot = await getDocs(q);

      const fetchedMessages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setMessages(fetchedMessages);
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

  const handleMessageClick = useCallback((message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  }, []);

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
          <h3>Anonymous Messages</h3>
          {messages.length > 0 ? (
            <div className="messages_grid">
              {messages.map((message) => (
                <EnvelopeMessage
                  key={message.id}
                  message={message}
                  onClick={() => handleMessageClick(message)}
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
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: linear-gradient(145deg, #1e1e1e, #3a3a3a);
    color: #f5f5f5;
    border-radius: 15px;
    padding: 20px;
    width: 100%;
    max-width: 300px;
    max-height: 80vh;
    overflow-y: auto;
    text-align: center;
    backdrop-filter: blur(5px);
  }

  .message-content {
    font-family: 'Press Start 2P'; /* Retro pixel font */
  }

  .message-content h4 {
    margin: 0;
    font-size: 1.4em;
    font-weight: 600;
    color: #ffcc00; /* Yellow, resembling the crewmates */
  }

  .message-content p {
    margin: 20px 0;
    font-size: 1em;
    color: #d0d0d0;
  }

  .message-content small {
    color: #a0a0a0;
    font-size: 0.8em;
  }

  .butt {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    border: none;
    background: linear-gradient(45deg, #ff0055, #ff6600, #ffcc00, #00cc99);
    margin-top: 20px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .butt:hover {
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.5); /* Pinkish glow */
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    .modal-content {
      width: 95%;
      padding: 15px;
    }

    .message-content h4 {
      font-size: 1.2em;
    }

    .message-content p {
      font-size: 0.9em;
    }

    .butt {
      height: 35px;
      width: 35px;
    }
  }
`;

const StyledEnvelope = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(75px, 1fr)); /* Adjust column size dynamically */
  gap: 1rem;
  justify-content: center;
  padding: 1rem;

  .tooltip-container {
    height: 70px;
    width: 110px;
    border-radius: 12px;
    background: linear-gradient(135deg, #2c3e50, #1a2533);
    border: 2px solid #34495e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    position: relative;
    transition: all 0.3s ease;
    z-index: 1;
    margin: 0 auto;
    margin-top: 1rem;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }

    &::before {
      content: "";
      position: absolute;
      top: -40%;
      left: 0;
      right: 0;
      height: 40%;
      background: linear-gradient(135deg, #34495e, #2c3e50);
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transform: perspective(1000px) rotateX(-60deg);
      transform-origin: bottom;
      transition: all 0.3s ease;
      z-index: -1;
    }

    &:hover::before {
      transform: perspective(1000px) rotateX(0deg);
    }

    .text {
      color: #f1c40f;
      font-weight: bold;
      font-size: 36px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease;
    }

    &:hover .text {
      transform: scale(1.1);
    }
  }

  .tooltip {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    background: linear-gradient(135deg, #ecf0f1, #bdc3c7);
    padding: 10px 15px;
    border: 1px solid #95a5a6;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    pointer-events: none;
    width: max-content;
    max-width: 200px;
    text-align: center;
    font-size: 14px;
    font-weight: 600;
    color: #2c3e50;
    letter-spacing: 0.5px;
    z-index: 2;
  }

  .tooltip-container:hover .tooltip {
    top: -70px;
    opacity: 1;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); /* Adjust column count based on available space */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr); /* Fixed to 4 columns for mobile view */
    
    .tooltip-container {
      height: 60px;
      width: 90px;
    }

    .text {
      font-size: 28px;
    }

    .tooltip {
      font-size: 11px;
      max-width: 150px;
    }

    .tooltip-container:hover .tooltip {
      top: -60px;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(4, 1fr); /* Fixed to 4 columns per row */

    .tooltip-container {
      height: 50px;
      width: 75px;
      margin-left: 2.5rem;
    }

    .text {
      font-size: 24px;
    }

    .tooltip {
      font-size: 10px;
      max-width: 120px;
      padding: 8px 12px;
    }

    .tooltip-container:hover .tooltip {
      top: -50px;
    }
  }

  @media (max-width: 300px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust to 2 columns for very small screens */
    gap: 0.25rem;

    .tooltip-container {
      height: 40px;
      width: 60px;
      margin-left: 0.7rem;
    }

    .text {
      font-size: 20px;
    }

    .tooltip {
      font-size: 9px;
      max-width: 100px;
      padding: 6px 10px;
    }

    .tooltip-container:hover .tooltip {
      top: -45px;
    }
  }
`;


const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1e1e1e, #2a2a2a);
  padding: 20px;
  box-sizing: border-box;

  .container {
    width: 100%;
    max-width: 900px;
    border-radius: 15px;
    overflow: hidden;
    background: linear-gradient(145deg, #2c2c2c, #3a3a3a);
    color: #f5f5f5;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
    border: 4px solid #444;
  }

  .username {
    font-size: 1.6em;
    font-weight: 700;
    color: #ffcc00; /* Yellow, resembling the crewmates */
    position: relative;
    padding-right: 140px;
  }

  .label {
    font-weight: 600;
    color: #aaa;
  }

  .button {
    height: 30px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0.75em 0.5em;
    font-size: 1em;
    color: #fff;
    background: #444;
    border-radius: 8px;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.3s, transform 0.3s;
  }

  .button:hover {
    background: linear-gradient(45deg, #333, #444);
    transform: scale(1.05);
  }

  .icon {
    fill: #fff;
    width: 24px;
    margin-right: 8px;
  }

  .messages_section {
    margin-top: 20px;
    width: 100%;
  }

  .messages_section h3 {
    margin-bottom: 15px;
    font-size: 1.5em;
    color: #ffcc00; /* Yellow text */
  }

  .messages_grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
  }

  .message_item {
    background: linear-gradient(145deg, #333, #222);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s;
  }

  .message_item:hover {
    transform: translateY(-5px);
  }

  .message_item p {
    margin: 0;
    font-size: 0.9em;
    color: #ddd;
  }

  .message_item small {
    display: block;
    margin-top: 5px;
    font-size: 0.8em;
    color: #888;
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
      width: 90px;
      height: 90px;
      margin-right: 0;
      margin-bottom: 15px;
    }

    .username {
      font-size: 1.3em;
      padding-right: 0;
      margin-bottom: 10px;
    }

    .button {
      position: static;
      transform: none;
      margin-top: 10px;
      padding: 0.5em 1em;
      font-size: 0.9em;
    }

    .messages_section h3 {
      font-size: 1.2em;
    }

    .messages_grid {
      grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
      gap: 10px;
    }

    .message_item {
      padding: 10px;
    }

    .message_item p {
      font-size: 0.8em;
    }

    .message_item small {
      font-size: 0.7em;
    }
  }

`;

export default Profile;
