import React from 'react';
import styled from 'styled-components';

const Comment = () => {
  return (
    <ComentContainer>
      <Title>
        <div>
          <span className="point">응원</span>
          <span>한마디</span>
        </div>
        <CountBox>
          <div>
            <span>오늘</span>
          </div>
          <div>
            <span>전체</span>
          </div>
        </CountBox>
      </Title>

      <CommentBox>응원</CommentBox>

      <InputBox>
        <NicnameInput placeholder="닉네임" />
        <TextInput placeholder="최대30자" />
        <SubmitBtn type="button">남기기</SubmitBtn>
      </InputBox>
    </ComentContainer>
  );
};

export default Comment;

const ComentContainer = styled.div`
  margin: 1%;
  width: 300px;
  border: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 17rem;
`;

const Title = styled.div`
  height: 17%;
  border-bottom: 1px solid #ccc;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0 10px;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .point {
    color: #0077ff;
    margin-right: 5px;
  }
`;
const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div:first-child {
    margin-right: 5px;
  }
`;
const CommentBox = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 65%;
  border-bottom: 1px solid #cccccc;
  overflow-y: auto;
`;

const InputBox = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 13%;
`;

const NicnameInput = styled.input`
  width: 20%;
  margin-left: 1%;
  border: 0px;
  border-bottom: 1px solid #cccccc;
`;
const TextInput = styled.input`
  margin-left: 1%;
  width: 58%;
  border: 0px;
  border-bottom: 1px solid #cccccc;
`;

const SubmitBtn = styled.button`
  margin-left: 1%;
  border: none;
  padding: 5px;
  border-radius: 10%;
`;
