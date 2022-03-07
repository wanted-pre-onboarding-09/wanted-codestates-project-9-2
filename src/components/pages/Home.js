import React from 'react';
import styled from 'styled-components';
import Header from '../organisms/Header';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Home() {
  return (
    <MainContainer>
      <Header />
    </MainContainer>
  );
}

export default Home;
