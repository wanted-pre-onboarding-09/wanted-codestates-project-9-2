import React, { useState } from 'react';
import styled from 'styled-components';

import Toggle from '../atoms/Toggle';

const UserTabBar = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const toggleTab = (index) => setTabIndex(index);

  return (
    <TabsLine>
      <TabList>
        <TabItem
          className={tabIndex === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
        >
          통합
        </TabItem>
        <TabItem
          className={tabIndex === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
        >
          매우빠름
        </TabItem>
        <TabItem
          className={tabIndex === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
        >
          무한부스터
        </TabItem>
      </TabList>
      <Wrapper>
        {/* TODO: 리타이어 필터 기능 추가  */}
        <span>리타이어 노출</span>
        <Toggle />
      </Wrapper>
    </TabsLine>
  );
};

export default UserTabBar;

const TabsLine = styled.div`
  position: relative;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #cccccc;
`;

const TabList = styled.ul`
  display: flex;
`;

const TabItem = styled.li`
  cursor: pointer;
  padding: 10px;
  position: relative;
  bottom: -3px;

  &:hover {
    color: #0077ff;
    border-bottom: 4px solid #0077ff;
    transition: 0.4s;
  }

  &.active-tabs {
    color: #0077ff;
    border-bottom: 4px solid #0077ff;
    transition: 0.4s;
  }
`;

const Wrapper = styled.div`
  span {
    font-size: 12px;
  }
`;
