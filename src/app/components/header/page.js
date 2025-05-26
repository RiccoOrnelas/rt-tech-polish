'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';


export default function Header() {

    const urlInsta = 'https://www.instagram.com/rtpolimentotecnico/'
    const urlFace = 'https://www.facebook.com/Rtpolimentotecnico/'
    const numeroWhatsApp = '+5511947575844';
    const mensagemInicial = encodeURIComponent('Olá! Gostaria de solicitar um orçamento.');
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemInicial}`;

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Fechar menu ao redimensionar para desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.topItens}>
                    <div className={styles.socialLinks}>
                        <Link href={linkWhatsApp} alt='WhatsIcon'><FaWhatsapp size={20}></FaWhatsapp></Link>
                        <Link href={urlFace} alt='Facebook-Icon'><FaFacebook size={20}></FaFacebook></Link>
                        <Link href={urlInsta} alt='Instagram Icon'><FaInstagram size={20}></FaInstagram></Link>

                    </div>

                    {/* Menu Hamburger */}
                    <div className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
                        onClick={toggleMenu}>

                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>
                        <div className={styles.bar}></div>

                    </div>
                </div>



                <div className={styles.topBar}>
                    <img src="/assets/logo.png" alt="RT Polimento Técnico" className={styles.logo} />
                    <h1 className={styles.slogan}>
                        SEU CARRO FOI FEITO PARA BRILHAR E POR AQUI, BRILHO É COISA SÉRIA!
                    </h1>
                    <img src="/assets/car.png" alt="Carro" className={styles.car} />
                </div>

                <nav className={styles.nav}>
                    {/* Links Desktop */}
                    <ul className={styles.links}>
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/polimento-tecnico">Polimento Técnico</Link></li>
                        <li><Link href="/coat">Vitrificação</Link></li>
                        <li><Link href="/contats">Fale Conosco</Link></li>
                        <li><Link href="/about">Sobre nós</Link></li>
                    </ul>


                </nav>
            </header >

            {/* Overlay */}
            {
                isMenuOpen && (
                    <div className={styles.overlay} onClick={closeMenu} />
                )
            }

            {/* Menu Mobile */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                <button className={styles.closeButton} onClick={closeMenu}>
                    &times;
                </button>
                <ul className={styles.mobileLinks}>
                    <li><Link href="/" onClick={closeMenu}>Início</Link></li>
                    <li><Link href="/polimento-tecnico" onClick={closeMenu}>Polimento Técnico</Link></li>
                    <li><Link href="/coat" onClick={closeMenu}>Vitrificação</Link></li>
                    <li><Link href="/contats" onClick={closeMenu}>Fale Conosco</Link></li>
                    <li><Link href="/about" onClick={closeMenu}>Sobre nós</Link></li>
                </ul>
            </div>
        </>
    );
}