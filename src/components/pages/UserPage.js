import React from 'react';
import styled from 'styled-components';

import Banner from '../molecules/Banner';
import Profile from '../molecules/Profile';
import Comment from '../molecules/Comment';
import UserTabBar from '../molecules/UserTabBar';
import RecordSideTab from '../molecules/RecordSideTab';
import RecordList from '../molecules/RecordList';

const UserPage = () => {
  return (
    <Container>
      <Profile />
      <Banner />
      <Comment />
      <UserTabBar />
      <RecordWrapper>
        <RecordSideTab />
        <RecordList matches={data?.match} />
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
