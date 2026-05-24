"use client";
import { useRouter } from 'next/router';
import styles from './page.module.css';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import BudgetSucessfull from '@/app/budgetSucessfull/page';


export default function Contacts() {
    const urlInsta = 'https://www.instagram.com/rtpolimentotecnico/'
    const urlFace = 'https://www.facebook.com/Rtpolimentotecnico/'
    const numeroWhatsApp = '+5511947575844'; // Substitua pelo seu número, incluindo o código do país
    const mensagemInicial = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemInicial}`;



    return (
        <div className={styles.cont}>

            <div className={styles.contatContainer}>
                <div className={styles.contat}>
                    <div className={styles.allcontats}>

                        <div className={styles.Phone}>

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




                    </div>
                    <Link href={"/budgetSucessfull"} target="_blank" className={styles.botaoOrcamento}>
                        <FaWhatsapp className={styles.iconeWhatsapp} />
                        Tirar Dúvidas?
                    </Link>
                    <h4 className={styles.subTitle}>Atendemos todo ABC e grande SP!</h4>

                </div>


            </div>

        </div>
    )



}