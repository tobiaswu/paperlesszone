import { type BlocksContent } from '@strapi/blocks-react-renderer';

// ---- Articles ----

export type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
    category: Category;
    tags?: {
      data: Tag[];
    };
    reading_time: number;
    content: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    author: ArticleAuthor;
    thumbnail: Image;
    localizations?: {
      data: Localization[];
    };
  };
};

type Category = {
  data: {
    id: number;
    attributes: {
      item: string;
    };
  };
};

export type Tag = {
  id: number;
  attributes: {
    item: string;
  };
};

type ArticleAuthor = {
  data: {
    id: number;
    attributes: {
      avatar?: Image;
      name: string;
      twitterUrl?: string;
      linkedinUrl?: string;
    };
  };
};

type Image = {
  data: {
    id: number;
    attributes: {
      url: string;
      alternativeText: string;
    };
  };
};

type Localization = {
  id: number;
  attributes: {
    locale: string;
    slug: string;
  };
};

// ---- Comments ----

export type Comment = {
  approvalStatus: string | null;
  author: CommentAuthor;
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

type CommentAuthor = {
  avatar: string | null;
  email: string;
  id: string;
  name: string;
};
