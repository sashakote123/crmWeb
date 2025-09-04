export interface IProjectItem {
  id: string;
  name: string;
  desc: string;
  status: number;
  invitedMembers: string;
  author: string;
}

export type typeOfPage = 'projects' | 'tasks';
