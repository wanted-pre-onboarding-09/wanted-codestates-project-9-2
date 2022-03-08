import React from 'react';
import styled from 'styled-components';
import ProgressCircle from '../atoms/ProgressCircle';

function TotalRecord() {
  return (
    <Container>
      <RecordTitle>
        <span>
          <span className="point">종합 </span>전적
        </span>
        <p>###전 ##승 ##패</p>
      </RecordTitle>
      <ChartContainer>
        <Chart>
          <p>승율</p>
          <ProgressCircle color="#07f" percent="35" />
        </Chart>
        <Chart>
          <p>완주율</p>
          <ProgressCircle color="#9bd728" percent="35" />
        </Chart>
        <Chart>
          <p>리타이어율</p>
          <ProgressCircle color="#f62459" percent="35" />
        </Chart>
      </ChartContainer>
      <RecordTitle>
        <span>
          <span className="point">최다주행</span>모드
        </span>{' '}
        <span className="bold">통합</span>{' '}
      </RecordTitle>
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 17rem;
`;

const RecordTitle = styled.h5`
  margin-bottom: 0.5em;
  color: #1f334a;
  height: 17%;
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 10px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:last-of-type {
    border: none;
  }

  p {
    display: inline-block;
    margin-left: 0.5rem;
  }

  .point {
    color: #005fcc;
  }

  .bold {
    font-size: 20px;
  }
`;

const ChartContainer = styled.section`
  display: flex;
  flex-direction: row;
`;

const Chart = styled.div`
  color: #1f334a;
  font-size: 14px;
  padding: 0 8px;
  margin: 8px 0;
  border-right: 1px solid #f2f2f2;

  &:last-of-type {
    border: none;
  }
`;

export default TotalRecord;
