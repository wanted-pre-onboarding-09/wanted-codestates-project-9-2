import React from 'react';
import styled, { keyframes } from 'styled-components';

const HomeAnimation = () => {
  return (
    <>
      <BazzieImg alt="bazzie" />
      <LeftArrow alt="L" />
      <RightArrow alt="R" />
      <DaoImg alt="dao" />
    </>
  );
};

export default HomeAnimation;

const dao = keyframes`
  0% {
    right: 0%
}
100% {
  calc(25% - 315px);
}
`;

const bazzie = keyframes`
 0% {
    left: -10%
}
100% {
  left: calc(30% - 436px);
}
`;

const ModalImg = styled.div`
  position: absolute;
  z-index: 10;
`;

const BazzieImg = styled(ModalImg)`
  width: 430px;
  height: 400px;
  top: 35%;
  background-repeat: no-repeat;
  left: calc(30% - 436px);
  background-image: url('https://tmi.nexon.com/img/assets/covid_left.png');
  animation: ${bazzie} 0.7s ease-out;
`;

const DaoImg = styled(ModalImg)`
  width: 395px;
  height: 385px;
  top: 20%;
  background-repeat: no-repeat;
  right: calc(25% - 315px);
  background-image: url('https://tmi.nexon.com/img/assets/covid_right.png');
  animation: ${dao} 0.7s ease-out;
  z-index: 0;
`;

const LeftArrow = styled(ModalImg)`
  width: 447px;
  height: 296px;
  object-fit: fill;
  background-repeat: no-repeat;
  top: 40%;
  left: calc(30% - 436px);
  background-image: url('https://tmi.nexon.com/img/main_left_bg.png');
  animation: ${bazzie} 0.3s ease-out;
`;

const RightArrow = styled(ModalImg)`
  width: 512px;
  height: 400px;
  background-repeat: no-repeat;
  top: 20%;
  right: calc(25% - 360px);
  background-image: url('https://tmi.nexon.com/img/main_right_bg.png');
  animation: ${dao} 0.3s ease-out;
  z-index: 0;
`;
