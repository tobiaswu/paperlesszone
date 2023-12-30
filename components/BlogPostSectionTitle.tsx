import { PiLinkLight } from 'react-icons/pi';

export interface BlogPostSectionTitleProps {
  title: string;
}

export const BlogPostSectionTitle = ({ title }: BlogPostSectionTitleProps) => {
  return (
    <div className="flex gap-2 items-center -ml-10">
      <PiLinkLight className="text-3xl hover:text-primary" />
      <h2 className="text-2xl font-semibold">{title}</h2>
    </div>
  );
};
