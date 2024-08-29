import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const auth = getAuth();
  const db = getFirestore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        const userDoc = doc(db, "users", user.uid);
        const docSnap = await getDoc(userDoc);
        if (docSnap.exists()) {
          setUsername(docSnap.data().username || "");
          setProfilePicture(docSnap.data().profilePictureUrl || "");
        }
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    
    if (!username) {
      toast.error("Please enter a username.");
      return;
    }

    try {
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, { username, profilePictureUrl: profilePicture });

      // Update Firebase Auth profile
      await updateProfile(user, { displayName: username });
      
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(`Error updating profile: ${error.message}`);
      console.error("Profile update error:", error);
    }
  };

  return (
    <StyledWrapper>
      <ToastContainer />
      <div className="container">
        <form onSubmit={handleUpdateProfile}>
          <span className="title">Profile</span>
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
              type="text" 
              className="input" 
              value={profilePicture}
              onChange={(e) => setProfilePicture(e.target.value)}
            />
            <label className="label">Profile Picture URL</label>
          </div>
          <button type="submit">Update Profile</button>
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
    max-width: 400px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    background-color: #222;
  }

  .title {
    text-align: center;
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 10px;
  }

  .form_control {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .form_control .label {
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

  .form_control .input {
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

  .form_control .input:focus,
  .form_control .input:valid {
    background-color: #444;
  }

  .form_control .input:focus + .label,
  .form_control .input:valid + .label {
    transform: translate(-150%, -50%);
    font-size: 0.8em;
  }

  button {
    width: 70%;
    background-color: transparent;
    border: none;
    outline: none;
    color: #fff;
    padding: 0.5rem;
    font-size: 0.75rem;
    border-radius: 5px;
    transition: box-shadow ease 0.1s;
    box-shadow: 1.5px 1.5px 3px #0e0e0e, -1.5px -1.5px 3px rgb(95 94 94 / 25%), inset 0px 0px 0px #0e0e0e, inset 0px -0px 0px #5f5e5e;
  }

  button:active {
    box-shadow: 0px 0px 0px #0e0e0e, 0px 0px 0px rgb(95 94 94 / 25%), inset 3px 3px 4px #0e0e0e, inset -3px -3px 4px #5f5e5e;
  }

  @media (max-width: 480px) {
    .container {
      max-width: 100%;
    }

    .form_control .input {
      font-size: 0.9em;
      padding: 10px 8px;
    }

    button {
      padding: 10px;
      font-size: 0.9em;
    }
  }
`;

export default Profile;
