import '../styles/globals.css'
import '../styles/wallet.css'
import { useMemo } from 'react';
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Head from 'next/head'
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
LedgerWalletAdapter, PhantomWalletAdapter, SlopeWalletAdapter, SolflareWalletAdapter, SolletExtensionWalletAdapter, SolletWalletAdapter, TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import MyWallet from "../components/WalletConnection/WalletConnection";

function MyApp({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = 'https://api.devnet.solana.com';

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <Layout>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets}>
          <MyWallet />
        </WalletProvider>
      </ConnectionProvider>
      <Head>
        <title>nft-stats</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
