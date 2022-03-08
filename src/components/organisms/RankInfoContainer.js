import React from 'react';
import styled from 'styled-components';
import RankGuideButton from '../atoms/RankGuideButton';
import GameTypeTab from '../molecules/GameTypeTab';
import ThreeTabBar from '../molecules/ThreeTabBar';
import TopRank from '../molecules/TopRank';

const RankInfoContainer = ({ topRank, gameType, handleGameType }) => (
  <InfoContainer>
    <RankTitle>3월 TMI 랭킹</RankTitle>
    <Line />
    <RankInfo>
      <RankInfoTitle>랭킹 산정기간</RankInfoTitle>
      <RankInfoContent>
        2022년 03월 01일 00:00:00 ~ 2022년 03월 31일 24:00:00
      </RankInfoContent>
    </RankInfo>
    <RankInfo>
      <RankInfoTitle>최근 업데이트</RankInfoTitle>
      <RankInfoContent>2022년 03월 07일 11:31:19</RankInfoContent>
    </RankInfo>
    <RankGuideButton />
    <Tabs>
      <GameTypeTab gameType={gameType} handleGameType={handleGameType} />
      <LineSpan>|</LineSpan>
      <ThreeTabBar />
    </Tabs>
    <TopRank topRank={topRank} />
  </InfoContainer>
);

export default RankInfoContainer;

const InfoContainer = styled.div`
  position: relative;
  z-index: 10;
  margin: auto;
  padding-top: 50px;
  @media (max-width: 1630px) {
    width: 1000px;
  }
`;
const RankTitle = styled.p`
  font-size: 22px;
  font-weight: 400;
  padding-left: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

const Line = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  width: 35px;
  height: 3px;
  background-color: #fff;
`;

const RankInfo = styled.div`
  display: flex;
  padding-left: 10px;
`;

const RankInfoContent = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #fff;
`;

const RankInfoTitle = styled(RankInfoContent)`
  font-weight: 500;
  margin-right: 5px;
`;

const Tabs = styled.div`
  display: flex;
  margin-top: 20px;
`;

const LineSpan = styled.span`
  color: #fff;
  margin: 0 10px;
`;
