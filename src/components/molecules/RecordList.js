import React from 'react';
import styled from 'styled-components';

import RecordItem from './RecordItem';

const RecordList = ({ matches }) => {
  return (
    <Container>
      {matches?.map((match) => (
        <RecordItem match={match} key={match.matchId} />
      ))}
    </Container>
  );
};

export default RecordList;

const Container = styled.div`
  width: 660px;
`;
