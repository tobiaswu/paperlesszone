import { RouteId } from '@/lib/routes';
import Link from 'next/link';

export interface DiscoverCardProps {
  icon: JSX.Element;
  title: string;
  url?: string;
}

export const DiscoverCard = ({ icon, title }: DiscoverCardProps) => {
  return (
    <Link
      href={RouteId.solutions}
      className="card rounded-lg backdrop-blur-3xl border border-gunmetal-600 shadow-md hover:bg-primary hover:text-neutral h-full group overflow-hidden relative"
    >
      <div className="card-body justify-center items-center">
        <span className="text-5xl text-primary group-hover:text-neutral">
          {icon}
        </span>
        <h3 className="card-title uppercase text-lg mt-4">{title}</h3>
      </div>
    </Link>
  );
};
