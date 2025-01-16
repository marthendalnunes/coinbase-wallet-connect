'use client';

import { coinbaseWalletConnector } from '@/lib/wagmi/config';
import { useConnect } from 'wagmi';

export function ConnectCoinbaseWallet() {
  const { connect, isPending } = useConnect();
  return (
    <button
      className="rounded-full disabled:opacity-35 border border-solid border-transparent transition-colors bg-foreground text-background h-10 px-4 sm:px-5 disabled:cursor-not-allowed"
      onClick={() =>
        connect({
          connector: coinbaseWalletConnector(),
        })
      }
      disabled={isPending}
    >
      Connect Coinbase Wallet
    </button>
  );
}
