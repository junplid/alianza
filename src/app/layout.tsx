import { ComponentFooter } from "./components/Footer";
import { ComponentHeader } from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "200", "500", "600", "800"],
});

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
      <body className='min400:min-w-full' style={{ minWidth: 400 }}>
        <div className={`${inter.className} font-medium`}>
          <ComponentHeader />
          {children}
          <ComponentFooter />
        </div>
      </body>
    </html>
  );
}
