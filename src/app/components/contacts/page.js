"use client";
import { useRouter } from 'next/router';
import styles from './page.module.css';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';


export default function Contacts() {
    const urlInsta = 'https://www.instagram.com/rtpolimentotecnico/'
    const urlFace = 'https://www.facebook.com/Rtpolimentotecnico/'
    const numeroWhatsApp = '+5511947575844'; // Substitua pelo seu número, incluindo o código do país
    const mensagemInicial = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemInicial}`;



    return (
        <div className={styles.cont}>
            <h2 className={styles.title}>Contatos</h2>
            <div className={styles.contatContainer}>
                <div className={styles.contat}>
                    <div className={styles.allcontats}>

                        <div className={styles.Phone}>
                            <h3>Telefone</h3>
                            <p>(11) 9 7891-5000 <FaWhatsapp size={22} /></p>
                        </div>

                        <div className={styles.socialmedia}>

                            <Link href={urlInsta} className={styles.iconeWrapper}>
                                <FaInstagram size={32} />
                            </Link>
                            <Link href={urlFace} className={styles.iconeWrapper}>
                                <FaFacebook size={32} />
                            </Link>
                        </div>

                        <Link href={linkWhatsApp} target="_blank" className={styles.botaoOrcamento}>
                            <FaWhatsapp className={styles.iconeWhatsapp} />
                            Solicitar Orçamento
                        </Link>
                        <h4 className={styles.subTitle}>Atendemos todo ABC e grande SP!</h4>

                    </div>

                </div>


            </div>

        </div>
    )



}