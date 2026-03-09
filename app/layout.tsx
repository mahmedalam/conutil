import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ConUtil",
  description:
    "An open-source browser-based tool to compress, convert, and resize images in bulk, all processed locally for maximum privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
