import { Card } from "@/components/ui";

type ExitingListHeroSectionProps = {
  projectCount: number;
};

export default function ExitingListHeroSection({ projectCount }: ExitingListHeroSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1fr_auto] lg:items-end lg:px-10 lg:py-16">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-[#3ebd5d]">exiting</p>
          <h1 className="text-4xl font-black leading-tight text-gray-950 sm:text-5xl">진행 중 프로젝트</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600">
            EXIT 메이커들이 지금 함께 실행하고 있는 프로젝트입니다. 관심 있는 프로젝트를 확인하고 진행 상황을
            따라가 보세요.
          </p>
        </div>

        <Card variant="panel" className="px-5 py-4 text-right">
          <p className="text-sm font-bold text-gray-500">진행 중</p>
          <p className="mt-1 text-4xl font-black text-gray-950">{projectCount}</p>
        </Card>
      </div>
    </section>
  );
}
