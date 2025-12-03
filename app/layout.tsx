import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andy Sorge | Portfolio",
  description: "Course portfolio for DTC 201",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="stylesheet" href="https://use.typekit.net/ukc3vqk.css"/>
    </head>
    <body
      className={`${JetBrainsMono.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
