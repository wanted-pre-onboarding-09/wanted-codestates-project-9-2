import React, { useState } from 'react';
import styled from 'styled-components';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Modal from './Modal';
import character from '../../data/character.json';

const SearchBox = styled.form`
  border-bottom: 1px solid #ffffff;
  color: #ffffff;
  opacity: ${({ text }) => {
    return text ? '1' : '0.5';
  }};
  transition: 0.5s;

  :hover {
    opacity: 1;
  }

  input {
    margin: 0.5rem;
    background-color: #005fcc;
    border: none;
    color: #ffffff;
    opacity: 0.5;
    :focus {
      opacity: 1;
      outline: none;
    }
    ::placeholder {
      color: #ffffff;
    }
  }

  svg {
    transition: 0.5s;
    opacity: ${({ text }) => {
      return text.length > 2 ? '1' : '0.5';
    }};
    cursor: pointer;
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
const Search = () => {
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
          placeholder="닉네임 검색"
        />
        <FontAwesomeIcon
          onClick={submit}
          text={text}
          icon={faMagnifyingGlass}
        />
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

export default Search;
