import Image from "next/image";
import Link from "next/link";
import { FiArchive, FiFolder, FiUser } from "react-icons/fi";

import Tag from "@/components/ui/Tag";
import type { User } from "@/types/user";

type ExiterCardProps = {
  completedProjectCount: number;
  ongoingProjectCount: number;
  user: User;
};

export default function ExiterCard({ completedProjectCount, ongoingProjectCount, user }: ExiterCardProps) {
  return (
    <article className="flex h-full min-h-[420px] flex-col rounded-[14px] bg-[#f8f8f8] p-6 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,24,39,0.08)]">
      <div className="flex-1">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white ring-4 ring-white">
            {user.profileImage ? (
              <Image src={user.profileImage} alt={user.name} fill sizes="64px" className="object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-gray-400">
                <FiUser aria-hidden="true" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-2xl font-black leading-tight text-gray-950">{user.name}</h3>
            <p className="mt-1 truncate text-sm font-bold text-emerald-600">{user.role}</p>
            <div className="mt-3 flex min-h-7 flex-wrap gap-1.5">
              {(user.keywords ?? user.skills).slice(0, 3).map((keyword) => (
                <Tag key={keyword} size="sm">
                  #{keyword}
                </Tag>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 min-h-12 line-clamp-2 text-sm font-semibold leading-6 text-gray-600">{user.bio}</p>

        <div className="mt-6 space-y-5 border-t border-gray-200 pt-5">
          <div>
            <p className="mb-2.5 text-sm font-black text-gray-950">관심분야</p>
            <div className="flex min-h-8 flex-wrap gap-2">
              {(user.interests ?? []).slice(0, 2).map((interest) => (
                <Tag key={interest} variant="category">
                  #{interest}
                </Tag>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2.5 text-sm font-black text-gray-950">기술스택</p>
            <div className="flex min-h-8 flex-wrap gap-2">
              {user.skills.slice(0, 2).map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="grid grid-cols-2 gap-2 text-sm font-bold text-gray-600">
          <div className="rounded bg-white p-3 ring-1 ring-gray-100">
            <p className="inline-flex items-center gap-1.5">
              <FiFolder aria-hidden="true" />
              참여
            </p>
            <p className="mt-1 text-2xl font-black text-gray-950">{ongoingProjectCount}</p>
          </div>
          <div className="rounded bg-white p-3 ring-1 ring-gray-100">
            <p className="inline-flex items-center gap-1.5">
              <FiArchive aria-hidden="true" />
              완료
            </p>
            <p className="mt-1 text-2xl font-black text-gray-950">{completedProjectCount}</p>
          </div>
        </div>

        <Link
          href={`/exiter/${user.id}`}
          className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-[14px] bg-black text-base font-black text-white transition hover:bg-emerald-500"
        >
          정보 둘러보기
        </Link>
      </div>
    </article>
  );
}
