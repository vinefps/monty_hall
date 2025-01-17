import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyProvider } from "./contexts/doorProvider";
import { MyProviderGift } from "./contexts/giftProvider"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MyProvider>
      <MyProviderGift>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </MyProviderGift>
    </MyProvider>
  );
}
