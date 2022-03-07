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
import RankPage from './components/pages/RankPage';
// import ProgressCircle from './components/atoms/ProgressCircle';
import Header from './components/organisms/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/rank" element={<RankPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
