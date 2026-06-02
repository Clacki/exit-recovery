import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import type { User } from "@/types/user";

type MainExiterSectionProps = {
  users: User[];
};

function MakerCard({ user }: { user: User }) {
  return (
    <Link
      href={`/exiter/${user.id}`}
      className="rounded-lg bg-white p-5 ring-1 ring-gray-200 transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(17,24,39,0.08)]"
    >
      <div
        className="mb-5 h-24 w-24 rounded-full bg-gray-100 bg-cover bg-center ring-4 ring-emerald-50"
        style={{ backgroundImage: `url(${user.profileImage})` }}
      />
      <p className="text-lg font-black text-gray-950">{user.name}</p>
      <p className="mt-1 text-sm font-bold text-[#3ebd5d]">{user.role}</p>
      <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">{user.bio}</p>
    </Link>
  );
}

export default function MainExiterSection({ users }: MainExiterSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-10">
      <div className="mb-8 flex items-end justify-between gap-5">
        <div>
          <p className="mb-2 text-lg font-extrabold text-[#3ebd5d]">exiter</p>
          <h2 className="text-3xl font-black leading-tight text-gray-950 sm:text-4xl">프로젝트를 함께한 메이커</h2>
        </div>
        <Link
          href="/exiter"
          className="hidden shrink-0 items-center gap-2 text-sm font-bold text-gray-400 transition hover:text-[#3ebd5d] sm:inline-flex"
        >
          메이커 더보기
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {users.map((user) => (
          <MakerCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}
