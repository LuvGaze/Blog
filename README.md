# 🔥 魔改版 Firefly 博客

> 基于 [Firefly](https://github.com/CuteLeaf) 博客系统二次开发，可搭配专属后台 [Blog-Admin](https://github.com/LuvGaze/Blog-Admin) 使用。

一个功能丰富、高度可定制的现代化个人博客：基于 **Astro 7 + Svelte 5**，文章、书架、影视、游戏、番组、音乐、相册、足迹、规划、账单、更新日志等一应俱全，并配有 Express + TypeScript 后台。

---

## ✨ 特色功能

### 🎨 视觉与交互

- **响应式布局**：桌面 / 移动端自适应
- **深色 / 浅色主题**：一键切换，跟随系统
- **动态壁纸**：图片或视频横幅，多种覆盖模式
- **毛玻璃 + 自定义主题色**：现代化视觉层次
- **樱花飘落 / 打字机 / 图片灯箱 / Live2D 看板娘** 等趣味特效

### 📚 多内容支持（Markdown 管理，无需写代码）

| 模块 | 存放目录 | 说明 |
| --- | --- | --- |
| 📝 文章 | `src/content/posts/` | 支持 Markdown、代码高亮、数学公式、文章加密 |
| 📚 书架 | `src/content/books/` | 书籍封面、评分、阅读状态 |
| 🎬 影视 | `src/content/movies/` | 电影/剧/动漫/纪录片，分类与评分 |
| 🎮 游戏 | `src/content/games/` | 游戏管理与评分 |
| 🔖 番组 / 追番 | `src/content/movies/` | `category: real` + `subcategory: anime` |
| 🎵 音乐 | `src/content/movies/` | Meting 接入音频/封面/自动歌词 |
| 🖼️ 相册 | `src/content/gallery/` | 支持 `images` 数组或扫描本地目录 |
| 🧭 足迹 | `src/content/travel/` | 高德足迹地图，省/市界按缩放显示 |
| 📋 规划 | `src/content/plans/` | 待办规划 |
| 💰 账单 | `src/content/bills/` | 收支流水、月度统计、分类排行 | 
| 🕘 更新日志 | `src/content/changelog/` | 版本更新记录 |
| 🤝 友链 | `src/content/friends/` | 友情链接 |

> 各内容类型的写法和字段示例，可直接参考站内教程文章《博客功能使用教程》。

### 🖥️ 后台管理（配套项目 Agent/子目录）

- 完整管理面板：文章、作品、账单、相册、足迹、友链等全模块
- 配置可视化编辑（站点、导航、音乐、评论、页脚等）
- Markdown 文件上传自动解析、JWT 认证、bcrypt 密码加密

---

## 🔧 技术栈

| 类别 | 技术 |
| --- | --- |
| 框架 | Astro 7 · Svelte 5 |
| 样式 | TailwindCSS 4 · 原生 CSS 变量主题 |
| 语言 | TypeScript |
| 搜索 | Pagefind |
| 静态图标 | 构建期自动生成 `material-symbols` / `fa7` 图标集 |
| 图片体验 | 构建期自动生成 LQIP 占位图 |
| 部署 | Cloudflare Pages（@astrojs/cloudflare） |

---

## 🚀 快速开始

### 环境要求

- Node.js ≥ 20
- pnpm ≥ 9（项目强制使用 pnpm）

### 前端博客

```bash
# 安装依赖
pnpm install

# 启动开发服务器（http://localhost:4321）
pnpm dev

# 构建生产版本（输出到 dist/）
pnpm build

# 预览生产版本
pnpm preview
```

> ⏱️ `pnpm build` 会依次执行：生成图标常量 → 生成 LQIP → `astro build` → 字体子集化 → Pagefind 索引。
> 其中生成的 `src/constants/icons.ts`、`src/constants/lqips.json` 等为构建产物，已加入 `.gitignore`，无需上传仓库。

### 后台管理

```bash
cd admin
npm install
node scripts/init-password.js   # 首次初始化管理员密码
npm run dev                     # 后台 @ http://localhost:8899/admin
```

> ⚠️ **安全提示**：首次登录后请务必修改管理员密码。

### 常用脚本

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` / `pnpm start` | 开发服务器 |
| `pnpm build` | 生产构建（含图标/LQIP/字体/搜索） |
| `pnpm preview` | 预览构建产物 |
| `pnpm check` | 类型与诊断检查 |
| `pnpm type-check` | 仅 TypeScript 检查 |
| `pnpm new-post "标题"` | 快速新建文章 |
| `pnpm lint` / `pnpm format` | Biome 检查 / 格式化 |

---

## 📁 主要目录结构

```
Blog/
├── src/
│   ├── content/            # 📄 全部内容（.md / .json）
│   │   ├── posts/  website/  notebooks/  books/  movies/
│   │   ├── games/  gallery/  travel/     plans/  bills/
│   │   └── changelog/  friends/  spec/
│   ├── content.config.ts   # 内容集合 schema（字段定义）
│   ├── components/         # 布局 / 页面 / 特性组件
│   ├── config/             # 站点、主题、导航、评论、音乐等配置
│   ├── pages/              # 页面路由
│   ├── styles/  utils/  types/  constants/
│   ├── astro.config.*      # Astro 与 Cloudflare 配置
│   └── .pages.yml          # Cloudflare Pages 配置
├── admin/                  # 后台管理（另行部署，独立运行）
├── scripts/                # 构建 / 新建文章等脚本
├── public/                 # 静态资源
└── .github/workflows/      # GitHub Actions 部署工作流
```

---

## ⚙️ 核心配置（`src/config/`）

| 文件 | 作用 |
| --- | --- |
| `siteConfig.ts` | 站点信息、功能开关（`pages.xxx`） |
| `navBarConfig.ts` | 导航栏菜单结构与 `LinkPresets` |
| `themeConfig.ts` | 主题色、字体、布局 |
| `commentConfig.ts` | 评论系统（Artalk / Giscus / Waline …） |
| `musicConfig.ts` | 音乐播放器、歌单、Meting API、歌词颜色 |
| `footerConfig.ts` | 页脚内容与版权开关（`FooterConfig.html`） |
| `billsConfig.ts` | 账单页参数 |
| `backgroundWallpaper.ts` | 背景壁纸 |

> 友情提示：绝大部分内容不需要改代码，直接改 `src/content/` 下的 Markdown 或通过后台即可。

---

## 🗺️ 足迹地图环境变量

足迹页使用高德（AMap）JS API，构建时需注入以下环境变量（本地开发时写入 `.env`，CI 中通过仓库 Secrets 注入）：

```
PUBLIC_AMAP_KEY_PLACES=你的高德Web端Key
PUBLIC_AMAP_SECURITY_JS_CODE=对应的安全密钥
```

> 本地开发时写入 `.env`，CI 中通过仓库 Secrets 注入；若安全码为空，会导致底图白屏。

| 变量 | 用途 |
| --- | --- |
| `PUBLIC_AMAP_KEY_PLACES` | 足迹地图 Web 端 Key |
| `PUBLIC_AMAP_SECURITY_JS_CODE` | 对应安全密钥 |
| `PUBLIC_AMAP_GEO_KEY` / `PUBLIC_AMAP_GEO_SECRET` | 位置/地理相关统计

---

## 📦 部署

项目内置 `@astrojs/cloudflare` 适配器与 GitHub Actions 工作流：

1. 将本仓库推送到 GitHub
2. 在仓库 **Settings → Secrets and variables → Actions** 配置所需密钥（如 AMap Key / 安全码等）
3. 推送触发 `deploy` 工作流，自动构建并部署到 Cloudflare Pages

> 也可以手动构建后使用任意静态托管（`dist/` 目录）。

---

## 🔒 安全

- 文章加密：AES-256
- 后台密码：bcrypt 哈希存储
- 认证：JWT Token
- 先天性输入清理

---

## 📄 许可协议

本项目遵循 [MIT License](LICENSE) 开源协议。

---

**用 Firefly 点亮你的数字花园！** 🌌