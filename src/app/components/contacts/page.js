"use client";
import styles from './page.module.css';
import { FaPhone, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contacts() {
    return (
        <div>
            <h2 className={styles.title}>Contato e Redes Social</h2>
            <div className={styles.contatContainer}>
                <div className={styles.contat}>
                    <h3>Telefone</h3>
                    <p>(11) 9 7891-5000 <FaWhatsapp size={22} /></p>
                </div>
                <div className={styles.socialmidia}>

                    <span className={styles.iconeWrapper}>
                        <FaInstagram size={32} />
                    </span>
                    <span className={styles.iconeWrapper}>
                        <FaFacebook size={32} />
                    </span>



                </div>
            </div>
        </div>
    )



}