'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { PiXLight } from 'react-icons/pi';

export const TopHeaderBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hidden = localStorage.getItem('topHeaderBarHidden');
    if (hidden === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('topHeaderBarHidden', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-sapphire-500 px-4 py-1 flex justify-between items-center z-50">
      <div className="flex-1" />
      <div className="flex items-center space-x-4 flex-grow justify-center">
        <span className="text-sm text-white">
          Get free weekly tips on open-source tools —&nbsp;
          <span className="font-bold">Join our newsletter!</span>
        </span>
        <Link href="https://paperlesszone.beehiiv.com/subscribe">
          <button className="btn btn-xs bg-gunmetal-500 text-white w-20">
            Join Here
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-end">
        <button onClick={handleClose}>
          <PiXLight className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
};
