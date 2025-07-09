'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './page.module.css';
import {
    FaWhatsapp,
    FaInstagram,
    FaFacebook,
    FaHome,
    FaStar,
    FaShieldAlt,
    FaComments,
    FaUsers
} from 'react-icons/fa';

export default function Header() {
    const pathname = usePathname();
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

    // Função para verificar se a rota está ativa
    const isActiveRoute = (route) => {
        return pathname === route;
    };

    return (
        <>  <div className={styles.navcont}>
            <header className={styles.header}>
                <div className={styles.topItens}>
                    <div className={styles.socialLinks}>
                        <Link href={linkWhatsApp} alt='WhatsIcon'><FaWhatsapp size={20}></FaWhatsapp></Link>
                        <Link href={urlFace} alt='Facebook-Icon'><FaFacebook size={20}></FaFacebook></Link>
                        <Link href={urlInsta} alt='Instagram Icon'><FaInstagram size={20}></FaInstagram></Link>
                    </div>

                    {/* Menu Hamburger - apenas desktop */}
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
            </header>

            {/* Overlay */}
            {isMenuOpen && (
                <div className={styles.overlay} onClick={closeMenu} />
            )}

            {/* Menu Mobile Desktop */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                <button className={styles.closeButton} onClick={closeMenu}>
                    &times;
                </button>
                <ul className={styles.mobileLinks}>
                    <li><Link href="/" onClick={closeMenu}>Início</Link></li>
                    <li className={styles.divisor}>|</li>
                    <li><Link href="/polimento-tecnico" onClick={closeMenu}>Polimento Técnico</Link></li>
                    <li className={styles.divisor}>|</li>
                    <li><Link href="/coat" onClick={closeMenu}>Vitrificação</Link></li>
                    <li className={styles.divisor}>|</li>
                    <li><Link href="/contats" onClick={closeMenu}>Fale Conosco</Link></li>
                    <li className={styles.divisor}>|</li>
                    <li><Link href="/about" onClick={closeMenu}>Sobre nós</Link></li>
                </ul>
            </div>

            {/* Bottom Navigation Mobile */}
            <nav className={styles.bottomNav}>
                <Link
                    href="/"
                    className={`${styles.bottomNavItem} ${isActiveRoute('/') ? styles.active : ''}`}
                >
                    <FaHome size={20} />
                    <span>Início</span>
                </Link>

                <Link
                    href="/polimento-tecnico"
                    className={`${styles.bottomNavItem} ${isActiveRoute('/polimento-tecnico') ? styles.active : ''}`}
                >
                    <FaStar size={20} />
                    <span>Polimento</span>
                </Link>

                <Link
                    href="/coat"
                    className={`${styles.bottomNavItem} ${isActiveRoute('/coat') ? styles.active : ''}`}
                >
                    <FaShieldAlt size={20} />
                    <span>Vitrificação</span>
                </Link>

                <Link
                    href="/contats"
                    className={`${styles.bottomNavItem} ${isActiveRoute('/contats') ? styles.active : ''}`}
                >
                    <FaComments size={20} />
                    <span>Contato</span>
                </Link>

                <Link
                    href="/about"
                    className={`${styles.bottomNavItem} ${isActiveRoute('/about') ? styles.active : ''}`}
                >
                    <FaUsers size={20} />
                    <span>Sobre</span>
                </Link>
            </nav>
        </div>
        </>
    );
}