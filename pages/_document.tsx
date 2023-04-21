import Document, { Html, Head, Main, NextScript } from "next/document";
import * as React from "react";
import { renderStatic } from "../shared/renderer";

export default class AppDocument extends Document {
  static async getInitialProps(ctx: any) {
    const page = await ctx.renderPage();
    const { css, ids } = await renderStatic(page.html);
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(" ")}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    };
  }

  render() {
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
}
