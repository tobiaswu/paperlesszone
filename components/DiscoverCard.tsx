import Link from 'next/link';
import { PiArrowSquareOutLight } from 'react-icons/pi';

export interface DiscoverCardProps {
  icon: JSX.Element;
  title: string;
  url?: string;
}

export const DiscoverCard = ({ icon, title, url }: DiscoverCardProps) => {
  return (
    <>
      {url ? (
        <Link href={url}>
          <div className="card rounded-lg bg-neutral border border-gunmetal-600 shadow-md hover:bg-primary hover:text-neutral h-full group overflow-hidden relative">
            <PiArrowSquareOutLight className="absolute text-3xl text-gunmetal-800 group-hover:text-neutral top-4 right-4" />
            <div className="card-body justify-center items-center">
              <span className="text-5xl text-primary group-hover:text-neutral">
                {icon}
              </span>
              <h3 className="card-title uppercase text-base mt-4">{title}</h3>
            </div>
          </div>
        </Link>
      ) : (
        <div className="card rounded-lg bg-neutral border border-gunmetal-600 shadow-md h-full overflow-hidden">
          <div className="card-body justify-center items-center">
            <span className="text-5xl text-primary">{icon}</span>
            <h3 className="card-title uppercase text-lg mt-4">{title}</h3>
          </div>
        </div>
      )}
    </>
  );
};
