import React, { useState } from 'react';
import styled from 'styled-components';

const RecordSideTab = () => {
  // TODO: Tab 관련 훅함수 만들기
  const [sideTabIndex, setSideTabIndex] = useState(1);

  const toggleTab = (index) => setSideTabIndex(index);

  return (
    <Container>
      <TabWrapper>
        <TabList>
          <TabItem
            className={sideTabIndex === 1 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(1)}
          >
            트랙
          </TabItem>
          <TabItem
            className={sideTabIndex === 2 ? 'tabs active-tabs' : 'tabs'}
            onClick={() => toggleTab(2)}
          >
            카트
          </TabItem>
        </TabList>
      </TabWrapper>
      <MidWrapper>
        <TitleWrapper>
          <h5>
            {/* TODO: span 콘텐츠 영역 동적 렌더 */}
            <span className="blue">트랙</span> 전적
          </h5>
          <p className="rank-info">
            평균 상위 <span className="blue">4.88</span>%
          </p>
        </TitleWrapper>
        <ChartWrapper>
          {/* TODO: 맵 이름 동적 렌더 */}
          <p className="map-record">
            빌리지 운명의다리<span className="grey"> 기록분포</span>
          </p>
          <Chart />
        </ChartWrapper>
      </MidWrapper>
      <TableWrapper>
        <table>
          <thead>
            <th>선택</th>
            <th>트랙</th>
            <th>횟수</th>
            <th>승률</th>
            <th>기록</th>
            <th>상위</th>
          </thead>
          {/* TODO: tbody 컨텐츠 동적 렌더 */}
          <tbody>
            <tr>
              <td>
                <input type="radio" checked />
              </td>
              <td>빌리지 운명의다리</td>
              <td>12</td>
              <td>60%</td>
              <td>2&apos;07&apos;73</td>
              <td>8%</td>
            </tr>
            <tr>
              <td>
                <input type="radio" />
              </td>
              <td>코리아 제주 해오름</td>
              <td>10</td>
              <td>90%</td>
              <td>1&apos;01&apos;06</td>
              <td>9%</td>
            </tr>
            <tr>
              <td>
                <input type="radio" />
              </td>
              <td>월드 두바이 다운타</td>
              <td>10</td>
              <td>90%</td>
              <td>1&apos;47&apos;48</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>
                <input type="radio" />
              </td>
              <td>차이나 황산</td>
              <td>10</td>
              <td>40%</td>
              <td>1&apos;22&apos;41</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>
                <input type="radio" />
              </td>
              <td>차이나 황산</td>
              <td>10</td>
              <td>40%</td>
              <td>1&apos;22&apos;41</td>
              <td>30%</td>
            </tr>
            <tr>
              <td>
                <input type="radio" />
              </td>
              <td>차이나 황산</td>
              <td>10</td>
              <td>40%</td>
              <td>1&apos;22&apos;41</td>
              <td>30%</td>
            </tr>
          </tbody>
        </table>
      </TableWrapper>
    </Container>
  );
};

export default RecordSideTab;

const Container = styled.div`
  width: 330px;
`;

const TabWrapper = styled.div``;

const TabList = styled.ul`
  height: 40px;
  display: flex;
`;

const TabItem = styled.li`
  width: 116px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  font-size: 0.8rem;
  color: #a1a1a1;
  background-color: #ebebeb;
  border: 1px solid #ebebeb;

  &.active-tabs {
    color: #0077ff;
    font-weight: bold;
    border-bottom: 2px solid #0077ff;
    background-color: #fff;
    transition: 0.4s;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
  margin: 15px 20px 0;
  padding: 0 8px;
  border-bottom: 1px solid #ebebeb;

  .rank-info {
    font-size: 12px;
  }
  .blue {
    color: #0077ff;
  }
`;

const MidWrapper = styled.div`
  border: 1px solid #ccc;
`;

const ChartWrapper = styled.div`
  font-size: 14px;
  margin: 0 25px;
  padding: 15px 0;

  .map-record {
    color: #1f334a;
    font-size: 14px;
  }

  .grey {
    color: #a1a1a1;
  }
`;

const Chart = styled.div`
  display: block;
  height: 139px;
  width: 278px;
  background-color: #ebebeb;
`;

const TableWrapper = styled.div`
  width: 328px;
  height: 235px;
  overflow-y: auto;
  text-align: center;
  border: 1px solid #ccc;

  table {
    font-size: 13px;
  }

  tbody tr td {
    height: 46px;
    line-height: 45px;
  }

  tbody tr td:nth-child(1) {
    width: 30px;
  }
  tbody tr td:nth-child(2) {
    width: 162px;
  }
  tbody tr td:nth-child(3) {
    width: 30px;
  }
  tbody tr td:nth-child(4) {
    width: 44px;
  }
  tbody tr td:nth-child(5) {
    width: 30px;
  }
`;
