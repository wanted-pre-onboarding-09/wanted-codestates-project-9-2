import React from 'react';
import Banner from '../molecules/Banner';
import Profile from '../molecules/Profile';
import styled from 'styled-components';

import RecordSideTab from '../molecules/RecordSideTab';
import UserTabBar from '../molecules/UserTabBar';
import Comment from '../atoms/Comment';

const UserPage = () => {
  return (
    <div>
      <Profile />
      <Banner />
      <Comment />
      <UserTabBar />
      <RecordWrapper>
        <RecordSideTab />
      </RecordWrapper>
    </div>
  );
};

export default UserPage;

const RecordWrapper = styled.div`
  margin-top: 20px;
`;
