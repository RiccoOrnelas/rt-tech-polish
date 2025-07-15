
import styles from "./page.module.css";
import Image from "next/image";
import Gallery from "../components/galery/page";
import Contacts from "../components/contacts/page";
import Depoiments from "@/app/components/depoiments/page";
import { Anton, Poppins, Lexend, Bebas_Neue } from "next/font/google"
import { FaPhone, FaWhatsapp } from 'react-icons/fa';


const anton = Anton({
    subsets: ["latin"],
    weight: "400"
})
const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
})
const lexend = Lexend({
    subsets: ["latin"],
    weight: "400"
})



export default function PolimentoTecnico() {
    const galeryImages = [
        {
            url: "/assets/prisma.jpg",
            alt: "Polimento Técnico Premium - Prisma",
        },
        {
            url: "/assets/prisma1.png",
            alt: "Polimento Técnico Premium - Prisma",
        },
        {
            url: "/assets/prisma2.png",
            alt: "Polimento Técnico Premium - Prisma",
        },
        {
            url: "/assets/prisma3.jpg",
            alt: "Polimento Técnico Premium - Prisma",
        },
        {
            url: "/assets/gol5.jpg",
            alt: "Polimento Técnico Premium - Gol",
        },
        {
            url: "/assets/gol1.png",
            alt: "Polimento Técnico Premium - Gol",
        },
        {
            url: "/assets/gol2.png",
            alt: "Polimento Técnico Premium - Gol",
        },
        {
            url: "/assets/gol3.png",
            alt: "Polimento Técnico Premium - Gol",
        },
        {
            url: "/assets/gol4.jpg",
            alt: "Polimento Técnico Premium - Gol",
        },
        {
            url: "/assets/ptonix.jpg",
            alt: "Polimento Técnico Premium - Onix",
        },
        {
            url: "/assets/ptonix1.jpg",
            alt: "Polimento Técnico Premium - Onix",
        },
        {
            url: "/assets/ptonix2.jpg",
            alt: "Polimento Técnico Premium - Onix",
        },
        {
            url: "/assets/ptonix3.jpg",
            alt: "Polimento Técnico Premium - Onix",
        },
        {
            url: "/assets/ptonix4.jpg",
            alt: "Polimento Técnico Premium - Onix",
        }, {
            url: "/assets/polimento.jpg",
            alt: "Polimento Técnico Premium Jaguar",
        },
        {
            url: "/assets/imagem3.jpg",
            alt: "Polimento Técnico Premium Jaguar",

        },
        {
            url: "/assets/imagem4.jpg",
            alt: "Polimento Técnico Premium Jaguar",
        },
        {
            url: "/assets/imagem7.jpg",
            alt: "Polimento Técnico Premium  Fusca",
        },
        {
            url: "/assets/imagem8.jpg",
            alt: "Polimento Técnico Premium Fusca",
        },

    ]
    const supllyimages = [
        {
            imgUrl: "/assets/vonixx.png",
            alt: "vonixx",
        },
        {
            imgUrl: "/assets/Menzerna.png",
            alt: "Menzerna",
        },
        {
            imgUrl: "/assets/Sonax.png",
            alt: "Sonax",
        },
        {
            imgUrl: "/assets/Alcance.png",
            alt: "Alcance",
        },
        {
            imgUrl: "/assets/Vx45.png",
            alt: "Vx45",
        },
        {
            imgUrl: "/assets/Nasiol.png",
            alt: "Nasiol",
        },
        {
            imgUrl: "/assets/AutoAmerica.png",
            alt: "AutoAmerica",
        },
        {
            imgUrl: "/assets/Protelim.png",
            alt: "Protelim",
        },
        {
            imgUrl: "/assets/Lincoln.png",
            alt: "Lincoln",
        }
    ]

    return (

        <div className="container">

            <div className={styles.topText}>
                <span className={`${styles.marker} ${anton.className}`}>Polimento Técnico a Domícilio,
                    Espalhamos espelhos sobre rodas por SP! </span>
            </div>

            <section className={styles.carBenefits}>
                <h2 className={bebas.className}>Benefícios do Polimento Técnico</h2>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefit}>
                        <h3>RESTAURAÇÃO</h3>
                        <Image src="/assets/Restauracao.jpg" alt="Restauração" width={260} height={160} />
                        <p className={lexend.className}>Ao realizar um Polimento Técnico na Pintura do Veículo, o carro fica livre de riscos e com aspecto de novo!</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>BRILHO</h3>
                        <Image src="/assets/brilho.jpg" alt="Brilho" width={260} height={160} />
                        <p className={lexend.className}>O Brilho do verniz do carro é potencializado, fazendo com que a pintura dele fique com mais reflexo e muito mais bonita!</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>PROTEÇÃO</h3>
                        <Image src="/assets/protecao.jpeg" alt="Proteção" width={260} height={160} />
                        <p className={lexend.className}>A pintura estará protegida contra as ações do tempo que causam desgaste na pintura, e ações naturais como fezes de pássaros, seiva de árvores e etc...</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>LIMPEZA + <br />DURADOURA</h3>
                        <Image src="/assets/limpeza.jpg" alt="Limpeza e durabilidade" width={260} height={160} />
                        <p className={lexend.className}>Devido à pintura do carro estar mais lisa e protegida, a sujeira terá mais dificuldade de ancorar no carro, sendo assim ele ficará limpo por muito mais tempo, reduzindo a frequência de lavagem.</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>PREVENÇÃO <br />DE CUSTOS</h3>
                        <Image src="/assets/Prevencao.jpg" alt="Prevenção de custos" width={260} height={160} />
                        <p className={lexend.className}>Cuidar da estética do carro previne contra futuros gastos de repintura, pois preserva o verniz do carro. Evitando também que o auto sofra desvalorização por conta da aparência ou falta de originalidade na estética.</p>
                    </div>
                </div>
            </section>


            <section className={styles.gallery}>
                <h2 className={`${bebas.className}`}>Veja alguns espelhos sobre rodas! </h2>
                <Gallery imagens={galeryImages}></Gallery>
            </section>

            <section className={styles.depoiments}>
                <Depoiments></Depoiments>
            </section >
            <section className={styles.types}>
                <div className={styles.polishs}>

                    <h1 className={`${bebas.className} ${styles.cardTitle}`}>Temos o melhor pro seu carro!</h1>

                    <div className={styles.priceContainer}>
                        <div className={styles.polimento}>
                            <Image src='/assets/golf.jpg' alt="Carro polido" width={300} height={400} className={styles.imagecard}></Image >
                            <div className={styles.descriptions}>
                                <h2 className={`${bebas.className} ${styles.cardTitle}`}>Polimento Técnico Comercial</h2>
                                <p className={`${lexend.className} ${styles.cardText}`}> O objetivo aqui é remover riscos e marcas mais superficiais, e renovar o brilho do carro, gerando uma transformação mais objetiva.

                                    Após o tratamento, aplicamos uma proteção que dura até 7 meses na Pintura. </p>
                                <h5>Valor:</h5>
                                <h2 className={styles.price}>
                                    R$ <span> 279,99 <span>á partir</span></span>
                                </h2>
                            </div>
                        </div>
                        <div className={styles.polimento}>
                            <Image src='/assets/bmw.jpg' alt="Carro polido" width={300} height={400} layout="intrinsic" className={styles.imagecard} ></Image >
                            <div className={styles.descriptions}>
                                <h2 className={`${bebas.className} ${styles.cardTitle}`}>Polimento Técnico Premium</h2>
                                <p className={`${lexend.className} ${styles.cardText}`}> Já aqui, o objetivo é zerar a pintura, removendo os riscos e marcas mais expressivas do carro, causando uma renovação mais profunda na pintura!
                                    Após o Tratamento, a pintura recebe uma proteção com durabilidade de até 12 meses. </p>
                                <h5>Valor:</h5>
                                <h2 className={styles.price}>
                                    R$ <span>379,99 <span>á partir</span></span>
                                </h2>
                            </div>
                        </div>

                    </div>
                </div>


            </section >
            <section className={styles.contats}>
                <Contacts></Contacts>
            </section >
        </div >
    );
}
