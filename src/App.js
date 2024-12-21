import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;

