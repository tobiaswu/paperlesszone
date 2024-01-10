import Link from 'next/link';
import { PiCheckCircleLight, PiInfoLight } from 'react-icons/pi';

type CardItem = {
  icon?: JSX.Element;
  name: string;
  infoText?: string;
};

export interface PricingCardProps {
  title: string;
  subtitle?: string;
  badgeText?: string;
  priceOld?: string;
  discount?: string;
  price: string;
  priceInfo?: string;
  btnText: string;
  btnUrl: string;
  className?: string;
  items: CardItem[];
}

export const PricingCard = ({
  title,
  subtitle,
  badgeText,
  priceOld,
  discount,
  price,
  priceInfo,
  btnText,
  btnUrl,
  className,
  items,
}: PricingCardProps) => {
  return (
    <div
      className={`${className} card max-w-xl bg-neutral rounded-lg shadow-md border-4 border-primary h-fit`}
    >
      <div className="card-body">
        <div className="badge badge-error w-fit sm:w-44 h-fit mb-2">
          {badgeText}
        </div>
        <h3 className="card-title text-4xl font-bold text-primary capitalize leading-normal bg-gradient-to-br from-primary to-sapphire-800 text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="py-4">{subtitle}</p>
        <div className="divider" />
        <div className="flex w-fit gap-2 items-center">
          <p className="text-4xl font-semibold">{price}</p>
          <div className="flex flex-col">
            <p className="text-xl line-through text-neutral-400 font-semibold">
              {priceOld}
            </p>
            <p className="text-error">{discount}</p>
          </div>
        </div>
        <p className="text-base">{priceInfo}</p>
        <div className="flex flex-col gap-4 pt-4">
          {items.map((item) => {
            return (
              <div key={item.name} className="flex items-center gap-2 w-fit">
                {item.icon ? (
                  <span className="text-accent text-3xl min-w-min">
                    {item.icon}
                  </span>
                ) : (
                  <PiCheckCircleLight className="text-primary text-3xl min-w-min" />
                )}
                <p>{item.name}</p>
                {item.infoText && (
                  <div
                    className="tooltip tooltip-secondary tooltip-left md:tooltip-top"
                    data-tip={item.infoText}
                  >
                    <PiInfoLight className="text-info text-xl min-w-min" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="card-actions justify-center px-4 pb-4">
        <Link className="w-full" href={btnUrl}>
          <button className="btn btn-primary capitalize w-full">
            {btnText}
          </button>
        </Link>
      </div>
    </div>
  );
};
