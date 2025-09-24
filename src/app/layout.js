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

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <GoogleTagManager gtmId="GTM-PSZ8X95N" />

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
      </body>
    </html>
  )
}
