import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Admin Dashboard",
  description: "A simple Admin Dashboard interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
