import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProgressCircleWrap = styled.div`
  margin-top: 0.7rem;
`;

const ProgressCircleContainer = styled.div``;

const CircleChart = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: 50%;
  transition: 0.3s;
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

function ProgressCircle({ color, percent }) {
  const chart1 = useRef(null); // 차트가 그려질 div 영역
  let i = 1;

  const colorFn = (i, color) => {
    // makeChart의 setInterval 함수에 의해 conic-gradient의 색깔이 1% --> 100%가 채워질때까지 실행된다.
    chart1.current.style.background = `conic-gradient(${color} 0% ${i}%, #dedede 1% 100%)`;
  };

  const makeChart = (percent, color) => {
    const chartFunc = setInterval(() => {
      if (i <= percent) {
        if (chart1.current) {
          colorFn(i, color);
          i += 1;
        } else {
          return null; // cannot read property 'style' 에러 발생 방지 위한 else로 분기처리
        }
      } else {
        clearInterval(chartFunc);
      }
    }, 10);
  };

  useEffect(() => {
    makeChart(percent, color);
  }, []); // useEffect는 랜더링시에 한번만 실행된다.

  return (
    <ProgressCircleWrap>
      <ProgressCircleContainer>
        <CircleChart ref={chart1}>
          <CircleSubChart>
            <span>{percent}%</span>
          </CircleSubChart>
        </CircleChart>
      </ProgressCircleContainer>
    </ProgressCircleWrap>
  );
}

export default ProgressCircle;
