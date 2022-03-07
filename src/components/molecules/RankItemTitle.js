import React from 'react';
import styled from 'styled-components';

const RankItemTitle = () => (
  <ItemTitle>
    <RankNum>#</RankNum>
    <RankNickName>닉네임(순위변동)</RankNickName>
    <RankPoint>누적포인트(전일대비)</RankPoint>
    <RankCount>주행횟수</RankCount>
    <RankAverge>평균순위</RankAverge>
  </ItemTitle>
);

export default RankItemTitle;

const ItemTitle = styled.li`
  position: relative;
  line-height: 40px;
  height: 40px;
  padding-left: 60px;
  margin-bottom: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
`;

const RankNum = styled.span`
  position: absolute;
  left: 60px;
  vertical-align: middle;
`;

const RankNickName = styled.span`
  position: absolute;
  left: 220px;
`;

const RankPoint = styled.span`
  position: absolute;
  right: 260px;
  display: inline-block;
  width: 120px;
`;

const RankCount = styled.span`
  position: absolute;
  right: 140px;
`;

const RankAverge = styled.span`
  position: absolute;
  right: 60px;
`;
