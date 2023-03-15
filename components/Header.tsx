import { asset, Head } from "$fresh/runtime.ts";

interface Header {
  name: string;
}

export default function Home(data: Header) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      </meta>
      <link rel="shortcut icon" href="assets/favicon.ico"></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="assets/favicon-16x16.png"
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="assets/favicon-32x32.png"
      >
      </link>
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="assets/favicon-48x48.png"
      >
      </link>
      <meta name="mobile-web-app-capable" content="yes"></meta>
      <meta name="theme-color" content="#ffffff"></meta>
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="assets/apple-touch-icon-57x57.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="assets/apple-touch-icon-60x60.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="assets/apple-touch-icon-72x72.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="assets/apple-touch-icon-76x76.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="assets/apple-touch-icon-114x114.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="assets/apple-touch-icon-120x120.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="assets/apple-touch-icon-144x144.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="assets/apple-touch-icon-152x152.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="167x167"
        href="assets/apple-touch-icon-167x167.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="assets/apple-touch-icon-180x180.png"
      >
      </link>
      <link
        rel="apple-touch-icon"
        sizes="1024x1024"
        href="assets/apple-touch-icon-1024x1024.png"
      >
      </link>
      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      >
      </meta>
      <meta
        name="apple-mobile-web-app-title"
        content="Kate Gray Memorial Trust"
      >
      </meta>
      <link rel="stylesheet" href={asset("style/fonts.css")}></link>
      <link rel="stylesheet" href={asset("style/index.css")}></link>
      <link rel="stylesheet" href={asset("style/custom.css")}></link>
      <title>{data.name}</title>
    </Head>
  );
}
