import React, { useState } from 'react';
import styled from 'styled-components';
import character from '../../data/character.json';

const SearchBox = styled.form`
  margin-top: 10rem;
  width: 720px;
  display: row;
  justify-content: space-around;
  padding: 1rem;
  border: 4px solid #ffffff;
  color: #ffffff;
  transition: 0.5s;
  border-radius: 40px;

  input {
    width: 650px;
    padding-left: 1rem;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #ffffff;
    opacity: 0.5;
    font-size: 25px;
    :focus {
      opacity: 1;
      outline: none;
    }
    ::placeholder {
      color: #ffffff;
    }
  }

  button {
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    border: none;
  }
`;

const ModalBox = styled.div`
  display: ${({ modal }) => {
    return modal ? 'block' : 'none';
  }};
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;

  .warning {
    padding: 5%;
    z-index: 101;
    position: fixed;
    width: 30%;
    height: 20%;
    top: 20%;
    left: 30%;
    background-color: #ffffff;
    border-bottom: 5px solid #005fcc;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
    .Confirm {
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 20px;
    }
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
const HomeSearch = () => {
  const [text, setText] = useState('');
  const [modal, setModal] = useState(false);

  const changeText = (event) => {
    setText(event.target.value);
    console.log(text.length);
  };

  const modalHandler = () => {
    setModal(!modal);
  };

  const submit = (event) => {
    event.preventDefault();

    if (character.filter((item) => item.name === text).length === 1) {
      setModal(false);
    } else {
      setModal(true);
    }
    setText('');
  };

  return (
    <>
      <SearchBox text={text} onSubmit={submit}>
        <input
          type="text"
          value={text}
          onChange={changeText}
          placeholder="카트라이더 닉네임 입력"
        />
        <button onClick={submit} type="button">
          <img
            alt="Tmi"
            src="https://tmi.nexon.com/img/assets/tmi_logo_default.svg"
          />
        </button>
      </SearchBox>
      <ModalBox modal={modal} onClick={modalHandler}>
        <div className="warning">
          <div className="Confirm">확인</div>
          <div>일치하는 유저가 없습니다.</div>
          <div>닉네임이 변경되었는지 확인해주세요.</div>
          <BtnBox>
            <button type="button" onClick={modalHandler}>
              확인
            </button>
          </BtnBox>
        </div>
      </ModalBox>
    </>
  );
};

export default HomeSearch;
