import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./api/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dicionario",
  description: "Dicionario online, busque o significado das palavras",
  icons: {
    icon: "/favicon.ico?v=4",
    apple: "/apple-touch-icon.png?v=4",
    shortcut: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
