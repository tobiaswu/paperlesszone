import Image from 'next/image';

export interface PartnerLogoProps {
  src: string;
  alt: string;
}

export const PartnerLogo = ({ src, alt }: PartnerLogoProps) => {
  return (
    <Image
      className="h-auto w-32 grayscale"
      src={src}
      alt={alt}
      width={128}
      height={0}
      loading="lazy"
    />
  );
};
