import styles from "./page.module.css";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
})

export default function Depoiments() {

    return (
        <div className={styles.container}>
            <h2 className={`${styles.titulo} ${bebas.className}`}>O que dizem a nosso respeito:</h2>

            <div className={styles["depoimentos-container"]}>
                <div className={styles.depoimento}>
                    <div className={styles["depoimento-conteudo"]}>
                        <div className={styles["usuario-info"]}>
                            <div className={styles.avatar}>R</div>
                            <div className={styles["usuario-detalhes"]}>
                                <div className={styles["usuario-nome"]}>Caio ramos</div>
                                <div className={styles["usuario-tipo"]}>Cliente Verificado • 3 avaliações</div>
                            </div>
                        </div>
                        <div className={styles.estrelas}>★★★★★</div>
                        <div className={styles.data}>12 de março de 2023</div>
                        <p className={styles["texto-depoimento"]}>rabalho de excelência, carro volta a ser novo denovo,.</p>
                        <div className={styles.controles}>⋮</div>
                    </div>
                </div>

                <div className={styles.depoimento}>
                    <div className={styles["depoimento-conteudo"]}>
                        <div className={styles["usuario-info"]}>
                            <div className={styles.avatar}>D</div>
                            <div className={styles["usuario-detalhes"]}>
                                <div className={styles["usuario-nome"]}>Daniel Falci</div>
                                <div className={styles["usuario-tipo"]}>Local Guide • 32 avaliações • 0 foto</div>
                            </div>
                        </div>
                        <div className={styles.estrelas}>★★★★★</div>
                        <div className={styles.data}>12 de nov. de 2020</div>
                        <p className={styles["texto-depoimento"]}>Serviço nota 10! Atendimento do Henrique é impecável! Nossos carros ficaram como zero km!</p>
                        <div className={styles.controles}>⋮</div>
                    </div>
                </div>

                <div className={styles.depoimento}>
                    <div className={styles["depoimento-conteudo"]}>
                        <div className={styles["usuario-info"]}>
                            <div className={styles.avatar}>J</div>
                            <div className={styles["usuario-detalhes"]}>
                                <div className={styles["usuario-nome"]}>Pedro Carvalho</div>
                                <div className={styles["usuario-tipo"]}>5 avaliações </div>
                            </div>
                        </div>
                        <div className={styles.estrelas}>★★★★★</div>
                        <div className={styles.data}>37 de semanas</div>
                        <p className={styles["texto-depoimento"]}>Henrique oferece um serviço de excelência, de grande qualidade e com valores coerentes também. Super indico para quem busca um trabalho profissional no cuidado estético e funcional de seus veículos.</p>
                        <div className={styles.controles}>⋮</div>
                    </div>
                </div>
            </div>
        </div>
    );
}