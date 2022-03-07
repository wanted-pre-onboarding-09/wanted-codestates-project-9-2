import React from 'react';
import styled from 'styled-components';
import LogoBar from '../atoms/LogoBar';
import NabBar from '../atoms/NabBar';

const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 8rem;
  background-color: #005fcc;
`;

const header = () => {
  return (
    <HeaderBox>
      <LogoBar />
      <NabBar />
    </HeaderBox>
  );
};

export default header;
