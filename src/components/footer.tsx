import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="absolute flex justify-center items-center w-full bottom-6">
      <span className="flex text-lg gap-1.5">
        <Link
          className="flex items-center pr-1"
          href="https://github.com/marthendalnunes/coinbase-wallet-connect"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image src="/github.svg" alt="Github Logo" width={20} height={20} />
        </Link>
        <p>Made with ♥️ by </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline underline-offset-2"
          href="https://github.com/marthendalnunes"
        >
          Vitor Marthendal
        </a>
      </span>
    </footer>
  );
}
