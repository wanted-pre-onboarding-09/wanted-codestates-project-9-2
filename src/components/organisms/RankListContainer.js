import React from 'react';
import styled from 'styled-components';
import RankItem from '../molecules/RankItem';
import RankItemTitle from '../molecules/RankItemTitle';

const RankListContainer = () => (
  <ListWrapper>
    <ListContainer>
      <RankList>
        <RankItemTitle />
        <RankItem />
      </RankList>
    </ListContainer>
  </ListWrapper>
);

export default RankListContainer;

const ListWrapper = styled.div`
  position: relative;
  padding-top: 40px;
  margin: auto;
  @media (max-width: 1630px) {
    width: 1000px;
  }
`;

const ListContainer = styled.div`
  margin-top: 490px;
`;

const RankList = styled.ul`
  display: flex;
  flex-direction: column;
`;
