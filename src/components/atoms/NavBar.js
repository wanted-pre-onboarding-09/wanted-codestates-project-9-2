import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Search from './Search';

const NavCantainer = styled.div`
  margin: 0 auto;
  padding: 0 auto;
  height: 50%;
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TabBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
`;

const Tab = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
  height: 4rem;
  color: #ffffff;
  opacity: 0.5;

  :hover {
    color: #ffffff;
    cursor: pointer;
    opacity: 1;
    ::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border-bottom: 4px solid #ffffff;
    }
  }
  ::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 0%;
    border-bottom: 4px solid #ffffff;
    transition: 0.3s;
  }
`;

function NavBar() {
  return (
    <NavCantainer>
      <TabBox>
        <Link to="/">
          <Tab>홈</Tab>
        </Link>
        <Link to="/rank">
          <Tab>랭킹</Tab>
        </Link>
        <Tab>카트</Tab>
        <Tab>트랙</Tab>
      </TabBox>
      <Search />
    </NavCantainer>
  );
}

export default NavBar;
