import React from 'react';
import styled from 'styled-components';
import RankBackground from '../molecules/RankBackground';
import RankInfoContainer from '../organisms/RankInfoContainer';
import RankListContainer from '../organisms/RankListContainer';

const RankPage = () => {
  return (
    <RankWrapper>
      <RankBackground>
        <RankInfoContainer />
      </RankBackground>
      <RankListContainer />
    </RankWrapper>
  );
};

export default RankPage;

const RankWrapper = styled.div`
  position: relative;
`;
