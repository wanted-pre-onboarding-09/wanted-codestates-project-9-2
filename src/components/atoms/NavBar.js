import React from 'react';
import styled from 'styled-components';

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
  transition: 0.5s;

  :hover {
    color: #ffffff;
    cursor: pointer;
    opacity: 1;
    ::before {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      width: 100%;
      border-bottom: 4px solid #fff;
    }
  }
`;

function NavBar() {
  return (
    <NavCantainer>
      <TabBox>
        <Tab>홈</Tab>
        <Tab>랭킹</Tab>
        <Tab>카트</Tab>
        <Tab>트랙</Tab>
      </TabBox>
      <div>
        <input type="text" />
      </div>
    </NavCantainer>
  );
}

export default NavBar;
