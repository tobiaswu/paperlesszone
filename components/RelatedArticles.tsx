import { RouteId } from '@/lib/route';
import Link from 'next/link';
import { PiTriangleLight } from 'react-icons/pi';

export interface RelatedArticlesProps {}

export const RelatedArticles = ({}: RelatedArticlesProps) => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col justify-between max-w-sm">
        <div>
          <p className="text-base">Keep reading</p>
          <h2 className="py-4 text-2xl font-semibold">Related Articles</h2>
          <p className="mb-4">
            Laborum dolore aute et incididunt commodo consectetur eiusmod magna.
          </p>
          <Link className="link link-primary" href={RouteId.blog}>
            View more
          </Link>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button className="btn rounded-full btn-outline hover:btn-primary">
            <PiTriangleLight className="-rotate-90" />
          </button>
          <button className="btn rounded-full btn-outline hover:btn-primary">
            <PiTriangleLight className="rotate-90" />
          </button>
        </div>
      </div>
      {/* show 1 card, sm: 2 cards, lg: 3 cards */}
      {/* TODO: add carousel navigation */}
      {/* <ArticleCard />
      <ArticleCard className="hidden sm:block" />
      <ArticleCard className="hidden lg:block" /> */}
    </div>
  );
};
