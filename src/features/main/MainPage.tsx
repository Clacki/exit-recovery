import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { ProjectCard } from "@/components/project";
import { mockProjects } from "@/data/mockProjects";
import { mockUsers } from "@/data/mockUsers";
import type { Project } from "@/types/project";
import type { User } from "@/types/user";

const categories = [
  { label: "공유 서비스", image: "/images/main/category-community.png" },
  { label: "여행", image: "/images/main/category-travel.png" },
  { label: "커머스", image: "/images/main/category-commerce.png" },
  { label: "O2O", image: "/images/main/category-o2o.png" },
  { label: "엔터테인먼트", image: "/images/main/category-entertainment.png" },
  { label: "모빌리티", image: "/images/main/category-mobility.png" },
  { label: "뷰티/패션", image: "/images/main/category-beauty-fashion.png" },
  { label: "헬스/스포츠", image: "/images/main/category-health-sports.png" },
];

function getProjectHref(project: Project) {
  return project.status === "completed" ? `/exited/${project.id}` : `/exiting/${project.id}`;
}

function ProjectSection({ eyebrow, title, projects }: { eyebrow: string; title: string; projects: Project[] }) {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-end justify-between gap-5">
        <div>
          <p className="mb-2 text-lg font-extrabold text-[#3ebd5d]">{eyebrow}</p>
          <h2 className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">{title}</h2>
        </div>
        <Link
          href="/exiting"
          className="hidden shrink-0 items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-[#3ebd5d] sm:inline-flex"
        >
          전체 프로젝트 보기
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} href={getProjectHref(project)} variant="compact" />
        ))}
      </div>
    </section>
  );
}

function MakerCard({ user }: { user: User }) {
  return (
    <Link
      href={`/exiter/${user.id}`}
      className="rounded-lg bg-white p-5 ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,24,39,0.08)]"
    >
      <div
        className="mb-5 h-24 w-24 rounded-full bg-gray-100 bg-cover bg-center ring-4 ring-emerald-50"
        style={{ backgroundImage: `url(${user.profileImage})` }}
      />
      <p className="text-lg font-black text-gray-950">{user.name}</p>
      <p className="mt-1 text-sm font-bold text-[#3ebd5d]">{user.role}</p>
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{user.bio}</p>
    </Link>
  );
}

export default function MainPage() {
  const recruitingProjects = mockProjects.filter((project) => project.status === "recruiting");
  const activeProjects = mockProjects.filter((project) => project.status === "inProgress");
  const completedProjects = mockProjects.filter((project) => project.status === "completed");

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#101510] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(/images/main/main-hero.png)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,21,16,0.96)_0%,rgba(16,21,16,0.7)_48%,rgba(16,21,16,0.42)_100%)]" />
        <div className="relative mx-auto grid min-h-[560px] w-full max-w-[1280px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <p className="mb-5 text-lg font-extrabold text-emerald-300">exiting에서 취업으로 가는 프로젝트</p>
            <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl">지금 바로 EXIT</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
              혼자 멈춰 있던 아이디어를 팀 프로젝트로 회복하고, 작은 결과물을 다음 기회로 연결해보세요.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/exiting"
                className="inline-flex items-center gap-2 rounded-md bg-[#3ebd5d] px-5 py-3 text-sm font-black text-white transition hover:bg-[#34aa51]"
              >
                프로젝트 둘러보기
                <FiArrowRight aria-hidden="true" />
              </Link>
              <Link
                href="/exiting/write"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-gray-950 transition hover:bg-gray-100"
              >
                프로젝트 만들기
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["모집 중", recruitingProjects.length],
              ["진행 중", activeProjects.length],
              ["완료", completedProjects.length],
            ].map(([label, count]) => (
              <div key={label} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                <p className="text-sm font-bold text-gray-300">{label}</p>
                <p className="mt-2 text-4xl font-black">{count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSection eyebrow="exiting" title="새로운 동료를 기다리는 프로젝트" projects={recruitingProjects} />

      <ProjectSection eyebrow="current" title="지금 함께 진행 중인 프로젝트" projects={activeProjects} />

      <section className="bg-[#f8f8f8]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-8 lg:px-10">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-lg font-extrabold text-[#3ebd5d]">category</p>
              <h2 className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">관심 카테고리</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.label}
                href="/exiting"
                className="group relative flex h-32 items-end overflow-hidden rounded-lg bg-white p-4 text-base font-black text-white ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,24,39,0.1)]"
              >
                <span
                  className="absolute inset-0 bg-cover bg-center transition duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                />
                <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.05)_0%,rgba(17,24,39,0.72)_100%)]" />
                <span className="relative">{category.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ProjectSection eyebrow="exited" title="완료한 프로젝트의 회고 기록" projects={completedProjects} />

      <section className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-lg font-extrabold text-[#3ebd5d]">exiter</p>
            <h2 className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">프로젝트를 함께한 메이커</h2>
          </div>
          <Link
            href="/exiter/userList"
            className="hidden shrink-0 items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-[#3ebd5d] sm:inline-flex"
          >
            메이커 더보기
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {mockUsers.map((user) => (
            <MakerCard key={user.id} user={user} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 sm:px-8 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-[#3ebd5d] p-8 text-white sm:flex-row sm:items-center lg:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em]">EXIT</p>
            <p className="mt-3 text-2xl font-black leading-snug sm:text-3xl">당신을 기다리는 다음 프로젝트</p>
          </div>
          <Link
            href="/exiting"
            className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-emerald-700 transition hover:bg-emerald-50"
          >
            바로 참여하기
            <FiArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
