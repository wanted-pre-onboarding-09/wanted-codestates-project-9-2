import React from 'react';
import styled from 'styled-components';
import { faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SoloOrTeamTabBar = ({ setGameType, gameType }) => {
  const SOLO_HASH =
    '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';

  const handleSolo = () => {
    setGameType(
      '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a',
    );
  };
  const handleParty = () => {
    setGameType(
      'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e',
    );
  };

  return (
    <ButtonTabbar>
      <LeftTabButton
        SOLO_HASH={SOLO_HASH}
        gameType={gameType}
        onClick={handleSolo}
      >
        <Icon icon={faUser} />
        개인전
      </LeftTabButton>
      <RightTabButton
        SOLO_HASH={SOLO_HASH}
        gameType={gameType}
        onClick={handleParty}
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
  border-color: '#005fcc';
`;

const LeftTabButton = styled(ButtonTab)`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
  color: ${(props) =>
    props.gameType === props.SOLO_HASH ? '#fff' : '#005fcc'};

  background-color: ${(props) =>
    props.gameType === props.SOLO_HASH ? '#005fcc' : '#fff'};
`;

const RightTabButton = styled(ButtonTab)`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
  color: ${(props) =>
    props.gameType === props.SOLO_HASH ? '#005fcc' : '#fff'};

  background-color: ${(props) =>
    props.gameType === props.SOLO_HASH ? '#fff' : '#005fcc'};
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
