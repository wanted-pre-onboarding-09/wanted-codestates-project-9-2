import React, { useState } from 'react';
import styled from 'styled-components';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ActionButton({ icon, text }) {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <StyledButton icon={icon} onClick={openModal}>
        <span>{text}</span>
      </StyledButton>
      {modal && text === '신고하기' ? (
        <ModalBg>
          <RoportContainer>
            <div>
              <div className="bold">유저신고</div>
              <div>
                해당 유저를 신고하시겠습니까?
                <div>신고하시려면 사유를 입력해주세요.</div>
              </div>
            </div>
            <input type="text" />
            <BtnBox>
              <button type="button" onClick={openModal}>
                아니오
              </button>
              <button type="button" onClick={openModal}>
                네
              </button>
            </BtnBox>
          </RoportContainer>
        </ModalBg>
      ) : modal && text === '공유하기' ? (
        <ShareContainer>
          <div className="top">
            <div>공유하기</div>
            <FontAwesomeIcon icon={faXmark} onClick={openModal} />
          </div>
          <div className="main">
            <IconBox>
              <img
                className="iconImg"
                alt="facebook"
                src="https://tmi.nexon.com/img/assets/icon_fb.svg"
              />
              <div>페이스북</div>
            </IconBox>
            <IconBox>
              <img
                className="iconImg"
                alt="urlicon"
                src="https://tmi.nexon.com/img/assets/icon_url.svg"
              />
              <div>URL복사</div>
            </IconBox>
          </div>
        </ShareContainer>
      ) : modal && text === '전적갱신' ? (
        reload()
      ) : null}
    </>
  );
}

export default ActionButton;

const StyledButton = styled.button`
  padding: 4px 12px;
  position: relative;
  border-radius: 15px;
  border: 0.7px solid #1f334a;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  & span::before {
    font-family: 'Font Awesome 5 Free';
    content: '${(props) => props.icon}';
    font-weight: 900;
    margin-right: 5px;
  }
`;

const ModalBg = styled.div`
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
`;

const RoportContainer = styled.div`
  padding: 3%;
  z-index: 101;
  position: fixed;
  width: 35%;
  height: 35%;
  top: 20%;
  left: 30%;
  background-color: #ffffff;
  border-bottom: 5px solid #005fcc;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  .bold {
    font-weight: bold;
    font-size: 20px;
  }
  input {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
  }
`;

const ShareContainer = styled.div`
  padding: 1%;
  z-index: 99;
  position: absolute;
  width: 12rem;
  height: 10rem;
  top: 150px;
  left: 620px;
  background-color: #ffffff;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 5%;

  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-size: 16px;
    border-bottom: 1px solid #cccccc;
  }
  .main {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`;

const IconBox = styled.div`
  width: 100%;
  text-align: center;
  font-size: 16px;

  .iconImg {
    margin: 1rem 0;
    width: 100%;
    height: 3.5rem;
  }
`;

const BtnBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    border: none;
    width: 4rem;
    height: 3rem;
    color: #ffffff;
    background-color: #0077ff;
    font-size: 16px;
  }
`;
