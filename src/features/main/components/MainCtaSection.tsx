import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function MainCtaSection() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-20 sm:px-8 lg:px-10">
      <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-[#3ebd5d] p-8 text-white sm:flex-row sm:items-center lg:p-12">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em]">EXIT</p>
          <p className="mt-3 text-2xl font-black leading-snug sm:text-3xl">당신을 기다리는 다음 프로젝트</p>
        </div>
        <Link
          href="/exiting"
          className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-emerald-700 transition hover:bg-emerald-50"
        >
          바로 참여하기
          <FiArrowRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
