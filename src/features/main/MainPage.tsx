import { mockProjects } from "@/data/mockProjects";
import { mockUsers } from "@/data/mockUsers";

import MainCategorySection from "./components/MainCategorySection";
import MainCtaSection from "./components/MainCtaSection";
import MainExiterSection from "./components/MainExiterSection";
import MainHeroSection from "./components/MainHeroSection";
import MainProjectSection from "./components/MainProjectSection";

export default function MainPage() {
  const recruitingProjects = mockProjects.filter((project) => project.status === "recruiting");
  const activeProjects = mockProjects.filter((project) => project.status === "inProgress");
  const completedProjects = mockProjects.filter((project) => project.status === "completed");

  return (
    <div className="bg-white">
      <MainHeroSection
        recruitingProjectCount={recruitingProjects.length}
        activeProjectCount={activeProjects.length}
        completedProjectCount={completedProjects.length}
      />
      <MainProjectSection eyebrow="exiting" title="새로운 동료를 기다리는 프로젝트" projects={recruitingProjects} />
      <MainProjectSection eyebrow="current" title="지금 함께 진행 중인 프로젝트" projects={activeProjects} />
      <MainCategorySection />
      <MainProjectSection eyebrow="exited" title="완료한 프로젝트의 회고 기록" projects={completedProjects} />
      <MainExiterSection users={mockUsers} />
      <MainCtaSection />
    </div>
  );
}
