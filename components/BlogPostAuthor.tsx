import Image from 'next/image';
import Link from 'next/link';
import { PiLinkedinLogoLight, PiTwitterLogoLight } from 'react-icons/pi';

export interface BlogPostAuthorProps {
  name: string;
  avatarUrl: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export const BlogPostAuthor = ({
  name,
  avatarUrl,
  twitterUrl,
  linkedinUrl,
}: BlogPostAuthorProps) => {
  return (
    <div className="p-6 border border-neutral rounded-lg w-fit">
      <div className="flex gap-4 items-center">
        <Image
          className="rounded-full h-auto w-20"
          src={avatarUrl}
          alt={`Avatar of ${name}`}
          width={80}
          height={0}
        />
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <div className="flex gap-2">
            {twitterUrl && (
              <Link href={twitterUrl} className="link link-primary">
                <PiTwitterLogoLight className="text-2xl" />
              </Link>
            )}
            {linkedinUrl && (
              <Link href={linkedinUrl} className="link link-primary">
                <PiLinkedinLogoLight className="text-2xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
