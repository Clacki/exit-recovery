import type { User } from "@/types/user";

export const mockUsers: User[] = [
  {
    id: "user-001",
    name: "박미나",
    role: "프로덕트 디자이너",
    profileImage: "/images/users/avatar-mina.png",
    bio: "초기 제품팀을 위한 실용적인 회복 플로우를 설계합니다.",
    skills: ["UX 리서치", "제품 디자인", "Figma"],
  },
  {
    id: "user-002",
    name: "김준",
    role: "프론트엔드 엔지니어",
    profileImage: "/images/users/avatar-joon.png",
    bio: "접근성 있는 웹 인터페이스와 재사용 가능한 컴포넌트 시스템을 만듭니다.",
    skills: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "user-003",
    name: "이세라",
    role: "그로스 마케터",
    profileImage: "/images/users/avatar-sera.png",
    bio: "가벼운 출시 실험과 고객 인터뷰 루프를 설계합니다.",
    skills: ["그로스", "콘텐츠", "데이터 분석"],
  },
  {
    id: "user-004",
    name: "최현",
    role: "백엔드 엔지니어",
    profileImage: "/images/users/avatar-hyun.png",
    bio: "제품 아이디어를 안정적인 API와 데이터 모델로 연결합니다.",
    skills: ["Node.js", "API 설계", "PostgreSQL"],
  },
];
