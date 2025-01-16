'use client';

import { coinbaseWalletConnector } from '@/lib/wagmi/config';
import { useConnect } from 'wagmi';
import { Button } from './ui/button';

export function ConnectCoinbaseWallet() {
  const { connect, isPending } = useConnect();
  return (
    <Button
      size="lg"
      onClick={() =>
        connect({
          connector: coinbaseWalletConnector,
        })
      }
      disabled={isPending}
    >
      Connect Coinbase Wallet
    </Button>
  );
}
