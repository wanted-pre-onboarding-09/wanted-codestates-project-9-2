import React from 'react';
import styled from 'styled-components';

const RankGuideButton = () => <GuideButton>랭킹 가이드</GuideButton>;

export default RankGuideButton;

const GuideButton = styled.button`
  position: absolute;
  top: 110px;
  right: 10px;
  padding: 1px 6px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background-color: #005fcc;
  border: 1px solid #fff;
  &:hover {
    color: #005fcc;
    background-color: #fff;
  }
`;
