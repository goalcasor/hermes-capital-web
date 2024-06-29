import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hermes Capital -- The Good Trade",
  description: "Somos la firma líder brindado herramientas digitales que ayudan a nuestros clientes y/o estudiantes a gestionar sus portafolios de inversiones.",
  icons : ["/images/logo.png"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
