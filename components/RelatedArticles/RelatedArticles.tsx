'use client';

import { PiTriangleLight } from 'react-icons/pi';
import { ArticleCard } from '../ArticleCard';
import { Article } from '@/lib/types';
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import './RelatedArticles.styles.css';
import { useFormatter, useTranslations } from 'next-intl';
import { Category } from '@/lib/enums';
import Link from 'next/link';
import { RouteId } from '@/lib/route';

const OPTIONS: EmblaOptionsType = { loop: true, align: 'start' };

export interface RelatedArticlesProps {
  articles: Article[];
}

export const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  const format = useFormatter();
  const t = useTranslations();

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="flex gap-8 embla">
      <div className="flex flex-col justify-between max-w-sm">
        <div>
          <p className="text-base">{t('blog.relatedArticles.subtitle')}</p>
          <h2 className="py-4 text-2xl font-semibold">
            {t('blog.relatedArticles.title')}
          </h2>
          <p className="mb-4">{t('blog.relatedArticles.description')}</p>
          {t.rich('blog.relatedArticles.link', {
            link: (chunks) => (
              <Link className="link link-primary" href={RouteId.blog}>
                {chunks}
              </Link>
            ),
          })}
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button
            className="btn rounded-full btn-outline hover:btn-primary"
            disabled={prevBtnDisabled}
            onClick={onPrevButtonClick}
          >
            <PiTriangleLight className="-rotate-90" />
          </button>
          <button
            className="btn rounded-full btn-outline hover:btn-primary"
            disabled={nextBtnDisabled}
            onClick={onNextButtonClick}
          >
            <PiTriangleLight className="rotate-90" />
          </button>
        </div>
      </div>

      <div ref={emblaRef} className="overflow-hidden">
        <div className="embla__container">
          {articles.map((article) => {
            const dateTimePublished = new Date(article.attributes.publishedAt);
            const formattedPublishedDate = format.dateTime(dateTimePublished, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });

            return (
              <div className="embla__slide" key={article.id}>
                <ArticleCard
                  className="h-full"
                  category={t(
                    `blog.category.${
                      article.attributes.category?.data.attributes
                        .item as Category
                    }`
                  )}
                  formattedDate={formattedPublishedDate}
                  publishedAtText={t('blog.info.published')}
                  slug={article.attributes.slug}
                  title={article.attributes.title}
                  readTime={article.attributes.reading_time}
                  readTimeText={t('blog.info.readTime')}
                  thumbnailAltText={
                    article.attributes.thumbnail.data.attributes.alternativeText
                  }
                  thumbnailUrl={
                    article.attributes.thumbnail.data.attributes.url
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
