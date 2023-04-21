import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#fff" />
        <meta
          name="description"
          content="A Personalized Meal Delivery Service"
        ></meta>
        <meta name="keywords" content="Home Cart"></meta>
        <meta name="robots" content="all" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
