import Link from 'next/link';
import { PiLinkLight } from 'react-icons/pi';

export interface BlogPostSectionTitleProps {
  title: string;
  hash: string;
}

export const BlogPostSectionTitle = ({
  title,
  hash,
}: BlogPostSectionTitleProps) => {
  return (
    <div className="flex gap-2 items-center w-fit">
      <h2 className="text-2xl font-semibold">
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
