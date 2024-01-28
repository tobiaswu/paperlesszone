export interface DiscoverCardProps {
  icon: JSX.Element;
  title: string;
}

export const DiscoverCard = ({ icon, title }: DiscoverCardProps) => {
  return (
    <div className="card rounded-lg bg-neutral border border-gunmetal-600 shadow-md hover:bg-primary hover:text-neutral h-full group overflow-hidden">
      <div className="card-body justify-center items-center">
        <span className="text-5xl text-primary group-hover:text-neutral">
          {icon}
        </span>
        <h3 className="card-title uppercase text-lg mt-4">{title}</h3>
      </div>
    </div>
  );
};
