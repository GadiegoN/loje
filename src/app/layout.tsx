import "./globals.css";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Lojê - Seu comércio online",
  description: "Landing pages simples e bonitas para negócios locais",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} bg-background text-foreground antialiased`}
      >
        <div className="min-h-screen container mx-auto px-4 py-10 flex flex-col justify-between">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
