import React from 'react';
import Banner from '../molecules/Banner';
import Profile from '../molecules/Profile';
import UserTabBar from '../molecules/UserTabBar';

const UserPage = () => {
  return (
    <div>
      <Profile />
      <Banner />
      <UserTabBar />
    </div>
  );
};

export default UserPage;
