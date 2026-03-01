import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Napoli Trip Showcase",
  description: "Sito vetrina del viaggio romantico a Napoli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
