import { Card } from "@/components/ui";

type ExitedListHeroSectionProps = {
  projectCount: number;
};

export default function ExitedListHeroSection({ projectCount }: ExitedListHeroSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-16">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#3ebd5d]">exited</p>
          <h1 className="text-4xl font-black leading-tight text-gray-950 sm:text-5xl">완료된 프로젝트</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            엑시터들이 함께 완성한 프로젝트 기록입니다. 종료된 프로젝트의 과정과 결과를 살펴보세요.
          </p>
        </div>

        <Card variant="panel" className="px-5 py-4 text-right">
          <p className="text-sm font-bold text-gray-500">완료</p>
          <p className="mt-1 text-4xl font-black text-gray-950">{projectCount}</p>
        </Card>
      </div>
    </section>
  );
}
