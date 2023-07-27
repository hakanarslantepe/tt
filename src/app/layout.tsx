import "./globals.css";
import type { Metadata } from "next";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tosun Tasimacilik",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
