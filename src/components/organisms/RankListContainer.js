import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import RankItem from '../molecules/RankItem';
import RankItemTitle from '../molecules/RankItemTitle';

const RankListContainer = ({ handleOffset, rankList }) => {
  const targetRef = useRef(null);

  const handleIntersect = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      handleOffset();
    }
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  }, [handleIntersect]);

  return (
    <ListWrapper>
      <ListContainer>
        <RankList>
          <RankItemTitle />
          {rankList &&
            Object.keys(rankList).map((key) => (
              <RankItem key={key} rankData={rankList[key]} rankCount={key} />
            ))}
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
