'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dictionary } from '@/lib/types';

export interface TableOfContentsProps {
  dict: Dictionary;
  sectionTitles: string[];
}

export const TableOfContents = ({
  dict,
  sectionTitles,
}: TableOfContentsProps) => {
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
      const id = title.toLowerCase().replace(/\s/g, '-');
      const section = document.getElementById(id);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, [sectionTitles]);

  return (
    <div className="sticky top-12">
      <h2 className="text-xl font-semibold mb-2">{dict.blog.toc.title}</h2>
      <ul className="list-none list-inside">
        {sectionTitles.map((title) => {
          const id = title.toLowerCase().replace(/\s/g, '-');
          return (
            <li key={id}>
              <Link href={`#${id}`}>
                <button
                  className={`${
                    activeTitle === id ? 'text-primary' : 'text-neutral-500'
                  } border-none bg-transparent appearance-none text-left text-base font-semibold hover:text-primary mt-4`}
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
