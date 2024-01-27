'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import Link from 'next/link';
import { ArticleSectionTitle } from './ArticleSectionTitle';

export interface ArticleContentRendererProps {
  content: BlocksContent;
}

export const ArticleContentRenderer = ({
  content,
}: ArticleContentRendererProps) => {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="pb-4">{children}</p>,
        link: ({ children, url }) => (
          <Link
            className="underline hover:text-primary"
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </Link>
        ),
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return (
                <h1 className="text-5xl font-semibold pb-6 pt-12 leading-tight">
                  {children}
                </h1>
              );
            case 2:
              return <ArticleSectionTitle title={children} hash={children} />;
            case 3:
              return (
                <h3 className="text-2xl font-semibold pb-6 pt-12 leading-tight">
                  {children}
                </h3>
              );
            case 4:
              return (
                <h4 className="text-xl font-semibold pb-6 pt-12 leading-tight">
                  {children}
                </h4>
              );
            case 5:
              return (
                <h5 className="text-lg font-semibold pb-6 pt-12 leading-tight">
                  {children}
                </h5>
              );
            case 6:
              return (
                <h6 className="text-base font-semibold pb-6 pt-12 leading-tight">
                  {children}
                </h6>
              );
            default:
              return <h1>{children}</h1>;
          }
        },
        image: ({ image }) => (
          <div className="flex flex-col gap-1 mb-4">
            <Image
              className="rounded-lg border border-gunmetal-600 w-auto"
              src={image.url}
              alt={image.alternativeText ?? ''}
              width={image.width}
              height={image.height}
              loading="lazy"
            />
            <p className="text-sm">{image.caption}</p>
          </div>
        ),
        code: ({ children }) => (
          <code className="block p-4 mb-4 rounded-lg bg-base-300 border border-gunmetal-600 whitespace-pre overflow-x-scroll relative">
            {/* <button
              className="absolute btn btn-ghost right-1 top-1"
              onClick={() => navigator.clipboard.writeText(children as string)} // TODO: fix
            >
              <PiCopySimpleLight className="text-2xl" />
            </button> */}
            {children}
          </code>
        ),
        list: ({ children, format }) => {
          if (format === 'ordered') {
            return (
              <ol className="list-decimal mb-4 ml-4 text-lg leading-relaxed">
                {children}
              </ol>
            );
          }
          return (
            <ul className="list-disc mb-4 ml-4 text-lg leading-relaxed">
              {children}
            </ul>
          );
        },
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
        code: ({ children }) => (
          <code className="p-2 rounded-lg bg-neutral">{children}</code>
        ),
      }}
    />
  );
};
