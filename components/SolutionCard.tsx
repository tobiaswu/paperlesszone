import Link from 'next/link';
import { PiArrowSquareOutLight } from 'react-icons/pi';

export interface SolutionCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  url?: string;
}

export const SolutionCard = ({
  icon,
  title,
  description,
  url,
}: SolutionCardProps) => {
  const Content = ({ linkIcon }: { linkIcon?: JSX.Element }) => (
    <div className="card-body backdrop-blur-3xl border border-gunmetal-600 rounded-lg hover:border-primary relative hover:shadow-2xl overflow-hidden h-full">
      {linkIcon && linkIcon}
      <span className="text-3xl text-primary">{icon}</span>
      <h3 className="text-2xl">{title}</h3>
      <p className="flex-grow">{description}</p>
    </div>
  );

  return (
    <div className="card h-full">
      {url ? (
        <Link className="h-full" href={url} rel="noopener noreferrer">
          <Content
            linkIcon={
              <PiArrowSquareOutLight className="absolute text-3xl text-gunmetal-800 top-4 right-4" />
            }
          />
        </Link>
      ) : (
        <Content />
      )}
    </div>
  );
};
