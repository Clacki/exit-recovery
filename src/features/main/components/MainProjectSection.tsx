import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { ProjectCard } from "@/components/project";
import type { Project } from "@/types/project";

type MainProjectSectionProps = {
  eyebrow: string;
  projects: Project[];
  title: string;
};

function getProjectHref(project: Project) {
  return project.status === "completed" ? `/exited/${project.id}` : `/exiting/${project.id}`;
}

export default function MainProjectSection({ eyebrow, projects, title }: MainProjectSectionProps) {
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
