import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const MessageForm = () => {
  const { userId } = useParams(); // Get userId from URL
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audio, setAudio] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const db = getFirestore();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      if (!userId) {
        console.error("userId is undefined.");
        return;
      }
      
      try {
        const userDoc = doc(db, "users", userId);
        const userSnap = await getDoc(userDoc);
        if (userSnap.exists()) {
          setUsername(userSnap.data().username);
        } else {
          console.error("No such user!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUsername();
  }, [db, userId]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      recorder.ondataavailable = e => {
        const audioBlob = e.data;
        const reader = new FileReader();
        reader.onloadend = () => {
          setAudio(reader.result);
          setMessage(prevMessage => prevMessage + "\n[Voice meowail]");
        };
        reader.readAsDataURL(audioBlob);
      };
      recorder.start();
      setIsRecording(true);
    }).catch(err => console.error("Error accessing media devices.", err));
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const handleAudioRemoval = () => {
    setAudio(null);
    setMessage(prevMessage => prevMessage.replace("\n[Voice meowail]", ""));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "" && !audio) return;

    if (!userId) {
      console.error("Cannot send message: recipientId (userId) is undefined.");
      alert("Failed to send message. Please try again.");
      return;
    }

    try {
      const messagesRef = collection(db, "messages");
      await addDoc(messagesRef, {
        recipientId: userId,
        content: message,
        createdAt: new Date(),
        isAnonymous: false,
        senderId: null, 
        isRead: false,
        isAnswered: false,
        audio: audio 
      });

      setMessage("");
      setAudio(null);
    } catch (error) {
      console.error("Error adding document:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  const handleClick = (e) => {
    setClicked(true); 
    setTimeout(() => setClicked(false), 1600);
  };

  return (
    <StyledWrapper>
      <div className="container">
        <h2>Send a anonymous message to {username}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              required
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
            ></textarea>
          </div>
          <div className="recording-controls">
            {isRecording ? (
              <button type="button" onClick={stopRecording}>stop recording</button>
            ) : (
              <button type="button" onClick={startRecording}>
                <i className="fas fa-microphone"></i>
                voicemail
              </button>            
            )}
            {audio && (
              <button type="button" onClick={handleAudioRemoval}>
                remove <i className="fas fa-microphone"></i> </button>
            )}
            <button     type="submit" 
              onClick={handleClick}
              className={clicked ? "clicked" : ""}
              disabled={message.trim() === ""}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              width="36px"
              height="36px"
            >
              <rect width="36" height="36" x="0" y="0" fill="#fdd835" />
              <path
                fill="#e53935"
                d="M38.67,42H11.52C11.27,40.62,11,38.57,11,36c0-5,0-11,0-11s1.44-7.39,3.22-9.59 c1.67-2.06,2.76-3.48,6.78-4.41c3-0.7,7.13-0.23,9,1c2.15,1.42,3.37,6.67,3.81,11.29c1.49-0.3,5.21,0.2,5.5,1.28 C40.89,30.29,39.48,38.31,38.67,42z"
              />
              <path
                fill="#b71c1c"
                d="M39.02,42H11.99c-0.22-2.67-0.48-7.05-0.49-12.72c0.83,4.18,1.63,9.59,6.98,9.79 c3.48,0.12,8.27,0.55,9.83-2.45c1.57-3,3.72-8.95,3.51-15.62c-0.19-5.84-1.75-8.2-2.13-8.7c0.59,0.66,3.74,4.49,4.01,11.7 c0.03,0.83,0.06,1.72,0.08,2.66c4.21-0.15,5.93,1.5,6.07,2.35C40.68,33.85,39.8,38.9,39.02,42z"
              />
              <path
                fill="#212121"
                d="M35,27.17c0,3.67-0.28,11.2-0.42,14.83h-2C32.72,38.42,33,30.83,33,27.17 c0-5.54-1.46-12.65-3.55-14.02c-1.65-1.08-5.49-1.48-8.23-0.85c-3.62,0.83-4.57,1.99-6.14,3.92L15,16.32 c-1.31,1.6-2.59,6.92-3,8.96v10.8c0,2.58,0.28,4.61,0.54,5.92H10.5c-0.25-1.41-0.5-3.42-0.5-5.92l0.02-11.09 c0.15-0.77,1.55-7.63,3.43-9.94l0.08-0.09c1.65-2.03,2.96-3.63,7.25-4.61c3.28-0.76,7.67-0.25,9.77,1.13 C33.79,13.6,35,22.23,35,27.17z"
              />
              <path
                fill="#01579b"
                d="M17.165,17.283c5.217-0.055,9.391,0.283,9,6.011c-0.391,5.728-8.478,5.533-9.391,5.337 c-0.913-0.196-7.826-0.043-7.696-5.337C9.209,18,13.645,17.32,17.165,17.283z"
              />
              <path
                fill="#212121"
                d="M40.739,37.38c-0.28,1.99-0.69,3.53-1.22,4.62h-2.43c0.25-0.19,1.13-1.11,1.67-4.9 c0.57-4-0.23-11.79-0.93-12.78c-0.4-0.4-2.63-0.8-4.37-0.89l0.1-1.99c1.04,0.05,4.53,0.31,5.71,1.49 C40.689,24.36,41.289,33.53,40.739,37.38z"
              />
              <path
                fill="#81d4fa"
                d="M10.154,20.201c0.261,2.059-0.196,3.351,2.543,3.546s8.076,1.022,9.402-0.554 c1.326-1.576,1.75-4.365-0.891-5.267C19.336,17.287,12.959,16.251,10.154,20.201z"
              />
              <path
                fill="#212121"
                d="M17.615,29.677c-0.502,0-0.873-0.03-1.052-0.069c-0.086-0.019-0.236-0.035-0.434-0.06 c-5.344-0.679-8.053-2.784-8.052-6.255c0.001-2.698,1.17-7.238,8.986-7.32l0.181-0.002c3.444-0.038,6.414-0.068,8.272,1.818 c1.173,1.191,1.712,3,1.647,5.53c-0.044,1.688-0.785,3.147-2.144,4.217C22.785,29.296,19.388,29.677,17.615,29.677z M17.086,17.973 c-7.006,0.074-7.008,4.023-7.008,5.321c-0.001,3.109,3.598,3.926,6.305,4.27c0.273,0.035,0.48,0.063,0.601,0.089 c0.563,0.101,4.68,0.035,6.855-1.732c0.865-0.702,1.299-1.57,1.326-2.653c0.051-1.958-0.301-3.291-1.073-4.075 c-1.262-1.281-3.834-1.255-6.825-1.222L17.086,17.973z"
              />
              <path
                fill="#e1f5fe"
                d="M15.078,19.043c1.957-0.326,5.122-0.529,4.435,1.304c-0.489,1.304-7.185,2.185-7.185,0.652 C12.328,19.467,15.078,19.043,15.078,19.043z"
              />
            </svg>
            <span className="now">sent</span>
            <span className="play">send</span>
            </button>
          </div>
        </form>
        <h1><a onClick={(e) => 
        {
          e.preventDefault(); 
          window.open('/', '_blank');
        }}>
          Do you want to receive anonymous messages?</a></h1>
      </div>
      <Footer className="footer">
          <h3>
            Echo<span className="cyan">I</span>n
            <div>
              <FontAwesomeIcon icon={faBoxOpen} className="box-icon" />
            </div>
            o<span className="red">x</span>
          </h3>
          <p>&copy; 2024 EchoInbox. All rights reserved.</p>
      </Footer>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Added to allow footer to be positioned at the bottom */
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: linear-gradient(to bottom, #000b1e, #1c2b4f); /* Dark space gradient */
  padding: 20px;
  box-sizing: border-box;
  position: fixed;

.container {
  width: 100%;
  max-width: 600px;
  border-radius: 12px;
  overflow: hidden;
  background: #1b2a3e; /* Slightly lighter blue for a softer look */
  color: #e0e0e0; /* Light gray text for better readability */
  padding: 30px; /* Increased padding for more space */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6); /* Enhanced shadow for depth */
  backdrop-filter: blur(12px); /* Increased blur effect */
  border: 3px solid #00ffff; /* Thicker cyan border */
  margin-bottom: 5rem;
}

    
  h1 {
    margin-top: 2rem;
    cursor: pointer;
    color: #e74c3c;
    font-size: 0.6rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  h1:hover {
  cursor: pointer;
  color: hsl(49deg 98% 60%);
  font-size: 0.6rem;
  margin-bottom: 1rem;
  text-align: center;
}

  h2 {
    margin-bottom: 20px;
    font-size: clamp(1rem, 2vw, 2rem);    
    font-family: 'VT323', monospace; /* Retro font similar to Among Us */
    color: hsl(49deg 98% 60%); 
    font-weight: 500;
    text-shadow: 
      0 2px 4px rgba(0, 255, 255, 0.5),
      0 0 1px rgba(255, 255, 255, 0.5); /* Initial glow */
    animation: flicker-move-electric-thunder 2s infinite; /* Apply the flicker, movement, electricity, and thunder animation */
  }

@keyframes flicker-move-electric-thunder {
  0% {
    transform: translateX(-5px);
    opacity: 0.9;
    text-shadow: 
      0 2px 4px rgba(0, 255, 255, 0.5),
      0 0 1px rgba(255, 255, 255, 0.5);
  }
  10% {
    transform: translateX(5px);
    opacity: 0.8;
    text-shadow: 
      0 2px 6px rgba(0, 255, 255, 0.7),
      0 0 2px rgba(255, 255, 255, 0.6);
  }
  20% {
    transform: translateX(-5px);
    opacity: 0.6;
    text-shadow: 
      0 3px 8px rgba(0, 255, 255, 1.0),
      0 0 3px rgba(255, 255, 255, 0.8);
  }
  30% {
    transform: translateX(5px);
    opacity: 0.5;
    text-shadow: 
      0 4px 10px rgba(0, 255, 255, 1.2),
      0 0 4px rgba(255, 255, 255, 1.0);
  }
  40% {
    transform: translateX(-5px);
    opacity: 0.7;
    text-shadow: 
      0 3px 8px rgba(0, 255, 255, 1.0),
      0 0 3px rgba(255, 255, 255, 0.8);
  }
  50% {
    transform: translateX(5px);
    opacity: 0.6;
    text-shadow: 
      0 2px 6px rgba(0, 255, 255, 0.9),
      0 0 3px rgba(255, 255, 255, 0.7);
  }
  60% {
    transform: translateX(-5px);
    opacity: 0.8;
    text-shadow: 
      0 4px 10px rgba(0, 255, 255, 1.2),
      0 0 4px rgba(255, 255, 255, 1.0);
  }
  70% {
    transform: translateX(5px);
    opacity: 0.7;
    text-shadow: 
      0 3px 8px rgba(0, 255, 255, 1.0),
      0 0 3px rgba(255, 255, 255, 0.8);
  }
  80% {
    transform: translateX(-5px);
    opacity: 0.5;
    text-shadow: 
      0 5px 12px rgba(0, 255, 255, 1.5),
      0 0 5px rgba(255, 255, 255, 1.2);
  }
  90% {
    transform: translateX(5px);
    opacity: 0.6;
    text-shadow: 
      0 4px 10px rgba(0, 255, 255, 1.2),
      0 0 4px rgba(255, 255, 255, 1.0);
  }
  100% {
    transform: translateX(-5px);
    opacity: 0.9;
    text-shadow: 
      0 2px 4px rgba(0, 255, 255, 0.5),
      0 0 1px rgba(255, 255, 255, 0.5);
  }
}


  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 1.1em;
    color: #ff1616; /* Red color for labels */
  }

textarea {
  width: 100%;
  padding: 15px; /* Increased padding for comfort */
  border: 1px solid #00ffff; /* Cyan border */
  border-radius: 10px; /* Slightly larger border-radius */
  background: #223b5e; /* Darker background for better contrast */
  color: #ffffff; /* White text */
  font-size: 1.1em; /* Larger font size */
  font-family: 'VT323', monospace;
  resize: vertical;
  box-shadow: inset 0 2px 4px rgba(0, 255, 255, 0.6); /* Inset shadow */
  transition: background 0.3s, border-color 0.3s;
}

  .cyan {
    color: #00FFFF; /* Cyan color */
  }

  .red {
    color: #FF0000; /* Red color */
  }

  .box-icon {
    font-size: 1.2em; /* Adjust size as needed */
    color: #FF0000; /* Red color for the box */
    z-index: 2;
  }

  h3 {
    display: flex;
    align-items: center;
    font-size: clamp(2rem, 4vw, 2.5rem);
    color: #fff;
    margin: 0;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .footer {
  position: absolute; /* or 'fixed' */
  bottom: 0;
  left: 0;
  padding: 10px 0;
  background-color: linear-gradient(to bottom, #000b1e, #1c2b4f);;
  color: white;
  text-align: center;
  position: relative;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-content p {
  font-size: 0.9rem;
}


  textarea:focus {
    background: #132040; /* Darker blue on focus */
    border-color: #00ffff; /* Cyan border on focus */
    outline: none;
  }

  .recording-controls {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
    
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
    color: black;
    text-transform: uppercase;
    cursor: pointer;
    border: solid 2px black;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: clamp(9.5px, 2vw, 17px);    
    background-color: hsl(49deg 98% 60%);
    border-radius: 50px;
    position: relative;
    overflow: hidden;
    transition: all 0.5s ease;
    margin: 0 auto; /* Center horizontally */
  }

  button:active {
    transform: scale(0.9);
    transition: all 100ms ease;
  }

  button svg {
    transition: all 0.5s ease;
    z-index: 2;
  }

  .play {
    transition: all 0.5s ease;
    transition-delay: 300ms;
  }

  .now {
    position: absolute;
    left: 0;
    transform: translateX(-100%);
    transition: all 0.5s ease;
    z-index: 2;
  }

  .clicked svg {
    transform: scale(3) translate(50%);
  }

  .clicked .now {
    transform: translateX(10px);
    transition-delay: 300ms;
  }

  .clicked .play {
    transform: translateX(200%);
    transition-delay: 300ms;
  }

  .disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 600px) {
    .container {
      padding: 15px;
    }

    button {
      width: 40%; /* Full width on mobile */
      border-radius: 40px; /* Adjust radius for mobile */
    }
    
        .recording-controls {
      flex-direction: column;
    }

    .recording-controls button {
      width: 35%;
      margin-bottom: 10px;
    }

    .recording-controls button:last-child {
      margin-bottom: 0;
    }
  }
      @media (max-width: 768px) {
    .recording-controls {
      flex-direction: row;
    }

    .recording-controls button {
      width: 35%;
      margin-bottom: 10px;
    }

    .recording-controls button:last-child {
      margin-bottom: 0;
    }
  }
`;

const Footer = styled.footer`
  width: 100%;
  max-width: 100vw;
  text-align: center;
  padding: 10px;
  background-color: linear-gradient(to bottom, #000b1e, #1c2b4f); /* Match container background */
  margin-top: 2rem; /* Push footer to the bottom */
  font-family: 'VT323', monospace;
  font-size: 0.85em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between; /* Center content */
  position: fixed;
  bottom: 0;

  .left {
    margin-left: 10px; /* Add spacing as needed */
  }

  .right {
    margin-right: 10px; /* Add spacing as needed */
  }
    
  @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on smaller screens */
    justify-content: center; /* Center content in mobile view */
  }
`;
export default MessageForm;
