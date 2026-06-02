import Image from "next/image";
import Link from "next/link";
import { FiUser } from "react-icons/fi";

import Tag from "@/components/ui/Tag";
import type { User } from "@/types/user";

import ExiterEmptyState from "./ExiterEmptyState";

type ExiterHeroSectionProps = {
  currentProjectTitle: string;
  todayExiter?: User;
};

export default function ExiterHeroSection({ currentProjectTitle, todayExiter }: ExiterHeroSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-12 sm:px-8 lg:px-10 lg:py-20">
      <div>
        <p className="mb-3 text-lg font-black text-emerald-500">Today exiter</p>
        <h1 className="text-3xl font-black leading-tight text-gray-950 sm:text-5xl">
          오늘의 엑시터를 소개합니다
        </h1>
      </div>

      {todayExiter ? (
        <div className="mt-8 grid overflow-hidden rounded-[14px] bg-[#f8f8f8] lg:max-h-[380px] lg:grid-cols-[minmax(240px,0.38fr)_1fr]">
          <div className="flex min-h-[220px] items-center justify-center bg-gray-100 p-8 sm:min-h-[280px] lg:min-h-0 lg:p-10">
            <div className="relative h-full max-h-56 min-h-44 w-full max-w-56 overflow-hidden rounded-[14px] bg-white sm:max-h-64 sm:max-w-64">
              {todayExiter.profileImage ? (
                <Image
                  src={todayExiter.profileImage}
                  alt={todayExiter.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 256px, 224px"
                  className="object-contain p-2"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-gray-400">
                  <FiUser size={40} aria-hidden="true" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-7 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <p className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">
                  <span className="text-emerald-500">exiter,</span> {todayExiter.name}님
                </p>
                <p className="mt-2 text-base font-bold text-gray-500">{todayExiter.role}</p>
              </div>
              <div className="flex max-w-md flex-wrap gap-2 lg:justify-end">
                {(todayExiter.keywords ?? todayExiter.skills).slice(0, 3).map((keyword) => (
                  <Tag key={keyword} className="bg-white">
                    #{keyword}
                  </Tag>
                ))}
              </div>
            </div>

            <div className="grid gap-4 text-base leading-7 sm:text-lg">
              <p>
                <strong className="mr-2 font-black text-gray-950">주요 기술스택은</strong>
                <span className="font-semibold text-gray-500">{todayExiter.skills.join(", ")}입니다.</span>
              </p>
              <p>
                <strong className="mr-2 font-black text-gray-950">관심 분야는</strong>
                <span className="font-semibold text-gray-500">
                  {(todayExiter.interests ?? ["프로젝트"]).join(", ")}입니다.
                </span>
              </p>
              <p>
                <strong className="mr-2 font-black text-gray-950">현재 참여중인 프로젝트는</strong>
                <span className="font-semibold text-gray-500">{currentProjectTitle}</span>
              </p>
            </div>

            <div className="mt-auto flex">
              <Link
                href={`/exiter/${todayExiter.id}`}
                className="inline-flex h-12 w-full items-center justify-center rounded-[14px] bg-black px-6 text-base font-black text-white transition hover:bg-emerald-500 sm:w-56"
              >
                정보 둘러보기
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <ExiterEmptyState />
        </div>
      )}
    </section>
  );
}
