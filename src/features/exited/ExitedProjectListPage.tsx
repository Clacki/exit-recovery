import { mockProjects } from "@/data/mockProjects";

import ExitedListHeroSection from "./components/ExitedListHeroSection";
import ExitedListSection from "./components/ExitedListSection";

const completedProjects = mockProjects
  .filter((project) => project.status === "completed")
  .sort((a, b) => (b.completedAt ?? b.endAt ?? b.createdAt).localeCompare(a.completedAt ?? a.endAt ?? a.createdAt));

export default function ExitedProjectListPage() {
  return (
    <div className="bg-[#f8f8f8]">
      <ExitedListHeroSection projectCount={completedProjects.length} />
      <ExitedListSection projects={completedProjects} />
    </div>
  );
}
