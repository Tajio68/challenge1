import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";
import styles from "./page.module.css";

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

export const metadata: Metadata = {
  title: "HomeDev Challenge",
  description: "Challenge App for BootCamp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className="flex flex-row w-full bg-slate-200 h-52 items-center justify-center gap-x-8">
          <Link className={styles.linkFooter} href={"/"}>
            Home
          </Link>
          <Link className={styles.linkFooter} href={"/testing"}>
            Test
          </Link>
          <Link className={styles.linkFooter} href={"/about"}>
            About
          </Link>
        </footer>
      </body>
    </html>
  );
}
