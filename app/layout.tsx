import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/providers/language-provider";
import { DefaultLayout } from "@/layouts/default";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import React from "react";

export const metadata: Metadata = {
  title: "Open Resume preview",
  description: "Created by Juan Mora",
  generator: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <LanguageProvider>
          <DefaultLayout>{children}</DefaultLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
