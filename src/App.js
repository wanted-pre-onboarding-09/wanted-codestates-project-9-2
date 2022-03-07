import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserPage from './components/pages/UserPage';
import HomePage from './components/pages/HomePage';
import RankPage from './components/pages/RankPage';
import Header from './components/organisms/Header';
import ReduxTest from './ReduxTest';
import ReduxRanking from './ReduxRanking';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/rank" element={<RankPage />} />
        <Route path="/redux" element={<ReduxTest />} />
        <Route path="/redux1" element={<ReduxRanking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
