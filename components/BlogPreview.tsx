import { Dictionary } from '@/lib/types';
import { PostCard } from './PostCard';

interface BlogPreviewProps {
  dict: Dictionary;
}

export const BlogPreview = ({ dict }: BlogPreviewProps) => {
  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a role="tab" className="tab tab-active sm:w-28 md:w-32">
        {dict.blog.category.all}
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          <PostCard className="col-span-6 lg:card-side" preview />
          <div className="skeleton col-span-6 sm:col-span-3 lg:col-span-2 w-full h-48 bg-gunmetal-300"></div>
          <div className="skeleton col-span-6 sm:col-span-3 lg:col-span-2 w-full h-48 bg-gunmetal-300"></div>
          <div className="skeleton col-span-6 sm:col-span-3 lg:col-span-2 w-full h-48 bg-gunmetal-300"></div>
          {/*
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2" />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2" />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2" /> */}
        </div>
      </div>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.useCases}
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.guides}
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.trends}
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        {dict.blog.category.productNews}
      </a>
      {/* <a role="tab" className="tab sm:w-28 md:w-32">
        Industries
      </a> */}
    </div>
  );
};
