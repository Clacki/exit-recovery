import { mockProjects } from "@/data/mockProjects";
import { mockUsers } from "@/data/mockUsers";

import ExiterHeroSection from "./components/ExiterHeroSection";
import ExiterListSection from "./components/ExiterListSection";
import {
  getCurrentProjectTitleByUser,
  getProjectCountByUser,
  getTodayExiter,
} from "./utils/exiterProjectUtils";

export default function ExiterListPage() {
  const users = mockUsers;
  const projects = mockProjects;
  const todayExiter = getTodayExiter(users, projects);
  const currentProjectTitle = todayExiter ? getCurrentProjectTitleByUser(projects, todayExiter.id) : "";

  return (
    <div className="bg-white">
      <ExiterHeroSection todayExiter={todayExiter} currentProjectTitle={currentProjectTitle} />
      <ExiterListSection
        users={users}
        getOngoingProjectCount={(userId) => getProjectCountByUser(projects, userId, "inProgress")}
        getCompletedProjectCount={(userId) => getProjectCountByUser(projects, userId, "completed")}
      />
    </div>
  );
}
