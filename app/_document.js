import { Html, Head, Main, NextScript } from "next/document";
import localFont from "next/font/local";

// Define your fonts here
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
