
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

export async function Providers({ children }: { children: React.ReactNode }) {
  const messages = await getMessages();
  return (
    
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
   
  );
}
