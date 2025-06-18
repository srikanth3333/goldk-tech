import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "GOLD TECH",
  description: "GOLD TECH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
