import Image from 'next/image';

export interface PartnerLogoProps {
  src: string;
  alt: string;
}

export const PartnerLogo = ({ src, alt }: PartnerLogoProps) => {
  return (
    <Image
      className="max-h-8 w-auto grayscale"
      src={src}
      alt={alt}
      width={120}
      height={32}
      loading="lazy"
    />
  );
};
