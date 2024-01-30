import { ArticleContentRef } from './ArticleContentRef';

export interface TableOfContentsProps {
  titles: string[];
}

export const TableOfContents = ({ titles }: TableOfContentsProps) => {
  return (
    <div className="sticky top-12">
      <h2 className="text-3xl font-semibold mb-4">Table of contents</h2>
      <ul className="list-none list-inside">
        {titles.map((title) => {
          return (
            <li key={title}>
              <ArticleContentRef title={title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
