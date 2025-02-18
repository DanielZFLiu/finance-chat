import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibmMono = IBM_Plex_Mono({
  variable: "--ibm-mono-plex",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Finance Chat",
  description: "LLM chat informed by fmp endpoints and the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
