import { RouteId } from '@/lib/route';
import Link from 'next/link';

export interface Props {}

export const Breadcrumbs = ({}: Props) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href={RouteId.root}>Home</Link>
        </li>
        <li>
          <Link href={RouteId.blog}>Blog</Link>
        </li>
        <li>Here</li>
      </ul>
    </div>
  );
};
