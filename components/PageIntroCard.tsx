import Image from 'next/image';
import Link from 'next/link';

export interface PageIntroCardProps {
  url: string;
  thumbnailSrc: string;
  thumbnailAltText: string;
  title: string;
  description: string;
  buttonText: string;
}

export const PageIntroCard = ({
  url,
  thumbnailSrc,
  thumbnailAltText,
  title,
  description,
  buttonText,
}: PageIntroCardProps) => {
  return (
    <div className="card lg:card-side min-h-[324px] bg-neutral shadow-md rounded-lg border border-gunmetal-600">
      <figure className="w-full">
        <Link className="w-full" href={url}>
          <Image
            className="object-cover w-full h-full"
            src={thumbnailSrc}
            alt={thumbnailAltText}
            width={300}
            height={0}
            loading="lazy"
          />
        </Link>
      </figure>
      <div className="card-body overflow-y-scroll">
        <Link className="w-fit" href={url}>
          <h2 className="card-title text-2xl mb-2">{title}</h2>
        </Link>
        <p>{description}</p>
        <div className="card-actions">
          <Link href={url}>
            <button className="btn btn-primary mt-2">{buttonText}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
