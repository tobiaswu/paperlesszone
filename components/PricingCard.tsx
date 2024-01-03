import {
  PiCheckCircleLight,
  PiInfoLight,
  PiWarningCircleLight,
} from 'react-icons/pi';

export interface PricingCardProps {}

export const PricingCard = ({}: PricingCardProps) => {
  return (
    <div className="card max-w-sm bg-neutral rounded-lg shadow-md border-4 border-transparent hover:border-primary">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h3 className="card-title text-3xl text-primary">Paperless</h3>
          <div className="badge badge-error">Only 2 seats left</div>
        </div>
        <p className="py-4">Perfect to get started</p>
        <div className="flex w-fit gap-2 items-center">
          <p className="text-4xl font-semibold">$99</p>
          <div className="flex flex-col">
            <p className="text-xl line-through text-neutral-400 font-semibold">
              $990
            </p>
            <p className="text-error">Beta phase 80% off</p>
          </div>
        </div>
        <p className="text-base">One-time payment</p>
        <div className="flex flex-col gap-2 pt-4">
          <div className="flex items-center gap-2">
            <PiCheckCircleLight className="text-primary" />
            <p>Up to 10 members</p>
          </div>
          <div className="flex items-center gap-2">
            <PiCheckCircleLight className="text-primary" />
            <p>Collaboration features</p>
            <PiInfoLight className="text-info" />
          </div>
          <div className="flex items-center gap-2">
            <PiWarningCircleLight className="text-warning" />
            <p>Not included: server costs (ca. $19/month)</p>
          </div>
        </div>
      </div>
      <div className="card-actions justify-center px-4 pb-4">
        <button className="btn btn-primary w-full">Get Started</button>
      </div>
    </div>
  );
};
