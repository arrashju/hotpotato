"use client";
import "/styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Home Cart" key="title" />
        {/* <meta property="og:image" content="/needtotalksquare.png" /> */}
        <meta name="og:title" content="Home Cart" />
        <meta property="og:name" content="Home Cart" />
        <meta name="theme-color" content={"0000FF"} />
      </Head>
      <CacheProvider value={emotionCache}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </>
  );
}
