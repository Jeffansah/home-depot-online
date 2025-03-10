import type { Metadata } from "next";
import { Catamaran } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/footer/footer";

const catamaran = Catamaran({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Depot Online",
  description: "Interior Design & Decor E-Commerce Store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${catamaran.className} text-dark-400 relative`}>
        <ClerkProvider>
          <Navbar />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
