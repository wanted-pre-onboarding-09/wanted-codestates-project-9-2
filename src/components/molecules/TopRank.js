/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { getMatchList } from '../../store/matchList/matchListAsyncThunk';
import ProgressCircle from '../atoms/ProgressCircle';
import mockData from '../../data/topRank.json';
import Gold from '../../assets/icon_goldmedal.png';
import Siver from '../../assets/icon_silvermedal.png';
import Bronz from '../../assets/icon_bronzemedal.png';

const TopRankWrap = styled.div`
  margin-top: 3rem;
  height: 305px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopRankContainer = styled.div`
  width: 1000px;
  height: 305px;
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

const StyledLink = styled(Link)`
  &:link {
    //아직 방문하지 않은
    color: #0077ff;
    text-decoration: none;
  }

  &:visited {
    //사용자가 방문한적이 있는
    color: #0077ff;
    text-decoration: none;
  }

  &:hover {
    //마우스를 링크에 올려두었을 때
    color: #0077ff;
  }

  &:active {
    //클릭 후 뗄 떼까지
    color: #0077ff;
  }
`;

const UpperTopRankWrap = styled.div`
  width: 306px;
  height: 133px;
  background: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-image: url(https://tmi.nexon.com/img/background_flag_rank.png);
  background-size: cover;
  background-position: 50%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 1630px) {
    width: 246px;
  }

  > img {
    width: 60%;
    position: absolute;
    top: -1rem;
    right: -2rem;

    @media screen and (max-width: 1630px) {
      display: none;
    }
  }
`;

const LowerTopRankWrap = styled.div`
  position: relative;
  margin-top: 1px;
  width: 306px;
  height: 133px;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1630px) {
    width: 246px;
  }
`;

const LowerLeftRankWrap = styled.div`
  width: 153px;
  height: 112px;
  background: #fff;
  border-bottom-left-radius: 10px;

  @media screen and (max-width: 1630px) {
    width: 123px;
  }
`;

const LowerLeftRankContainer = styled.div`
  width: 153px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1630px) {
    width: 123px;
  }

  > .text {
    font-size: 12px;
  }
`;

const LowerRightRankWrap = styled.div`
  width: 153px;
  height: 112px;
  background: #fff;
  border-bottom-right-radius: 10px;

  @media screen and (max-width: 1630px) {
    width: 123px;
  }
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
  height: 60%;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 1rem;

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
    }

    > .plusGreen {
      font-size: 14px;
      font-weight: 400;
      color: #9bd728;
      margin-left: 0.3rem;
    }
  }
`;

