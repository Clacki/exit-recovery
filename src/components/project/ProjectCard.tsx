import Image from "next/image";
import Link from "next/link";
import { FiCalendar, FiHeart, FiShield, FiUsers } from "react-icons/fi";

import { Card, Tag, cn } from "@/components/ui";
import type { Project, ProjectStatus } from "@/types/project";

type ProjectCardVariant = "default" | "compact";

type ProjectCardProps = {
  className?: string;
  href: string;
  project: Project;
  variant?: ProjectCardVariant;
};

const statusLabels: Record<ProjectStatus, string> = {
  recruiting: "모집 중",
  inProgress: "진행 중",
  completed: "완료",
};

function formatDate(date?: string) {
  return date ? date.replaceAll("-", ".") : "";
}

function getPeriodLabel(project: Project) {
  const startDate = formatDate(project.startedAt ?? project.createdAt);
  const endDate = formatDate(project.endAt ?? project.completedAt);

  if (startDate && endDate) {
    return `${startDate} ~ ${endDate}`;
  }

  return startDate || endDate || "일정 조율 중";
}

export default function ProjectCard({ className, href, project, variant = "default" }: ProjectCardProps) {
  const isCompact = variant === "compact";
  const memberLabel = `${project.participantIds.length}/${project.targetMemberCount}`;
  const periodLabel = getPeriodLabel(project);
  const bailLabel = (project.bail ?? 0).toLocaleString();
  const visibleTags = isCompact ? project.tags.slice(0, 2) : project.tags.slice(0, 3);

  return (
    <Link
      href={href}
      aria-label={`${project.title} 상세 보기`}
      className={cn(
        "group block transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3ebd5d]",
        className,
      )}
    >
      <Card
        className={cn(
          "relative flex flex-col overflow-hidden rounded-[18px] transition group-hover:shadow-[0_22px_54px_rgba(17,24,39,0.13)]",
          isCompact ? "min-h-[420px]" : "min-h-[520px]",
        )}
      >
        <div className={cn("relative overflow-hidden bg-gray-100", isCompact ? "h-56" : "h-[310px]")}>
          {project.thumbnailImage ? (
            <Image
              src={project.thumbnailImage}
              alt={`${project.title} 썸네일`}
              width={520}
              height={380}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gray-950 text-sm font-black text-white">
              EXIT
            </div>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.03)_25%,rgba(0,0,0,0.66)_100%)]" />
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
                {project.likeCount ?? 0}
              </span>
            </div>
            <span className="hidden items-center gap-1.5 text-sm font-bold sm:inline-flex">
              <FiCalendar aria-hidden="true" />
              {periodLabel}
            </span>
          </div>
        </div>

        <div className={cn("flex flex-1 flex-col", isCompact ? "px-5 py-5" : "px-6 py-7")}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Tag variant="category" size="sm">
              {project.category}
            </Tag>
            <Tag variant="default" size="sm" className="bg-white text-gray-600 ring-1 ring-gray-200">
              {statusLabels[project.status]}
            </Tag>
          </div>

          <h3 className={cn("font-black leading-tight text-gray-950", isCompact ? "text-xl" : "text-2xl")}>
            [{project.address ?? "온라인"}] {project.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{project.summary}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {visibleTags.map((tag) => (
              <Tag key={tag} variant="skill">
                {tag}
              </Tag>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-4 pt-8">
            <span className="min-w-0 truncate text-sm font-bold text-gray-500">{periodLabel}</span>
            <span className="inline-flex shrink-0 items-center gap-2 text-2xl font-black text-gray-950">
              <FiShield className="text-[#3ebd5d]" aria-hidden="true" />
              {bailLabel}
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
