import React from 'react';
import styled from 'styled-components';
import error from '../../assets/error.png';

const Error = () => {
  return (
    <StyledError>
      <img src={error} alt="찾으시는 유저가 없습니다." />
      <p>
        카트라이더에 등록되지 않은 라이더입니다. 오타를 확인 후 다시
        검색해주세요!
      </p>
    </StyledError>
  );
};

export default Error;

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
