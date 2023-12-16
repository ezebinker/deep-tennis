import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Deep Tennis",
    default: "Deep Tennis",
  },
  description: "Deep Tennis is a platform that allows tennis players to analyze the movements of their favorite players.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="flex min-w-screen mx-3">
        {children}
        </main>
      </body>
    </html>
  );
}
