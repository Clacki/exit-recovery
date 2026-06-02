# EXIT Design Guide

EXIT 복구 프로젝트에서 사용하는 최소 디자인 가이드입니다.
기존 EXIT 서비스의 톤을 유지하되, 복구 과정에서 화면 간 스타일이 흔들리지 않도록 기본 폰트와 핵심 컬러 기준을 정의합니다.

## 1. Typography

### Font Family

기본 폰트는 `Pretendard`를 사용합니다.

```css
font-family:
  var(--font-pretendard),
  Pretendard,
  -apple-system,
  BlinkMacSystemFont,
  system-ui,
  sans-serif;
```

### 사용 기준

- 기본 본문: Pretendard
- 버튼, 카드 제목, 섹션 제목: Pretendard
- 영문/숫자도 별도 폰트 분리 없이 Pretendard 기준으로 사용합니다.

## 2. Color

### Core Colors

| Token     |       Hex | Usage                                 |
| --------- | --------: | ------------------------------------- |
| Primary   | `#3EBD5D` | 주요 CTA, 강조 텍스트, 활성 상태      |
| Secondary | `#000000` | 주요 텍스트, 검정 버튼, 강한 강조     |
| Disabled  | `#B2B2B2` | 비활성 버튼, 비활성 텍스트, 보조 상태 |

## 3. Color Usage

### Primary

`#3EBD5D`

주요 액션과 EXIT의 브랜드 포인트 컬러로 사용합니다.

사용 예시:

- 주요 버튼 배경
- 강조 텍스트
- 활성화된 탭 또는 상태
- 주요 아이콘 컬러
- 링크 hover 또는 active 상태

```css
--color-primary: #3ebd5d;
```

### Secondary

`#000000`

강한 텍스트와 주요 버튼에 사용합니다.

사용 예시:

- 제목 텍스트
- 본문에서 강하게 강조되는 텍스트
- 검정 CTA 버튼
- Header 주요 메뉴 텍스트

```css
--color-secondary: #000000;
```

### Disabled

`#B2B2B2`

비활성 상태를 표현할 때 사용합니다.

사용 예시:

- disabled 버튼 배경 또는 텍스트
- 입력 불가 상태
- 선택 불가한 필터
- 보조 설명 텍스트 일부

```css
--color-disabled: #b2b2b2;
```

## 4. CSS Variables

전역 스타일에서는 아래 CSS custom properties를 기준으로 사용합니다.

```css
:root {
  --font-pretendard: "Pretendard";

  --color-primary: #3ebd5d;
  --color-secondary: #000000;
  --color-disabled: #b2b2b2;
}
```

## 5. Tailwind Usage Guide

Tailwind class를 직접 사용할 때도 아래 기준을 우선합니다.

| Purpose     | Recommended |
| ----------- | ----------- |
| 주요 강조   | `#3EBD5D`   |
| 주요 텍스트 | `#000000`   |
| 비활성 상태 | `#B2B2B2`   |
| 기본 배경   | `#FFFFFF`   |
| 카드 배경   | `#FFFFFF`   |
| 약한 배경   | `#F8F8F8`   |

## 6. Component Usage

### Button

- 주요 CTA는 Primary 또는 Secondary를 사용합니다.
- 페이지의 가장 중요한 액션은 Primary를 우선 사용합니다.
- 보조 액션이나 상세 보기 버튼은 Secondary를 사용할 수 있습니다.
- disabled 상태는 `#B2B2B2`를 사용합니다.

### Card

- 카드 배경은 기본적으로 흰색을 사용합니다.
- 카드 내부 강조 요소에는 Primary를 사용합니다.
- 제목은 Secondary 기준으로 강하게 보여줍니다.

### Tag

- 선택/강조 태그에는 Primary 계열을 사용합니다.
- 일반 태그는 흰색 또는 연회색 배경을 사용합니다.

## 7. Design Principle

EXIT 복구 프로젝트의 디자인 기준은 다음과 같습니다.

- 기존 EXIT의 브랜드 톤을 유지합니다.
- 화면마다 색상과 폰트 사용이 흔들리지 않도록 합니다.
- 픽셀 단위 완전 복원보다 서비스의 정보 구조와 일관성을 우선합니다.
- 불필요한 장식보다 프로젝트 탐색, 유저 탐색, 상태 확인이 잘 보이도록 구성합니다.
- 공통 컴포넌트는 이 가이드를 기준으로 스타일을 맞춥니다.
