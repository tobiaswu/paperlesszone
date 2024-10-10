'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PiXLight } from 'react-icons/pi';

export const CardPopover = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedIsOpen = localStorage.getItem('isCardPopoverOpen');
    if (storedIsOpen !== 'false') {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 45000);

      const handleScroll = () => {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        if (scrollPercentage >= 70) {
          setIsOpen(true);
          window.removeEventListener('scroll', handleScroll);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('isCardPopoverOpen', 'false');
  };

  return (
    <div className={`toast toast-start z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="card glass w-72">
        <button
          className="btn btn-circle btn-sm btn-ghost absolute right-2 top-2"
          onClick={handleClose}
        >
          <PiXLight className="w-5 h-5 text-white" />
        </button>
        <figure>
          <Image
            src="/assets/images/newsletter-thumbnail.webp"
            alt="car!"
            width={500}
            height={300}
            className="w-full h-auto"
          />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title whitespace-pre-wrap">
            Get exclusive business insights on tech and automation delivered
            weekly
          </h2>
          <div className="card-actions justify-start">
            <Link href="https://paperlesszone.beehiiv.com/subscribe">
              <div className="indicator">
                <span className="indicator-item badge badge-accent text-xs">
                  FREE
                </span>
                <button className="btn btn-primary btn-sm">
                  Subscribe Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
