# Manu Portfolio

A high-performance, minimalist portfolio website for a senior systems engineer. Built with Next.js 15, Tailwind CSS, and TypeScript.

## Features

- **Performance First:** 100/100 Lighthouse score potential (minimal JS, optimized images).
- **Design System:** Strict Times New Roman typography, Apple-level minimalism, dark/light mode aware (locked to light mode per brief).
- **AI Assistant:** "Manu Assistant" chatbot with context-aware retrieval (mocked for demo).
- **Content-Rich:** detailed case studies, blog support, and project showcases.
- **Accessibility:** Semantic HTML, ARIA labels, and keyboard navigation support.

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and dummy data
│   └── styles/              # Global styles
├── public/                  # Static assets
└── ...config files
```

## Getting Started

1. **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    ```

2. **Run the development server:**

    ```bash
    npm run dev
    ```

3. **Open [http://localhost:3000](http://localhost:3000)** with your browser to see the result.

## Deployment

This project is optimized for Vercel, which is the recommended deployment platform for Next.js.

1. **Push to GitHub/GitLab/Bitbucket**.
2. **Import project in Vercel**.
3. **Environment Variables**: No environment variables are strictly required for the public features, but if you add analytics or real database/AI backend later, add them in Vercel settings.
4. **Deploy**: Vercel will automatically detect Next.js and build the application.

## Development Notes

- **Port**: The dev server runs on port `3010` by default (`npm run dev`) to avoid conflicts with other local apps.
- **Images**: Remote images from Unsplash are configured in `next.config.ts`.
- **Theme**: Currently locked to **Light Mode** (Dark mode logic exists in code but is disabled/reverted per request).

## License

MIT
