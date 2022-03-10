# wanted-codestates-project-9-2

넥슨 사전 과제

## 프로젝트 소개

- 카트라이더 랭킹 페이지 클론
- 기간: 22.03.07~22.03.08

## 배포링크

[🚀 배포 링크](https://wanted-pre-onboarding-09.github.io/wanted-codestates-project-9-2/)

## 실행 방법

```
① 해당 레포지토리를 클론한다.
② 프로젝트의 패키지를 설치한다. (npm install)
③ scripts 명령어로 프로젝트를 실행한다. (npm start)
```

## 팀원 소개

|  이름  |    Role     |
| :----: | :---------: |
| 유송현 | Team Leader |
| 서한석 | Team Member |
| 손영산 | Team member |
| 윤솔비 | Team member |
| 이지수 | Team member |
| 조영제 | Team member |

## 기술 스택

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
<br/>

## 요구사항

```
1. [카트라이더 TMI(전적 검색 사이트)](https://tmi.nexon.com/kart)의 페이지중에서 필수 항목 1개와 선택파일 1개 이상의 페이지 개발(총 2개 이상)
    - 필수 : [개인 전적 조회 페이지](https://tmi.nexon.com/kart/user?nick=BBEESSTT&matchType=indi)를 비롯한 1개 이상의 추가 페이지 개발
    - 선택
        - [랭킹 페이지](https://tmi.nexon.com/kart/rank)
        - [트랙 스피드개인전 페이지](https://tmi.nexon.com/kart/track/)
        - [트랙 스피드팀전 페이지](https://tmi.nexon.com/kart/track?matchType=team)
1. [카트라이더 OpenAPI](https://developers.nexon.com/kart)를 이용하여 데이터 조회(가입 후 키 발급 필요)
1. 페이지 이동과 닉네임 검색이 가능한 상단 메뉴바 추가

### 필수 조건
1. React, Vuejs 두가지 중 하나의 프레임워크 사용하여 SPA로 구현
1. 두 종류 이상의 그레프 포함 필수
1. 다섯 종류 이상의 애니메이션 포함 필수
1. 필요한 경우 서버 개발은 가능하나 SSR 사용 불가
1. 하나 이상의 vanila script로 만들어진 모듈 구현
1. 해당 사이트의 리소스를 사용하여도 무방하며 Bootstrap과 같은 UI 프레임워크 테마 사용도 가능

### 선택 조건
1. 컴포넌트 기반의 구조를 가질 수 있도록 설계
1. 라이브러리를 사용하지 않고 그레프, 애니메이션을 구현
1. UI/UX를 고려한 기능 및 페이지 구성

### 참고 사항
* 많은 기능 보다는 아이디어 기반의 기능에 중점을 둠
* 사이트명은 개별 선정
* [카트라이더 TMI(전적 검색 사이트)](https://tmi.nexon.com/kart)의 모든 데이터가 OpenAPI로 제공되지 않으므로 제공되는 범위에서만 제작
* 데이터 저장이 필요한 경우 firebase와 같은 클라우드 서비스 사용 가능

## 제출 방식
* 개인 github public 프로젝트 링크 공유(프로젝트명 무관)
* 결과물에 대한 전반적인 설명과 그래프, 애니메이션 적용 지점을 README 파일에 기제
* 제출된 코드는 수정없이 빌드 및 로컬 실행이 가능해야 함
* 불필요한 코드가 포함되지 않도록 gitignore 파일 적용 필수
```

## 디렉터리 구조

```
│  App.css
│  App.js
│  data.json
│  index.css
│  index.js
│
├─assets
│      error.png
│      icon_bronzemedal.png
│      icon_goldmedal.png
│      icon_silvermedal.png
│      notFound.png
│      notFound1.png
│      wave.svg
│
├─components
│  ├─atmoms
│  │  │  ActionButton.js
│  │  │  Comment.js
│  │  │  HomeAnimation.js
│  │  │  HomeSearch.js
│  │  │  LogoBar.js
│  │  │  NabBar.js
│  │  │  ProgressCircle.js
│  │  │  RankGuideButton.js
│  │  │  ScatterChart.js
│  │  │  Search.js
│  │  └─ GameTypeTab.js
│  │
│  │
│  ├─molecules
│  │  │  Banner.js
│  │  │  Comment.js
│  │  │  DetailRecordItem.js
│  │  │  DetailRecordList.js
│  │  │  Error.js
│  │  │  RecommentItem.js
│  │  │  GameTypeTab
│  │  │  Loading
│  │  │  Profile
│  │  │  RankBackground
│  │  │  RankChart
│  │  │  RankItem
│  │  │  RankItemTitle
│  │  │  RecordItem
│  │  │  RecordList
│  │  │  RecordSideTab
│  │  │  SoloOrTeamTabBar
│  │  │  ThreeTabBar
│  │  │  TopRank
│  │  │  TotalRecord
│  │  └─ UserTabBar
│  │
│  ├─organisms
│  │  │  Header.js
│  │  │  RankInfoContainer.js
│  │  └─  RankListContainer.js
│  │
│  └─pages
│          HomePage.js
│          NotFound.js
│          RankPage.js
│          UserPage.js
│
├─data
│      character.json
│      flyingPet.json
│      gameType.json
│      kart.json
│      pet.json
│      topRank.json
│      track.json
│
├─ hooks
│   └─ useDidMountEffect.js
│
│
├─ lib
│   │  calculateDateDiff.js
│   └─ convertMatchTime.js
│
│
├─ service
│     └─ defaultClient.js
│
└─ store
    │
    ├─ match
    │     │
    │     ├─ matchAsyncThunk.js
    │     │
    │     └─ matchSlice.js
    │
    ├─ matchList
    │     │
    │     ├─ matchListAsyncThunk.js
    │     │
    │     └─ matchListSlice.js
    │
    └─ index.js
```

## 작업 내용

### 유송현

- redux
  - 상태관리를 위해 리덕스 toolkit을 적용하였습니다.
  - 네트워크 요청의 로딩, 에러, 데이터 상태를 가지고 있습니다.
- 랭킹 데이터 가공
  - 3개의 api를 조합해서 랭킹을 선정할 수 있는 데이터를 만들었습니다.
  - api를 조합하다 보니 요청이 무거워져 요청수를 조절해 요청할수 있도록 구현해 무한스크롤 컴포넌트에서 데이터를 조금씩 요청하였습니다.
  - 최신 게임을 진행한 유저를 무작위로 선발한 뒤 해당 유저들의 개인 전적을 조회해 데이터를 가공하였습니다.
  - data를 받아오면 slice에서 팀원들이 최대한 편하게 사용할 수 있도록 데이터를 가공하였습니다.
- 배포
  - 개발 환경에서 CORS 오류를 해결하기 위해 package.json에 proxy를 지정해 주었으며, 배포 후에는 Proxy 서버를 두어 cors 에러를 해결하고 배포하였습니다.
- 로딩 / 에러 / 404 컴포넌트 개발

### 이지수
- 상세페이지 프로필, 종합 전적, 응원한마디, 순위 변동 그래프 개발
- 응원한마디
    - 입력한 내용을 comment state로 저장하고 comments 가 변할 때 마다 comments를 로컬스토리지에 저장했습니다.
    - comments의 초기값은 로컬스토리지에서 가져온 값으로 설정하여 새로 로딩하면 로컬스토리지의 데이터가 화면에 보여지도록 했습니다.
- 상세페이지 프로필의 팀전, 개인전 버튼에 따라 다른 데이터 불러오기
    - 어려웠던 점
      - 처음에는 팀전, 개인전을 선택하는 버튼인 `SoloOrTeamTabBar`은 다른 라우트에서도 사용하는 공용컴포넌트여서 `SoloOrTeamTabBar` 에서는 로직을 처리하지 않았습니다.
      - `SoloOrTeamTabBar` 에서 개인전인지 아닌지 상태를 담고 있는 state 가 바뀔 때마다 상위 컴포넌트로 state 값을 전달하여 상위인 `UserPage`컴포넌트의 state를 바꾸고 state에 따라 `redux dispatch` 하는 action의 인자로 들어가는 다른 state를 바꾸도록 했습니다. (자식의 자식 컴포넌트의 state에 따라 상위 컴포넌트의 state를 바꾸고 상위의 state에 따라 다른 dispatch 함수를 실행함)
      - dispatch 가 실행될 때까지 의존하는 state가 많아지니 버튼을 클릭해도 dispatch가 실행되지 않거나 의도와 다른 action을 전달하는 버그가 생겼습니다.
    - 해결방법
      - `SoloOrTeamTabBar` 를 공용 컴포넌트로 사용하지 않고 `SoloOrTeamTabBar` 안에서 로직을 처리했습니다.
      - `SoloOrTeamTabBar` 로 dispatch 함수에 들어가는 인자 `gameType` 과 `setGameType`을 직접 전달했습니다.
      - `SoloOrTeamTabBar` 에서는 클릭에 따라 setGameType의 값을 직접 변경시키고 gameType에 따라 버튼의 css를 변경 시키도록 했습니다.

### 손영산
- [x] 기록 리스트 구현
- [x] 매치 상세 기록 리스트 구현
    - 기록 데이터를 `map`을 돌려 각 기록을 렌더링 시켜야 했는데, response 데이터를 가공해서 사용해야 했다.
    - 리타이어가 '', '99'로 표현되어 있어서 해당 데이터를 리타이어 문자열로 변경해주었고
    - 매치 날짜와 매치 기록 시간은 ms 단위였기 때문에 변경이 필요했었다.
    - 리타이어와 일반 순위에 대한 정렬도 필요했기 때문에 일반 순위인 경우만 정렬해주었고 리타이어인 경우의 정렬은 고려하지 않았다.
```jsx
{players
          ?.slice()
          .sort((a, b) => {
            if (a.matchRank === '0') {
              return b.matchRank - a.matchRank;
            }
            return a.matchRank - b.matchRank;
          })
          .map((player) => (
            <DetailRecordItem player={player} key={player.accountNo} />
          ))}
```
- [x] 매치 날짜와 매치 시간 기록 변경 함수 모듈 구현
```js
// 매치 날짜 변경 함수
const calculateDateDiff = (time) => {
  const currentTime = new Date().getTime();
  const recordTime = new Date(time).getTime();
  const diff = currentTime - recordTime;

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;

  if (seconds < 60) return `${Math.floor(seconds)}초 전`;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  if (hours < 24) return `${Math.floor(hours)}시간 전`;
  if (days < 7) return `${Math.floor(days)}일 전`;
  return `${Math.floor(weeks)}주 전`;
};

export default calculateDateDiff;
```

```js
// 매치 기록 시간 변경 함수
const convertMatchTime = (matchTime) => {
  if (!matchTime) return '-';

  const time = Math.round(Number(matchTime) / 10);
  let ms = time % 100;
  let seconds = Math.floor((time % 6000) / 100);
  const minutes = Math.floor(time / 6000);

  ms = ms < 10 ? `0${ms}` : ms;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}'${seconds}'${ms}`;
};

