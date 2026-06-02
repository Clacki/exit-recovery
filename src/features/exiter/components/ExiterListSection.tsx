import { SearchToolbar } from "@/components/ui";
import type { User } from "@/types/user";

import ExiterCard from "./ExiterCard";
import ExiterEmptyState from "./ExiterEmptyState";

type ExiterListSectionProps = {
  getCompletedProjectCount: (userId: string) => number;
  getOngoingProjectCount: (userId: string) => number;
  users: User[];
};

export default function ExiterListSection({
  getCompletedProjectCount,
  getOngoingProjectCount,
  users,
}: ExiterListSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mb-8">
          <SearchToolbar
            searchLabel="exiter 검색"
            searchPlaceholder="이름, 역할, 기술스택 검색"
            filterLabel="관심 분야"
            sortLabel="프로젝트 많은순"
          />
        </div>

        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-lg font-black text-emerald-500">exiter</p>
            <h2 className="text-3xl font-black leading-tight text-gray-950 sm:text-5xl">
              프로젝트를 함께할 엑시터들을 찾아보세요
            </h2>
          </div>
          <p className="text-sm font-bold text-gray-500">
            총 <span className="text-emerald-600">{users.length}</span>명의 exiter
          </p>
        </div>

        {users.length > 0 ? (
          <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {users.map((user) => (
              <ExiterCard
                key={user.id}
                user={user}
                ongoingProjectCount={getOngoingProjectCount(user.id)}
                completedProjectCount={getCompletedProjectCount(user.id)}
              />
            ))}
          </div>
        ) : (
          <ExiterEmptyState />
        )}
      </div>
    </section>
  );
}
