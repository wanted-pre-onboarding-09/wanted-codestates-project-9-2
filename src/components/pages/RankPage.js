import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getMatchList } from '../../store/matchList/matchListAsyncThunk';
import RankBackground from '../molecules/RankBackground';
import RankInfoContainer from '../organisms/RankInfoContainer';
import RankListContainer from '../organisms/RankListContainer';

const RankPage = () => {
  const [count, setCount] = useState(40);
  const [rankList, setRankList] = useState([]);
  const [topRank, setTopRank] = useState([]);

  const handleCount = () => {
    setCount((prev) => prev + 40);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getMatchList({
        gameType:
          '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a',
      }),
    );
  }, []);

  const { data, loading } = useSelector((state) => state.matchList);

  useEffect(() => {
    if (data && count === 40) {
      const firstRankList = data.slice(3, count);
      setRankList(firstRankList);
      setTopRank(data.slice(0, 3));
    } else if (data) {
      setRankList((prev) => [...prev, ...data.slice(count - 40, count)]);
    }
  }, [data, count]);

  return (
    <RankWrapper>
      <RankBackground>
        {!loading && <RankInfoContainer topRank={topRank} />}
      </RankBackground>
      {loading ? (
        <div style={{ height: '1200px', position: 'relative', width: '100%' }}>
          로딩중임
        </div>
      ) : (
        <RankListContainer handleCount={handleCount} rankList={rankList} />
      )}
    </RankWrapper>
  );
};

export default RankPage;

const RankWrapper = styled.div`
  position: relative;
`;
