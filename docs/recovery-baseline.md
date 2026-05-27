# EXIT 복구 기준 문서

## 1. 프로젝트 복구 개요

원본 EXIT 프로젝트는 Next.js 12 Pages Router 기반으로 작성되었다. 현재 복구 프로젝트는 Next.js 15 App Router 기반으로 재구성한다.

이번 복구는 단순히 기존 코드를 복사하는 작업이 아니다. 라우팅, Provider, 스타일, API 의존성을 Next.js 15 구조에 맞게 다시 정리하면서 단계적으로 화면과 기능을 되살리는 것을 목표로 한다.

첫 번째 목표는 전체 기능 구현이 아니라, 이후 작업의 판단 기준이 될 "복구 기준선"을 만드는 것이다.

## 2. 원본 기술 스택 요약

- Next.js 12
- React 17
- Apollo Client
- GraphQL
- Recoil
- Emotion
- styled-components 일부 혼재
- Kakao Map / Kakao Local API
- socket.io-client
- 아임포트 결제
- react-slick
- MUI / antd 일부 사용 흔적

## 3. 원본 주요 폴더 구조

| 폴더 | 역할 |
| --- | --- |
| `pages` | Pages Router 기반 라우팅 |
| `src/components/commons` | 공통 UI, 레이아웃, 모달, 채팅, 업로드, 지도, 결제 |
| `src/components/units` | 화면 단위 기능 컴포넌트 |
| `src/commons/apollo` | Apollo Client 설정 |
| `src/commons/styles` | 전역 스타일, 반응형 helper |
| `src/commons/types/generated` | GraphQL codegen 타입 |
| `public` | 로고, 배너, 카테고리 이미지, 아이콘, 폰트 |

## 4. Pages Router to App Router 라우팅 대응표

| 원본 경로 | 역할 | Next.js 15 App Router 대응 위치 | 복구 우선순위 |
| --- | --- | --- | --- |
| `/` | 메인 화면 | `app/page.tsx` | 상 |
| `/exiting` | 진행 중 프로젝트 목록 | `app/exiting/page.tsx` | 상 |
| `/exiting/write` | 프로젝트 생성 | `app/exiting/write/page.tsx` | 중 |
| `/exiting/[projectId]` | 진행 중 프로젝트 상세 | `app/exiting/[projectId]/page.tsx` | 상 |
| `/exiting/[projectId]/edit` | 프로젝트 수정 | `app/exiting/[projectId]/edit/page.tsx` | 중 |
| `/exited` | 완료 프로젝트 목록 | `app/exited/page.tsx` | 중 |
| `/exited/[projectId]` | 완료 프로젝트 상세 | `app/exited/[projectId]/page.tsx` | 중 |
| `/exiter/userList` | 유저 목록 | `app/exiter/userList/page.tsx` | 중 |
| `/exiter/[userId]` | 유저 상세 | `app/exiter/[userId]/page.tsx` | 중 |
| `/currentProject/[projectId]` | 참여 중 프로젝트 / GPS 출석 | `app/currentProject/[projectId]/page.tsx` | 하 |
| `/myPage` | 마이페이지 | `app/myPage/page.tsx` | 중 |
| `/myPage/edit` | 마이페이지 수정 | `app/myPage/edit/page.tsx` | 하 |
| `/search` | 검색 | `app/search/page.tsx` | 중 |
| `/[chat]` | 채팅 테스트성 동적 라우트 | `app/[chat]/page.tsx` 또는 재설계 | 하 |

## 5. 공통 레이아웃 / Provider 복구 기준

- 기존 `pages/_app.tsx`의 역할은 `app/layout.tsx`와 `app/providers.tsx`로 분리한다.
- Recoil, Apollo, GlobalStyle은 브라우저 런타임 의존성이 있으므로 client boundary 안에서 다룬다.
- 기존 `pages/_document.tsx`의 `modal-root`는 `app/layout.tsx`의 `body` 내부에 둔다.
- Header, Banner, Footer는 공통 레이아웃 복구 단계에서 함께 다룬다.
- 기존 `next/router` 사용 코드는 App Router 기준으로 `usePathname`, `useRouter` from `next/navigation`으로 대체한다.

