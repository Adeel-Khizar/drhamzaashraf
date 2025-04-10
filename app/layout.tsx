import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dr Hamza Ashraf Zia",
  description: "<strong>SHADI COURSE.</strong> Dr Hamza specializes in treating unmarried males and females who are about to get married. Contact now and discuss your personal matters so you don't have problems after your marriage.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning>
        
        <link rel="icon" href="/favicon.png" sizes="any" />
        {children}
      </body>
    </html>
  );
}
