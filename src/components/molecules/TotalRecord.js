import React from 'react';
import styled from 'styled-components';
import ProgressCircle from '../atoms/ProgressCircle';

function TotalRecord() {
  return (
    <Container>
      <Record>
        <Chart>
          <p>승율</p>
          <ProgressCircle color="#07f" percent="35" />
        </Chart>
      </Record>
    </Container>
  );
}

const Container = styled.div``;
const Record = styled.section``;
const Chart = styled.div``;

export default TotalRecord;
