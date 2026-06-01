import Link from "next/link";
import { FiFilter, FiSearch, FiSliders } from "react-icons/fi";

import { mockProjects } from "@/data/mockProjects";

import ExitingProjectCard from "./components/ExitingProjectCard";
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
            <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-emerald-500">exiting</p>
            <h1 className="text-4xl font-black leading-tight text-gray-950 sm:text-5xl">진행 중 프로젝트</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
              EXIT 메이커들이 지금 함께 실행하고 있는 프로젝트입니다. 관심 있는 프로젝트를 확인하고 진행 상황을 따라가
              보세요.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 text-right">
            <p className="text-sm font-bold text-gray-500">진행 중</p>
            <p className="mt-1 text-4xl font-black text-gray-950">{projectCount}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mb-8 grid gap-3 rounded-lg bg-white p-4 shadow-[0_12px_36px_rgba(17,24,39,0.06)] ring-1 ring-gray-100 lg:grid-cols-[1fr_auto_auto]">
          <label className="relative block">
            <span className="sr-only">프로젝트 검색</span>
            <FiSearch
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            />
            <input
              type="search"
              readOnly
              placeholder="프로젝트명, 카테고리, 태그 검색"
              className="h-12 w-full rounded-md border border-gray-200 bg-white pl-11 pr-4 text-sm font-semibold text-gray-500 outline-none placeholder:text-gray-400"
            />
          </label>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-sm font-black text-gray-700"
            aria-label="카테고리 필터"
          >
            <FiFilter aria-hidden="true" />
            전체 카테고리
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-sm font-black text-gray-700"
            aria-label="정렬"
          >
            <FiSliders aria-hidden="true" />
            최신순
          </button>
        </div>

        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm font-bold text-gray-500">
            총 <span className="text-emerald-600">{projectCount}</span>개의 프로젝트가 진행 중입니다.
          </p>
          <Link
            href="/exiting/write"
            className="inline-flex w-fit items-center rounded-md bg-emerald-500 px-4 py-2.5 text-sm font-black text-white transition hover:bg-emerald-600"
          >
            프로젝트 만들기
          </Link>
        </div>

        {projectCount > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {ongoingProjects.map((project) => (
              <ExitingProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <ExitingProjectEmptyState />
        )}
      </section>
    </div>
  );
}
