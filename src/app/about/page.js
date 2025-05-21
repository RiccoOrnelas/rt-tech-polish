import styles from './page.module.css';
import { Lexend } from 'next/font/google';
const lexend = Lexend({ subsets: ["latin"], weight: '300' })
export default function AboutPage() {
    return (
        <main className={styles.aboutContainer}>
            <h1 className={`${styles.mainTitle}`}>Sobre a RT Polimento Técnico</h1>

            <section className={`${styles.aboutText} ${lexend.className}`}>
                <p>
                    A <strong>RT Polimento Técnico</strong> nasceu da paixão por transformar carros comuns em verdadeiras joias sobre rodas.
                    Com atendimento 100% domiciliar, levamos tecnologia, experiência e excelência até você, onde estiver.
                </p>

                <p>
                    Nosso foco é o <strong>polimento técnico</strong>, onde cada detalhe importa. Utilizamos equipamentos de ponta, compostos de alta performance e técnicas profissionais para garantir o melhor acabamento possível — sem mascarar imperfeições.
                </p>

                <p>
                    Diferente do polimento tradicional, aqui cada etapa é pensada para preservar o verniz e devolver o brilho original com máxima segurança.
                    Atuamos com honestidade, cuidado e respeito pelo seu veículo.
                </p>

                <p>
                    Seja para um carro do dia a dia ou um clássico de coleção, cuidamos de cada máquina como se fosse nossa.
                </p>


            </section>

            <h2 className={styles.sectionTitle}>MISSÃO, VISÃO E VALORES</h2>

            <section className={`${styles.sectionBlock} ${lexend.className}`}>
                <p>
                    Nossa missão é surpreender nossos clientes com cada serviço e com cada detalhe, tudo isso no conforto de sua residência,
                </p>
                <strong>Missão</strong>
            </section>

            <section className={`${styles.sectionBlock} ${lexend.className}`}>
                <p>
                    Nossa visão não é ser melhor que os outros profissionais do mercado, mas dar o nosso melhor em cada oportunidade que tivermos
                    e aprimorar cada vez mais nossos resultados, para que Deus seja glorificado através da satisfação de nossos clientes com nossos serviços,
                    pois toda capacitação vem Dele.
                </p>
                <strong>Visão</strong>
            </section>

            <section className={`${styles.sectionBlock} ${lexend.className}`}>
                <p>
                    Nossos valores são, Respeito, Ética, Honestidade e Transparência com cada cliente. Sabemos o quão disputado é nosso mercado
                    e quantas opções o cliente tem para escolher, sendo assim cada cliente para nós é uma dádiva e cada atendimento um grande privilégio.
                </p>
                <strong>Valores</strong>
            </section>
        </main>
    );
}
