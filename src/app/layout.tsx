import { SessionProvider } from "@/src/components/auth/session-context";
import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import { getSession } from "@/src/lib/auth/get-session";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  // Add variable to our object
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Authentication Template",
  description:
    "React, NextJS, AuthJS, PostgreSQL, Drizzle, and Tailwind Template",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = (await getSession()) || null;
  return (
    <html lang="en" className={`${openSans.variable}`}>
      <head>
        <script src="//unpkg.com/react-scan/dist/auto.global.js" async />
      </head>
      <body className="bg-white dark:bg-gray-900">
        <div className="mx-auto flex min-h-screen flex-col">
          <SessionProvider session={session}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
