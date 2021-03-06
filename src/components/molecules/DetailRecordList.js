import React from 'react';
import styled from 'styled-components';
import DetailRecordItem from './DetailRecordItem';

const DetailRecordList = ({ players }) => {
  return (
    <Container>
      <List>
        <Wrapper>
          <div className="rank">#</div>
          <div className="cart">카트</div>
          <div className="user">유저</div>
          <div className="record">기록</div>
        </Wrapper>
        {players
          ?.slice()
          .sort((a, b) => {
            if (a.matchRank === '0') {
              return b.matchRank - a.matchRank;
            }
            return a.matchRank - b.matchRank;
          })
          .map((player) => (
            <DetailRecordItem player={player} key={player.accountNo} />
          ))}
      </List>
    </Container>
  );
};

export default DetailRecordList;

const Container = styled.div`
  border: 1px solid #ccc;
  font-size: 12px;
`;

const List = styled.ul`
  display: flex;
`;

const Wrapper = styled.div`
  width: 73px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .rank {
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
  }

  .cart {
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
