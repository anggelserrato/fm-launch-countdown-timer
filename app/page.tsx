import { siInstagram, siFacebook, siPinterest } from 'simple-icons';
import Countdown from './components/Countdown';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <div className="absolute inset-0 z-0 bg-[url('/bg-stars.svg')] bg-center bg-no-repeat" />
      <div className="absolute right-0 bottom-0 left-0 z-10 h-[168px] w-full bg-[url('/pattern-hills.svg')] bg-cover bg-no-repeat md:h-[197px]" />
      <section className="relative z-20 mt-[142px] flex flex-1 flex-col gap-13.5 p-6 text-center md:gap-26">
        <h1 className="text-preset-1">We&apos;re launching soon</h1>
        <Countdown />
      </section>
      <footer className="relative z-20 mb-12 flex flex-row items-center gap-8 md:mb-18">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="h-6 w-6 cursor-pointer fill-slate-grey hover:fill-light-pink"
          >
            <path d={siFacebook.path} />
          </svg>
        </a>
        <a
          href="https://pinterest.com"
          aria-label="Pinterest"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="h-6 w-6 cursor-pointer fill-slate-grey hover:fill-light-pink"
          >
            <path d={siPinterest.path} />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            className="h-6 w-6 cursor-pointer fill-slate-grey hover:fill-light-pink"
          >
            <path d={siInstagram.path} />
          </svg>
        </a>
      </footer>
    </main>
  );
}
