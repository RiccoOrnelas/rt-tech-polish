'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './page.module.css';

export default function ServicesCarousel() {
    const slides = [
        {
            title: 'Polimento Técnico',
            text: 'Ao realizar um Polimento Técnico na Pintura do Veículo, o carro fica livre de riscos e com aspecto de novo!',
            img: '/assets/polimento.jpg',
        },
        {
            title: 'Vitrificação',
            text: 'A Vitrificação cria uma película ultra-resistente que protege sua pintura contra arranhões leves e dá brilho intenso de longa duração.',
            img: '/assets/vitrificacao.jpg',
        },
        {
            title: 'Higienização',
            text: 'Higienização completa do interior: remoção de ácaros, odores e sujeiras profundas, deixando o ambiente interno do carro mais saudável.',
            img: '/assets/higienizacao.jpeg',
        },
        {
            title: 'Cristalização de Vidros',
            text: 'Tratamento nos vidros que reduz o acúmulo de água e aumenta a visibilidade em dias de chuva e neblina.',
            img: '/assets/acidrain.jpg',
        },
        {
            title: 'Restauração de Faróis',
            text: 'Remoção de amarelamento e micro-riscos nos faróis, devolvendo transparência e segurança ao iluminar à noite.',
            img: '/assets/restauracao-farois.jpg',
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const ref = useRef(null);

    const scrollTo = (i) => {
        const c = ref.current;
        if (!c) return;
        c.scrollTo({ left: i * c.clientWidth, behavior: 'smooth' });
        setActiveIndex(i);
    };

    const handleArrow = (dir) => {
        let i = dir === 'left' ? activeIndex - 1 : activeIndex + 1;
        if (i < 0) i = 0;
        if (i >= slides.length) i = slides.length - 1;
        scrollTo(i);
    };

    // atualiza posição ao redimensionar
    useEffect(() => {
        const onResize = () => scrollTo(activeIndex);
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [activeIndex]);

    return (
        <section className={styles.carouselSection}>
            <h2 className={styles.carouselTitle}>Nossos Serviços</h2>

            <div className={styles.carouselWrapper}>
                <button
                    onClick={() => handleArrow('left')}
                    className={styles.arrow}
                >←</button>

                <div className={styles.carousel} ref={ref}>
                    {slides.map((s, idx) => (
                        <div
                            key={idx}
                            className={`${styles.slide} ${idx === activeIndex ? styles.slideActive : ''}`}
                        >
                            <div className={styles.slideText}>
                                <h3>{s.title}</h3>
                                <p>{s.text}</p>
                            </div>
                            <img src={s.img} alt={s.title} className={styles.slideImg} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={() => handleArrow('right')}
                    className={styles.arrow}
                >→</button>
            </div>

            <div className={styles.dots}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={i === activeIndex ? styles.dotActive : styles.dot}
                    />
                ))}
            </div>
        </section>
    );
}
