import React from 'react';
import styled from 'styled-components';
import error from '../../assets/error.png';

const ErrorLoading = () => {
  return (
    <StyledError>
      <img src={error} alt="로딩에 실패했습니다." />
      <p>로딩에 실패했습니다.</p>
      <p>잠시 후 다시 시도해 주세요!</p>
    </StyledError>
  );
};

export default ErrorLoading;

const StyledError = styled.div`
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
`;
