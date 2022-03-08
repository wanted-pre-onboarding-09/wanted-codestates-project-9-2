import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Banner from '../molecules/Banner';
import Profile from '../molecules/Profile';
import UserTabBar from '../molecules/UserTabBar';
import Comment from '../atoms/Comment';
import RecordSideTab from '../molecules/RecordSideTab';
import RecordList from '../molecules/RecordList';
import RankChart from '../molecules/RankChart';
import TotalRecord from '../molecules/TotalRecord';
import { getMatch } from '../../store/match/matchAsyncThunk';

const UserPage = () => {
  const dispatch = useDispatch();
  const { error, loading, data } = useSelector((state) => state.match);

  console.log(error);
  console.log(loading);
  console.log(data);
  useEffect(() => {
    dispatch(
      getMatch({
        nickName: '헤드리강',
        gameType:
          '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a',
      }),
    );
  }, []);

  return (
    <Container>
      <Profile />
      <Banner />
      <Stats>
        <TotalRecord />
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
