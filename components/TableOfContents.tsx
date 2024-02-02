'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useScroll } from 'framer-motion';
import { Dictionary } from '@/lib/types';

export interface TableOfContentsProps {
  dict: Dictionary;
  sectionTitles: string[];
}

export const TableOfContents = ({
  dict,
  sectionTitles,
}: TableOfContentsProps) => {
  const { scrollY } = useScroll();
  const [activeTitle, setActiveTitle] = useState('');

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const offset = viewportHeight * 0.1;
    const rootMargin = `-${offset}px 0px -${viewportHeight - offset}px 0px`;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTitle(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    sectionTitles.forEach((title) => {
      const section = document.getElementById(title);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [scrollY, sectionTitles]);

  return (
    <div className="sticky top-12">
      <h2 className="text-3xl font-semibold mb-4">{dict.blog.toc.title}</h2>
      <ul className="list-none list-inside">
        {sectionTitles.map((title) => {
          return (
            <li key={title}>
              <Link href={`#${title}`}>
                <button
                  className={`${
                    activeTitle === title ? 'text-primary' : 'text-neutral-500'
                  } border-none bg-transparent appearance-none text-left text-xl hover:text-primary my-2`}
                >
                  {title}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
