import "./globals.css";
import "@mantine/notifications/styles.css";
import AppProvider from "@/providers/AppProvider";
import { Notifications } from "@mantine/notifications";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bloom",
  description:
    "A marketplace connecting independent beauty professionals with clients for on-demand bookings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider defaultColorScheme="dark">
          <Notifications position="top-right" />
          <AppProvider>{children}</AppProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
