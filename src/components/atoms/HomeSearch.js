import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
    z-index: 100;
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
    width: 50px;
    height: 100%;
  }
`;

const HomeSearch = () => {
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const changeText = (event) => {
    setText(event.target.value.trim());
  };

  const submit = (event) => {
    event.preventDefault();
    navigate(`/user/${text}`);

    setText('');
  };

  return (
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
  );
};

export default HomeSearch;
