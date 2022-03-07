import React from 'react';
import Banner from '../molecules/Banner';
import Profile from '../molecules/Profile';
import UserTabBar from '../molecules/UserTabBar';
import Comment from '../atoms/Comment';

const UserPage = () => {
  return (
    <div>
      <Profile />
      <Banner />
      <Comment />
      <UserTabBar />
    </div>
  );
};

export default UserPage;
