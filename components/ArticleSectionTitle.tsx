import Link from 'next/link';
import { ReactNode } from 'react';
import { PiLinkLight } from 'react-icons/pi';

export interface ArticleSectionTitleProps {
  title: ReactNode;
}

export const ArticleSectionTitle = ({ title }: ArticleSectionTitleProps) => {
  // @ts-ignore
  const id = (title[0].props.text as string).toLowerCase().replace(/\s/g, '-');

  return (
    <div id={id} className="pt-6 sm:pt-12 pb-6">
      <div className="flex gap-2 items-center w-fit h-fit group hover:text-primary">
        <h2 className="text-3xl font-semibold leading-tight">{title}</h2>
        <Link href={`#${id}`}>
          <button>
            <PiLinkLight className="text-2xl opacity-0 group-hover:opacity-100 hover:opacity-100" />
          </button>
        </Link>
      </div>
    </div>
  );
};
