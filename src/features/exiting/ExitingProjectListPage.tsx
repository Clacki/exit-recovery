import Link from "next/link";
import { FiFilter, FiSearch, FiSliders } from "react-icons/fi";

import { ProjectCard } from "@/components/project";
import { Button, Card, Input } from "@/components/ui";
import { mockProjects } from "@/data/mockProjects";

import ExitingProjectEmptyState from "./components/ExitingProjectEmptyState";

const ongoingProjects = mockProjects
  .filter((project) => project.status === "inProgress")
  .sort((a, b) => (b.startedAt ?? b.createdAt).localeCompare(a.startedAt ?? a.createdAt));

export default function ExitingProjectListPage() {
  const projectCount = ongoingProjects.length;

  return (
    <div className="bg-[#f8f8f8]">
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-16">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#3ebd5d]">exiting</p>
            <h1 className="text-4xl font-black leading-tight text-gray-950 sm:text-5xl">진행 중 프로젝트</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              EXIT 메이커들이 지금 함께 실행하고 있는 프로젝트입니다. 관심 있는 프로젝트를 확인하고 진행
              상황을 따라가 보세요.
            </p>
          </div>

          <Card variant="panel" className="px-5 py-4 text-right">
            <p className="text-sm font-bold text-gray-500">진행 중</p>
            <p className="mt-1 text-4xl font-black text-gray-950">{projectCount}</p>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10">
        <Card
          variant="surface"
          className="mb-8 grid gap-3 rounded-lg p-4 shadow-[0_12px_36px_rgba(17,24,39,0.06)] lg:grid-cols-[1fr_auto_auto]"
        >
          <div className="relative">
            <span className="sr-only">프로젝트 검색</span>
            <FiSearch
              className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <Input
              type="search"
              readOnly
              placeholder="프로젝트명, 카테고리, 태그 검색"
              className="h-12 rounded-md pl-11 text-gray-500"
            />
          </div>
          <Button type="button" variant="outline" size="md" aria-label="카테고리 필터">
            <FiFilter aria-hidden="true" />
            전체 카테고리
          </Button>
          <Button type="button" variant="outline" size="md" aria-label="정렬">
            <FiSliders aria-hidden="true" />
            최신순
          </Button>
        </Card>

        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm font-bold text-gray-500">
            총 <span className="text-[#3ebd5d]">{projectCount}</span>개의 프로젝트가 진행 중입니다.
          </p>
          <Link
            href="/exiting/write"
            className="inline-flex h-12 w-fit items-center justify-center rounded-md bg-[#3ebd5d] px-5 text-sm font-black text-white transition hover:bg-[#34aa51]"
          >
            프로젝트 만들기
          </Link>
        </div>

        {projectCount > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ongoingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} href={`/exiting/${project.id}`} />
            ))}
          </div>
        ) : (
          <ExitingProjectEmptyState />
        )}
      </section>
    </div>
  );
}
