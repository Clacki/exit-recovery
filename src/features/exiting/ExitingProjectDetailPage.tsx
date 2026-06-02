import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiHeart, FiMessageCircle, FiShield, FiUsers } from "react-icons/fi";

import { Button, Card, Tag } from "@/components/ui";
import { mockUsers } from "@/data/mockUsers";
import type { Project } from "@/types/project";
import type { User } from "@/types/user";

type ExitingProjectDetailPageProps = {
  project: Project;
};

function formatDate(date?: string) {
  return date ? date.replaceAll("-", ".") : "일정 조율 중";
}

function getUser(userId: string) {
  return mockUsers.find((user) => user.id === userId);
}

function getParticipants(project: Project) {
  return project.participantIds
    .map((participantId) => getUser(participantId))
    .filter((user): user is User => Boolean(user));
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Card className="flex min-h-20 flex-col justify-center gap-2 px-5 py-4 sm:min-h-24 sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <dt className="text-xl font-black text-gray-950 sm:text-3xl">{label}</dt>
      <dd className="text-xl font-black text-[#3ebd5d] sm:text-3xl">{children}</dd>
    </Card>
  );
}

export default function ExitingProjectDetailPage({ project }: ExitingProjectDetailPageProps) {
  const leader = getUser(project.authorId);
  const participants = getParticipants(project);
  const memberLabel = `${project.participantIds.length} / ${project.targetMemberCount}`;
  const bailLabel = (project.bail ?? 0).toLocaleString();

  return (
    <div className="bg-[#f8f8f8] px-5 py-10 sm:px-8 lg:py-16">
      <div className="mx-auto w-full max-w-[1328px] rounded-[14px] bg-white p-5 sm:p-10 lg:p-24">
        <Link
          href="/exiting"
          className="mb-8 inline-flex items-center gap-2 text-sm font-black text-gray-500 transition hover:text-[#3ebd5d]"
        >
          <FiArrowLeft aria-hidden="true" />
          진행 중 프로젝트 목록
        </Link>

        <section className="mb-16 lg:mb-24">
          <div className="relative mb-8 h-[260px] overflow-hidden rounded-[14px] bg-gray-100 sm:h-[420px] lg:h-[500px]">
            {project.thumbnailImage ? (
              <Image
                src={project.thumbnailImage}
                alt={`${project.title} 썸네일`}
                fill
                priority
                sizes="(min-width: 1024px) 1136px, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gray-950 text-lg font-black text-white">
                EXIT
              </div>
            )}
          </div>

          <Card className="mb-5 p-6 sm:p-8">
            <div className="mb-4 flex flex-wrap gap-2">
              <Tag variant="status">진행 중</Tag>
              <Tag variant="category">{project.category}</Tag>
              <Tag className="bg-white text-gray-700 ring-1 ring-gray-200">{project.address ?? "온라인"}</Tag>
            </div>
            <h1 className="text-3xl font-black leading-tight text-gray-950 sm:text-5xl">{project.title}</h1>
            <p className="mt-5 text-base font-semibold leading-8 text-gray-600 sm:text-2xl">{project.description}</p>
          </Card>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <Tag key={tag} variant="skill" size="lg">
                {tag}
              </Tag>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-3xl font-black text-gray-950 sm:text-5xl">프로젝트 정보</h2>

          <dl className="grid gap-5">
            <InfoRow label="모집 현황">
              <span className="inline-flex items-center gap-3">
                {memberLabel}
                <FiUsers aria-hidden="true" />
              </span>
            </InfoRow>
            <InfoRow label="받은 관심">
              <span className="inline-flex items-center gap-3">
                {project.likeCount ?? project.tags.length}
                <FiHeart aria-hidden="true" />
              </span>
            </InfoRow>
            <InfoRow label="1인당 보증금">
              <span className="inline-flex items-center gap-3">
                {bailLabel}
                <FiShield aria-hidden="true" />
              </span>
            </InfoRow>

            <div className="grid gap-5 lg:grid-cols-2">
              <InfoRow label="모집 분야">{project.category}</InfoRow>
              <InfoRow label="모집 장소">{project.address ?? "온라인"}</InfoRow>
            </div>

            <Card className="p-5 sm:p-8">
              <dt className="mb-5 text-xl font-black text-gray-950 sm:text-3xl">모집 기술</dt>
              <dd className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Tag key={tag} variant="skill">
                    {tag}
                  </Tag>
                ))}
              </dd>
            </Card>

            <InfoRow label="모임 빈도">주 {project.frequency ?? 1}회</InfoRow>
            <InfoRow label="진행 기간">
              {formatDate(project.startedAt ?? project.createdAt)} ~ {formatDate(project.endAt)}
            </InfoRow>
          </dl>

          <Card className="mt-12 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-black text-gray-950 sm:text-4xl">프로젝트 리더</h3>
            {leader ? (
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <Link href={`/exiter/${leader.id}`} className="flex min-w-0 items-center gap-5">
                  <Image
                    src={leader.profileImage}
                    alt={leader.name}
                    width={120}
                    height={120}
                    className="h-20 w-20 rounded-full bg-gray-100 object-cover sm:h-28 sm:w-28"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-2xl font-black text-gray-950 sm:text-4xl">{leader.name}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {leader.skills.slice(0, 3).map((skill) => (
                        <Tag key={skill} variant="skill" className="rounded-full">
                          {skill}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Link>
                <Button type="button" variant="secondary" size="lg">
                  <FiMessageCircle aria-hidden="true" />
                  리더에게 채팅하기
                </Button>
              </div>
            ) : (
              <p className="text-base font-semibold text-gray-500">리더 정보를 준비 중입니다.</p>
            )}
          </Card>

          <Card className="mt-6 p-6 sm:p-8">
            <h3 className="mb-5 text-2xl font-black text-gray-950 sm:text-4xl">참여 멤버</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {participants.map((participant) => (
                <Link key={participant.id} href={`/exiter/${participant.id}`} className="flex items-center gap-4 rounded-[14px] bg-white p-4">
                  <Image
                    src={participant.profileImage}
                    alt={participant.name}
                    width={64}
                    height={64}
                    className="h-14 w-14 rounded-full bg-gray-100 object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-lg font-black text-gray-950">{participant.name}</p>
                    <p className="mt-1 truncate text-sm font-bold text-gray-500">{participant.role}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <Button type="button" size="xl" className="mt-12 w-full">
            프로젝트 참여 신청하기
          </Button>
        </section>
      </div>
    </div>
  );
}
