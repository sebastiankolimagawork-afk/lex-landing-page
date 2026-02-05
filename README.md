# Lex Landing Page

Official landing page for Lex - Your AI co-founder for solo technical founders.

**Tagline:** *From zero to one, together. You build. Lex handles business.*

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
lex-landing-page/
├── src/
│   ├── sections/          # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── WhatLexIs.tsx
│   │   ├── WhoThisIsFor.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── components/        # Reusable UI components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── public/               # Static assets
│   ├── hero-video.mp4   # Hero section video
│   └── video-poster.jpg # Video poster frame
└── index.html           # HTML template
```

## 🎨 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects settings - just click "Deploy"
6. Your site will be live at `your-project.vercel.app`

### Deploy to Netlify

1. Push this repository to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Build settings are auto-detected
6. Click "Deploy"

### Environment Variables

No environment variables required for basic deployment.

## 🔗 Domain Setup

After deployment, connect your custom domain:

**Recommended structure:**
- Landing page: `lex.kolkar.tech` or `lexai.ca`
- Main app: `app.lex.kolkar.tech` or `app.lexai.ca`

## 📝 Customization

### Update Hero Video
Replace `/public/hero-video.mp4` with your branded video.
**Specs:**
- Format: MP4
- Resolution: 1920x1080 or 1280x720
- Duration: 10-30 seconds
- File size: < 10MB

### Update Video Poster
Replace `/public/video-poster.jpg` with first frame of video.
**Specs:**
- Format: JPG or WebP
- Resolution: 1920x1080
- File size: < 200KB

### Update Content
All text content is in the component files under `src/sections/`

## 🔧 Configuration

### Tailwind Config
Custom styles and colors defined in `tailwind.config.js`

### TypeScript Config
- `tsconfig.json` - Base config
- `tsconfig.app.json` - App-specific config
- `tsconfig.node.json` - Node-specific config

## 📦 Build Optimization

```bash
# Analyze bundle size
npm run build
# Check dist/ folder size

# Production build is optimized with:
# - Code splitting
# - Tree shaking
# - Minification
# - Asset optimization
```

## 🤝 Contributing

This is a proprietary project for Kolkar Technologies Inc.

## 📄 License

Copyright © 2025 Kolkar Technologies Inc. All rights reserved.

## 🔗 Links

- **Main App:** [Coming Soon]
- **Documentation:** [Coming Soon]
- **API:** [Coming Soon]

---

Built with ❤️ by Kolkar Technologies Inc.
