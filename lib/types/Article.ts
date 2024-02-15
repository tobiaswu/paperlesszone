import { type BlocksContent } from '@strapi/blocks-react-renderer';

export type Article = {
  id: number;
  attributes: {
    title: string;
    description: string;
    category: Category;
    tags?: Tag[];
    reading_time: number;
    content: BlocksContent;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    author: Author;
    thumbnail: Image;
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

type Tag = {
  data: {
    id: number;
    attributes: {
      item: string;
    };
  };
};

type Author = {
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
