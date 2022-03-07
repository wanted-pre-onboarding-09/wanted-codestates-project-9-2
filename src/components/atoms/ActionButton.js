import React from 'react';
import styled from 'styled-components';

function ActionButton({ icon, text }) {
  return (
    <StyledButton icon={icon}>
      <span>{text}</span>
    </StyledButton>
  );
}

export default ActionButton;

const StyledButton = styled.button`
  padding: 4px 12px;
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
