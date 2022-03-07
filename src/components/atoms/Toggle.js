import React from 'react';
import styled from 'styled-components';

const Toggle = () => {
  return (
    <Switch>
      <input type="checkbox" />
      <Slider className="slider" />
    </Switch>
  );
};

export default Toggle;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 18px;
  background-color: red;

  border-radius: 50%;

  margin: 0 10px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 14px;
    width: 15px;
    left: 2px;
    bottom: 2px;

    border-radius: 50%;

    background-color: #fff;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #f52658;
  }

  input:checked + .slider:before {
    transform: translateX(15px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  border-radius: 30px;

  background-color: #f0f0f0;
`;
