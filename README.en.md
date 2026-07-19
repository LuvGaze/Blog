# 🔥 Firefly

> A glowing firefly that illuminates your digital garden

Firefly is a feature-rich, highly customizable modern personal blog system built on Astro 7 + Svelte 5. It is not just a blog template, but a complete personal content management platform that supports multiple content types including articles, books, movies, games, bangumi, travel, plans, and notebooks, with a powerful admin panel.

## ✨ Features

### 🎨 Visual Design

- **Responsive Layout**: Perfectly adapts to desktop and mobile devices
- **Dark/Light Theme**: One-click toggle, auto-follows system settings
- **Dynamic Wallpaper**: Supports banner, fullscreen, overlay modes, switchable image or video backgrounds
- **Glassmorphism**: Modern visual hierarchy design
- **Custom Theme Color**: Support custom global theme color

### 📝 Content Management

- **Markdown Support**: Full Markdown syntax, code highlighting, math formulas, charts, etc.
- **Post Encryption**: Support setting access passwords for sensitive articles
- **Post Pinning**: Important articles displayed first
- **Categories & Tags**: Flexible content organization
- **Search**: Full-text search based on Pagefind

### 🎮 Interactive Experience

- **Live2D Character**: Configurable virtual character interaction
- **Music Player**: Built-in music player with visualization effects
- **Sakura Falling**: Romantic visual effects
- **Typewriter Effect**: Banner text typing animation
- **Image Lightbox**: Fancybox image browsing

### 📚 Multi-content Support

| Module | Description |
|--------|-------------|
| **Blog Posts** | Markdown, MDX, code highlighting, math formulas |
| **Bookshelf** | Book management with cover, rating, reading status |
| **Movies** | Movie/TV management with category, rating |
| **Games** | Game management with platform, rating |
| **Bangumi** | Anime management with batch import |
| **Gallery** | Photo album with category browsing |
| **Travel** | Travel location records with map display |
| **Plans** | Todo items with status toggle |
| **Notebooks** | Diary/note management with categories |
| **Changelog** | Project update records |

### 🖥️ Admin Panel

- **Complete Management Panel**: Built on Express + TypeScript
- **Content Management**: Full module management for articles, books, movies, games, etc.
- **Configuration Management**: Visual editing of site configuration
- **File Upload**: Support Markdown file upload with automatic parsing
- **Password Security**: bcrypt hash storage
- **JWT Authentication**: Secure authentication mechanism

### 🔧 Technical Features

- **Astro 7**: Next-generation static site generator
- **Svelte 5**: Lightweight frontend framework
- **TailwindCSS 4**: Atomic CSS framework
- **TypeScript**: Type-safe development
- **Serverless Ready**: Supports Cloudflare Pages deployment

## 🚀 Quick Start

### Requirements

- Node.js ≥ 20
- pnpm ≥ 9

### Frontend Blog

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build production version
pnpm build
```

Development server runs at `http://localhost:4321`.

### Admin Panel

```bash
# Enter admin directory
cd admin

# Install dependencies
npm install

# Initialize admin password (required for first run)
node scripts/init-password.js

# Start development server
npm run dev
```

Admin service runs at `http://localhost:9998`.

> ⚠️ **Security Notice**: Please change your admin password after first login!

### Create New Post

```bash
pnpm new-post <title>
```

Example:

```bash
pnpm new-post "My First Blog Post"
```

## 📁 Project Structure

```
Firefly/
├── src/                          # Frontend source
│   ├── components/               # Components
│   │   ├── layout/               # Layout components
│   │   ├── widget/               # Sidebar widgets
│   │   ├── comment/              # Comment components
│   │   ├── features/             # Feature components
│   │   └── pages/                # Page-specific components
│   ├── config/                   # Configuration files
│   │   ├── siteConfig.ts         # Site configuration
│   │   ├── navBarConfig.ts       # Navigation config
│   │   ├── themeConfig.ts        # Theme config
│   │   └── ...
│   ├── content/                  # Content files
│   │   ├── posts/                # Blog posts
│   │   ├── books/                # Book data
│   │   ├── movies/               # Movie data
│   │   ├── games/                # Game data
│   │   ├── bangumi/              # Bangumi data
│   │   ├── travel/               # Travel data
│   │   ├── plans/                # Plans data
│   │   ├── notebooks/            # Notebook data
│   │   └── changelog/            # Changelog
│   ├── pages/                    # Page routes
│   ├── styles/                   # Style files
│   └── utils/                    # Utility functions
├── admin/                        # Admin panel
│   ├── controllers/              # Controllers
│   ├── routes/                   # Routes
│   ├── services/                 # Service layer
│   ├── middleware/               # Middleware
│   └── public/                   # Static assets
├── docs/                         # Documentation
├── scripts/                      # Scripts
└── package.json
```

## ⚙️ Configuration

### Main Configuration Files

| File | Description |
|------|-------------|
| `src/config/siteConfig.ts` | Site basic info, page switches, navigation config |
| `src/config/themeConfig.ts` | Theme color, font, layout visual config |
| `src/config/backgroundWallpaper.ts` | Background wallpaper config |
| `src/config/commentConfig.ts` | Comment system config (Artalk, Giscus, Waline, etc.) |
| `src/config/musicConfig.ts` | Music player config |
| `src/config/analyticsConfig.ts` | Analytics config |

### Configuration Example

Modify site basic information:

```typescript
// src/config/siteConfig.ts
export const siteConfig = {
  title: 'My Blog',
  subtitle: 'Recording life, sharing technology',
  url: 'https://example.com',
  description: 'A technology blog',
  keywords: ['tech', 'programming', 'life'],
};
```

## 📦 Deployment

### Cloudflare Pages

1. Login to Cloudflare Dashboard
2. Create new Pages project
3. Connect GitHub repository
4. Configure build command: `pnpm build`
5. Configure output directory: `dist`
6. Deploy!

### Vercel

1. Login to Vercel Dashboard
2. Create new project
3. Connect GitHub repository
4. Vercel automatically detects Astro project config
5. Deploy!

### Self-hosted

```bash
# Build project
pnpm build

# Start with static server
npx serve dist
```

## 🧩 Plugins & Integrations

### Comment Systems

Support multiple comment systems, configured in `src/config/commentConfig.ts`:

- Artalk
- Giscus
- Waline
- Twikoo
- Disqus

### Analytics

Support multiple analytics services:

- Google Analytics
- Umami Analytics
- Microsoft Clarity
- 51La

### Icon Libraries

- Material Symbols
- Font Awesome 7
- Simple Icons
- Mingcute Icons

## 📝 Development Guide

### Add New Page

1. Create new page in `src/pages/`
2. Add page config in `src/config/siteConfig.ts`
3. Add navigation link in `src/config/navBarConfig.ts`

### Add New Component

1. Create new component in `src/components/`
2. Choose appropriate subdirectory based on component purpose

### Modify Theme Color

1. Modify `primaryColor` in `src/config/themeConfig.ts`
2. Modify related variables in `src/styles/variables.styl`

## 🔒 Security

- Post encryption using AES-256
- Admin password stored with bcrypt hash
- JWT Token authentication
- Automatic input sanitization

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Welcome to submit issues or pull requests!

## 📞 Contact

- GitHub: [@CuteLeaf](https://github.com/CuteLeaf)
- Blog: [https://cuteleaf.github.io](https://cuteleaf.github.io)

---

**Light up your digital garden with Firefly!** 🌌
