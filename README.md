# ![alt text](Bloom@3x.png)

## 🔎 블룸을 소개합니다

저희 <b>블룸(Bloom)</b>은 필터링, 검색을 통한 지도 기반의 전국 웨딩홀 정보와 AI 챗봇 루미를 통한 유저 맞춤형 웨딩홀 추천 서비스입니다.

![블룸 OG](og.png)

## ⏰ 개발 기간

#### 2024.2 ~ 블룸은 진행 중

## 🏃🏻‍♂️ 멤버 구성 (총 5명)

- Front-end : 서지영
- Back-end : 장지윤, 서우석
- Designer : 이윤지
- Product Manager: 윤승화

## 👩🏻‍💻 프론트엔드 개요

- 개발 언어 : TypeScript
- 프레임워크 : Next.js
- 디자인: Figma, Zeplin
- 협업 툴 : Notion, Trello, Slack

## 🌸 주요 기능

#### 1. 온보딩, 로그인

![블룸 온보딩, 로그인 페이지](블룸_온보딩_로그인.gif)

#### 2. 홈

![블룸 홈 페이지](블룸_홈.gif)

#### 3. 채팅, 상세

![블룸 채팅, 상세 페이지](블룸_채팅_상세.gif)

#### 4. 지도, 검색

![블룸 지도, 검색 페이지](블룸_지도_검색.gif)

## 🔗 아키텍쳐

![블룸 아키텍쳐](블룸_아키텍쳐.png)

## ✏️ 브랜치/커밋 컨벤션

#### Branch Convention

| feature/기능명/작업자명 | 기능      |
| ----------------------- | --------- |
| service                 | 유지보수  |
| develop                 | 개발 환경 |
| main                    | 운영 환경 |
| hotfix                  | 버그 수정 |

#### Commit Message Convention

| qa       | qa                                       |
| -------- | ---------------------------------------- |
| ui       | UI 작업                                  |
| fix      | 버그 해결                                |
| etc      | 주석 추가/삭제, README 작성, 기타        |
| feature  | 기능 작업                                |
| refactor | 코드 리팩토링                            |
| conflict | 병합 이슈 해결                           |
| setting  | 빌드수행, 패키지 설치, 환경 설정 수정 등 |

## 📂 폴더 구조

- public
  - images
  - fonts
  - svgs
- src
  - app - 라우팅 관련 파일(페이지 단위)
  - containers - 페이지별 컴포넌트(재사용하지 않는 컴포넌트), 스타일, state, Hooks 등.. 각 페이지에 관련된 모든 것들
  - components - 여러 페이지에서 공통으로 사용할 수 있는 공통 컴포넌트
    - atoms - 재사용이 가능한 컴포넌트 최소 단위
  - constants - 공통 상수
  - hooks - 공통 훅
  - libs - 외부 라이브러리, 설정 등
  - service - API 요청
  - states - 전역에서 사용될 상태
  - styles - 스타일 시트 관련
  - types - 타입 정의
  - utils - 유틸성 함수
