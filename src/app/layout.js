import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IntlProvider } from "./IntlProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bloohawk store",
  description: "Official Bloohawk store",
};

export async function generateStaticParams() {
  // Define los idiomas que deseas soportar
  return ["en", "es", "fr"].map((locale) => ({ locale }));
}

export default function RootLayout({ children, params }) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
