import Image from 'next/image';
import Link from 'next/link';
import { PiLinkedinLogoLight, PiTwitterLogoLight } from 'react-icons/pi';

const BASE_URL = process.env.STRAPI_URL;

export interface ArticleAuthorProps {
  name: string;
  avatarUrl: string;
  avatarAltText: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export const ArticleAuthor = ({
  name,
  avatarUrl,
  avatarAltText,
  twitterUrl,
  linkedinUrl,
}: ArticleAuthorProps) => {
  return (
    <div className="p-6 border border-neutral rounded-lg w-fit">
      <div className="flex gap-4 items-center">
        <Image
          className="rounded-full border border-gunmetal-600 h-auto w-20"
          src={BASE_URL + avatarUrl}
          alt={avatarAltText}
          width={80}
          height={0}
          loading="lazy"
        />
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <div className="flex gap-2">
            {twitterUrl && (
              <Link
                href={twitterUrl}
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiTwitterLogoLight className="text-2xl" />
              </Link>
            )}
            {linkedinUrl && (
              <Link
                href={linkedinUrl}
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiLinkedinLogoLight className="text-2xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
