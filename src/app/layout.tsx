import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Users Products Manager",
  description: "Manage users and products with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        className={` antialiased`}
      >
        {children}
        
      </body>

    </html>
  );
}
