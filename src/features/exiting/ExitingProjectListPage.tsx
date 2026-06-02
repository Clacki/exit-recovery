import { mockProjects } from "@/data/mockProjects";

import ExitingListHeroSection from "./components/ExitingListHeroSection";
import ExitingListSection from "./components/ExitingListSection";

const ongoingProjects = mockProjects
  .filter((project) => project.status === "inProgress")
  .sort((a, b) => (b.startedAt ?? b.createdAt).localeCompare(a.startedAt ?? a.createdAt));

export default function ExitingProjectListPage() {
  return (
    <div className="bg-[#f8f8f8]">
      <ExitingListHeroSection projectCount={ongoingProjects.length} />
      <ExitingListSection projects={ongoingProjects} />
    </div>
  );
}
