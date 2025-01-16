import { http, cookieStorage, createConfig, createStorage } from 'wagmi';
import { coinbaseWallet } from 'wagmi/connectors';
import {
  mainnet,
  base,
  optimism,
  arbitrum,
  polygon,
  zora,
  avalanche,
} from 'wagmi/chains';

export const coinbaseWalletConnector = coinbaseWallet({
  appName: 'Coinbase Wallet Connect',
  appLogoUrl: 'https://coinbase.com/favicon.ico',
  preference: {
    options: 'smartWalletOnly',
  },
});

export const supportedChains = [
  mainnet,
  base,
  optimism,
  arbitrum,
  polygon,
  zora,
  avalanche,
] as const;
export const supportedChainIds = supportedChains.map((chain) => chain.id);

export function getConfig() {
  return createConfig({
    chains: supportedChains,
    connectors: [coinbaseWalletConnector],
    storage: createStorage({
      storage: cookieStorage,
    }),
    ssr: true,
    transports: {
      [mainnet.id]: http(),
      [base.id]: http(),
      [optimism.id]: http(),
      [arbitrum.id]: http(),
      [polygon.id]: http(),
      [zora.id]: http(),
      [avalanche.id]: http(),
    },
  });
}

export const wagmiConfig = getConfig();
