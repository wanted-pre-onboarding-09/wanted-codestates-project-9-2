import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const RankItem = () => (
  <RankItemInfo>
    <RankNum>4</RankNum>
    <RankNickName>1234Kcm</RankNickName>
    <RankPoint>
      1,429 PT
      <PlusIcon icon={faCirclePlus} />
      <ComparePoint>584</ComparePoint>
    </RankPoint>
    <RankCount>189회</RankCount>
    <RankAverge>2위</RankAverge>
  </RankItemInfo>
);

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

const PlusIcon = styled(FontAwesomeIcon)`
  color: #9bd728;
  margin: 0 5px;
`;

const ComparePoint = styled.span`
  color: #9bd728;
  font-size: 14px;
  font-weight: 400;
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
