import React from 'react';
import { useDispatch } from 'react-redux';
import { getMatch } from './store/match/matchAsyncThunk';

function ReduxTest() {
  const dispatch = useDispatch();
  // 7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a 개인전 hash 키
  // effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e 팀전
  dispatch(
    getMatch({
      nickName: '헤드리강',
      gameType:
        '7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a',
    }),
  );
  return <div>hi</div>;
}

export default ReduxTest;
