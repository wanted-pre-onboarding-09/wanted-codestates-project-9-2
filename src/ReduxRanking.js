import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMatchList, addList } from './store/matchList/matchListAsyncThunk';
// import { clearStore } from './store/matchList/matchListSlice';

function ReduxTest() {
  const dispatch = useDispatch();
  const [type, setType] = useState(
    'effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e',
  );

  const [offset, setOffset] = useState(20);
  const onClick = () => {
    setType('7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a');
  };
  const onClick2 = () => {
    setType('effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e');
  };
  const onClick3 = () => {
    setOffset(offset !== 20 ? 20 : offset + 20);
  };
  useEffect(() => {
    dispatch(getMatchList({ gameType: type }));
  }, [type]);

  useEffect(() => {
    console.log(type);
    console.log(offset);
    dispatch(addList({ gameType: type, offset }));
  }, [offset]);

  return (
    <>
      <button type="button" onClick={onClick}>
        hi
      </button>
      <button type="button" onClick={onClick2}>
        hi
      </button>
      <button type="button" onClick={onClick3}>
        hi
      </button>
    </>
  );
}

export default ReduxTest;
