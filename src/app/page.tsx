'use client';
import { ConnectWc } from '@/components/connect-wc';
import { ActiveWcSessions } from '@/components/wc/active-wc-sessions';
import { useWcAccountsSync } from '@/lib/wallet-connect/hooks/use-wc-accounts-sync';
import { useWcEventsManager } from '@/lib/wallet-connect/hooks/use-wc-events-manager';
import { useAccount } from 'wagmi';

export default function Home() {
  // TODO: Move wc logic to a separate component
  const { isConnected } = useAccount();
  useWcEventsManager(isConnected);
  useWcAccountsSync();

  return (
    <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center gap-16 h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2 className="text-4xl text-center font-medium">
          Coinbase Wallet Connect
        </h2>
        <div className="flex flex-col gap-12">
          <ConnectWc />
          <ActiveWcSessions />
        </div>
      </main>
    </div>
  );
}
