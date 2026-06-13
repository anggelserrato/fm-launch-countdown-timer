'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-08-10T23:59:59');
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => {
      setNow(Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  if (now === null) return null;

  const diff = targetDate.getTime() - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="flex gap-4 md:gap-8">
      <div className="flex flex-col items-center gap-2.25 md:gap-4">
        <div className="relative h-[70px] w-[70px] md:h-[148px] md:w-[148px]">
          <svg
            viewBox="0 0 70 71"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="70" height="71" rx="8" fill="#191A23" />
            <rect width="70" height="65" rx="4" fill="#343650" />
          </svg>

          <div className="absolute inset-0 flex h-[65px] md:h-[130px] items-center justify-center">
            <span className="text-preset-2">
              {String(days).padStart(2, '0')}
            </span>
          </div>
        </div>
        <p className="text-preset-3">days</p>
      </div>

      <div className="flex flex-col items-center gap-2.25 md:gap-4">
        <div className="relative h-[70px] w-[70px] md:h-[148px] md:w-[148px]">
          <svg
            viewBox="0 0 70 71"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="70" height="71" rx="8" fill="#191A23" />
            <rect width="70" height="65" rx="4" fill="#343650" />
          </svg>

          <div className="absolute inset-0 flex h-[65px] md:h-[130px] items-center justify-center">
            <span className="text-preset-2">
              {String(hours).padStart(2, '0')}
            </span>
          </div>
        </div>
        <p className="text-preset-3">hours</p>
      </div>

      <div className="flex flex-col items-center gap-2.25 md:gap-4">
        <div className="relative h-[70px] w-[70px] md:h-[148px] md:w-[148px]">
          <svg
            viewBox="0 0 70 71"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="70" height="71" rx="8" fill="#191A23" />
            <rect width="70" height="65" rx="4" fill="#343650" />
          </svg>

          <div className="absolute inset-0 flex h-[65px] md:h-[130px] items-center justify-center">
            <span className="text-preset-2">
              {String(minutes).padStart(2, '0')}
            </span>
          </div>
        </div>
        <p className="text-preset-3">minutes</p>
      </div>

      <div className="flex flex-col items-center gap-2.25 md:gap-4">
        <div className="relative h-[70px] w-[70px] md:h-[148px] md:w-[148px]">
          <svg
            viewBox="0 0 70 71"
            className="absolute inset-0 h-full w-full"
          >
            <rect width="70" height="71" rx="8" fill="#191A23" />
            <rect width="70" height="65" rx="4" fill="#343650" />
          </svg>
          <div className="absolute inset-0 flex h-[65px] md:h-[130px] items-center justify-center">
            <span className="text-preset-2">
              {String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>
        <p className="text-preset-3">seconds</p>
      </div>
    </div>
  );
}
