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

export const coinbaseWalletConnector = () =>
  coinbaseWallet({
    appName: 'Coinbase Wallet Connect',
    appLogoUrl: 'https://coinbase.com/favicon.ico',
    preference: {
      options: 'smartWalletOnly',
    },
  });

export function getConfig() {
  return createConfig({
    chains: [mainnet, base, optimism, arbitrum, polygon, zora, avalanche],
    connectors: [coinbaseWalletConnector()],
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
