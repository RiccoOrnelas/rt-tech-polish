'use client'
import Head from 'next/head'
import { useState } from 'react'
import styles from './page.module.css'
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaInstagram, FaThumbsUp, FaWhatsapp } from 'react-icons/fa'
import { Montserrat, Lexend, Poppins } from 'next/font/google'

const montserrat = Montserrat(
    {
        subsets: ["latin"],
        weight: "500"
    }

)
const lexend = Lexend(
    {
        subsets: ["latin"],
        weight: "500"
    }

)
const poppins = Poppins(
    {
        subsets: ["latin"],
        weight: "500"
    }

)
export default function Contats() {
    const [formData, setFormData] = useState({
        nome: '',
        celular: '',
        email: '',
        carro: '',
        cor: '',
        ultimoTratamento: '',
        mensagem: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Implement form submission logic here
        alert('Orçamento solicitado com sucesso!');
    };

    return (
        <div className={styles.container}>


            <header className={styles.header}>
                <h1 className={`${styles.title} ${montserrat.className}`}>Fale Conosco</h1>
                <p className={`${styles.subtitle} ${poppins.className}`}>
                    Solicite um orçamento sem compromisso ou tire dúvidas relacionadas a Estética do seu Carro!
                </p>
                <div className={styles.divider}></div>
            </header>

            <main className={styles.main}>
                <div className={styles.contactInfo}>
                    <div className={styles.infoItem}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <div>
                            <h3>Área de Atendimento</h3>
                            <p>Todo ABC e Grande São Paulo</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <FaPhone className={styles.icon} />
                        <div>
                            <h3>Telefone</h3>
                            <p>(11) 9 7891-5000</p>
                        </div>
                    </div>

                    <div className={styles.socialMedia}>
                        <h3>Redes sociais</h3>
                        <div className={styles.socialIcons}>
                            <FaThumbsUp className={styles.socialIcon} />
                            <FaFacebookF className={styles.socialIcon} />
                            <FaInstagram className={styles.socialIcon} />
                        </div>
                    </div>

                    <a href="https://wa.me/5511978915000" className={styles.whatsappButton}>
                        <FaWhatsapp className={styles.whatsappIcon} /> Link Direto para o WhatsApp
                    </a>
                </div>

                <div className={styles.formContainer}>
                    <h2 className={styles.formTitle}>Deixe aqui seus dados para receber um Orçamento:</h2>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.formRow}>
                            <div className={`${styles.formGroup} ${lexend.className}`}>
                                <label htmlFor="nome">Nome:</label>
                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${lexend.className}`}>
                                <label htmlFor="celular">Celular:</label>
                                <input
                                    type="tel"
                                    id="celular"
                                    name="celular"
                                    value={formData.celular}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={`${styles.formGroup} ${lexend.className}`}>
                                <label htmlFor="carro">Qual Seu Carro?</label>
                                <input
                                    type="text"
                                    id="carro"
                                    name="carro"
                                    value={formData.carro}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={`${styles.formGroup} ${lexend.className}`}>
                                <label htmlFor="cor">Cor do Carro:</label>
                                <input
                                    type="text"
                                    id="cor"
                                    name="cor"
                                    value={formData.cor}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className={`${styles.formGroup} ${lexend.className}`}>
                            <label htmlFor="ultimoTratamento">
                                Quando foi a última vez que seu carro recebeu um tratamento na pintura?
                            </label>
                            <input
                                type="text"
                                id="ultimoTratamento"
                                name="ultimoTratamento"
                                value={formData.ultimoTratamento}
                                onChange={handleChange}
                                placeholder="Insira uma resposta aqui"
                            />
                        </div>

                        <div className={`${styles.formGroup} ${lexend.className}`}>
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea
                                id="mensagem"
                                name="mensagem"
                                value={formData.mensagem}
                                onChange={handleChange}
                                rows="5"
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Solicitar Orçamento
                        </button>
                    </form>
                </div>
            </main>

        </div>
    );
}