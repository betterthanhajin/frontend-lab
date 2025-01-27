import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "frontend-lab-101",
  description: "101호실에 오신걸 환영합니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
