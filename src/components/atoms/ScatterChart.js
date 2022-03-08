import React from 'react';
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from 'recharts';

const data = [
  { record: `1'58`, 라이더비율: '0.01' },
  { record: `2'00`, 라이더비율: '0.35' },
  { record: `2'02`, 라이더비율: '0.39' },
  { record: `2'04`, 라이더비율: '1.23' },
  { record: `2'06`, 라이더비율: '2.34' },
  { record: `2'08`, 라이더비율: '1.68' },
];

const ScatterChart = () => {
  return (
    <AreaChart
      width={278}
      height={139}
      data={data}
      margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="100%" stopColor="#0077FE" stopOpacity={0.2} />
        </linearGradient>
      </defs>
      <XAxis dataKey="record" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="라이더비율"
        stroke="#0077FE"
        fillOpacity={1}
        fill="url(#colorPv)"
      />
    </AreaChart>
  );
};

export default ScatterChart;
