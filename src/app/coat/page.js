import React from 'react';
import styles from './page.module.css';
import Gallery from "../components/galery/page";
import Image from 'next/image';
import { Poppins, Montserrat, Inter, Bebas_Neue } from 'next/font/google';

const poppins = Poppins({
    weight: "400",
    subsets: ["latin"]
})

const montserrat = Montserrat({
    weight: "400",
    subsets: ["latin"]
})
const inter = Inter({
    weight: "400",
    subsets: ["latin"]
})
const bebas = Bebas_Neue({
    weight: "400",
    subsets: ["latin"]
})
export default function Vitrificacao() {

    const gallerycoateds = [
        {
            url: "/assets/vtaudi.jpg",
            alt: "Audi A3 Vitrificada",
        },
        {
            url: "/assets/vtaudi4.jpg",
            alt: "Audi A3 Vitrificada",
        }, {
            url: "/assets/vtaudi3.jpg",
            alt: "Audi A3 Vitrificada",
        },
        {
            url: "/assets/vtaudi5.jpg",
            alt: "Audi A3 Vitrificada",
        },
        {
            url: "/assets/vtaudi2.jpg",
            alt: "Audi A3 Vitrificada",
        },
        {
            url: "/assets/vtmeca1.jpg",
            alt: "Mercedes GLC250 Vitrificada",
        },
        {
            url: "/assets/vrmeca2.jpg",
            alt: "Mercedes GLC250 Vitrificada",
        }, {
            url: "/assets/vtmeca4.jpg",
            alt: "Mercedes GLC250 Vitrificada",
        }, {
            url: "/assets/vtmeca3.jpg",
            alt: "Mercedes GLC250 Vitrificada",
        }, {
            url: "/assets/vts10.jpg",
            alt: "S10 Preta Vitrificada",
        }, {
            url: "/assets/vts102.jpg",
            alt: "S10 Preta Vitrificada",
        }, {
            url: "/assets/vts103.jpg",
            alt: "S10 Preta Vitrificada",
        },
        {
            url: "/assets/vtms1.jpg",
            alt: "IMitsubshi Eclipse Vitrificado",
        }, {
            url: "/assets/vtms2.jpg",
            alt: "IMitsubshi Eclipse Vitrificado",
        }, {
            url: "/assets/vtms4.jpg",
            alt: "IMitsubshi Eclipse Vitrificado",
        }, {
            url: "/assets/vtms3.jpg",
            alt: "IMitsubshi Eclipse Vitrificado",
        },
        {
            url: "/assets/vtfusion.jpg",
            alt: "Fusion Escuro Vitrificado",
        }, {
            url: "/assets/vtfusion1.jpg",
            alt: "Fusion Escuro Vitrificado",
        }, {
            url: "/assets/vtfusion2.jpg",
            alt: "Fusion Escuro Vitrificado",
        }, {
            url: "/assets/vtfusion3.jpg",
            alt: "Fusion Escuro Vitrificado",
        },
        {
            url: "/assets/vtcompass.jpg",
            alt: "Compass branco Vitrificado",
        },
        {
            url: "/assets/vtcompass1.jpg",
            alt: "Compass branco Vitrificado",
        },
        {
            url: "/assets/vtcompass2.jpg",
            alt: "Compass branco Vitrificado",
        },

    ]
    return (
        <div className={styles.container}>
            {/* Banner Principal */}
            <section className={styles.banner}>
                <div className={styles.overlay}>
                    <h1 className={montserrat.className}>Você Sabe o que é Vitrificação?</h1>
                    <p className={inter.className}>
                        A Vitrificação é uma Proteção de Pintura, mas diferente de uma proteção comum, como a
                        tradicional Cera de Cristalização por exemplo, a Vitrificação forma sobre a pintura do
                        veículo uma camada rígida de proteção, como uma &quot;Película de Vidro&quot;, servindo como uma
                        camada de Sacrifício, impedindo contato de atritos e fatores externos diretamente com a
                        pintura do carro!
                    </p>
                </div>
            </section>

            {/* Seção de Benefícios */}
            <section className={styles.benefitsSection}>
                <h2 className={`${styles.title} ${styles.benefitsTitle} ${bebas.className}`}>Beneficios</h2>
                <div className={styles.benefitsGrid}>

                    <div className={styles.benefitCard}>
                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Muito + Brilho</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Repele Água e Sujeira</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Facilita Limpeza</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Resistência a Riscos</h3>
                        </div>
                    </div>


                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Proteção UV
                            </h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}> 3 à 5 anos de Proteção</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.gallery}>
                <h1 className={`${styles.title} ${bebas.className}`}> Confira Alguns Resultados</h1>
                <Gallery imagens={gallerycoateds}></Gallery>
            </section>
            <section className={styles.processContainer}>

                <h1 className={`${styles.title} ${bebas.className}`}>Procedimentos</h1>




                <div className={styles.infoSection}>
                    <h2 className={`${styles.subtitulo} ${bebas.className}`}>Sobre o Serviço</h2>
                    <p className={`${styles.texto} ${poppins.className}`}>
                        Com o carro ja limpo, é realizada uma descontaminação e um polimento técnico para corrigir as imperfeições do verniz
                        na pintura do veículo, e então mais um processo de descontaminação de gorduras, e assim aplicado o coating. Protegendo e potencializando o brilho do veículo.
                    </p>

                    <h2 className={`${styles.subtitulo} ${bebas.className}`}>Tempo</h2>
                    <p className={`${styles.texto} ${poppins.className}`}>
                        Em carros pequenos e médios o serviço é
                        realizado de um dia á um dia e meio, podendo ir de 8 à 14
                        horas de trabalho a depender do estado da
                        pintura. Após o término do serviço há um tempo de cura do vitrificador, a depender do vitrificador escolhido.
                    </p>


                    <h2 className={`${styles.offer} ${bebas.className} ${styles.subtitulo}`}>Vitrificadores</h2>
                    <div className={styles.coatings}>
                        <Image
                            src="/assets/maxpro.jpg"
                            alt="Formas de Pagamento"
                            width={100}
                            height={25}
                        />

                        <Image
                            src="/assets/Nasiol.png"
                            alt="Formas de Pagamento"
                            width={280}
                            height={25}
                        />

                        <Image
                            src="/assets/Vx45.png"
                            alt="Formas de Pagamento"
                            width={280}
                            height={25}
                        />

                        <Image
                            src="/assets/insignia.png"
                            alt="Formas de Pagamento"
                            width={280}
                            height={25}
                        />

                    </div>

                </div>
            </section>
            <section className={styles.pricesSection}>
                <h2 className={`${styles.title} ${bebas.className}`}>Investimento</h2>

                <div className={styles.priceBox}>
                    <h3 className={`${styles.price} ${poppins.className}`}>
                        R$ <span>799,99 <span>á partir</span></span>
                    </h3>


                    <Image
                        src="/assets/formaspagamento.png"
                        alt="Formas de Pagamento"
                        width={280}
                        height={25}
                    />

                </div>

                <p className={styles.textoInvestimento}>
                    * O valor do investimento varia conforme o tamanho do veículo e o vitrificador escolhido
                </p>

                <button className={styles.botaoOrcamento}>
                    Solicitar Orçamento de Vitrificação
                </button>
            </section>
        </div>
    );
};
