import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Comment = () => {
  const nicknameRef = useRef();
  const commentRef = useRef();
  const [comments, setComments] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('comments');
      if (saved !== null) {
        return JSON.parse(saved);
      }
      return [
        {
          nick: 'ㅇㅇ',
          content: '화이팅',
          date: 'Tue Mar 07 2022',
        },
      ];
    }
  });

  const [todayComment, setTodayComment] = useState();

  const countComment = () => {
    const today = comments.filter((el) => {
      return el.date === new Date().toDateString();
    });
    setTodayComment(today.length);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const nick = nicknameRef.current.value;
    const content = commentRef.current.value;
    const date = new Date().toDateString();
    if (!nick || !content) {
      return;
    }
    setComments([...comments, { nick, content, date }]);

    nicknameRef.current.value = '';
    commentRef.current.value = '';
  };

  useEffect(() => {
    window.localStorage.setItem('comments', JSON.stringify(comments));
    countComment();
  }, [comments]);

  useEffect(() => {
    const localData = localStorage.getItem('comments');
    if (localData) {
      setComments(JSON.parse(localData));
    }
  }, []);

  return (
    <ComentContainer>
      <Title>
        <div>
          <span className="point">응원</span>
          <span>한마디</span>
        </div>
        <CountBox>
          <div>
            <span>오늘 {todayComment}</span>
          </div>
          <div>
            <span>전체 {comments && comments.length}</span>
          </div>
        </CountBox>
      </Title>

      <CommentBox>
        {comments.map((item) => (
          <li key={item.content + Date.now()}>
            <span>{item.nick}</span>
            <span className="comment">{item.content}</span>
          </li>
        ))}
      </CommentBox>

      <InputBox onSubmit={onSubmit}>
        <NicnameInput placeholder="닉네임" ref={nicknameRef} />
        <TextInput placeholder="최대 30자" maxLength={30} ref={commentRef} />
        <SubmitBtn type="submit">남기기</SubmitBtn>
      </InputBox>
    </ComentContainer>
  );
};

export default Comment;

const ComentContainer = styled.div`
  margin: 1%;

  border: 1px solid #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 17rem;
  flex: 1;
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
  list-style: none;

  li {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }

  span:first-of-type {
    color: #0077ff;
  }
  .comment {
    flex: 2.5;
    border: 1px solid #c3ced5;
    border-radius: 1rem;
    padding: 10px;
    width: 100%;
    margin-left: 2px;
  }
`;

const InputBox = styled.form`
  margin: 0 auto;
  width: 90%;
  height: 13%;
  display: flex;

  input {
    border: 0px;
    border-bottom: 1px solid #cccccc;
    outline: none;
  }
`;

const NicnameInput = styled.input`
  flex: 0.8;
  margin-left: 1%;
`;
const TextInput = styled.input`
  flex: 2;
  margin-left: 1%;
`;

const SubmitBtn = styled.button`
  flex: 0.5;
  margin-left: 1%;
  border: none;
  padding: 5px;
  border: 1px solid #ccc;
  background-color: #ccc;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
`;
