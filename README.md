# rt-tech-polish

## Descrição

Aplicação Next.js focada em Polimento Técnico automotivo. Inclui formulário de contato por e-mail, galeria de imagens, integração com Google Tag Manager, layout responsivo e componentes React modulares.

***

## Stack

- **Next.js 15** (App Router, SSR)
- **React 19**
- **Nodemailer** (envio de email no backend - API Route)
- **CSS + Tailwind**
- **React Icons**
- **Google Fonts**
- **Google Tag Manager** (GTM/Analytics)

***

## Instalação e Execução

```bash
# Clonar o projeto
git clone https://github.com/RiccoOrnelas/rt-tech-polish.git
cd rt-tech-polish

# Instalar dependências
npm install

# Rodar ambiente local
npm run dev
```

Abra http://localhost:3000 no navegador.

> Para o envio de emails funcionar, defina no seu .env.local:
```
EMAIL_USER=seu_email@gmail.com
EMAIL_PASSWORD=sua_senha_de_app
```
Utiliza transporte Gmail via Nodemailer (ver `src/app/api/send-email/route.js`).

***

## Scripts Úteis

- `npm run dev` — ambiente local
- `npm run build` — build produção
- `npm run start` — executa build
- `npm run lint` — linting com ESLint

***

## Estrutura de Pastas

| Caminho                        | Função                                        |
|------------------------------- |-----------------------------------------------|
| `/public/assets`               | Imagens do site (resultados, fornecedores)    |
| `/src/app/`                    | Páginas, layouts e roteamento Next.js         |
| `/src/app/components`          | Componentes reutilizáveis (carrousel, header) |
| `/src/app/api/send-email`      | API Route para envio de email (Nodemailer)    |
| `/src/app/polimento-tecnico`   | Página de serviços detalhada                  |
| `/src/app/globals.css`         | Estilos globais + Tailwind utilities          |

***

## Principais Componentes

- **Header/Footer**: Com navegação, identidade visual e responsividade
- **Carrousel**: Galeria de imagens customizada
- **Formulário de Contato**: Envia orçamentos por e-mail (API própria)
- **Botão WhatsApp**: Com mensagem e número customizáveis
- **GTM & Analytics**: Scripts otimizados integrados (ver `layout.js`)

***

## Customização

- Paleta e branding facilmente editáveis nos arquivos de componentes e CSS
- Adicione/remova imagens em `/public/assets`
- Para novo fornecedor/adicional na galeria → modifique o array de imagens nos componentes

***

## Deploy

Deploy automático em [Vercel](https://vercel.com/).  
Arquivos de configuração em `vercel.json` e `next.config.mjs` (modifique conforme necessidade).

***

## Contribuição

Pull Requests e Issues são bem-vindos.  
Siga convenções do Next.js/React, mantenha código comentado e commits claros.

***
