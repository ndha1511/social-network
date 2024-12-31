import CssBaseline from "@mui/material/CssBaseline";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Provider from "./provider";

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
      </head>
      <body className={`${openSans.className}`}>
        <CssBaseline />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
