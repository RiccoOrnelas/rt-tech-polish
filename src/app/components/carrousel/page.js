'use client';
import { useRef, useState, useEffect } from 'react';
import styles from './page.module.css';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
})
export default function ServicesCarousel() {

    const slides = [
        {
            title: 'Polimento Técnico',
            text: 'Ao realizar um Polimento Técnico no veículo, são removidas marcas de lavagens e riscos do dia a dia, além de contaminações! O que deixa o veículo com aspecto espelhado, toque acetinado e com cara de carro novo! E ainda recebe uma proteção de pintura que dura até um ano!',
            img: '/assets/polimento.jpg',
        },
        {
            title: 'Vitrificação',
            text: 'A Vitrificação cria uma película ultra-resistente que protege a pintura do veículo contra arranhões leves, como em uma pelicula de vidro do celular, além de ter grande resistência química! A durabilidade da proteção pode chegar até 5 anos! ',
            img: '/assets/vitrificacao.jpg',
        },
        {
            title: 'Higienização',
            text: 'A higienização completa do interior remove machas e sujeiras profundas, deixando o ambiente interno do carro mais novo e agradável. Além de eliminar bactérias, o que o torna também mais sadável!',
            img: '/assets/higienizacao.jpeg'
        },
        {
            title: 'Cristalização de Vidros',
            text: ' O Tratamento nos vidros remove toda contaminação, o que reduz o acúmulo de água e após é aplicado um cristalizador que faz o vidro repelir a água, aumentando a visibilidade em dias de chuva e neblina.',
            img: '/assets/acidrain.jpg',
        },
        {
            title: 'Restauração de Faróis',
            text: 'Remoção de amarelamento e micro-riscos nos faróis, devolvendo transparência para um carro mair bonito, mas também segurança ao iluminar melhor à noite.',
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
