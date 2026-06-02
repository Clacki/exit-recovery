import Link from "next/link";

import { ProjectCard } from "@/components/project";
import { SearchToolbar } from "@/components/ui";
import type { Project } from "@/types/project";

import ExitingProjectEmptyState from "./ExitingProjectEmptyState";

type ExitingListSectionProps = {
  projects: Project[];
};

export default function ExitingListSection({ projects }: ExitingListSectionProps) {
  const projectCount = projects.length;

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mb-8">
        <SearchToolbar
          searchLabel="프로젝트 검색"
          searchPlaceholder="프로젝트명, 카테고리, 태그 검색"
          filterLabel="전체 카테고리"
          sortLabel="최신순"
        />
      </div>

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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} href={`/exiting/${project.id}`} />
          ))}
        </div>
      ) : (
        <ExitingProjectEmptyState />
      )}
    </section>
  );
}
