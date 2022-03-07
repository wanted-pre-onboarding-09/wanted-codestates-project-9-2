import React from 'react';
import styled from 'styled-components';
import LogoBar from '../atoms/LogoBar';
import NavBar from '../atoms/NavBar';

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 8rem;
  background-color: #005fcc;
`;

const header = () => {
  return (
    <HeaderBox>
      <LogoBar />
      <NavBar />
    </HeaderBox>
  );
};

export default header;
