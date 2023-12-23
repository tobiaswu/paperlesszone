import { PostCard } from './PostCard';

export const BlogPreview = () => {
  return (
    <div role="tablist" className="tabs tabs-boxed bg-base-100">
      <a role="tab" className="tab tab-active sm:w-28 md:w-32">
        All
      </a>
      <div role="tabpanel" className="tab-content pt-10">
        <div className="grid grid-cols-6 gap-10">
          <PostCard
            className="col-span-6 card lg:card-side bg-neutral shadow-xl rounded-lg"
            preview
          />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2 card bg-neutral shadow-xl rounded-lg" />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2 card bg-neutral shadow-xl rounded-lg" />
          <PostCard className="col-span-6 sm:col-span-3 lg:col-span-2 card bg-neutral shadow-xl rounded-lg" />
        </div>
      </div>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Use Cases
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Guides
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Trends
      </a>
      <a role="tab" className="tab sm:w-28 md:w-32">
        Product News
      </a>
    </div>
  );
};
