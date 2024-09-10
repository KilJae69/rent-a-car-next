import React from "react";
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { locales } from "@/config/navigation";
import { Providers } from "@/providers";


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["200", "400", "500", "600", "700"],
    variable: "--font-poppins",
  });

  export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
  }
export default function Layout({
    children,
    params: { locale },
  }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
  }>) {
    unstable_setRequestLocale(locale);
    return (
      <html lang={locale}>
        <body className={`${poppins.variable}`}>
         
        <Providers>
        
          <main>{children}</main>
          
        </Providers>
            
        </body>
      </html>
    );
  }