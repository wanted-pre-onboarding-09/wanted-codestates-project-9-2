import React, { useState } from 'react';
import styled from 'styled-components';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    opacity: ${({ text }) => {
      return text.length > 2 ? '1' : '0.5';
    }};
    cursor: pointer;
  }
`;

const Search = () => {
  const [text, setText] = useState('');

  const changeText = (event) => {
    setText(event.target.value);
    console.log(text.length);
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(text);
    setText('');
  };

  return (
    <SearchBox text={text} onSubmit={submit}>
      <input
        type="text"
        value={text}
        onChange={changeText}
        placeholder="닉네임 검색"
      />
      <FontAwesomeIcon onClick={submit} text={text} icon={faMagnifyingGlass} />
    </SearchBox>
  );
};

export default Search;
