import Image from 'next/image';

export interface PartnerLogoProps {
  src: string;
  alt: string;
}

export const PartnerLogo = ({ src, alt }: PartnerLogoProps) => {
  return (
    <Image
      className="h-full grayscale w-28"
      src={src}
      alt={alt}
      width={112}
      height={56}
      loading="lazy"
    />
  );
};
