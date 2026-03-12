import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Naikwadi | Principal Engineer",
  description:
    "Principal Engineer specialising in distributed systems, cloud-native platforms, and high-scale fintech at Mastercard and HSBC."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}

