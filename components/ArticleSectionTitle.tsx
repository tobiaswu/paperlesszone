import { ReactNode } from 'react';
import { PiLinkLight } from 'react-icons/pi';

export interface ArticleSectionTitleProps {
  title: ReactNode;
}

export const ArticleSectionTitle = ({ title }: ArticleSectionTitleProps) => {
  // @ts-ignore
  const id = title[0].props.text;

  return (
    <div id={id} className="pt-12 pb-6">
      <div className="flex gap-2 items-center w-fit h-fit group hover:text-primary">
        <h2 role="button" className="text-3xl font-semibold leading-tight">
          {title}
        </h2>
        <PiLinkLight className="text-3xl hidden group-hover:block" />
      </div>
    </div>
  );
};
