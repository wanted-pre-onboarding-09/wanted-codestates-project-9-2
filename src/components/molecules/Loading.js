import React from 'react';
import styled from 'styled-components';
import { RotatingLines } from 'react-loader-spinner';

function Loading() {
  return (
    <StyledLoading className="loading">
      <RotatingLines width="70" />
      <p>데이터를 집계중입니다!!</p>
    </StyledLoading>
  );
}

export default Loading;

const StyledLoading = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 30px;
    color: gray;
  }
`;
