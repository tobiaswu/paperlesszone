import { ReactNode } from 'react';
import { PiLinkLight } from 'react-icons/pi';

export interface ArticleSectionTitleProps {
  title: ReactNode;
}

export const ArticleSectionTitle = ({ title }: ArticleSectionTitleProps) => {
  // @ts-ignore
  const id = title[0].props.text;

  return (
    <div className="flex gap-2 items-center w-fit" id={id}>
      <h2 className="text-3xl font-semibold pb-6 pt-12 leading-tight">
        <div className="group flex items-center gap-2 hover:text-primary">
          {title}
          <PiLinkLight className="hidden group-hover:block" />
        </div>
      </h2>
    </div>
  );
};
