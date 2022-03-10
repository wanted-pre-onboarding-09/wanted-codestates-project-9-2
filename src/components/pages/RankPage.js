import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import useDidMountEffect from '../../hooks/useDidMountEffect';
import {
  addList,
  getMatchList,
} from '../../store/matchList/matchListAsyncThunk';
import Loading from '../molecules/Loading';
import RankBackground from '../molecules/RankBackground';
import RankInfoContainer from '../organisms/RankInfoContainer';
import RankListContainer from '../organisms/RankListContainer';
import ErrorLoading from '../molecules/ErrorLoading';

const RankPage = () => {
  const TEAM =
    'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e';
  const SOLO =
    '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a';
  const SOLOSCORE = [0, 10, 7, 5, 4, 3, 1, 0, -1, -5];
  const TEAMSCORE = [0, 10, 8, 6, 5, 4, 3, 2, 1, 0];

  const [offset, setOffset] = useState(0);
  const [rankList, setRankList] = useState([]);
  const [gameType, setGameType] = useState(1);
  const [score, setScore] = useState(SOLOSCORE);
  const handleGameType = (index) => {
    setGameType(index);
    setScore(index === 1 ? SOLOSCORE : TEAMSCORE);
  };

  const handleOffset = () => {
    setOffset((prev) => prev + 30);
  };

  const dispatch = useDispatch();

  useDidMountEffect(() => {
    dispatch(addList({ gameType: gameType === 1 ? SOLO : TEAM, offset }));
  }, [offset, gameType]);

  useEffect(() => {
    dispatch(getMatchList({ gameType: gameType === 1 ? SOLO : TEAM }));
  }, [gameType]);

  const { data, loading, error } = useSelector((state) => state.matchList);

  const handleData = (datas) => {
    const newData = datas.map((item) => {
      // 평균 순위
      const totalRanking = item.ranking.reduce((prev, cur) => {
        if (cur === '99') {
          return Number(prev) + 8;
        }
        return Number(prev) + Number(cur);
      });
      const avergeRanking = (totalRanking / item.playTime).toFixed(1);
      // 누적 포인트
      const points = item.ranking.reduce(
        (prev, cur) => score[+cur === 99 ? 9 : +cur] + +prev,
      );
      // 승률
      const winner = Math.floor((item.win / item.playTime) * 100);
      // 리타이얼
      const retired = Math.floor((item.Retired / item.playTime) * 100);
      return {
        ...item,
        Retired: retired,
        points,
        rank: avergeRanking,
        win: winner,
      };
    });
    newData.sort((a, b) => b.points - a.points);
    setRankList(newData);
  };

  useEffect(() => {
    if (data) {
      handleData(data);
    }
  }, [data]);

  return (
    <RankWrapper>
      {error ? (
        <ErrorLoading />
      ) : (
        <>
          <RankBackground>
            {loading ? (
              <Loading />
            ) : (
              <RankInfoContainer
                topRank={rankList.slice(0, 3)}
                gameType={gameType}
                handleGameType={handleGameType}
              />
            )}
          </RankBackground>
          {loading ? (
            <LoadingWrapper>
              <Loading />
            </LoadingWrapper>
          ) : (
            <RankListContainer
              handleOffset={handleOffset}
              rankList={rankList.slice(3)}
            />
          )}
        </>
      )}
    </RankWrapper>
  );
};

export default RankPage;

const RankWrapper = styled.div`
  position: relative;
`;

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 1400px;
  padding-top: 400px;
`;
