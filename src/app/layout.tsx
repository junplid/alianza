import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alianza - Rian Junplid",
  description:
    "Este é um projeto baseado no design feito por Maryarver Bandera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
