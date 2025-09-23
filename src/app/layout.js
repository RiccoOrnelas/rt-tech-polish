import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import WhatsAppButton from "./components/whasBtn/page"
import { GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";
export default function RootLayout({ children }) {

  return (

    <>
      <Head>

      </Head>

      <html lang="pt-BR">
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
    </>
  )
}

