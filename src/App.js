import React from 'react';
<<<<<<< HEAD
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/pages/UserPage';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> e1b4d702350747a9856e13960ed57ac7995a794c
  );
}

export default App;
