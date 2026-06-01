import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiUsers } from "react-icons/fi";

import { mockUsers } from "@/data/mockUsers";
import type { Project } from "@/types/project";

const statusLabel = "진행 중";

function getAuthorName(authorId: string) {
  return mockUsers.find((user) => user.id === authorId)?.name ?? "EXIT 팀";
}

function formatDate(date: string) {
  return date.replaceAll("-", ".");
}

export default function ExitingProjectCard({ project }: { project: Project }) {
  const memberLabel = `${project.participantIds.length}/${project.targetMemberCount}`;
  const startedLabel = formatDate(project.startedAt ?? project.createdAt);

  return (
    <Link
      href={`/exiting/${project.id}`}
      className="group flex min-h-[430px] flex-col overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_rgba(17,24,39,0.08)] ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(17,24,39,0.14)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
    >
      <div className="relative aspect-[5/3] overflow-hidden bg-gray-100">
        {project.thumbnailImage ? (
          <Image
            src={project.thumbnailImage}
            alt={`${project.title} 썸네일`}
            width={500}
            height={300}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-950 text-sm font-black text-white">
            EXIT
          </div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0)_42%,rgba(17,24,39,0.68)_100%)]" />
        <span className="absolute left-4 top-4 rounded bg-emerald-500 px-3 py-1.5 text-xs font-black text-white">
          {statusLabel}
        </span>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-sm font-bold text-white">
          <span className="inline-flex items-center gap-1.5">
            <FiUsers aria-hidden="true" />
            {memberLabel}명
          </span>
          <span className="inline-flex items-center gap-1.5">
            <FiCalendar aria-hidden="true" />
            {startedLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-emerald-50 px-2.5 py-1 text-xs font-black text-emerald-700">
            {project.category}
          </span>
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded bg-gray-100 px-2.5 py-1 text-xs font-bold text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-xl font-black leading-snug text-gray-950">{project.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{project.summary}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm">
          <span className="min-w-0 truncate font-bold text-gray-500">{getAuthorName(project.authorId)}</span>
          <span className="inline-flex shrink-0 items-center gap-1.5 font-black text-emerald-600">
            상세 보기
            <FiArrowRight className="transition group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
