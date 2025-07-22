'use client'
import Link from 'next/link'
import styles from './page.module.css'

export default function Footer() {
    return (
        <footer className={styles.containerFooter}>
            <p className={styles.datasCompany}>
                Copyright ©2016 - 2025 RT Polimento Técnico® - Todos os direitos reservados <br />
                Razão Social: Henrique Teixeira Ornelas - CNPJ: 26.423.409/0001-04 - <Link href="/privacity" className={styles.priv}>Privacidade</Link>
            </p>
        </footer>
    )
}
