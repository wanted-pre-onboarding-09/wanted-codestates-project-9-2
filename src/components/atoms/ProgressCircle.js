/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import dummyData from '../../../dummy/dummyData';

const ProgressCircleWrap = styled.div`
  position: relative;
  padding: 5%;
  background: #d8d8d8;
`;

const ProgressCircleContainer = styled.div`
  display: flex;
  gap 15px;
  margin-bottom: 20px;
  background: #ffff;
`;

const CircleChart = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  transition: 0.3s;
  /*  background: conic-gradient(#07f 0% 80%, #dedede 1% 100%); */ // #f62459 빨간색
`;

const CircleSubChart = styled.span`
  background: #fff;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  text-align: center;
  line-height: 80px;
  font-size: 20px;
  transform: translate(-50%, -50%); //가운데 위치
`;

function ProgressCircle() {
  const chart1 = useRef(null);
  const chart2 = useRef(null);

  const chartData = [
    {
      className: chart1,
      percent: 80,
    },
    {
      className: chart2,
      percent: 40,
    },
  ];

  let i = 1;

  const colorFn = (className, i) => {
    className.current.style.background = `conic-gradient(#07f 0% ${i}%, #dedede 1% 100%)`;
  };

  const makeChart = (className, percent) => {
    const chartFn = setInterval(() => {
      if (i <= percent) {
        if (className.current) {
          colorFn(className, i);
          i += 1;
        } else {
          return null;
        }
      } else {
        clearInterval(chartFn);
      }
    }, 10);
  };

  useEffect(() => {
    chartData.map((el) => {
      makeChart(el.className, el.percent);
    });
  }, []);

  return (
    <ProgressCircleWrap>
      <ProgressCircleContainer>
        <CircleChart ref={chart1}>
          <CircleSubChart>{chartData[0].percent}</CircleSubChart>
        </CircleChart>
        <CircleChart ref={chart2}>
          <CircleSubChart>{chartData[1].percent}</CircleSubChart>
        </CircleChart>
      </ProgressCircleContainer>
    </ProgressCircleWrap>
  );
}

export default ProgressCircle;
