import React from 'react';
import styled from 'styled-components';

const DetailRecordItem = ({ item }) => {
  return (
    <Container>
      <div className="rank">{item.rank}</div>
      <div className="cart">{item.cart}</div>
      <div className="user">{item.user}</div>
      <div className="record">{item.record}</div>
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
