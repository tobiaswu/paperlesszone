import { STRAPI_URL } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { PiLinkedinLogoLight } from 'react-icons/pi';

export interface ArticleAuthorProps {
  author: string;
  name: string;
  avatarUrl: string;
  avatarAltText: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  authorDescription?: string;
}

export const ArticleAuthor = ({
  author,
  name,
  avatarUrl,
  avatarAltText,
  twitterUrl,
  linkedinUrl,
  authorDescription,
}: ArticleAuthorProps) => {
  return (
    <div className="p-6 border border-neutral rounded-lg w-fit h-fit">
      <div className="flex gap-4 items-center">
        <Image
          className="rounded-full border border-gunmetal-600 h-auto w-20"
          src={STRAPI_URL + avatarUrl}
          alt={avatarAltText}
          width={80}
          height={0}
          loading="lazy"
        />
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gunmetal-700">{author}</p>
          <p>{name}</p>
          <div className="flex gap-2">
            {twitterUrl && (
              <Link
                href={twitterUrl}
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitterX className="text-2xl" />
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
      {authorDescription && (
        <p className="text-sm text-gunmetal-700 pt-4">{authorDescription}</p>
      )}
    </div>
  );
};
