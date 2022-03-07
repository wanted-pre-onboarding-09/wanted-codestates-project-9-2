import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/pages/UserPage';
import HomePage from './components/pages/HomePage';
import RankPage from './components/pages/RankPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/rank" element={<RankPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