export default convertMatchTime;
```
- [ ] 맵별 상세 기록 리스트 구현 (차트 데이터 적용)
    - UI만 일부 구현
- [ ] 카트별 상세 기록 리스트 구현

### 윤솔비

- 평균 순위, 누적 포인트, 승률, 리타이어율 계산
    - 평균 순위는 총 순위를 더해 플레이 횟수로 나눠주고 소수점 둘째 자리에서 반올림해 줬습니다. (‘99’일 경우에는 리타이어로 8을 더해줬습니다.)
    - 누적 포인트는 사용자의 총 랭킹 데이터를 이용해 랭킹 라이드에 따라 개인전인지 팀전인지에 따라 포인트를 계산해 줬습니다.
    - 승률은 이긴 횟수에 총 플레이 횟수를 나누고 100을 곱해줬습니다.
    - 리타이어율은 리타이어 횟수에 총 플레이 횟수를 나누고 100을 곱해줬습니다.
    - 계산된 데이터를 누적 포인트가 큰 순서대로 정렬해 줬습니다.
- 랭킹 리스트 무한 스크롤 라이브러리 없이 구현
    - `Intersection Observer`를 이용해 화면 상에 지정한 `targetRef`가 보이는지 관찰을 해줬습니다.
    - `targetRef`가 보인다면 `offset`을 30씩 증가시켜줘 데이터를 더 받아오도록 했습니다.
- 랭킹 가이드 모달 창
    - 다오와 배찌 `top` 위치를 조정해 위아래로 움직이게 했습니다.
    - `opacity` 속성값을 높여가며 Modal이 서서히 나타나게 했습니다.
    - 이벤트 버블링을 막기 위해 `e.target`과 `e.currentTarget`이 같을 때만 Modal이 닫히도록 했습니다.
- 물결 애니메이션 효과
- 로딩 중일 경우 로딩 창을 보여주고 에러일 경우 에러 창을 보여줍니다.

### 조영제

 - 홈 화면 및 헤더 구현
    - 배찌와 다오가 양 옆에서 나오는 애니메이션을 keyframe을 통해 구현 
    - 닉네임 검색 하면 useNavigate() 해당 상세페이지로 이동할 수 있도록 구현
    - navbar에서 hover이벤트 구현 때 ::after를 사용했고 닉네임 검색 입력 할 때 검색어 입력 글자 수에 따른 style을 부여하면서
      css를 많이 공부하게 되었습니다.
      ```
       opacity: ${({ text }) => {
      return text.length > 2 ? '1' : '0.5';
   
  - 상세페이지 프로필 내 버튼 구현
    - 신고하기, 공유 버튼 modal을 구현
    - 전적갱신은 window.location.reload();로 클릭 시 새로고침 되도록 하였습니다.

## 애니메이션

### 배찌와 다오 애니메이션 효과

![메인](https://user-images.githubusercontent.com/59462108/157581537-d7956218-d622-4672-a0b4-2a390f993d82.gif)

### 그라데이션 효과

![user](https://user-images.githubusercontent.com/59462108/157289994-6e5614f6-b365-4c01-a8f6-70aa7adcc989.gif)

### 물결 효과

![물결](https://user-images.githubusercontent.com/59462108/157289397-ec615047-2869-4ddc-989a-21198b51e644.gif)

### Modal창 서서히 나타나는 효과 & 배찌와 다오 애니메이션 효과

![모달](https://user-images.githubusercontent.com/59462108/157581593-552ed1dc-ddde-4c01-be1d-98a70ce28bbe.gif)


## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
