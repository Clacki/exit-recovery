import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type MainHeroSectionProps = {
  activeProjectCount: number;
  completedProjectCount: number;
  recruitingProjectCount: number;
};

export default function MainHeroSection({
  activeProjectCount,
  completedProjectCount,
  recruitingProjectCount,
}: MainHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#101510] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url(/images/main/main-hero.png)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,21,16,0.96)_0%,rgba(16,21,16,0.7)_48%,rgba(16,21,16,0.42)_100%)]" />
      <div className="relative mx-auto grid min-h-[560px] w-full max-w-[1280px] items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <div>
          <p className="mb-5 text-lg font-extrabold text-emerald-300">exiting에서 취업으로 가는 프로젝트</p>
          <h1 className="max-w-3xl text-5xl font-black leading-tight sm:text-6xl">지금 바로 EXIT</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            혼자 멈춰 있던 아이디어를 팀 프로젝트로 회복하고, 작은 결과물을 다음 기회로 연결해보세요.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/exiting"
              className="inline-flex items-center gap-2 rounded-md bg-[#3ebd5d] px-5 py-3 text-sm font-black text-white transition hover:bg-[#34aa51]"
            >
              프로젝트 둘러보기
              <FiArrowRight aria-hidden="true" />
            </Link>
            <Link
              href="/exiting/write"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-gray-950 transition hover:bg-gray-100"
            >
              프로젝트 만들기
            </Link>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["모집 중", recruitingProjectCount],
            ["진행 중", activeProjectCount],
            ["완료", completedProjectCount],
          ].map(([label, count]) => (
            <div key={label} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
              <p className="text-sm font-bold text-gray-300">{label}</p>
              <p className="mt-2 text-4xl font-black">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
