'use client'
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <img src="/assets/logo.png" alt="RT Polimento Técnico" className={styles.logo} />
                <h1 className={styles.slogan}>
                    SEU CARRO FOI FEITO PARA BRILHAR E POR AQUI BRILHO É COISA SÉRIA!
                </h1>
                <img src="/assets/car.png" alt="Carro" className={styles.car} />
            </div>

            <nav className={styles.nav}>
                <ul className={styles.links}>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#polimento">Polimento Técnico</a></li>
                    <li><a href="#vitrificacao">Vitrificação</a></li>
                    <li><a href="#contato">Contato</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}
