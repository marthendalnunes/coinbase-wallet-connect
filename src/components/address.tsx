import { cn } from '@/lib/utils';
import { supportedChains } from '@/lib/wagmi/config';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';
import type { Address as AddressType, Chain } from 'viem';

interface AddressProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  address: AddressType;
  truncate?: boolean;
  truncateLength?: number;
  isLink?: boolean;
  chain?: Chain;
}

const defaultChain = supportedChains[0];

export const Address = ({
  address,
  className,
  truncate,
  truncateLength = 8,
  isLink,
  chain = defaultChain,
  ...props
}: AddressProps) => {
  const blockExplorerUrl = chain.blockExplorers?.default.url;
  const formattedAddress = truncate
    ? `${address?.slice(0, truncateLength)}...${address?.slice(-(truncateLength - 2))}`
    : address;

  if (isLink && blockExplorerUrl) {
    return (
      <Link
        rel="noopener noreferrer"
        target="_blank"
        className={cn('hover:underline underline-offset-2', className)}
        href={`${blockExplorerUrl}/address/${address}`}
        {...props}
      >
        {formattedAddress}
      </Link>
    );
  }

  return (
    <span className={className} {...props}>
      {formattedAddress}
    </span>
  );
};
