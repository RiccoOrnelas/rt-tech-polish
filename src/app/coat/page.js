import React from 'react';
import styles from './page.module.css';
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
    return (
        <div className={styles.container}>
            {/* Banner Principal */}
            <div className={styles.banner}>
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
            </div>

            {/* Seção de Benefícios */}
            <div className={styles.benefitsSection}>
                <h2 className={styles.benefitsTitle}>Beneficios</h2>
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
            </div>
            <section>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Sobre o Procedimento</h1>

                    <div className={styles.content}>


                        <div className={styles.infoSection}>
                            <h2 className={`${styles.subtitulo} ${montserrat.className}`}>Sobre o Serviço</h2>
                            <p className={`${styles.texto} ${poppins.className}`}>
                                É realizada uma descontaminação e um polimento técnico para corrigir as imperfeições do verniz
                                na pintura do veículo preparando-o, e então é aplicado o coating, para proteger e potencializar o brilho do veículo.
                            </p>

                            <h2 className={`${styles.subtitulo} ${montserrat.className}`}>Tempo</h2>
                            <p className={`${styles.texto} ${poppins.className}`}>
                                Em carros pequenos e médios o serviço é
                                realizado de um dia á um dia e meio, podendo ir de 8 à 14
                                horas de trabalho a depender do estado da
                                pintura. Após o término do serviço há um tempo de cura do vitrificador, a depender do vitrificador escolhido.
                            </p>

                            <h2 className={`${styles.offer} ${bebas.className}`}>Valor do Investimento</h2>
                            <div className={styles.priceBox}>
                                <h2 className={`${styles.price} ${poppins.className}`}>
                                    R$ <span>799,99 <span>á partir</span></span>
                                </h2>


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
                        </div>

                    </div>
                </div>




            </section>
        </div>
    );
};
