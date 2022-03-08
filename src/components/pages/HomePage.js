import React from 'react';
import styled from 'styled-components';
import HomeSearch from '../atoms/HomeSearch';
import HomeAnimation from '../atoms/HomeAnimation';

const HomePage = () => {
  return (
    <HomeContainer>
      <HomeAnimation />
      <a className="link" href="https://developers.nexon.com/">
        넥슨 오픈API 기반
      </a>
      <div className="text">카트라이더 전적 검색</div>
      <HomeSearch />
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://tmi.nexon.com/img/main_bg1.png);
  height: 696px;
  background-repeat: no-repeat;
  overflow: hidden;

  .link {
    text-decoration: none;
    color: #ffffff;
    font-size: 28px;
  }
  .text {
    color: #ffffff;
    font-size: 40px;
  }
`;
