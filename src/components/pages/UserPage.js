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

  const dispatch = useDispatch();
  const params = useParams();
  const { error, loading, data } = useSelector((state) => state.match);
  const [gameType, setGameType] = useState(SOLO_HASH);

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
      {loading && <Loading />}
      {error && <Error />}
      {data && (
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
