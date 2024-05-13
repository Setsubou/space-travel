import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderNavigation/Header/Header";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Get to know more about Space Tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
      </body>
    </html>
  );
}
