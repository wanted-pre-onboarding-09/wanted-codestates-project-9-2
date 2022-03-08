import React from 'react';
import styled from 'styled-components';
import convertMatchTime from '../../lib/convertMatchTime';

const DetailRecordItem = ({ player }) => {
  return (
    <Container>
      <div className="rank">
        {player.matchRank === '99' ? '리타이어' : player.matchRank}
      </div>
      <div className="cart">
        <img
          style={{ width: '70%' }}
          alt=""
          src={`https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/kart/${player.kart}.png?v=1646306934`}
          onError={(e) => {
            e.target.src = 'https://tmi.nexon.com/img/assets/empty_kart.png';
          }}
        />
      </div>
      <div className="user">{player.characterName}</div>
      <div className="record">{convertMatchTime(player.matchTime)}</div>
    </Container>
  );
};

export default DetailRecordItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 73px;

  .rank {
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
  }

  .cart {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 78px;
    line-height: 78px;
  }
  .user {
    height: 17px;
    line-height: 17px;
  }
  .record {
    height: 40px;
    line-height: 40px;
  }
`;
