// import localFont from "next/font/local";
// import "./globals.css";
// import Head from "next/head";
// import { AuthProvider } from './context/AuthContext';

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "MSClub - CIT",
//   description: "Microsoft Student Club - CITech",
//   icons: {
//     icon: "/favicon.png",
//   }
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Head>
//       <link rel="icon" href="/favicon.ico" />
//       <link rel="preconnect" href="https://fonts.googleapis.com"/>
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
//       <link href="https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&display=swap" rel="stylesheet"/>
//     </Head>
//       <AuthProvider>{children}</AuthProvider>
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import Head from 'next/head'; // Import Head from next/head

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

export const metadata = {
  title: "MSClub - CIT",
  description: "Microsoft Student Club - CITech",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Add Head content here */}
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
