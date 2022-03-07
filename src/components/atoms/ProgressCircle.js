/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProgressCircleWrap = styled.div`
  margin-top: 0.7rem;
`;

const ProgressCircleContainer = styled.div`
  /* display: flex; */
  /* gap: 15px; */
  /* margin-bottom: 20px; */
  /* background: #ffff; */
`;

const CircleChart = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  transition: 0.3s;
  /*  background: conic-gradient(#07f 0% 80%, #dedede 1% 100%); */ // #f62459 빨간색
`;

const CircleSubChart = styled.span`
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  transform: translate(-50%, -50%); //가운데 위치
  color: #07f;

  > span {
    font-weight: 700;
    font-size: 16px;
    font-family: Noto Sans KR;
  }
`;

function ProgressCircle({ color }) {
  const chart1 = useRef(null);

  const chartData = [
    {
      className: chart1,
      percent: 80,
      color,
    },
  ];

  let i = 1;

  const colorFn = (className, i, color) => {
    className.current.style.background = `conic-gradient(${color} 0% ${i}%, #dedede 1% 100%)`;
  };

  const makeChart = (className, percent, color) => {
    const chartFn = setInterval(() => {
      if (i <= percent) {
        if (className.current) {
          colorFn(className, i, color);
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
      makeChart(el.className, el.percent, el.color);
    });
  }, []);

  return (
    <ProgressCircleWrap>
      <ProgressCircleContainer>
        <CircleChart ref={chart1}>
          <CircleSubChart>
            <span>{chartData[0].percent}%</span>
          </CircleSubChart>
        </CircleChart>
      </ProgressCircleContainer>
    </ProgressCircleWrap>
  );
}

export default ProgressCircle;
