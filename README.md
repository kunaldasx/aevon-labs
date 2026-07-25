# Aevon Portfolio Website

A stunning dark-mode portfolio website for **Aevon**, a premium software development agency.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## Features

- 🌑 Dark mode first design
- ✨ Particle canvas background with connected network
- 💫 Scroll-triggered animations via Framer Motion
- 🃏 Interactive service cards with glow hover effects
- 📊 Animated counter statistics
- 💬 Testimonials carousel
- 📬 Contact form with service/budget selection
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Custom scrollbar styling
- 🎨 Gradient text, glassmorphism cards, radial glows

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
aevon-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout + metadata
│   │   ├── page.tsx         # Home page (assembles all sections)
│   │   └── globals.css      # Global styles + Tailwind directives
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navbar with mobile menu
│   │   ├── Hero.tsx         # Hero with particle canvas
│   │   ├── Services.tsx     # 13-service grid
│   │   ├── About.tsx        # About + animated stats
│   │   ├── Process.tsx      # 5-step process timeline
│   │   ├── TechStack.tsx    # Technology categories
│   │   ├── Testimonials.tsx # Client testimonials carousel
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer with links + CTA
│   │   └── ui/
│   │       ├── SectionHeader.tsx  # Reusable section heading
│   │       └── GlowButton.tsx     # Animated CTA button
│   └── lib/
│       └── utils.ts         # cn() utility
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## Customization

- **Colors**: Edit `tailwind.config.ts` — change `primary`, `secondary`, `accent`
- **Content**: Update text in each component file
- **Contact form**: Wire up `handleSubmit` in `Contact.tsx` to your backend/email service
- **Logo/Brand**: Replace `AEVON` and the `Zap` icon in `Navbar.tsx` and `Footer.tsx`
