'use client';

import { useDarkMode } from '@/utils/hooks';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export interface Props {
  imageLightUrl: string;
  imageDarkUrl: string;
  imageLightAlt: string;
  imageDarkAlt: string;
}

export const ArticleHeroImage = ({
  imageLightUrl,
  imageDarkUrl,
  imageDarkAlt,
  imageLightAlt,
}: Props) => {
  const url = process.env.STRAPI_URL;
  const [darkMode] = useDarkMode();
  const [source, setSource] = useState(url + imageLightUrl);
  const [altText, setAltText] = useState(imageLightAlt);

  useEffect(() => {
    if (darkMode) {
      setSource(url + imageLightUrl);
      setAltText(imageLightAlt);
    } else {
      setSource(url + imageDarkUrl);
      setAltText(imageDarkAlt);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode]);

  return (
    <Image
      className="container mx-auto md:absolute top-64 md:right-8 lg:right-16 xl:right-32 2xl:right-64 px-4 w-auto max-w-sm pt-8"
      src={source}
      alt={altText}
      width={384}
      height={184}
      loading="lazy"
    />
  );
};
