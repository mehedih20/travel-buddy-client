import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Providers from "@/lib/Providers/Providers";
import BackButton from "@/components/shared/BackButton/BackButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Buddy | Find your ultimate travel companion",
  description: "Travel Smart, Travel Together: Meet Your New Best Friend!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body className="font-montserrat text-gray-800">
          {children}
          <Toaster position="top-center" />
          <BackButton />
        </body>
      </html>
    </Providers>
  );
}
