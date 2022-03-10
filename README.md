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

## 유송현

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

## 애니메이션

![main](https://user-images.githubusercontent.com/59462108/157289637-86337a18-fb76-4560-9200-4add7d70b49d.gif)

![user](https://user-images.githubusercontent.com/59462108/157289994-6e5614f6-b365-4c01-a8f6-70aa7adcc989.gif)

### 물결 효과

![물결](https://user-images.githubusercontent.com/59462108/157289397-ec615047-2869-4ddc-989a-21198b51e644.gif)

### Modal창 서서히 나타나는 효과 & 배찌와 다오 애니메이션

![modal](https://user-images.githubusercontent.com/59462108/157290059-6a795d38-d3f8-4f42-9b53-78845d9fcd0c.gif)

## 커밋 컨벤션

|          | 사용 예시        |
| -------- | ---------------- |
| Feat     | 새로운 기능 추가 |
| Design   | CSS 스타일링     |
| Fix      | 버그 수정        |
| Refactor | 리팩토링         |
| Deploy   | 배포             |
| Remove   | 파일 삭제        |
