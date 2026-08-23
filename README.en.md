# ⭐ Modified Firefly Blog Project ⭐

- Secondary development based on the Firefly blog system
- This project can be used together with the dedicated supporting backend project [Admin](https://github.com/LuvGaze/Blog-Admin)

# 🔥 Firefly

>
> A glowing firefly, illuminating your digital garden

Firefly is a fully-featured, highly customizable modern personal blog system built with Astro 7 + Svelte 5. More than just a blog template, it is a complete personal content management platform supporting multiple content types including articles, books, movies, games, anime, travel logs, plans, notebooks, alongside a powerful admin dashboard.

## ✨ Key Features

### 🎨 Visual Design

- **Responsive Layout**: Perfect compatibility with desktop and mobile devices
- **Dark / Light Theme**: One-click toggle, automatic system preference detection
- **Dynamic Wallpapers**: Banner, fullscreen, overlay transparent modes; supports image or video backgrounds
- **Frosted Glass Effects**: Modern visual layering design
- **Custom Theme Color**: Configure global primary theme color

### 📝 Content Management

- **Markdown Support**: Full Markdown syntax with code highlighting, math formulas, charts
- **Password Protected Articles**: Set access passwords for sensitive posts
- **Pin Articles**: Prioritize display for important content
- **Categories & Tags**: Flexible content organization
- **Search Function**: Full-text search powered by Pagefind

### 🎮 Interactive Experience

- **Live2D Widget Character**: Configurable interactive virtual character
- **Music Player**: Built-in audio player with visualizer effects
- **Cherry Blossom Animation**: Romantic visual particle effect
- **Typewriter Effect**: Animated typing banner text
- **Image Lightbox**: Fancybox image preview

### 📚 Multi-Type Content Support

| Module | Description |
| --- | --- |
| **Blog Articles** | Markdown / MDX, syntax highlighting, mathematical notation |
| **Bookshelf** | Book management with cover images, ratings, reading status |
| **Movies & Shows** | Film & series management with classification and scoring |
| **Games** | Game library supporting platform tagging and ratings |
| **Anime** | Anime collection with bulk import capability |
| **Photo Gallery** | Categorized image browsing |
| **Footprints** | Travel location records with map display |
| **Plans** | Todo checklist with status switching |
| **Notebooks** | Diary & note management with categories |
| **Changelog** | Project update history |

### 🖥️ Admin Dashboard

- **Complete Admin Panel**: Built with Express + TypeScript
- **Content Management**: Full module control for articles, books, media and more
- **Configuration Management**: Visual website setting editor
- **File Upload**: Auto parsing for uploaded Markdown files
- **Secure Passwords**: bcrypt password hashing
- **JWT Authentication**: Secure identity verification

### 🔧 Technical Highlights

- **Astro 7**: Next-gen static site generator
- **Svelte 5**: Lightweight frontend framework
- **TailwindCSS 4**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Serverless Ready**: Deployable on Cloudflare Pages

## 🚀 Quick Start

### Prerequisites

- Node.js ≥ 20
- pnpm ≥ 9

### Frontend Blog

```
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build production assets
pnpm build
```

The development server will run at `http://localhost:4321`.

### Backend Admin

```
# Enter admin directory
cd admin

# Install dependencies
npm install

# Initialize admin password (required for first launch)
node scripts/init-password.js

# Start dev server
npm run dev
```

The admin service will run at `http://localhost:9998`.

>
> ⚠️ **Security Notice**: Please change your administrator password after your first login!

### Create a New Post

```
pnpm new-post <Article Title>
```

Example:

```
pnpm new-post "My First Blog Post"
```

## 📁 Project Structure

```
Firefly/
├── src/                          # Frontend source code
│   ├── components/               # Components
│   │   ├── layout/               # Layout components
│   │   ├── widget/               # Sidebar widgets
│   │   ├── comment/              # Comment components
│   │   ├── features/             # Feature components
│   │   └── pages/                # Page-specific components
│   ├── config/                   # Configuration files
│   │   ├── siteConfig.ts         # Website settings
│   │   ├── navBarConfig.ts       # Navigation bar settings
│   │   ├── themeConfig.ts        # Theme appearance settings
│   │   └── ...
│   ├── content/                  # Content files
│   │   ├── posts/                # Blog articles
│   │   ├── books/                # Book data
│   │   ├── movies/               # Movie data
│   │   ├── games/                # Game data
│   │   ├── bangumi/              # Anime data
│   │   ├── travel/               # Travel records
│   │   ├── plans/                # Todo plans
│   │   ├── notebooks/            # Notebook entries
│   │   └── changelog/            # Update logs
│   ├── pages/                    # Page routes
│   ├── styles/                   # Style assets
│   └── utils/                    # Utility functions
├── admin/                        # Backend admin system
│   ├── controllers/              # Controllers
│   ├── routes/                   # API routes
│   ├── services/                 # Business logic services
│   ├── middleware/               # Middleware
│   └── public/                   # Static assets
├── docs/                         # Documentation
├── scripts/                      # Helper scripts
└── package.json
```

## ⚙️ Configuration Guide

### Main Configuration Files

| File | Description |
| --- | --- |
| `src/config/siteConfig.ts` | Basic site info, page toggles, navigation settings |
| `src/config/themeConfig.ts` | Theme color, font, layout visual settings |
| `src/config/backgroundWallpaper.ts` | Wallpaper background settings |
| `src/config/commentConfig.ts` | Comment system setup (Artalk, Giscus, Waline etc.) |
| `src/config/musicConfig.ts` | Music player configuration |
| `src/config/analyticsConfig.ts` | Analytics service configuration |

### Configuration Example

Modify basic site information:

```
// src/config/siteConfig.ts
export const siteConfig = {
  title: 'My Blog',
  subtitle: 'Record life, share technology',
  url: 'https://example.com',
  description: 'A technical blog',
  keywords: ['technology', 'programming', 'life'],
};
```

## 📦 Deployment

### Cloudflare Pages

1. Sign in to the Cloudflare dashboard
2. Create a new Pages project
3. Connect your GitHub repository
4. Build command: `pnpm build`
5. Output directory: `dist`
6. Deploy!

### Vercel

1. Sign in to the Vercel dashboard
2. Create a new project
3. Connect your GitHub repository
4. Vercel will auto-detect Astro project settings
5. Deploy!

### Self-hosting

```
# Build project assets
pnpm build

# Launch static server
npx serve dist
```

## 🧩 Plugins & Integrations

### Comment Systems

Multiple comment services configurable inside `src/config/commentConfig.ts`:

- Artalk
- Giscus
- Waline
- Twikoo
- Disqus

### Analytics Services

Supported tracking platforms:

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

### Add a New Page

1. Create a new page file under `src/pages/`
2. Add page settings in `src/config/siteConfig.ts`
3. Add navigation link in `src/config/navBarConfig.ts`

### Add a New Component

1. Create component file under `src/components/`
2. Select the proper subdirectory based on component usage

### Change Primary Theme Color

1. Update `primaryColor` inside `src/config/themeConfig.ts`
2. Modify relevant variables in `src/styles/variables.styl`

## 🔒 Security

- Article encryption using AES-256
- Admin passwords stored as bcrypt hashes
- JWT token authentication
- Automatic input sanitization

## 📄 License

This project is open-source under the [MIT License](LICENSE).

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📞 Contact

- GitHub: [@CuteLeaf](https://github.com/CuteLeaf)
- Blog: [https://cuteleaf.github.io](https://cuteleaf.github.io)

---

**Light up your digital garden with Firefly!** 🌌