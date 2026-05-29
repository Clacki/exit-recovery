export type UserId = string;

export interface User {
  id: UserId;
  name: string;
  role: string;
  profileImage: string;
  bio: string;
  skills: string[];
}
