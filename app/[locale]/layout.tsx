import React from "react";
// eslint-disable-next-line camelcase
import { unstable_setRequestLocale } from "next-intl/server";
import { Poppins } from "next/font/google";
import { locales } from "@/config/navigation";
import { Providers } from "@/providers";
// import MainHeader from "@/components/layout/main-header";
import StaticHeader from "@/components/layout/static-header";
import dynamic from "next/dynamic";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const DynamicHeader = dynamic(() => import("@/components/layout/main-header"), {
  ssr: false,
  loading: () => <StaticHeader />,
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
          <DynamicHeader />

          <main className="h-[3000px]">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
