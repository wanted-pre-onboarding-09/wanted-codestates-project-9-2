import React from 'react';
import styled from 'styled-components';
import notFound from '../../assets/notFound.png';
import notFound1 from '../../assets/notFound1.png';

const NotPound = () => {
  return (
    <StyledNotFound>
      <div>
        <img src={notFound1} alt="404 ERROR 페이지를 찾을 수 없습니다" />
        <img src={notFound} alt="404 ERROR 페이지를 찾을 수 없습니다" />
      </div>
      <p>404 ERROR 페이지를 찾을 수 없습니다.</p>
      <p>올바른 경로로 접근해주세요!</p>
    </StyledNotFound>
  );
};

export default NotPound;

const StyledNotFound = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 30px;
    font-size: 28px;
    font-weight: bold;
  }
  div {
    display: flex;
    img {
      width: 400px;
    }
  }
`;
