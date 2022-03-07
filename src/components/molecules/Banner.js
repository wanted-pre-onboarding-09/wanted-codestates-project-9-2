import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/ActionButton';

function Banner() {
  return (
    <Container>
      <p>1대1 매칭 시뮬레이터 USERNAME와 가상 대결을 펼쳐보세요</p>
      <span>
        <ActionButton icon="\f1ec" text="매칭하기" />
      </span>
    </Container>
  );
}

const Container = styled.div`
  p {
    display: inline-block;
  }
  & button {
    color: #fff;
    border-color: #fff;
  }

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45px;
  color: #fff;
  font-weight: 500;
  line-height: 45px;
  padding: 0 20px;
  margin-top: 20px;

  background: linear-gradient(
    -45deg,
    rgb(238, 119, 82),
    rgb(246, 36, 89),
    rgb(0, 119, 255),
    rgb(35, 213, 171)
  );
  background-size: 400% 400%;
  animation: bgAmination 20s ease infinite;

  @keyframes bgAmination {
    0% {
      background-position: 0 50%;
    }

    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;

export default Banner;
