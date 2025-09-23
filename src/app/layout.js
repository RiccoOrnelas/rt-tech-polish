import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import WhatsAppButton from "./components/whasBtn/page"
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";
import Script from "next/script";
export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR">



      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', "GTM-PSZ8X95N");
  `,
        }}
      />
      <body className="container">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSZ8X95N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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

      </body>
    </html>

  )
}

