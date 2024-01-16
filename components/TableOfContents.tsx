import { BlogContentRef } from './BlogContentRef';

export interface TableOfContentsProps {}

export const TableOfContents = ({}: TableOfContentsProps) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Table of contents</h2>
      <ol className="list-decimal list-inside">
        <li>
          <BlogContentRef hash="section-1" title="What is paperless office?" />
        </li>
        <li>
          <BlogContentRef hash="section-2" title="What are the benefits?" />
        </li>
        <li>
          <BlogContentRef hash="section-3" title="Final thoughts" />
        </li>
      </ol>
    </div>
  );
};
