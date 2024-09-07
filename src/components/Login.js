import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, setPersistence, browserLocalPersistence } from "firebase/auth";import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import * as THREE from 'three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen} from '@fortawesome/free-solid-svg-icons';

import 'react-toastify/dist/ReactToastify.css';

// Firebase configuration
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

  useEffect(() => {
    // Set persistence to local so the user stays logged in
    setPersistence(auth, browserLocalPersistence)
      .catch(error => {
        toast.error("Failed to set persistence.");
      });

    // Check if the user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/dashboard'); // Automatically navigate to the dashboard if already logged in
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

      if (!email || !password || !username) {
        toast.error("Please fill in all fields.");
        return;
      }
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
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

    if (!email || !password) {
        toast.error("Please fill in all fields.");
        return;
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Successfully logged in!");
        navigate('/dashboard');
        setEmail("");
        setPassword("");
    } catch (error) {
        console.error('Login error:', error.message); // Log the specific error message
        toast.error(`Login error: ${error.message}`);
        setEmail("");
        setPassword("");
    }
};

useEffect(() => {
  // Create scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
  camera.position.z = 500; // Adjust camera distance
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector('.canvas-container').appendChild(renderer.domElement);

  // Create stars
  const starGeometry = new THREE.BufferGeometry();
  const starVertices = [];
  for (let i = 0; i < 10000; i++) {
    starVertices.push(Math.random() * 10000 - 5000); // Adjust range
    starVertices.push(Math.random() * 10000 - 5000); // Adjust range
    starVertices.push(Math.random() * 10000 - 5000); // Adjust range
  }
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // SVG strings
  const svgStrings = [
    /* red */
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#C51111" stroke="#000000" stroke-width="10"/>
      <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
      <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
      <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
      <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#C51111" stroke="#000000" stroke-width="10"/>
      <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#C51111" stroke="#000000" stroke-width="10"/>
      <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
      <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#ED3EF7" stroke="#000000" stroke-width="10"/>
      <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
      <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
      <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
      <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#ED3EF7" stroke="#000000" stroke-width="10"/>
      <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#ED3EF7" stroke="#000000" stroke-width="10"/>
      <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
      <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
    </svg>`,
  ];

  const createSvgTexture = async (svg) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        const texture = new THREE.Texture(canvas);
        texture.needsUpdate = true;
        resolve(texture);
      };
      img.src = `data:image/svg+xml;base64,${btoa(svg)}`;
    });
  };

  const createSprites = async () => {
    const textures = await Promise.all(svgStrings.map(createSvgTexture));
    const numSprites = 100; // Number of sprites for each texture

    textures.forEach((texture) => {
      const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
      for (let i = 0; i < numSprites; i++) {
        const sprite = new THREE.Sprite(spriteMaterial);
        sprite.scale.set(50, 50, 1); // Adjust size
        sprite.position.set(
          Math.random() * 10000 - 5000, // Adjust range
          Math.random() * 10000 - 5000, // Adjust range
          Math.random() * 10000 - 5000  // Adjust range
        );
        sprite.rotation.set(
          Math.random() * Math.PI * 2, // Random rotation
          Math.random() * Math.PI * 2, // Random rotation
          Math.random() * Math.PI * 2  // Random rotation
        );
        scene.add(sprite);
      }
    });

    // Animate the sprites with rotation and floating effect
    const animateSprites = () => {
      requestAnimationFrame(animateSprites);
      scene.children.forEach(child => {
        if (child instanceof THREE.Sprite) {
          // Smooth rotation
          child.rotation.x += 0.01;
          child.rotation.y += 0.01;
          child.rotation.z += 0.01;

          // Smooth floating movement
          child.position.x += Math.sin(child.rotation.y) * 0.1;
          child.position.y += Math.cos(child.rotation.x) * 0.1;
          child.position.z += Math.sin(child.rotation.z) * 0.1;

          // Ensure sprites stay within bounds
          if (Math.abs(child.position.x) > 5000) child.position.x = Math.random() * 10000 - 5000;
          if (Math.abs(child.position.y) > 5000) child.position.y = Math.random() * 10000 - 5000;
          if (Math.abs(child.position.z) > 5000) child.position.z = Math.random() * 10000 - 5000;
        }
      });
      renderer.render(scene, camera);
    };

    animateSprites();
  };

  createSprites();

  // Animate the stars
  const animate = () => {
    requestAnimationFrame(animate);
    stars.rotation.y += 0.001;
    renderer.render(scene, camera);
  };
  animate();

  // Handle resizing
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);


  return () => {
    const canvasContainer = document.querySelector('.canvas-container');
    if (canvasContainer && renderer.domElement) {
      canvasContainer.removeChild(renderer.domElement);
    }
  };
}, []);

  return (
    <StyledWrapper>
      <ToastContainer />
      <div id="background"></div>
      <div className="canvas-container"></div>
      <div className="container">
        <input type="checkbox" id="register_toggle" />
        <div className="slider">
          <form className="form" onSubmit={handleLogin}>
            <h1>
            <span className="yellow">E</span>cho<span className="cyan">I</span>n
            <div>
              <FontAwesomeIcon icon={faBoxOpen} className="box-icon" />
            </div>
            o<span className="red">x</span>
            </h1>
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

  body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100%;
  position: relative;
}

#background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('your-space-image-url.jpg') no-repeat center center fixed;
  background-size: cover;
  z-index: -1; /* Make sure it's behind other content */
}

.canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* Allows interaction with underlying elements */
}

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

  .cyan {
    color: #00FFFF; /* Cyan color */
  }

  .red {
    color: #FF0000; /* Red color */
  }

  .yellow {
    color: #00FF7F; /* spring color */
  }

  .box-container {
    position: relative;
    display: inline-flex;
    align-items: center;
  }

  .box-icon {
    font-size: 1.2em; /* Adjust size as needed */
    color: #FF0000; /* Red color for the box */
    z-index: 2;
  }

  .echo-icon {
    position: absolute;
    bottom: 30%; /* Position the echo icon above the box */
    left: 50%;
    transform: translateX(-50%) rotate(-90deg); /* Rotate the echo icon */
    font-size: 1.5em; /* Adjust size as needed */
    color: #00FFFF; /* Cyan color for the echo */
    opacity: 0.8;
  }

  h1 {
    display: flex;
    align-items: center;
    font-size: clamp(2rem, 4vw, 2.5rem);
    color: #fff;
    margin: 0;
    font-weight: 800;
    margin-bottom: 1.5rem;
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
    font-size: 1rem;
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
    width: 100%;
    height: auto;
    max-width: 300px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    color: white;
    background-color: rgba(20, 20, 20, 0.95); /* Slightly more opaque for a space vibe */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
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
