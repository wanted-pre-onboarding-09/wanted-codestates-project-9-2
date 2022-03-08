import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import DetailRecordList from './DetailRecordList';

import calculateDateDiff from '../../lib/calculateDateDiff';
import convertMatchTime from '../../lib/convertMatchTime';

const gameInfo = [
  { idx: 1, rank: 1, cart: '똥카', user: '무과금개꿀', record: `1'44'98` },
  { idx: 2, rank: 2, cart: '똥카', user: '배달키키', record: `1'47'38` },
  { idx: 3, rank: 3, cart: '똥카', user: '포항제철공업', record: `1'48'98` },
  { idx: 4, rank: 4, cart: '똥카', user: 'BMW218d', record: `1'49'98` },
  { idx: 5, rank: 5, cart: '똥카', user: '헤드리강', record: `1'50'98` },
  { idx: 6, rank: '리타이어', cart: '똥카', user: 'pmj0923', record: `-` },
  { idx: 7, rank: '리타이어', cart: '똥카', user: '핸썸만두', record: `-` },
  { idx: 8, rank: '리타이어', cart: '똥카', user: '창모페라리', record: `-` },
];

const RecordItem = ({ match }) => {
  const [more, setMore] = useState(false);

  const toggleMore = () => setMore((prev) => !prev);

  return (
    <ItemContainer>
      <Left rank={match.matchRank}>
        <p className="type">{calculateDateDiff(match.endTime)}</p>
        <p className="result">
          &#35;{match.matchRank !== '' ? match.matchRank : '리타이어'}
          <span className="total">
            {match.matchRank !== '' ? `/${match.playerCnt}` : null}
          </span>
        </p>
        <p className="track">{match.trackId}</p>
        <p className="cart">{match.kart}</p>
        <p className="time">{convertMatchTime(match.matchTime)}</p>
        <button type="button" className="open" onClick={toggleMore}>
          <FontAwesomeIcon icon={faCaretDown} />
        </button>
      </Left>
      {more && <DetailRecordList gameInfo={gameInfo} />}
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
    rank === '' ? '#FBEFF2' : rank === '1' ? '#EFF3FA' : '#fff'};
  border: 1px solid #ccc;
  border-left: 4px solid
    ${({ rank }) =>
      rank === '' ? '#F52658' : rank === '1' ? '#0077FE' : '#A1A1A1'};

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
      rank === '' ? '#F52658' : rank === '1' ? '#0077FE' : '#A1A1A1'};
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
      rank === '' ? '#FBEFF2' : rank === '1' ? '#EFF3FA' : '#fff'};

    &:hover {
      background: ${({ rank }) =>
        rank === '' ? '#F42858' : rank === '1' ? '#0477FD' : '#A1A1A1'};
    }
  }
`;
