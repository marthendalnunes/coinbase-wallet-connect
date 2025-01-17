import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Footer } from '@/components/footer';
import { RootProvider } from '@/components/root-provider';
import { cookieToInitialState } from 'wagmi';
import { getConfig } from '@/lib/wagmi/config';
import { headers } from 'next/headers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Coinbase Wallet Connect',
  description:
    'Use your Coinbase Wallet from any device in any dapp that supports WalletConnect.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getConfig(),
    (await headers()).get('cookie'),
  );
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootProvider initialState={initialState}>
          {children}
          <Footer />
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
