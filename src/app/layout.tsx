import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "100% Free English Level Test (A1-C2)",
  description:
    "Assess your English proficiency level (A1-C2) for free — no sign-up, payment, or email required. You're a few clicks away from starting the test.",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/logo.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-[#0a0a0a] text-white">
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}