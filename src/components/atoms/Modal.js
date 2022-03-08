import React from 'react';
import styled from 'styled-components';

const ModalBox = styled.div`
  display: none;
`;

function Modal(modal) {
  console.log(modal);
  if (modal === true) {
    console.log('왔니');
  } else {
    console.log('갔니');
  }
  return (
    <ModalBox>
      <div>
        <div>확인</div>
        <div>일치하는 유저가 없습니다.</div>
        <div>닉네임이 변경되었는지 확인해주세요.</div>
        <button type="button">확인</button>
      </div>
    </ModalBox>
  );
}
export default Modal;
