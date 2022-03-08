import React, { memo } from 'react';
import styled from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

function RankChart() {
  const mock = [
    { rank: 1, battle: 1 },
    { rank: 6, battle: 2 },
    { rank: 8, battle: 3 },
    { rank: 8, battle: 4 },
    { rank: 8, battle: 5 },
    { rank: 2, battle: 6 },
    { rank: 5, battle: 7 },
    { rank: 6, battle: 8 },
  ];

  const CustomTooltip = memo(({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`이전${label}경기`}</p>
          <p className="intro">{`${payload[0].value} 순위`}</p>
        </div>
      );
    }

    return null;
  });

  return (
    <Container>
      <RankInfo>
        <span>순위변동 </span>
        추이
        <p>
          지난 200경기 <span>##위</span> 최근 50경기 <span>##위</span>
        </p>
      </RankInfo>
      <LineChart
        width={500}
        height={250}
        data={mock}
        margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="battle" tick={false} reversed />
        <YAxis
          reversed
          dataKey="rank"
          type="number"
          domain={[1, 8]}
          minTickGap={1}
          interval={0}
          ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid vertical={false} />
        <Line type="monotone" dataKey="rank" stroke="#005fcc" />
      </LineChart>
    </Container>
  );
}

export default RankChart;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .custom-tooltip {
    background-color: #1f334a;
    opacity: 0.9;
    color: #fff;
    padding: 0.5rem;
    border-radius: 10px;
  }
`;

const RankInfo = styled.h5`
  border-bottom: 1px solid #ccc;
  padding: 1rem 0;
  margin-bottom: 0.5rem;
  font-size: 14px;

  p {
    display: inline-block;
    margin-left: 0.5rem;
  }

  span {
    color: #005fcc;
  }
`;
