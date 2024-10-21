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
      <div className="min-w-fit lg:w-1/2 lg:min-w-min">
        <Link className="w-full lg:max-h-96" href={url}>
          <Image
            className="object-cover w-full h-full lg:rounded-l-lg rounded-t-lg lg:rounded-tr-none"
            src={thumbnailSrc}
            alt={thumbnailAltText}
            width={512}
            height={0}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="card-body overflow-y-scroll lg:w-1/2 h-fit">
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
