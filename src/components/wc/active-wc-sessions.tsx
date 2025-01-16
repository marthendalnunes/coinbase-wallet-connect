'use client';

import Image from 'next/image';
import { useActiveSessions } from '@/lib/wallet-connect/hooks/use-active-connections';
import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import { Button } from '../ui/button';
import { useDisconnectWc } from '@/lib/wallet-connect/hooks/use-wc-disconnect';

export function ActiveWcSessions() {
  const { isConnected } = useAccount();
  const { disconnectWc } = useDisconnectWc();
  const activeWcSessionsQuery = useActiveSessions({
    enabled: isConnected,
  });

  const wcSessions = useMemo(() => {
    if (!activeWcSessionsQuery.data) {
      return;
    }
    return Object.values(activeWcSessionsQuery.data);
  }, [activeWcSessionsQuery.data]);

  return (
    <div className="w-full flex flex-col items-center gap-y-1.5">
      <h3 className="text-2xl font-semibold">Active Connections</h3>
      {(!wcSessions || wcSessions.length === 0) && (
        <div className="text lg text-neutral-500">No active connections</div>
      )}
      {wcSessions &&
        wcSessions.length > 0 &&
        wcSessions.map((session) => (
          <div
            className="rounded-sm p-1 hover:bg-neutral-300"
            key={session?.topic}
          >
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-x-2">
                <Image
                  alt="logo"
                  className="size-5 rounded-lg"
                  src={session.peer.metadata.icons[0] ?? '/images/logo-xl.png'}
                  width={24}
                  height={24}
                />
                <div className="font-bold">{session.peer.metadata.name}</div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                disabled={!disconnectWc}
                onClick={() => disconnectWc?.({ topic: session.topic })}
              >
                x
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
}
