import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import RankItem from '../molecules/RankItem';
import RankItemTitle from '../molecules/RankItemTitle';

const RankListContainer = () => {
  const targetRef = useRef(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async (page) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
    );
    setPosts((prev) => [...prev, ...response.data]);
    setIsLoading(false);
  }, []);

  const handleIntersect = useCallback((entries) => {
    // entries배열의 첫번째 요소로 target
    const target = entries[0];
    // target이 보이는 경우
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    getPosts(page);
  }, [getPosts, page]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (targetRef.current) {
      // 관찰할 대상을 등록
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <ListWrapper>
      <ListContainer>
        <RankList>
          <RankItemTitle />
          {isLoading ? (
            <h1>로딩중</h1>
          ) : (
            <>
              {posts.map((post) => (
                <RankItem key={post.id} post={post} />
              ))}
            </>
          )}
          <TargetDiv ref={targetRef} />
        </RankList>
      </ListContainer>
    </ListWrapper>
  );
};

export default RankListContainer;

const ListWrapper = styled.div`
  position: relative;
  padding-top: 40px;
  margin: auto;
  @media (max-width: 1630px) {
    width: 1000px;
  }
`;

const ListContainer = styled.div`
  margin-top: 490px;
`;

const RankList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const TargetDiv = styled.div`
  width: 100%;
  height: 20px;
`;
