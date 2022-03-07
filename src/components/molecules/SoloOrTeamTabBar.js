import React, { useState } from 'react';
import styled from 'styled-components';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SoloOrTeamTabBar = ({ isUserPage }) => {
  const [isSolo, setIsSolo] = useState(true);
  const handleSoloTab = () => {
    setIsSolo(!isSolo);
  };
  return (
    <ButtonTabbar>
      <LeftTabButton
        isSolo={isSolo}
        isUserPage={isUserPage}
        onClick={handleSoloTab}
      >
        <Icon icon={faUser} />
        개인전
      </LeftTabButton>
      <RightTabButton
        isSolo={!isSolo}
        isUserPage={isUserPage}
        onClick={handleSoloTab}
      >
        <Icon icon={faUsers} />
        팀전
      </RightTabButton>
    </ButtonTabbar>
  );
};

export default SoloOrTeamTabBar;

const ButtonTabbar = styled.div`
  border-radius: 5px;
`;

const ButtonTab = styled.button`
  vertical-align: middle;
  display: inline-block;
  width: 100px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: ${(props) => (props.isUserPage ? '#005fcc' : '#fff')};
  color: ${(props) => {
    switch (props.isUserPage) {
      case true:
        return props.isSolo ? '#fff' : '#005fcc';

      default:
        return props.isSolo ? '#005fcc' : '#fff';
    }
  }};

  background-color: ${(props) => {
    switch (props.isUserPage) {
      case true:
        return props.isSolo ? '#005fcc' : '#fff';

      default:
        return props.isSolo ? '#fff' : 'transparent';
    }
  }};
`;

const LeftTabButton = styled(ButtonTab)`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
`;

const RightTabButton = styled(ButtonTab)`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
