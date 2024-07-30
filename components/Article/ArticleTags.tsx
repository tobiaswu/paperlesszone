import { RouteId } from '@/lib/routes';
import { Tag } from '@/lib/types';
import Link from 'next/link';

export interface ArticleTagsProps {
  tags: Tag[];
}

export const ArticleTags = ({ tags }: ArticleTagsProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold pb-4">Tags</h2>

      <div className="flex flex-wrap gap-4">
        {tags.map((tag) => {
          return (
            <Link
              key={tag.id}
              href={`${RouteId.blog}?tag=${tag.attributes.item}`}
            >
              <button className="btn">
                <div className="badge badge-secondary">#</div>
                {tag.attributes.item}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
