import { ConnectWc } from '@/components/connect-wc';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-16 h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-4xl text-center font-medium">
          Coinbase Wallet Connect
        </h2>
        <ConnectWc />
      </main>
    </div>
  );
}
