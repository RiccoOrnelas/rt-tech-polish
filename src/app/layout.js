import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";

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

      </body>

    </html>


  )
}
