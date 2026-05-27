import type { Metadata } from "next";

import AppLayout from "@/components/layout/AppLayout";

import "./globals.css";
import { Providers } from "./provider";

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
          <AppLayout>{children}</AppLayout>
        </Providers>
      </body>
    </html>
  );
}
