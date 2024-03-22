import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";

const elec = Electrolize({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ALGO APP",
  description: "Algorithms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={elec.className}>{children}</body>
    </html>
  );
}
