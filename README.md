# 프론트 브랜치/커밋 컨벤션

### Branch Convention

| feature/기능명/작업자명 | 기능      |
| ----------------------- | --------- |
| service                 | 유지보수  |
| develop                 | 개발 환경 |
| main                    | 운영 환경 |
| hotfix                  | 버그 수정 |

### Commit Message Convention

| qa       | qa                                       |
| -------- | ---------------------------------------- |
| ui       | UI 작업                                  |
| fix      | 버그 해결                                |
| etc      | 주석 추가/삭제, README 작성, 기타        |
| feature  | 기능 작업                                |
| refactor | 코드 리팩토링                            |
| conflict | 병합 이슈 해결                           |
| setting  | 빌드수행, 패키지 설치, 환경 설정 수정 등 |

# 폴더 구조

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
