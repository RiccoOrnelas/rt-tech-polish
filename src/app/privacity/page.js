'use client'

import Head from 'next/head';
import styles from './page.module.css';

export default function PoliticaPrivacidade() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Política de Privacidade | RT Polimento Técnico</title>
                <meta name="description" content="Política de Privacidade da RT Polimento Técnico" />
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title} >Política de Privacidade</h1>

                <p>A RT Polimento Técnico respeita a sua privacidade e está comprometida com a proteção dos dados pessoais que você nos fornece.</p>

                <h2 className={styles.subtitle}>1. Coleta de Informações</h2>
                <p>Coletamos as seguintes informações por meio do nosso formulário de orçamento:</p>
                <ul>
                    <li>Nome completo</li>
                    <li>Número de celular</li>
                    <li>Endereço de e-mail</li>
                    <li>Informações sobre o veículo (modelo, cor, último tratamento)</li>
                    <li>Mensagens adicionais enviadas voluntariamente</li>
                </ul>

                <h2 className={styles.subtitle}>2. Uso das Informações</h2>
                <p>Os dados coletados são utilizados para:</p>
                <ul>
                    <li>Entrar em contato com você sobre os serviços solicitados</li>
                    <li>Enviar orçamentos e informações relevantes</li>
                    <li>Melhorar nosso atendimento e personalização dos serviços</li>
                </ul>

                <p>Não utilizamos seus dados para fins de marketing sem o seu consentimento prévio.</p>

                <h2 className={styles.subtitle}>3. Compartilhamento de Dados</h2>
                <p><strong>Não compartilhamos seus dados pessoais com terceiros</strong>. Toda a informação fornecida é mantida em sigilo e utilizada apenas pela equipe da RT Polimento Técnico.</p>

                <h2 className={styles.subtitle}>4. Segurança dos Dados</h2>
                <p>Adotamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados, perda, destruição ou alteração.</p>

                <h2 className={styles.subtitle}>5. Seus Direitos</h2>
                <p>Você pode, a qualquer momento:</p>
                <ul>
                    <li>Solicitar acesso aos seus dados pessoais</li>
                    <li>Corrigir informações imprecisas</li>
                    <li>Solicitar a exclusão dos seus dados</li>
                </ul>
                <p>Basta entrar em contato pelo e-mail: <strong>rtpolimentotecnico@gmail.com</strong></p>

                <h2 className={styles.subtitle}>6. Cookies e Tecnologias de Rastreamento</h2>
                <p>Nosso site pode utilizar cookies apenas para fins funcionais e analíticos, sem identificar pessoalmente os visitantes.</p>

                <h2 className={styles.subtitle}>7. Alterações nesta Política</h2>
                <p>Podemos atualizar esta política periodicamente. A versão mais recente estará sempre disponível nesta página.</p>
            </main>
        </div>
    );
}
