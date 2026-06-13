import stars from '../public/bg-stars.svg';
import hills from '../public/pattern-hills.svg';
import { siInstagram, siFacebook, siPinterest } from 'simple-icons';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="flex flex-col">
        <h1 className="text-preset-1">We're launching soon</h1>
        <div>
          <div>
            <div className="text-preset-2">00</div>
            <p className="text-preset-3">days</p>
          </div>
          <div>
            <div className="text-preset-2">00</div>
            <p className="text-preset-3">hours</p>
          </div>
          <div>
            <div className="text-preset-2">00</div>
            <p className="text-preset-3">minutes</p>
          </div>
          <div>
            <div className="text-preset-2">00</div>
            <p className="text-preset-3">seconds</p>
          </div>
        </div>
      </section>
      <footer className="bg-color-white flex flex-row gap-4">
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6 cursor-pointer fill-amber-700"
        >
          <path d={siFacebook.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6 cursor-pointer fill-amber-700"
        >
          <path d={siPinterest.path} />
        </svg>
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-6 w-6 cursor-pointer fill-amber-700"
        >
          <path d={siInstagram.path} />
        </svg>
      </footer>
    </main>
  );
}
