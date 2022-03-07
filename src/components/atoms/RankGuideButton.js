import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RankGuideButton = () => {
  const [isModal, setIsModal] = useState(false);
  const [isLabel, setIsLabel] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleLabel = () => {
    setIsLabel(!isLabel);
  };

  const onBackClick = (e) => {
    if (e.target === e.currentTarget) {
      handleModal();
    }
  };

  return (
    <>
      <GuideButton onClick={handleModal}>랭킹 가이드</GuideButton>
      {isModal && (
        <Background onClick={onBackClick} isModal={isModal}>
          <ModalContainer isModal={isModal}>
            <CloseBtn onClick={handleModal} />
            <PointImg />
            <BazzieImg />
            <DaoImg />
            <BubbleImg />
            <Label onClick={handleLabel} isLabel={isLabel} />
          </ModalContainer>
        </Background>
      )}
    </>
  );
};

export default RankGuideButton;

const dao = keyframes`
  0% {
    top: 51px;
}
50% {
    top: 101px;
}
100% {
    top: 71px;
}
`;

const bazzie = keyframes`
 0% {
    top: 180px;
}
100% {
    top: 154px;
}
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

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

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  opacity: ${(props) => (props.isModal ? '1' : '0')};
  animation: ${(props) => (props.isModal ? fadeIn : fadeOut)} 0.3s ease;
  transition: opacity 0.3s ease-out;
`;

const ModalContainer = styled.div`
  background-image: url('https://tmi.nexon.com/img/assets/guide_desc.png');
  position: relative;
  width: 827px;
  height: 653px;
  z-index: 10;
  opacity: ${(props) => (props.isModal ? '1' : '0')};
  animation: ${(props) => (props.isModal ? fadeIn : fadeOut)} 0.3s ease;
  transition: opacity 0.3s ease-out;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 34px;
  background-image: url('https://tmi.nexon.com/img/assets/btn_close.png');
  font-size: 24px;
  border: none;
  width: 22px;
  height: 22px;
`;

const ModalImg = styled.div`
  position: absolute;
  z-index: 10;
`;

const PointImg = styled(ModalImg)`
  width: 66px;
  height: 30px;
  top: 35px;
  right: 99px;
  background-image: url('https://tmi.nexon.com/img/assets/guide_gg.png');
`;

const BazzieImg = styled(ModalImg)`
  width: 112px;
  height: 123px;
  top: 154px;
  right: 176px;
  background-image: url('https://tmi.nexon.com/img/assets/guide_bazzie.png');
  animation: ${bazzie} 0.5s ease;
`;

const DaoImg = styled(ModalImg)`
  width: 198px;
  height: 218px;
  top: 71px;
  right: -31px;
  background-image: url('https://tmi.nexon.com/img/assets/guide_dao.png');
  animation: ${dao} 0.5s ease-out;
`;

const BubbleImg = styled(ModalImg)`
  width: 114px;
  height: 66px;
  top: 52px;
  right: 157px;
  background-image: url('https://tmi.nexon.com/img/assets/guide_bubble.png');
`;

const Label = styled.label`
  position: absolute;
  top: 615px;
  left: 50%;
  margin-left: -70px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  width: 15px;
  height: 16px;
  margin-right: 5px;
  background-image: ${(props) =>
    props.isLabel
      ? `url('https://tmi.nexon.com/img/checkbox_on.png')`
      : `url('https://tmi.nexon.com/img/checkbox_off.png')`};
`;
