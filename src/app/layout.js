import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import WhatsAppButton from "./components/whasBtn/page"

export default function RootLayout({ children }) {
  return (
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
          phoneNumber="5511987654321"
          message="Olá! Gostaria de mais informações sobre seus serviços."
        />


      </body>

    </html>


  )
}

