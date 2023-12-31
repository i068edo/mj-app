import { Inter } from 'next/font/google'
/* import Head from 'next/head'; */
/* import './globals.css' */
import { Noto_Serif_JP } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });
const NotoSerifJP = Noto_Serif_JP({ weight: "300", subsets: ["latin"] });

export const metadata = {
  title: 'まーじゃんけいさん',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head> */}
      <body className={NotoSerifJP.className}>{children}</body>
    </html>
  )
}
