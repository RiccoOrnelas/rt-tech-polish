import Image from "next/image";
import styles from "./page.module.css";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import RootLayout from "./layout";
import Carrousel from "./components/carrousel/page";
import Gallery from "./components/galery/page";
import Supliers from "./components/supliers/page";
import Contacts from "./components/contacts/page";
import { Anton, Poppins, Bebas_Neue, Lexend } from "next/font/google"
import { FaPhone, FaWhatsapp } from 'react-icons/fa';


const bebas = Bebas_Neue({
    subsets: ["latin"],
    weight: "400"
})

const anton = Anton({
    subsets: ["latin"],
    weight: "400"
})
const poppins = Poppins({
    subsets: ["latin"],
    weight: "400"
})
const lexend = Lexend({
    subsets: ["latin"],
    weight: "400"
})

export default function Home() {

    const galeryImages = [
        {
            url: "/assets/higienizacao.jpeg",
            alt: "Antes e Depois Banco de couro Claro",
        },
        {
            url: "/assets/higitcros.jpg",
            alt: "T-cros Com bancos Higienizados e Hidratação Completa",
        },
        {
            url: "/assets/gol1.png",
            alt: "Gol Polimento Técnico Premium",
        },
        {
            url: "/assets/gol3.png",
            alt: "Gol Polimento Técnico Premium",
        },
        {
            url: "/assets/corolahigi.jpg",
            alt: "Corola com bancos de couro claros Higienizado e Hidratado",
        },
        {
            url: "/assets/corolahigi2.png",
            alt: "Corola com bancos de couro claros Higienizado e Hidratado",
        },
        {
            url: "/assets/corolahigi3.png",
            alt: "Corola com bancos de couro claros Higienizado e Hidratado",
        },
        {
            url: "/assets/corolahigi4.png",
            alt: "Corola com bancos de couro claros Higienizado e Hidratado",
        },

        {
            url: "/assets/vts10.jpg",
            alt: "S10 Reliquia vitrificada com ZR53",
        },
        {
            url: "/assets/vts102.jpg",
            alt: "S10 Reliquia vitrificada com ZR53",
        },
        {
            url: "/assets/vts103.jpg",
            alt: "S10 Reliquia vitrificada com ZR53",
        },
        {
            url: "/assets/higicorola.png",
            alt: "Corola Brad bancos de tecido higienizado",
        },
        {
            url: "/assets/higicorola2.jpg",
            alt: "Corola Brad bancos de tecido higienizado",
        },
        {
            url: "/assets/higicorola3.jpg",
            alt: "Corola Brad bancos de tecido higienizado",
        },

        {
            url: "/assets/IMG_20210715_015050.jpg",
            alt: "Restauração de Farol",
        },
        {
            url: "/assets/mini2.jpg",
            alt: "Mini cooper com Polimento Técnico Comercial",
        },
        {
            url: "/assets/mini1.jpg",
            alt: "Mini cooper com Polimento Técnico Comercial",
        },
        {
            url: "/assets/mini4.jpg",
            alt: "Mini cooper com Polimento Técnico Comercial",
        }


    ]
    const supllyimages = [
        {
            imgUrl: "/assets/Vonixx.png",
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
                <span className={`${styles.marker} ${anton.className} `}>Polimento Técnico e Proteção de Pintura Para seu Carro no conforto do seu lar! </span>
            </div>

            <section className={styles.carBenefits}>
                <h2 className={bebas.className}>Cuidar do Carro traz benefícios</h2>
                <div className={styles.benefitsContainer}>
                    <div className={styles.benefit}>
                        <h3>RESTAURAÇÃO</h3>
                        <Image src="/assets/Restauracao.jpg" alt="Restauração" width={260} height={160} />
                        <p className={lexend.className}>Ao realizar um Polimento Técnico na Pintura do Veículo, o carro fica livre de riscos e com aspecto de novo!</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>BRILHO</h3>
                        <Image src="/assets/brilho.jpg" alt="Brilho" width={260} height={160} />
                        <p className={lexend.className}> O Brilho do verniz do carro é potencializado, fazendo com que a pintura dele fique com mais reflexo e muito mais bonita!</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>PROTEÇÃO</h3>
                        <Image src="/assets/protecao.jpeg" alt="Proteção" width={260} height={160} />
                        <p className={lexend.className}>A pintura estará protegida contra as ações do tempo que causam desgaste na pintura, e ações naturais como fezes de pássaros, seiva de árvores e etc...</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>LIMPEZA +<br />DURADOURA</h3>
                        <Image src="/assets/limpeza.jpg" alt="Limpeza e durabilidade" width={260} height={160} />
                        <p className={lexend.className}>Devido à pintura do carro estar mais lisa e protegida, a sujeira terá mais dificuldade de ancorar no carro, sendo assim ele ficará limpo por muito mais tempo, reduzindo a frequência de lavagem.</p>
                    </div>
                    <div className={styles.benefit}>
                        <h3>PREVENÇÃO<br />DE CUSTOS</h3>
                        <Image src="/assets/Prevencao.jpg" alt="Prevenção de custos" width={260} height={160} />
                        <p className={lexend.className}>Cuidar da estética do carro previne contra futuros gastos de repintura, pois preserva o verniz do carro. Evitando também que o auto sofra desvalorização por conta da aparência ou falta de originalidade na estética.</p>
                    </div>
                </div>
            </section>


            <section className={styles.services}>
                <Carrousel></Carrousel>
            </section>

            <section className={styles.gallery}>
                <h1 className={`${bebas.className} `}>Veja alguns resultados</h1>
                <Gallery imagens={galeryImages}></Gallery>
            </section>

            <section className={styles.suppliers}>
                <h2 className={bebas.className}>Fornecedores</h2>
                <div className={styles.supllyimages}>
                    {supllyimages.map((image, index) => (
                        <Supliers className={styles.supllyItens}
                            key={index}
                            imgUrl={image.imgUrl}
                            alt={image.alt}
                            width={image.width}
                            height={`42px`}
                        ></Supliers>

                    ))}

                </div>

            </section >

            <section className={styles.contats}>
                <Contacts></Contacts>

            </section >



        </div >
    );
}
