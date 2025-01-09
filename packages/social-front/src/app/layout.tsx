import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Providers from "./Providers";

import GlobalStyles from "./GlobalStyles";
import AppLayout from "@/components/Layout/AppLayout";

const openSans = localFont({
  src: "../assets/fonts/OpenSans.ttf",
});

export const metadata: Metadata = {
  title: "Social Network",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
        />
      </head>
      <body className={`${openSans.className}`}>
        <CssBaseline />
        <GlobalStyles />
        <Providers>
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
