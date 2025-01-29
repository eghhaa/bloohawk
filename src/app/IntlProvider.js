import { NextIntlClientProvider } from "next-intl";

export async function IntlProvider({ children, locale }) {
  let messages;

  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    console.error(`No se encontraron traducciones para el idioma: ${locale}`);
    messages = {};
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
