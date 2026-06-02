import { FiArchive } from "react-icons/fi";

import { ProjectCard } from "@/components/project";
import { EmptyState, SearchToolbar } from "@/components/ui";
import type { Project } from "@/types/project";

type ExitedListSectionProps = {
  projects: Project[];
};

export default function ExitedListSection({ projects }: ExitedListSectionProps) {
  const projectCount = projects.length;

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mb-8">
        <SearchToolbar
          searchLabel="완료 프로젝트 검색"
          searchPlaceholder="프로젝트명, 카테고리, 태그 검색"
          filterLabel="카테고리"
          sortLabel="최신 완료순"
        />
      </div>

      <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm font-bold text-gray-500">
          총 <span className="text-[#3ebd5d]">{projectCount}</span>개의 프로젝트가 완료되었습니다.
        </p>
        <p className="text-sm font-bold text-gray-400">완료된 기록을 최신순으로 보여줍니다.</p>
      </div>

      {projectCount > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} href={`/exited/${project.id}`} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<FiArchive size={24} aria-hidden="true" />}
          title="완료된 프로젝트가 없습니다"
          description="완료된 EXIT 프로젝트가 생기면 이곳에서 결과와 회고 기록을 확인할 수 있습니다."
        />
      )}
    </section>
  );
}
