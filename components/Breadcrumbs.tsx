import { RouteId } from '@/lib/route';
import { Dictionary } from '@/lib/types';
import Link from 'next/link';

export interface Props {
  dict: Dictionary;
}

export const Breadcrumbs = ({ dict }: Props) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href={RouteId.root}>{dict.blog.info.home}</Link>
        </li>
        <li>
          <Link href={RouteId.blog}>Blog</Link>
        </li>
        <li>{dict.blog.info.here}</li>
      </ul>
    </div>
  );
};
