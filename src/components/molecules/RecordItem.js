import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import DetailRecordList from './DetailRecordList';

import calculateDateDiff from '../../lib/calculateDateDiff';
import convertMatchTime from '../../lib/convertMatchTime';
import { getUniqueMatch } from '../../store/match/matchAsyncThunk';

const RecordItem = ({ match }) => {
  const [more, setMore] = useState(false);
  const dispatch = useDispatch();
  const { matchInfo } = useSelector((state) => state.match);

  const toggleMore = () => {
    setMore((prev) => !prev);
    dispatch(getUniqueMatch({ matchId: match.matchId }));
  };

  return (
    <ItemContainer>
      <Left rank={match.matchRank}>
        <p className="type">{calculateDateDiff(match.endTime)}</p>
        <p className="result">
          &#35;
          {match.matchRank !== '' && match.matchRank !== '99'
            ? match.matchRank
            : '리타이어'}
          <span className="total">
            {match.matchRank !== '' && match.matchRank !== '99'
              ? `/${match.playerCnt}`
              : null}
          </span>
        </p>
        <p className="track">{match.trackId}</p>
        <p className="cart">{match.kart}</p>
        <p className="time">{convertMatchTime(match.matchTime)}</p>
        <button type="button" className="open" onClick={toggleMore}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </Left>
      {more && <DetailRecordList players={matchInfo?.players} />}
    </ItemContainer>
  );
};

export default RecordItem;

const ItemContainer = styled.section`
  min-height: 88px;
  height: auto;
  margin-bottom: 5px;
`;

const Left = styled.div`
  display: flex;
  justify-content: space-around;
  height: 86px;
  background: ${({ rank }) =>
    rank === '' || rank === '99'
      ? '#FBEFF2'
      : rank === '1'
      ? '#EFF3FA'
      : '#fff'};
  border: 1px solid #ccc;
  border-left: 4px solid
    ${({ rank }) =>
      rank === '' || rank === '99'
        ? '#F52658'
        : rank === '1'
        ? '#0077FE'
        : '#A1A1A1'};

  p {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .type {
    width: 65px;
  }

  .result {
    position: relative;
    width: 150px;
    font-size: 30px;
    font-weight: bold;
    color: ${({ rank }) =>
      rank === '' || rank === '99'
        ? '#F52658'
        : rank === '1'
        ? '#0077FE'
        : '#A1A1A1'};
  }

  .total {
    position: relative;
    font-size: 16px;
    top: 4px;
  }

  .track {
    width: 150px;
  }

  .cart {
    width: 150px;
  }

  .time {
    width: 100px;
  }

  .track:after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }
  .cart:after {
    content: '';
    position: absolute;
    display: inline-block;
    top: 38px;
    right: 0;
    width: 1px;
    height: 16px;
    background-color: #ebebeb;
  }

  .open {
    width: 40px;
    border: none;
    border-left: 1px solid #ccc;
    cursor: pointer;
    background: ${({ rank }) =>
      rank === '' || rank === '99'
        ? '#FBEFF2'
        : rank === '1'
        ? '#EFF3FA'
        : '#fff'};

    &:hover {
      background: ${({ rank }) =>
        rank === '' || rank === '99'
          ? '#F42858'
          : rank === '1'
          ? '#0477FD'
          : '#A1A1A1'};
    }
  }
`;
