/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import ProgressCircle from '../atoms/ProgressCircle';
import Gold from '../../assets/icon_goldmedal.png';
import Siver from '../../assets/icon_silvermedal.png';
import Bronz from '../../assets/icon_bronzemedal.png';

const TopRankWrap = styled.div`
  margin-top: 3rem;
  height: 305px;
  /* background: #d8d8d8; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopRankContainer = styled.div`
  width: 900px;
  height: 305px;
  /* background: #6e6e6e; */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const TopRankElement = styled.div`
  position: relative;

  > img {
    position: absolute;
    top: -0.8rem;
    left: 1rem;
  }
`;
const UpperTopRankWrap = styled.div`
  width: 246px;
  height: 133px;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(https://tmi.nexon.com/img/background_flag_rank.png);
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const LowerTopRankWrap = styled.div`
  position: relative;
  margin-top: 1px;
  width: 246px;
  height: 133px;
  display: flex;
  flex-direction: row;
`;

const LowerLeftRankWrap = styled.div`
  width: 123px;
  height: 112px;
  background: #fff;
  border-bottom-left-radius: 10px;
`;

const LowerLeftRankContainer = styled.div`
  width: 123px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > .text {
    font-size: 12px;
  }
`;

const LowerRightRankWrap = styled.div`
  width: 123px;
  height: 112px;
  background: #fff;
  border-bottom-right-radius: 10px;
`;

const SeparateLine = styled.div`
  position: absolute;
  top: 20px;
  right: 50%;
  width: 1px;
  height: 75px;
  background-color: #f2f2f2;
  border: none;
  opacity: 1;
`;
const TopRankNameWrap = styled.div`
  width: 206px;
  height: 80%;
  /* background: #f5a9f2; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  > .name {
    width: 100%;
    height: 23px;
    color: #0077ff;
    font-weight: 700;
    font-size: 18px;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  > .rank {
    width: 100%;
    height: 14px;
    padding-left: 1rem;
    margin-bottom: 0.4rem;

    > .text1 {
      font-size: 14px;
    }

    > .text2 {
      margin-left: 0.3rem;
      font-size: 14px;
      font-weight: bold;
    }
  }

  > .point {
    width: 100%;
    height: 14px;
    padding-left: 1rem;

    > .text1 {
      font-size: 14px;
      /* font-weight: bold; */
    }

    > .text2 {
      margin-left: 0.3rem;
      font-size: 14px;
      font-weight: bold;
    }

    > .fas {
      color: #9bd728;
      margin-left: 0.3rem;
      font-size: 0.8rem;
      /* border: 1px solid black; */
    }

    > .plusGreen {
      font-size: 14px;
      font-weight: 400;
      color: #9bd728;
      margin-left: 0.3rem;
    }
  }
`;

function TopRank() {
  return (
    <TopRankWrap>
      <TopRankContainer>
        {/* 1위 영역 */}
        <TopRankElement>
          <img src={Gold} alt="없음" />
          <UpperTopRankWrap>
            <TopRankNameWrap>
              <div className="name">아이리스반달</div>
              <div className="rank">
                <span className="text1">순위</span>
                <span className="text2">1위</span>
              </div>
              <div className="point">
                <span className="text1">누적포인트</span>
                <span className="text2">1,546PT</span>
                <i className="fas fa-plus-circle" />
                <span className="plusGreen">221</span>
              </div>
            </TopRankNameWrap>
          </UpperTopRankWrap>
          <LowerTopRankWrap>
            <LowerLeftRankWrap>
              <LowerLeftRankContainer>
                <div className="text">승률</div>
                <ProgressCircle color="#07f" />
              </LowerLeftRankContainer>
            </LowerLeftRankWrap>
            <SeparateLine />
            <LowerRightRankWrap>
              <LowerLeftRankContainer>
                <div className="text">리타이어율</div>
                <ProgressCircle color="#f62459" />
              </LowerLeftRankContainer>
            </LowerRightRankWrap>
          </LowerTopRankWrap>
        </TopRankElement>

        {/* 2위 영역 */}
        <TopRankElement>
          <img src={Siver} alt="없음" />
          <UpperTopRankWrap>
            <TopRankNameWrap>
              <div className="name">lMaCl핑마</div>
              <div className="rank">
                <span className="text1">순위</span>
                <span className="text2">2위</span>
              </div>
              <div className="point">
                <span className="text1">누적포인트</span>
                <span className="text2">1,066PT</span>
                <i className="fas fa-plus-circle" />
                <span className="plusGreen">158</span>
              </div>
            </TopRankNameWrap>
          </UpperTopRankWrap>
          <LowerTopRankWrap>
            <LowerLeftRankWrap>
              <LowerLeftRankContainer>
                <div className="text">승률</div>
                <ProgressCircle color="#07f" />
              </LowerLeftRankContainer>
            </LowerLeftRankWrap>
            <SeparateLine />
            <LowerRightRankWrap>
              <LowerLeftRankContainer>
                <div className="text">리타이어율</div>
                <ProgressCircle color="#f62459" />
              </LowerLeftRankContainer>
            </LowerRightRankWrap>
          </LowerTopRankWrap>
        </TopRankElement>

        {/* 3위 영역 */}
        <TopRankElement>
          <img src={Bronz} alt="없음" />
          <UpperTopRankWrap>
            <TopRankNameWrap>
              <div className="name">vvvilivvv</div>
              <div className="rank">
                <span className="text1">순위</span>
                <span className="text2">3위</span>
              </div>
              <div className="point">
                <span className="text1">누적포인트</span>
                <span className="text2">911PT</span>
                <i className="fas fa-plus-circle" />
                <span className="plusGreen">313</span>
              </div>
            </TopRankNameWrap>
          </UpperTopRankWrap>
          <LowerTopRankWrap>
            <LowerLeftRankWrap>
              <LowerLeftRankContainer>
                <div className="text">승률</div>
                <ProgressCircle color="#07f" />
              </LowerLeftRankContainer>
            </LowerLeftRankWrap>
            <SeparateLine />
            <LowerRightRankWrap>
              <LowerLeftRankContainer>
                <div className="text">리타이어율</div>
                <ProgressCircle color="#f62459" />
              </LowerLeftRankContainer>
            </LowerRightRankWrap>
          </LowerTopRankWrap>
        </TopRankElement>
      </TopRankContainer>
    </TopRankWrap>
  );
}

export default TopRank;
