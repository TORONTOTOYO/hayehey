// src/components/MessageForm.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getFirestore, doc, setDoc, collection, addDoc } from "firebase/firestore";

const MessageForm = () => {
  const { userId } = useParams(); // Get userId from URL
  const [message, setMessage] = useState("");
  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Create a new message document
    const messagesRef = collection(db, "messages");
    await addDoc(messagesRef, {
      recipientId: userId,
      content: message,
      createdAt: new Date(),
      isAnonymous: false,
      senderId: null, // You might want to add senderId here if it's available
      isRead: false,
    });

    setMessage("");
    alert("Message sent!");
  };

  return (
    <StyledWrapper>
      <div className="container">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
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
    max-width: 600px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    background-color: #222;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  h2 {
    margin-bottom: 20px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #333;
    color: white;
    font-size: 1em;
  }

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #1e90ff;
    color: white;
    font-size: 1em;
    cursor: pointer;
  }

  button:hover {
    background-color: #007bff;
  }
`;

export default MessageForm;
