export type Comment = {
  approvalStatus: string | null;
  author: Author;
  blockReason: string | null;
  blocked: boolean;
  blockedThread: boolean;
  children: Comment[];
  content: string;
  createdAt: string;
  gotThread: boolean;
  id: number;
  isAdminComment: boolean | null;
  removed: boolean | null;
  updatedAt: string;
};

type Author = {
  avatar?: string;
  email: string;
  id: string;
  name: string;
};
