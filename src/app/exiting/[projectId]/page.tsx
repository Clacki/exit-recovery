import { notFound } from "next/navigation";

import { mockProjects } from "@/data/mockProjects";
import ExitingProjectDetailPage from "@/features/exiting/ExitingProjectDetailPage";

type OngoingProjectDetailPageProps = {
  params: Promise<{
    projectId: string;
  }>;
};

export function generateStaticParams() {
  return mockProjects
    .filter((project) => project.status === "inProgress")
    .map((project) => ({
      projectId: project.id,
    }));
}

export default async function OngoingProjectDetailPage({ params }: OngoingProjectDetailPageProps) {
  const { projectId } = await params;
  const project = mockProjects.find((item) => item.id === projectId && item.status === "inProgress");

  if (!project) {
    notFound();
  }

  return <ExitingProjectDetailPage project={project} />;
}
