import { siInstagram, siFacebook, siPinterest } from 'simple-icons';
import Countdown from './components/Countdown';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-[url('/bg-stars.svg')]" />
      <div className="absolute right-0 bottom-0 left-0 -z-10 h-50 bg-[url('/pattern-hills.svg')] bg-cover bg-bottom bg-no-repeat" />
      <section className="mt-[142px] flex flex-1 flex-col gap-13.5 p-6 text-center">
        <h1 className="text-preset-1">We&apos;re launching soon</h1>
        <Countdown />
      </section>
      <footer className="mb-12 flex flex-row items-center justify-end gap-8">
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6 cursor-pointer fill-slate-grey hover:fill-light-pink"
        >
          <path d={siFacebook.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6 cursor-pointer fill-slate-grey hover:fill-light-pink"
        >
          <path d={siPinterest.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6 cursor-pointer fill-slate-grey hover:fill-light-pink"
        >
          <path d={siInstagram.path} />
        </svg>
      </footer>
    </main>
  );
}
