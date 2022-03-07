import React from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const LogoContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: #ffffff;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0.5rem;

  svg {
    padding-left: 0.5rem;
    color: #929292;
  }

  & a {
    text-decoration: none;
    color: #6c7a89;
    font-size: 0.8rem;
  }
`;

function LogoBar() {
  return (
    <LogoContainer>
      <InnerContainer>
        <LogoBox>
          <LogoBox>
            <img
              alt="logo"
              src="https://tmi.nexon.com/img/assets/logo_kart.png"
            />
            <FontAwesomeIcon icon={faCaretDown} />
          </LogoBox>
          <LogoBox>
            <img
              alt="Tmi"
              src="https://tmi.nexon.com/img/assets/tmi_logo_default_b.svg"
            />
          </LogoBox>
        </LogoBox>
        <LogoBox>
          <a href="https://kart.nexon.com/Main/Index.aspx">
            카트라이더 홈페이지 바로가기
          </a>
        </LogoBox>
      </InnerContainer>
    </LogoContainer>
  );
}

export default LogoBar;
