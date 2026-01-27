'use client'

import Head from 'next/head';
import styles from './page.module.css';
import { useEffect } from 'react';

export default function BudgetSucessfull() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href =
                'https://wa.me/5511978915000?text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os.'
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={styles.container}>

            <main className={styles.main}>
                <h1 className={styles.title}> Obrigado pela visita! Nos falaremos em breve! ✨✨🚘✨✨ </h1>

            </main>
        </div>
    );
}
