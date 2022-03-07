import { faEye } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import ActionButton from '../atoms/ActionButton';

function Profile() {
  return (
    <Container>
      <StyeldImg
        src="https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/81c9f10de2f39d42f97b206c5804c32495e3f3e751d20529e1ac3c8aeb0a4939.png"
        alt="test"
      />

      <ProfileInfo>
        <h1>
          USERNICKNAME
          <img src="https://tmi.nexon.com/img/icon_pro.png" alt="level" />
        </h1>
        <TeamSelect>팀선택컴포넌트</TeamSelect>
        <Actions>
          <ActionButton icon="\f01e" text="전적갱신" />
          <ActionButton icon="\f0f3" text="신고하기" />
          <ActionButton icon="\f1e0" text="공유하기" />
        </Actions>
      </ProfileInfo>
      <View>
        <p>
          <FontAwesomeIcon icon={faEye} /> 페이지뷰
        </p>
        <p>1144</p>
      </View>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: url('https://tmi.nexon.com/img/background_flag_w.png') no-repeat
    center center;
  border-style: solid;
  border-width: 1px 1px 1px 4px;
  border-color: #f2f2f2 #f2f2f2 #f2f2f2 #07f;
  height: 175px;
  width: 1000px;
  align-items: center;
  position: relative;
`;

const ProfileInfo = styled.div`
  text-align: left;
  h1 {
    font-size: 45px;
  }

  & img {
    width: 25px;
    height: 25px;
    margin-left: 8px;
  }
`;

const StyeldImg = styled.img`
  width: 164px;
  height: 123px;
`;

const TeamSelect = styled.div`
  display: inline-block;
  &::after {
    content: '';
    display: inline-block;
    margin-left: 10px;
    top: 27px;
    right: 0;
    width: 1px;
    height: 14px;
    background-color: #ececec;
  }
`;

const Actions = styled.div`
  display: inline-block;
  margin-left: 10px;
  & button {
    margin-right: 10px;
  }
`;

const View = styled.div`
  position: absolute;
  right: 40px;
  color: #6c7a89;
  p {
    margin: 0;
  }
  p:nth-child(1) {
    font-size: 14px;
  }
  p:nth-child(2) {
    font-size: 20px;
  }
`;
export default Profile;