## 6. 스타일링 복구 기준

- 원본은 Emotion 기반 스타일이 중심이다.
- 일부 styled-components, MUI, antd 사용 흔적이 있다.
- 첫 단계에서는 스타일 라이브러리 통합보다 원본 화면 복구를 우선한다.
- 반복 색상은 이후 디자인 토큰 또는 CSS 변수로 정리한다.
- `window`, `document`, `localStorage`, portal, modal 관련 코드는 client component로 분리한다.

## 7. API / 상태 관리 복구 기준

- GraphQL API는 Apollo Client 기반이다.
- 인증 상태는 Recoil atom 기반이다.
- `restoreAccessToken` 흐름은 Next.js 15 환경에서 다시 확인이 필요하다.
- 백엔드 API 생존 여부가 불확실하므로 초반에는 mock 데이터로 화면 복구가 가능하게 한다.
- Kakao, Socket, Payment, Upload 기능은 외부 의존성이 크므로 후순위로 둔다.

## 8. 복구 우선순위

1. 공통 Provider / Layout 구조
   - 모든 화면의 기반이 되는 구조다. Provider와 레이아웃 경계를 먼저 잡아야 이후 화면을 같은 조건에서 붙일 수 있다.

2. App Router 라우팅 뼈대
   - 원본 Pages Router 경로를 App Router 위치로 매핑해 전체 복구 지도를 만든다. 이 단계에서는 실제 화면 구현보다 경로 구조를 우선한다.

3. 메인 화면
   - 사용자가 처음 보는 화면이며 배너, 목록 카드, 카테고리 등 반복 UI 패턴을 먼저 검증할 수 있다.

4. `exiting` 목록 / 상세
   - 프로젝트 탐색과 상세 확인은 서비스의 핵심 흐름이다. 이후 생성, 수정, 참여 기능으로 확장하기 좋다.

5. `exited`, `exiter`, `myPage`, `search`
   - 핵심 흐름 주변의 주요 화면이다. 목록, 상세, 사용자 정보, 검색 패턴을 단계적으로 복구한다.

6. API 연동
   - 백엔드 상태가 불확실하므로 화면 구조를 먼저 잡고 API를 붙인다. Apollo 연결과 인증 흐름은 별도 검증이 필요하다.

7. 지도, 결제, 채팅, 업로드 등 외부 의존 기능
   - Kakao, socket.io, 아임포트, 파일 업로드는 외부 서비스와 브라우저 API 의존성이 크다. 핵심 화면 이후 별도 이슈로 분리한다.

8. 반응형 / 스타일 정리
   - 화면이 살아난 뒤 세부 스타일과 반응형을 맞춘다. 이 단계에서 반복 색상과 공통 스타일도 정리한다.

9. 리팩토링
   - 복구가 진행된 뒤 중복 쿼리, 중복 컴포넌트, 상태 관리 구조를 정리한다. 초반에는 과도한 설계보다 작동 기준 확보를 우선한다.

## 9. 버려도 되는 코드 후보

- 테스트성으로 보이는 `pages/[chat]`
- 중복된 `chat/01`, `chat/02`, `chat/03` 구현
- 깨진 한글 문자열이 있는 Banner/Footer 텍스트
- 실제 사용 여부가 불분명한 UI 라이브러리 의존성
- 타입 오류 회피성 `tsconfig` exclude 설정

## 10. 첫 번째 PR 범위

이번 PR에 포함할 것:

- `docs/recovery-baseline.md` 생성
- 원본 라우팅 대응표 작성
- 복구 우선순위 작성
- Provider / Layout / API / 스타일 복구 기준 작성

이번 PR에 포함하지 않을 것:

- 실제 페이지 이식
- Apollo / Recoil 실제 연결
- 스타일 리팩토링
- 외부 API 연동
- 컴포넌트 대량 복사
