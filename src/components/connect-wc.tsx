'use client';

import { useAccount, useDisconnect } from 'wagmi';
import { ConnectCoinbaseWallet } from './connect-coinbase-wallet';
import { truncateAddress } from '@/lib/utils';

export function ConnectWc() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div className="w-full flex flex-col items-center">
      {address ? (
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <input
              className="rounded-full w-[300px] border border-solid border-black/[.08] dark:border-white/[.145] transition-colors h-10 px-4 sm:px-5"
              placeholder="Enter your WalletConnect Uri"
            />
            <button className="rounded-full disabled:opacity-35 border border-solid border-transparent transition-colors bg-foreground text-background h-10 px-4 sm:px-5">
              Connect
            </button>
          </div>
          <div className="flex justify-between items-center gap-4">
            <p>Connected as {truncateAddress(address)}</p>
            <button
              className="py-2 px-4 rounded-full border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </div>
        </div>
      ) : (
        <ConnectCoinbaseWallet />
      )}
    </div>
  );
}
