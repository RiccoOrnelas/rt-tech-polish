`use client`
import Link from 'next/link';
import styles from './page.module.css';
import PoliticaPrivacidade from '@/app/privacity/page';
export default function Footer() {
    return (
        <footer className={styles.footer}>


            <p>
                Copyright ©2016 - 2025 RT Polimento Técnico® - Todos os direitos reservados <br />
                Razão Social: Henrique Teixeira Ornelas - CNPJ: 26.423.409/0001-04 - <Link href={"../../privacity"} >Privacidade</Link>
            </p>

        </footer>
    )
}

