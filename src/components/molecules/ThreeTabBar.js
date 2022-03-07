import React, { useState } from 'react';
import styled from 'styled-components';

const ThreeTabBar = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const handleTab = (index) => setTabIndex(index);

  return (
    <ButtonTabBar>
      <LeftTabButton active={tabIndex === 1} onClick={() => handleTab(1)}>
        통합
      </LeftTabButton>
      <MiddleTabButton active={tabIndex === 2} onClick={() => handleTab(2)}>
        매빠
      </MiddleTabButton>
      <RightTabButton active={tabIndex === 3} onClick={() => handleTab(3)}>
        무부
      </RightTabButton>
    </ButtonTabBar>
  );
};

export default ThreeTabBar;

const ButtonTabBar = styled.div`
  border-radius: 5px;
`;

const ButtonTab = styled.button`
  vertical-align: middle;
  display: inline-block;
  width: 36px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #fff;
  color: ${(props) => (props.active ? '#005fcc' : '#fff')};
  background-color: ${(props) => (props.active ? '#fff' : 'transparent')};
`;

const LeftTabButton = styled(ButtonTab)`
  border-width: 0.7px 0 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
`;

const MiddleTabButton = styled(ButtonTab)`
  border-width: 0.7px 0 0.7px 0.7px;
`;

const RightTabButton = styled(ButtonTab)`
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
`;
