import { RouteId } from '@/lib/routes';
import { Topic } from '@/lib/types';
import Link from 'next/link';
import { mapTopicName } from '../Blog/BlogPage';

export interface ArticleTagsProps {
  tags: Topic[];
  title?: string;
}

export const ArticleTags = ({ tags, title }: ArticleTagsProps) => {
  return (
    <div>
      {title && <h2 className="text-xl font-semibold pb-4">{title}</h2>}

      <div className="flex flex-wrap gap-4">
        {tags
          .sort((a: Topic, b: Topic) =>
            a.attributes.topic.localeCompare(b.attributes.topic)
          )
          .map((tag) => {
            const displayTopicName = mapTopicName(tag.attributes.topic);

            return (
              <Link
                key={tag.id}
                href={`${RouteId.blogTopic}/${tag.attributes.topic}`}
              >
                <button className="btn">
                  <div className="badge badge-secondary">#</div>
                  {displayTopicName}
                </button>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
