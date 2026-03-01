import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Napoli Lovers Trip · Maggio 2026",
  description: "Sito vetrina narrativo del viaggio a Napoli: timeline, mood map, food e panorami.",
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
