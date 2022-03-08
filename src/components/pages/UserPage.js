import React from 'react';
import styled from 'styled-components';
import Banner from '../molecules/Banner';
import Profile from '../molecules/Profile';
import UserTabBar from '../molecules/UserTabBar';
import Comment from '../atoms/Comment';
import RecordSideTab from '../molecules/RecordSideTab';
import RecordList from '../molecules/RecordList';
import RankChart from '../molecules/RankChart';

const UserPage = () => {
  return (
    <Container>
      <Profile />
      <Banner />
      <Stats>
        <Comment />
        <RankChart />
      </Stats>
      <UserTabBar />
      <RecordWrapper>
        <RecordSideTab />
        <RecordList />
      </RecordWrapper>
    </Container>
  );
};
export default UserPage;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding-top: 50px;
`;

const RecordWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`;
