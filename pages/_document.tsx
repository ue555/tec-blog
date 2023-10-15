import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>{" "}
        // 一部の埋め込みで、高さ調節のためにスクリプトを利用します
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
