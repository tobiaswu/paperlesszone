import Link from 'next/link';
import { ReactNode } from 'react';
import { PiLinkLight } from 'react-icons/pi';

export interface ArticleSectionTitleProps {
  title: ReactNode;
  hash: ReactNode;
}

export const ArticleSectionTitle = ({
  title,
  hash,
}: ArticleSectionTitleProps) => {
  return (
    <div className="flex gap-2 items-center w-fit">
      <h2 className="text-4xl font-semibold pb-4 leading-tight">
        <Link
          className="group flex items-center gap-2 hover:text-primary"
          href={`#${hash}`}
        >
          {title}
          <PiLinkLight className="hidden group-hover:block" />
        </Link>
      </h2>
    </div>
  );
};
