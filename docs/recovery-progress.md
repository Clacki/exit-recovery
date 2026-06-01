# EXIT 복구 진행 로그

## 메인 화면 1차 정적 UI 이식

- `/` route에 메인 화면 연결
- mock 데이터 기반 프로젝트/유저 카드 렌더링
- 주요 섹션 구성
- API 연동 전 정적 UI 구조 우선 복구

## 진행 중 프로젝트 목록 화면 복구

- `/exiting` route에 진행 중 프로젝트 목록 화면 연결
- `status === "inProgress"` 기준 필터링
- 반응형 카드 grid 구성
- empty state 추가
- 카드 클릭 경로 `/exiting/[projectId]` 연결

## 제외한 내용

- API 연동
- 실제 검색/필터 상태 관리
- 페이지네이션
- 로그인 상태 분기
