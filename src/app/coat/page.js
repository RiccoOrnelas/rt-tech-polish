import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

export default function Vitrificacao() {
    return (
        <div className={styles.container}>
            {/* Banner Principal */}
            <div className={styles.banner}>
                <div className={styles.overlay}>
                    <h1 className={styles.title}>Você Sabe o que é Vitrificação?</h1>
                    <p className={styles.description}>
                        A Vitrificação é uma Proteção de Pintura, mas diferente de uma proteção comum, como a
                        tradicional Cera de Cristalização por exemplo, a Vitrificação forma sobre a pintura do
                        veículo uma camada rígida de proteção, como uma Película de Vidro, servindo como uma
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
                        <div className={styles.benefitImage} style={{ backgroundImage: 'url("/images/brilho.jpg")' }}></div>
                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Muito + Brilho</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>- Sujeira</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>+ Proteção</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Protege o Verniz do Carro contra riscos e atritos</h3>
                        </div>
                    </div>

                    <div className={styles.benefitCard}>

                        <div className={styles.benefitOverlay}>
                            <h3 className={styles.benefitText}>Durabilidade de 3 à 5 Anos</h3>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className={styles.container}>
                    <h1 className={styles.titulo}>Sobre o Procedimento</h1>

                    <div className={styles.content}>
                        <div className={styles.infoSection}>
                            <h2 className={styles.subtitulo}>Sobre o Serviço</h2>
                            <p className={styles.texto}>
                                Será realizado um polimento técnico para a
                                remoção de todos os riscos e contaminações
                                na pintura do veículo, e só após a pintura
                                zerada será aplicado o coating.
                            </p>

                            <h2 className={styles.subtitulo}>Tempo</h2>
                            <p className={styles.texto}>
                                Em carros pequenos e médios o serviço é
                                realizado em um dia, podendo ir de 6 a 10
                                horas de trabalho a depender do estado da
                                pintura. Após o término do serviço será
                                necessário que o carro fique 24horas sem
                                tomar chuva para a cura total do
                                vitrificador.
                            </p>

                            <h2 className={styles.subtituloInvestimento}>Custo do Investimento</h2>
                            <div className={styles.precoBox}>
                                <div className={styles.precoContainer}>
                                    <span className={styles.preco}>R$ 799,99</span>
                                    <span className={styles.apartir}>à partir</span>
                                </div>

                                <div className={styles.formasPagamento}>
                                    <Image
                                        src="/assets/formaspagamento.png"
                                        alt="Formas de Pagamento"
                                        width={280}
                                        height={40}
                                    />
                                </div>
                            </div>

                            <p className={styles.textoInvestimento}>
                                O valor a ser investido no serviço varia de
                                acordo com o tamanho do veículo e com o
                                nível de dureza do Vitrificador.
                            </p>

                            <button className={styles.botaoOrcamento}>
                                Solicitar um Orçamento para Vitrificação
                            </button>
                        </div>

                        <div className={styles.imagemSection}>
                            <Image
                                src="/assets/farol.jpg"
                                alt="Detalhe do Farol do Carro"
                                fill
                                className={styles.imagem}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>




            </section>
        </div>
    );
};
