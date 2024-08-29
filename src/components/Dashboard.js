import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, query, where, getDocs } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [customLink, setCustomLink] = useState("");
  const [messages, setMessages] = useState([]);
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
      navigator.clipboard.writeText(customLink).then(() => {
        alert("Link copied to clipboard!");
      }).catch((error) => {
        console.error("Failed to copy link: ", error);
      });
    }
  };

  return (
    <StyledWrapper>
      <div className="container">
        <div className="profile_info">
          {profilePicture && (
            <img className="profile_picture" src={profilePicture} alt="Profile" />
          )}
          <div className="username">
            <span className="label">Username:</span> {username}
          </div>
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

        <div className="messages_section">
          <h3>Anonymous Messages</h3>
          {messages.length > 0 ? (
            <ul className="messages_list">
              {messages.map((message) => (
                <li key={message.id} className="message_item">
                  <p>{message.content}</p>
                  <small>Received on: {new Date(message.createdAt.seconds * 1000).toLocaleDateString()}</small>
                </li>
              ))}
            </ul>
          ) : (
            <p>No messages received yet.</p>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #333;
  padding: 20px;
  box-sizing: border-box;

  .container {
    width: 100%;
    max-width: 400px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .profile_info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile_picture {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  .username {
    font-size: 1.2em;
    font-weight: 700;
    margin: 10px 0;
  }

  .link {
    font-size: 1em;
    margin-top: 10px;
  }

  .label {
    font-weight: 600;
  }

  a {
    color: #1e90ff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .messages_section {
    margin-top: 20px;
    width: 100%;
    text-align: left;
  }

  .messages_list {
    list-style: none;
    padding: 0;
  }

  .message_item {
    background-color: #444;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .message_item p {
    margin: 0;
    font-size: 0.9em;
  }

  .message_item small {
    display: block;
    margin-top: 5px;
    font-size: 0.8em;
    color: #bbb;
  }

  @media (max-width: 480px) {
    .container {
      max-width: 100%;
    }

    .username {
      font-size: 1em;
    }

    .profile_picture {
      width: 80px;
      height: 80px;
    }
  }

  .button {
    cursor: pointer;
    padding: 1em;
    font-size: 1em;
    width: 7em;
    aspect-ratio: 1/0.25;
    color: white;
    background: #212121;
    background-size: cover;
    background-blend-mode: overlay;
    border-radius: 0.5em;
    outline: 0.1em solid #353535;
    border: 0;
    box-shadow: 0 0 1em 1em rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .button:hover {
    transform: scale(1.1);
    box-shadow: 0 0 1em 0.45em rgba(0, 0, 0, 0.1);
    background: linear-gradient(45deg, #212121, #252525);
    background: radial-gradient(
      circle at bottom,
      rgba(50, 100, 180, 0.5) 10%,
      #212121 70%
    );
    outline: 0;
  }

  .icon {
    fill: white;
    width: 1em;
    aspect-ratio: 1;
    top: 0;
    left: 0;
    margin: auto;
    transform: translate(-35%, 10%);
  }
`;

export default Profile;