function TopRank({ topRank }) {
  console.log(topRank, 'topRank');
  /* useSelector를 통해 수신된 데이터 담기
  Progress chart 2개의 파라미터를 인자로 받는다. 
  
   <ProgressCircle color="#07f" percent={RankingData[0].win} />

  변수 1 color: 도너 차트 외곽선 색깔
  변수 2 percent: 도너 차트 
  */

  let RankingData = [];

  mockData.map((obj, idx) => {
    const winN = Math.floor(Math.random() * (100 - 70) + 70);
    const retireN = Math.floor(Math.random() * (20 - 5) + 5);

    if (idx < 3) {
      RankingData = [
        ...RankingData,
        {
          nickName: obj.nickName,
          character: `https://s3-ap-northeast-1.amazonaws.com/solution-userstats/metadata/character/${obj.character}.png`,
          point: obj.score
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ','),
          win: winN,
          retire: retireN,
        },
      ];
    }
  });

  // console.log(RankingData);

  return (
    <TopRankWrap>
      <TopRankContainer>
        {/* 1위 영역 */}
        <TopRankElement>
          <img src={Gold} alt="없음" />
          <UpperTopRankWrap>
            <TopRankNameWrap>
              <div className="name">
                <StyledLink to={`/detail/${RankingData[0].nickName}`}>
                  {RankingData[0].nickName}
                </StyledLink>
              </div>
              <div className="rank">
                <span className="text1">순위</span>
                <span className="text2">1위</span>
              </div>
              <div className="point">
                <span className="text1">누적포인트</span>
                <span className="text2">{RankingData[0].point}PT</span>
                <i className="fas fa-plus-circle" />
                <span className="plusGreen">221</span>
              </div>
            </TopRankNameWrap>
            <img src={RankingData[0].character} alt="없음" />
          </UpperTopRankWrap>
          <LowerTopRankWrap>
            <LowerLeftRankWrap>
              <LowerLeftRankContainer>
                <div className="text">승률</div>
                <ProgressCircle color="#07f" percent={RankingData[0].win} />
              </LowerLeftRankContainer>
            </LowerLeftRankWrap>
            <SeparateLine />
            <LowerRightRankWrap>
              <LowerLeftRankContainer>
                <div className="text">리타이어율</div>
                <ProgressCircle
                  color="#f62459"
                  percent={RankingData[0].retire}
                />
              </LowerLeftRankContainer>
            </LowerRightRankWrap>
          </LowerTopRankWrap>
        </TopRankElement>

        {/* 2위 영역 */}
        <TopRankElement>
          <img src={Siver} alt="없음" />
          <UpperTopRankWrap>
            <TopRankNameWrap>
              <div className="name">
                <StyledLink to={`/detail/${RankingData[1].nickName}`}>
                  {RankingData[1].nickName}
                </StyledLink>
              </div>
              <div className="rank">
                <span className="text1">순위</span>
                <span className="text2">2위</span>
              </div>
              <div className="point">
                <span className="text1">누적포인트</span>
                <span className="text2">{RankingData[1].point}PT</span>
                <i className="fas fa-plus-circle" />
                <span className="plusGreen">158</span>
              </div>
            </TopRankNameWrap>
            <img src={RankingData[1].character} alt="없음" />
          </UpperTopRankWrap>
          <LowerTopRankWrap>
            <LowerLeftRankWrap>
              <LowerLeftRankContainer>
                <div className="text">승률</div>
                <ProgressCircle color="#07f" percent={RankingData[1].win} />
              </LowerLeftRankContainer>
            </LowerLeftRankWrap>
            <SeparateLine />
            <LowerRightRankWrap>
              <LowerLeftRankContainer>
                <div className="text">리타이어율</div>
                <ProgressCircle
                  color="#f62459"
                  percent={RankingData[1].retire}
                />
              </LowerLeftRankContainer>
            </LowerRightRankWrap>
          </LowerTopRankWrap>
        </TopRankElement>

        {/* 3위 영역 */}
        <TopRankElement>
          <img src={Bronz} alt="없음" />
          <UpperTopRankWrap>
            <TopRankNameWrap>
              <div className="name">
                <StyledLink to={`/detail/${RankingData[2].nickName}`}>
                  {RankingData[2].nickName}
                </StyledLink>
              </div>
              <div className="rank">
                <span className="text1">순위</span>
                <span className="text2">3위</span>
              </div>
              <div className="point">
                <span className="text1">누적포인트</span>
                <span className="text2">{RankingData[2].point}PT</span>
                <i className="fas fa-plus-circle" />
                <span className="plusGreen">313</span>
              </div>
            </TopRankNameWrap>
            <img src={RankingData[2].character} alt="없음" />
          </UpperTopRankWrap>
          <LowerTopRankWrap>
            <LowerLeftRankWrap>
              <LowerLeftRankContainer>
                <div className="text">승률</div>
                <ProgressCircle color="#07f" percent={RankingData[2].win} />
              </LowerLeftRankContainer>
            </LowerLeftRankWrap>
            <SeparateLine />
            <LowerRightRankWrap>
              <LowerLeftRankContainer>
                <div className="text">리타이어율</div>
                <ProgressCircle
                  color="#f62459"
                  percent={RankingData[2].retire}
                />
              </LowerLeftRankContainer>
            </LowerRightRankWrap>
          </LowerTopRankWrap>
        </TopRankElement>
      </TopRankContainer>
    </TopRankWrap>
  );
}

export default TopRank;
