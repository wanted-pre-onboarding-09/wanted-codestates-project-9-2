import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
import Error from '../molecules/Error';
import Loading from '../molecules/Loading';

const UserPage = () => {
  const SOLO_HASH =
    '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';
  const TEAM_HASH =
    'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e';
  const dispatch = useDispatch();
  const params = useParams();
  const { error, loading, data } = useSelector((state) => state.match);
  const { isSolo } = useSelector((state) => state.player);

  const [gameType, setGameType] = useState(SOLO_HASH);

  useEffect(() => {
    setGameType(isSolo ? SOLO_HASH : TEAM_HASH);
  }, [isSolo]);

  useEffect(() => {
    dispatch(
      getMatch({
        nickName: params.id,
        gameType,
      }),
    );
  }, [gameType]);

  return (
    <Container>
      {error && <Error />}
      {loading ? (
        <Loading />
      ) : (
        <>
          <Profile
            gameType={gameType}
            setGameType={setGameType}
            username={data?.nickName}
            character={data?.character}
          />
          <Banner />
          <Stats>
            <TotalRecord data={data} />
            <Comment />
            <RankChart data={data} />
          </Stats>
          <UserTabBar />
          <RecordWrapper>
            <RecordSideTab />
            <RecordList matches={data?.match} />
          </RecordWrapper>
        </>
      )}
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
  justify-content: space-between;
`;
