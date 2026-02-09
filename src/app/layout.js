import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import WhatsAppButton from "./components/whasBtn/page"
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'RT Polimento Técnico Delivery | Serviço Profissional em Domicílio - São Paulo',
  description: 'Polimento técnico profissional com entrega em domicílio em São Paulo. Restauração de faróis, para-choques e superfícies automotivas. Agende online e receba em casa com qualidade garantida.',
}

import Head from "next/head";
export default function RootLayout({ children }) {

  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-82L99XM5LE"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-82L99XM5LE');
          `,
        }} />
      </head>


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