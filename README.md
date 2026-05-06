# RT Polimento Técnico Delivery

Production website for an automotive detailing company based in São Paulo, Brazil. Built and maintained by me — I'm both the owner of the business and the developer behind the site.

🔗 **Live:** [rtpolimentotecnicodelivery.com.br](https://www.rtpolimentotecnicodelivery.com.br)

---

## What this project is

A real business website, not a portfolio exercise. It's been live since 2016 and I've been rebuilding and maintaining it with Next.js. Every feature here solves an actual problem the business had.

---

## Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **CSS Modules** — all styling scoped per component, no global conflicts
- **Google Fonts via next/font** — Anton, Bebas Neue, Poppins, Lexend loaded with zero layout shift
- **next/image** — optimized image delivery across the whole site
- **Nodemailer** — email sending via a Next.js API Route (no third-party form service needed)
- **React Icons** — WhatsApp, Instagram, Facebook, and navigation icons
- **Google Tag Manager** — analytics and tracking integrated directly in the layout
- **Vercel** — automatic deploys on every push to main

---

## Features

### Navigation
Custom header built from scratch with three navigation modes depending on screen size:
- **Desktop** — horizontal nav bar with links
- **Tablet** — hamburger menu with a slide-in drawer and backdrop overlay
- **Mobile** — fixed bottom navigation bar with icons, active route highlighting, and safe area support for notched phones

The bottom nav tracks the current route using `usePathname()` and visually marks the active page.

### Services Carousel
A fully custom carousel (no library) that displays the 5 services the company offers. Built with:
- `useRef` to control the scroll position programmatically
- `scrollTo` with smooth behavior
- Dot indicators that sync with the current slide
- Resize listener to keep the scroll position correct when the window changes size
- Responsive layout: stacked on mobile, side-by-side on desktop

### Photo Gallery with Modal
Gallery component that loads 6 photos at a time with a "Load More" button. Clicking any photo opens a fullscreen modal with:
- Arrow buttons to navigate between photos
- Keyboard support (`←` `→` to navigate, `Escape` to close)
- Mouse wheel support to scroll through images
- Position indicator (e.g. "3 / 18")
- Body scroll locked while modal is open

### Testimonials
Static testimonials section with real customer reviews, styled to match the dark theme of the site.

### Contact Section
Contact info, social media links, and a WhatsApp CTA button. The floating WhatsApp button is fixed to the screen and stays visible on every page.

### Email API
`/api/send-email` — a Next.js API Route that handles quote requests using Nodemailer with Gmail transport. No external form services involved.

---

## Project Structure

```
src/app/
├── page.js                    # Home page
├── layout.js                  # Root layout with GTM, fonts, Header, Footer, WhatsApp button
├── components/
│   ├── header/                # Full responsive header (desktop + tablet + mobile bottom nav)
│   ├── footer/                # Footer with company info and privacy link
│   ├── carrousel/             # Custom services carousel
│   ├── galery/                # Photo gallery with modal viewer
│   ├── supliers/              # Supplier logos section
│   ├── contacts/              # Contact section with social links
│   ├── depoiments/            # Customer testimonials
│   └── whatsAppButton/        # Fixed floating WhatsApp button
├── api/
│   └── send-email/route.js    # Email API using Nodemailer
├── polimento-tecnico/         # Service detail page
├── coat/                      # Vitrification service page
├── contats/                   # Contact page
├── about/                     # About page
└── budgetSucessfull/          # Post-quote success page
```

---

## Running locally

```bash
git clone https://github.com/RiccoOrnelas/rt-tech-polish.git
cd rt-tech-polish
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

For the email feature to work, create a `.env.local` file:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

> Use a Gmail App Password, not your main account password.

---

## Notes

- All CSS is written with CSS Modules — no Tailwind, no styled-components
- Fonts are loaded via `next/font/google` to avoid flash and external requests
- Images use `next/image` throughout for automatic optimization and lazy loading
- The site serves real customers in São Paulo — uptime and mobile experience are priorities
