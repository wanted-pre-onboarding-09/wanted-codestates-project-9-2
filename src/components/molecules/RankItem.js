import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const RankItem = ({ rankData, rankCount }) => {
  const rankNum = Number(rankCount);
  const points = rankData.points
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Link to={`/user/${rankData.nickName}`}>
      <RankItemInfo>
        <RankNum>{rankNum + 4}</RankNum>
        <RankNickName>{rankData.nickName}</RankNickName>
        <RankPoint>{points} PT</RankPoint>
        <RankCount>{rankData.playTime}회</RankCount>
        <RankAverge>{rankData.rank}위</RankAverge>
      </RankItemInfo>
    </Link>
  );
};

export default RankItem;

const RankItemInfo = styled.li`
  position: relative;
  line-height: 40px;
  height: 40px;
  padding-left: 60px;
  margin-bottom: 10px;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  &:hover {
    border: 1px solid #005fcc;
    color: #005fcc;
  }
`;

const RankNum = styled.span`
  position: absolute;
  left: 60px;
  vertical-align: middle;
  font-weight: 500;
  font-size: 16px;
`;

const RankNickName = styled.span`
  position: absolute;
  left: 220px;
  font-weight: 400;
  font-size: 16px;
`;

const RankPoint = styled.span`
  position: absolute;
  right: 260px;
  display: inline-block;
  width: 120px;
  font-size: 14px;
`;

const RankCount = styled.span`
  position: absolute;
  right: 140px;
  font-size: 14px;
`;

const RankAverge = styled.span`
  position: absolute;
  right: 60px;
  font-size: 14px;
`;
