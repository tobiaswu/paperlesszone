import { PostCard } from '@/components/PostCard';

export default function Blog() {
  return (
    <div className="container mx-auto py-16 px-4 grid grid-cols-12 gap-8">
      <div className="col-span-12">
        <PostCard className="lg:card-side" preview />
      </div>
      <PostCard className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" />
      <PostCard className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" />
      <PostCard className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" />
      <PostCard className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3" />
    </div>
  );
}
