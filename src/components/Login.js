import React, { useState } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyDFpLa-6AHKHspMKaMtNC1yv9b4QRYrcIg",
  authDomain: "project-863fc.firebaseapp.com",
  projectId: "project-863fc",
  storageBucket: "project-863fc.appspot.com",
  messagingSenderId: "31917567513",
  appId: "1:31917567513:web:b6871ec45e97fb63324488",
  measurementId: "G-1S141JYG4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password || !username) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString()
      });

      toast.success("Successfully registered!");
      // Clear form fields
      setEmail("");
      setPassword("");
      setUsername("");
    } catch (error) {
      toast.error(`Registration error`);  
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in!");
      navigate('/dashboard')
      // Clear form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(`Login error`);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <StyledWrapper>
      <ToastContainer />
      <div className="container">
        <input type="checkbox" id="register_toggle" />
        <div className="slider">
          <form className="form" onSubmit={handleLogin}>
            <span className="title">Login</span>
            <div className="form_control">
              <input 
                type="email" 
                className="input" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Email</label>
            </div>
            <div className="form_control">
              <input 
                type="password" 
                className="input" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">Password</label>
            </div>
            <button type="submit">Login</button>

            <span className="bottom_text">
              Don't have an account?{" "}
              <label htmlFor="register_toggle" className="switch">
                Sign Up
              </label>{" "}
            </span>
          </form>
          <form className="form" onSubmit={handleSignUp}>
            <span className="title">Sign Up</span>
            <div className="form_control">
              <input 
                type="text" 
                className="input" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="label">Username</label>
            </div>
            <div className="form_control">
              <input 
                type="email" 
                className="input" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">Email</label>
            </div>
            <div className="form_control">
              <input 
                type="password" 
                className="input" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">Password</label>
            </div>
            <button type="submit">Sign Up</button>

            <span className="bottom_text">
              Already have an account?{" "}
              <label htmlFor="register_toggle" className="switch">
                Sign In
              </label>{" "}
            </span>
          </form>
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
  background: url('/Icons/amongsus.png') no-repeat center center fixed;
  background-size: cover;
  padding: 20px;
  box-sizing: border-box;

  .container {
    width: 100%;
    max-width: 400px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    background-color: rgba(20, 20, 20, 0.95); /* Slightly more opaque for a space vibe */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  .container .slider {
    width: 200%;
    position: relative;
    transition: transform ease-out 0.3s;
    display: flex;
  }

  #register_toggle {
    display: none;
  }

  .container #register_toggle:checked + .slider {
    transform: translateX(-50%);
  }

  .form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 2em;
    width: 50%;
  }

  .title {
    text-align: center;
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #00ffff; /* Cyan color for a cosmic feel */
    text-shadow: 1px 1px 3px rgba(0, 255, 255, 0.4);
  }

  form .form_control {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
  }

  form .form_control .label {
    position: absolute;
    top: 50%;
    left: 10px;
    transition: transform ease 0.2s;
    transform: translate(0%, -50%);
    font-size: 0.9em;
    user-select: none;
    pointer-events: none;
    color: #b0b0b0;
  }

  form .form_control .input {
    width: 100%;
    background-color: #333;
    border: none;
    outline: none;
    color: #fff;
    padding: 12px 10px;
    font-size: 1em;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  form .form_control .input:focus,
  form .form_control .input:valid {
    background-color: #444;
  }

  form .form_control .input:focus + .label,
  form .form_control .input:valid + .label {
    transform: translate(-150%, -50%);
    font-size: 0.8em;
  }

  form button {
    width: 70%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #00FF7F; /* Spring green for the button text */
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 5px;
    transition: box-shadow ease 0.1s;
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
    font-family: 'VT323', monospace; /* Retro font similar to Among Us */
  }

  form button:active {
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
  }

  .bottom_text {
    font-size: 0.9em;
    text-align: center;
    color: #00ffff; /* Cyan color for bottom text */
  }

  .bottom_text .switch {
    color: #ff1616; /* Red color for the switch text */
    font-weight: 700;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .bottom_text .switch:hover {
    color: #cc0000; /* Darker red on hover */
  }

  @media (max-width: 480px) {
    .container {
      max-width: 100%;
    }

    .form {
      padding: 1.5em;
    }

    .title {
      font-size: 1.5em;
    }

    form .form_control .input {
      font-size: 0.9em;
      padding: 10px 8px;
    }

    form button {
      padding: 10px;
      font-size: 0.9em;
    }

    .bottom_text {
      font-size: 0.8em;
    }
  }
`;

export default Form;
