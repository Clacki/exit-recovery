import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiHeart, FiShield, FiUsers } from "react-icons/fi";

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
  const endLabel = formatDate(project.endAt ?? project.completedAt ?? "");
  const periodLabel = endLabel ? `${startedLabel} ~ ${endLabel}` : startedLabel;
  const bailLabel = (project.bail ?? 0).toLocaleString();

  return (
    <Link
      href={`/exiting/${project.id}`}
      className="group relative flex min-h-[520px] flex-col overflow-hidden rounded-[18px] bg-[#f8f8f8] transition hover:-translate-y-1 hover:shadow-[0_22px_54px_rgba(17,24,39,0.13)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
    >
      <div className="relative h-[310px] overflow-hidden bg-gray-100">
        {project.thumbnailImage ? (
          <Image
            src={project.thumbnailImage}
            alt={`${project.title} 썸네일`}
            width={500}
            height={360}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-950 text-sm font-black text-white">
            EXIT
          </div>
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_30%,rgba(0,0,0,0.64)_100%)]" />
        <span className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur">
          <FiHeart aria-hidden="true" />
        </span>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
          <div className="flex items-center gap-4 text-sm font-bold">
            <span className="inline-flex items-center gap-1.5">
              <FiUsers aria-hidden="true" />
              {memberLabel}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FiHeart aria-hidden="true" />
              {project.likeCount ?? project.tags.length}
            </span>
          </div>
          <span className="hidden items-center gap-1.5 text-sm font-bold sm:inline-flex">
            <FiCalendar aria-hidden="true" />
            {periodLabel}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 py-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded bg-white px-2.5 py-1 text-xs font-black text-emerald-700 ring-1 ring-emerald-100">
            {project.category}
          </span>
          <span className="rounded bg-white px-2.5 py-1 text-xs font-black text-gray-600 ring-1 ring-gray-200">
            {statusLabel}
          </span>
        </div>

        <h2 className="text-2xl font-black leading-tight text-gray-950">
          [{project.address ?? "온라인"}] {project.title}
        </h2>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded bg-[#ececec] px-3 py-1.5 text-sm font-semibold text-[#4e4e4e]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-8">
          <span className="min-w-0 truncate text-sm font-bold text-gray-500">{getAuthorName(project.authorId)}</span>
          <span className="inline-flex shrink-0 items-center gap-2 text-2xl font-black text-gray-950">
            <FiShield className="text-emerald-500" aria-hidden="true" />
            {bailLabel}
          </span>
        </div>
      </div>
    </Link>
  );
}
