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

function RankChart({ data }) {
  const recentData =
    data &&
    data.match.slice(0, 50).map((el, index) => {
      return { battle: index + 1, rank: el.matchRank };
    });

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
        width={350}
        height={250}
        data={recentData}
        margin={{ top: 10, right: 0, left: 0, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="battle" tick={false} reversed />
        <YAxis
          reversed
          dataKey="rank"
          type="number"
          domain={[1, 'dataMax']}
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
  border: 1px solid #f2f2f2;

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
    color: #0077ff;
  }
`;
