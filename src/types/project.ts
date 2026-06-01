import type { UserId } from "@/types/user";

export type ProjectId = string;

export type ProjectStatus = "recruiting" | "inProgress" | "completed";

export interface Project {
  id: ProjectId;
  title: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  category: string;
  tags: string[];
  thumbnailImage: string;
  authorId: UserId;
  participantIds: UserId[];
  targetMemberCount: number;
  createdAt: string;
  startedAt?: string;
  endAt?: string;
  completedAt?: string;
  address?: string;
  bail?: number;
  frequency?: number;
  likeCount?: number;
}
