import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import MessageForm from './components/MessageForm';
import Profile from './components/Profile'; 
import Feddback from './components/Feedback';
import Help from './components/Help';
import FAQ from './components/FAQ';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/help" element={<Help />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feddback />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/message/:userId" element={<MessageForm />} /> 
      </Routes>
    </Router>
  );
}

export default App;
