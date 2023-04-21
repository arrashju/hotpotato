import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Home Cart" key="title" />
        {/* <meta property="og:image" content="/needtotalksquare.png" /> */}
        <meta name="og:title" content="Home Cart" />
        <meta property="og:name" content="Home Cart" />
        <meta name="theme-color" content={"0000FF"} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
