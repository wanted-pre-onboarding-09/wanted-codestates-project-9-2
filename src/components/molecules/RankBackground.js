import React from 'react';
import styled, { keyframes } from 'styled-components';
import waveImg from '../../assets/wave.svg';

const RankBackground = ({ children }) => (
  <Background>
    {children}
    <FirstWave />
    <SecondWave />
  </Background>
);

export default RankBackground;

const Background = styled.div`
  width: 100%;
  height: 600px;
  background-color: #005fcc;
  overflow: hidden;
  position: absolute;
`;

const wave = keyframes`
    0% {
      margin-left: 0;
    }
  100% {
    margin-left: -1600px;
    }
`;

const swellup = keyframes`
    0% {
        transform: translate3d(0,5px,0);
    }
    50% {
        transform: translate3d(0,-50px,0);
    }
    100% {
        transform: translate3d(0,5px,0);
    }
`;

const swelldown = keyframes`
    0% {
      transform: translate3d(0,-50px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
    100% {
      transform: translate3d(0,-50px,0);
    }
`;

const FirstWave = styled.div`
  background: url(${waveImg}) repeat-x;
  position: absolute;
  top: 450px;
  width: 6400px;
  height: 198px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
    ${swellup} 7s ease -1.25s infinite;
  transform: translateZ(0);
`;
const SecondWave = styled.div`
  background: url(${waveImg}) repeat-x;
  position: absolute;
  top: 450px;
  width: 6400px;
  height: 198px;
  left: -150px;
  animation: ${wave} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
    ${swelldown} 7s ease -1.25s infinite;
`;
