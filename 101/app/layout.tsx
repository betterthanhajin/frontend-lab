"use client";
// import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./101/store";
// export const metadata: Metadata = {
//   title: "frontend-lab-101",
//   description: "101호실에 오신걸 환영합니다!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>{children}</body>
      </Provider>
    </html>
  );
}
