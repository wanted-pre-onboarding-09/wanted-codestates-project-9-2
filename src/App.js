import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ProgressCircle />
//     </div>
// =======
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/pages/UserPage';
import HomePage from './components/pages/HomePage';
// import ProgressCircle from './components/atoms/ProgressCircle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
