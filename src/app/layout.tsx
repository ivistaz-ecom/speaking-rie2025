import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Script from 'next/script'



// const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>RIE 2025: Ignite Change, Spark Innovation, and Inspire Entrepreneurs

</title>
        <meta
          name="description"
          content="Join the brightest minds at RIE 2025, the premier event for innovators and entrepreneurs. Share your insights and shape the future with over 1,000 attendees, driving change and creating a legacy of resilience and innovation. Be a part of this extraordinary gathering."
        />
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body >
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></Script>
        
        </body>
    </html>
  );
}
