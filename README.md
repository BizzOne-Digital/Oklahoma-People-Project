# Oklahoma People Project

A compassionate, warm frontend website for Oklahoma homeowners who are behind on property taxes or concerned about a possible property tax sale.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — premium animations
- **Lenis** — smooth scrolling
- **React Hook Form + Zod** — contact form validation

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/              # Pages and routes
├── components/
│   ├── layout/       # Header, Footer, SmoothScroll, etc.
│   ├── sections/     # Page sections (Hero, FAQ, ContactForm, etc.)
│   └── ui/           # Reusable UI components
├── config/           # Business info (site.ts)
├── data/             # Page content and FAQs
├── hooks/            # Custom React hooks
└── lib/              # Utilities, metadata, form submission
```

## Connecting the Contact Form

The contact form is frontend-only. By default, submitting opens a pre-filled `mailto:` link to **polarbear91@hotmail.com**.

### Option 1: Formspree

1. Create a form at [formspree.io](https://formspree.io)
2. Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

3. Restart the dev server

### Option 2: Other Form Services

Set `NEXT_PUBLIC_FORM_ENDPOINT` to any endpoint that accepts `POST` with JSON body matching the contact form fields.

**Never expose secret API keys in frontend code.** Use public endpoints designed for browser submissions.

## Business Information

All editable business details are centralized in `src/config/site.ts`:

- Business name, phone, email, hours
- Navigation links
- Disclaimers
- Form endpoint

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About Us |
| `/services` | Services |
| `/team` | Our Team |
| `/contact` | Contact |
| `/privacy-policy` | Privacy Policy |

## Important Notes

- This is a **frontend-only** website — no backend, database, or authentication
- Stock photography on the Team page should be replaced with real team photos before production launch
- Privacy Policy effective date is a placeholder — update before going live
- Update `siteConfig.url` in `src/config/site.ts` with your actual domain

## License

Private — Oklahoma People Project. All rights reserved.
