import { ArticleContentRef } from './ArticleContentRef';

export interface TableOfContentsProps {
  hashes: string[];
  titles: string[];
}

export const TableOfContents = ({ hashes, titles }: TableOfContentsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Table of contents</h2>
      <ol className="list-decimal list-inside">
        {hashes.map((hash) => {
          return titles.map((title) => {
            return (
              <li key={hash}>
                <ArticleContentRef hash={hash} title={title} />
              </li>
            );
          });
        })}
      </ol>
    </div>
  );
};
