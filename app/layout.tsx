import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import localFont from "next/font/local";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// Layout File: Defines the main structure and metadata for the portfolio
const jetbrains = localFont({
  src: "../app/fonts/Jetbrains.woff2",
  variable: "--font-jetbrains",
  weight: "100 800",
});
export const metadata: Metadata = {
  title: "Abdul Rehman | CS Student",
  description: "Portfolio of Abdul Rehman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${jetbrains.variable} antialiased text-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}
