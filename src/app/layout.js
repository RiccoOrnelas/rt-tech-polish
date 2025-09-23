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
      <GoogleTagManager gtmId="GTM-PSZ8X95N" />
      <body className="container">
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PSZ8X95N"
            height="0" width="0" style="display:none;visibility:hidden">
          </iframe></noscript>
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

