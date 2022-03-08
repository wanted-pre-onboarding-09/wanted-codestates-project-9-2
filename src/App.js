import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import UserPage from './components/pages/UserPage';
import HomePage from './components/pages/HomePage';
import RankPage from './components/pages/RankPage';
import Header from './components/organisms/Header';

import NotPound from './components/pages/NotPound';

function App() {
  return (
    <BrowserRouter>
      <StyledWrap>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotPound />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/rank" element={<RankPage />} />
        </Routes>
      </StyledWrap>
    </BrowserRouter>
  );
}

const StyledWrap = styled.div`
  min-height: 100vh;
`;
export default App;
