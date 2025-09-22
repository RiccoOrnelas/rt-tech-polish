import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import WhatsAppButton from "./components/whasBtn/page"
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";
export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR">
      <Head>
        {/* Google Ads (gtag.js) */}
        {/* Google Ads Global Site Tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=AW-984971525`}></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-984971525');
          `
        }} />
      </Head>
      <body className="container">
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

      </body>

    </html>
  )
}

