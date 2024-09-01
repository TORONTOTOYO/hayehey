import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { CanvasTexture } from 'three';
import * as THREE from 'three';

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

  useEffect(() => {

    let selectedSprite = null; // Track the selected sprite
    let offset = new THREE.Vector3(); // Offset for dragging
    let mouse = new THREE.Vector2(); // Track mouse position
    let raycaster = new THREE.Raycaster(); // Raycaster for detecting sprites
    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.querySelector('.canvas-container').appendChild(renderer.domElement);


    const canvasContainer = document.querySelector('.canvas-container');
    if (canvasContainer) {
      canvasContainer.appendChild(renderer.domElement);
    }
    // Create stars
    const starGeometry = new THREE.BufferGeometry();
    const starVertices = [];
    for (let i = 0; i < 10000; i++) {
      starVertices.push(Math.random() * 2000 - 1000); // x
      starVertices.push(Math.random() * 2000 - 1000); // y
      starVertices.push(Math.random() * 2000 - 1000); // z
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // SVG strings
    const svgStrings = [
      // Add your SVG strings here
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
          <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#132ED1" stroke="#000000" stroke-width="10"/>
          <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
          <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
          <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
          <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#132ED1" stroke="#000000" stroke-width="10"/>
          <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#132ED1" stroke="#000000" stroke-width="10"/>
          <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
          <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
          <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#117F2D" stroke="#000000" stroke-width="10"/>
          <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
          <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
          <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
          <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#117F2D" stroke="#000000" stroke-width="10"/>
          <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#117F2D" stroke="#000000" stroke-width="10"/>
          <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
          <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#ED54BA" stroke="#000000" stroke-width="10"/>
      <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
      <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
      <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
      <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#ED54BA" stroke="#000000" stroke-width="10"/>
      <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#ED54BA" stroke="#000000" stroke-width="10"/>
      <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
      <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#D6E0F0" stroke="#000000" stroke-width="10"/>
      <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
      <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
      <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
      <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#D6E0F0" stroke="#000000" stroke-width="10"/>
      <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#D6E0F0" stroke="#000000" stroke-width="10"/>
      <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
      <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#F07D0D" stroke="#000000" stroke-width="10"/>
      <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
      <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
      <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
      <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#F07D0D" stroke="#000000" stroke-width="10"/>
      <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#F07D0D" stroke="#000000" stroke-width="10"/>
      <ellipse cx="150" cy="295" rx="100" ry="20" fill="#000000" opacity="0.3"/>
      <path d="M100 70 Q150 30 200 70 L200 90 Q150 50 100 90 Z" fill="#FFD700" stroke="#000000" stroke-width="5"/>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
      <path d="M75 200 Q75 250 150 250 Q225 250 225 200 L225 120 Q225 70 150 70 Q75 70 75 120 Z" fill="#3F474E" stroke="#000000" stroke-width="10"/>
      <path d="M100 120 Q100 80 150 80 Q200 80 200 120 Q200 160 150 160 Q100 160 100 120 Z" fill="#7DD3FC" stroke="#000000" stroke-width="10"/>
      <path d="M110 100 Q110 90 130 90 Q150 90 150 100 Q150 110 130 110 Q110 110 110 100 Z" fill="#FFFFFF" opacity="0.6"/>
      <rect x="200" y="150" width="40" height="60" rx="10" ry="10" fill="#7F1D1D" stroke="#000000" stroke-width="10"/>
      <rect x="100" y="250" width="40" height="40" rx="10" ry="10" fill="#3F474E" stroke="#000000" stroke-width="10"/>
      <rect x="160" y="250" width="40" height="40" rx="10" ry="10" fill="#3F474E" stroke="#000000" stroke-width="10"/>
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
            Math.random() * 2000 - 1000, // Random x position
            Math.random() * 2000 - 1000, // Random y position
            Math.random() * 2000 - 1000  // Random z position
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
            child.rotation.x += 0.005;
            child.rotation.y += 0.005;
            child.rotation.z += 0.005;

            // Smooth floating movement
            child.position.x += Math.sin(child.rotation.y) * 0.2;
            child.position.y += Math.cos(child.rotation.x) * 0.2;
            child.position.z += Math.sin(child.rotation.z) * 0.2;

            // Ensure sprites stay within bounds
            if (Math.abs(child.position.x) > 1000) child.position.x = Math.random() * 2000 - 1000;
            if (Math.abs(child.position.y) > 1000) child.position.y = Math.random() * 2000 - 1000;
            if (Math.abs(child.position.z) > 1000) child.position.z = Math.random() * 2000 - 1000;
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

      // Handle mouse down
  const onMouseDown = (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);
    if (intersects.length > 0) {
      selectedSprite = intersects[0].object;
      const intersectPoint = intersects[0].point;
      offset.copy(intersectPoint).sub(selectedSprite.position);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }
  };

    // Handle mouse movement and dragging of sprites
    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);

      if (intersects.length > 0) {
        const intersectedSprite = intersects[0].object;
        if (!selectedSprite) {
          document.body.style.cursor = 'pointer'; // Change cursor on hover
        }
        if (selectedSprite) {
          selectedSprite.position.copy(intersects[0].point.sub(offset));
        }
      } else {
        document.body.style.cursor = 'auto';
      }
    };
  // Handle mouse up
  const onMouseUp = () => {
    selectedSprite = null;
    canvasContainer.style.cursor = "auto";
  };

  window.addEventListener('mousedown', onMouseDown);
    
    return () => {
      // Clean up on component unmount
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    
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
