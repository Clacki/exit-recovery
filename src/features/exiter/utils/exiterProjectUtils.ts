import type { Project, ProjectStatus } from "@/types/project";
import type { User } from "@/types/user";

export function getProjectCountByUser(projects: Project[], userId: string, status?: ProjectStatus) {
  return projects.filter((project) => {
    const isParticipant = project.participantIds.includes(userId) || project.authorId === userId;
    return isParticipant && (!status || project.status === status);
  }).length;
}

export function getCurrentProjectTitleByUser(projects: Project[], userId: string) {
  return (
    projects.find(
      (project) =>
        project.status === "inProgress" && (project.participantIds.includes(userId) || project.authorId === userId),
    )?.title ?? "참여 중인 프로젝트가 없습니다."
  );
}

export function getTodayExiter(users: User[], projects: Project[]) {
  return users
    .slice()
    .sort((a, b) => getProjectCountByUser(projects, b.id) - getProjectCountByUser(projects, a.id))[0];
}
