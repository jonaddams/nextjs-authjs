import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "@/src/app/components/session-context";
import Header from "@/src/app/components/header";
import Footer from "@/src/app/components/footer";
import { getSession } from "@/src/app/auth/get-session";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  // Add variable to our object
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Authentication Template",
  description: "React, NextJS, AuthJS, PostgreSQL, Drizzle, and Tailwind Template",
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
        <div className="flex flex-col min-h-screen mx-auto">
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
