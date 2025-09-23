import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import WhatsAppButton from "./components/whasBtn/page"
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`container ${geist.variable} ${geistMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSZ8X95N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <header>
          <Header />
        </header>

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <Footer />
        </footer>

        <WhatsAppButton
          phoneNumber="5511978915000"
          message="Olá! Gostaria de mais informações sobre seus serviços."
        />

        <GoogleTagManager gtmId="GTM-PSZ8X95N" />

        {/* Google Ads (gtag.js) - Método otimizado */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-984971525"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-984971525');
          `}
        </Script>
      </body>
    </html>
  )
}
