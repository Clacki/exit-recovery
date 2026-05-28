import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "EXIT",
  description: "EXIT project",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <Providers>
          <Header />
          <main className="app-main">{children}</main>
          <Footer />
        </Providers>
        <div id="modal-root" />
      </body>
    </html>
  );
}
