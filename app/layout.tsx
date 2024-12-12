import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat PDF",
  description: "Chat to PDF Easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`antialiased min-h-screen h-screen overflow-hidden flex flex-col`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
