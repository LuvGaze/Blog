# 🔥 Firefly

> 一只发光的萤火虫，照亮你的数字花园

Firefly 是一个功能丰富、高度可定制的现代化个人博客系统，基于 Astro 7 + Svelte 5 构建。它不仅是一个博客模板，更是一个完整的个人内容管理平台，支持文章、书籍、影视、游戏、番组、旅行、规划、笔记本等多种内容类型，并配有强大的后台管理系统。

## ✨ 特色功能

### 🎨 视觉设计

- **响应式布局**：完美适配桌面端和移动端
- **深色/浅色主题**：一键切换，自动跟随系统设置
- **动态壁纸**：支持横幅、全屏、透明覆盖等多种模式，可切换图片或视频背景
- **毛玻璃效果**：现代化的视觉层次设计
- **自定义主题色**：支持自定义全站主题色

### 📝 内容管理

- **Markdown 支持**：完整的 Markdown 语法，支持代码高亮、数学公式、图表等
- **文章加密**：支持对敏感文章设置访问密码
- **文章置顶**：重要文章优先展示
- **分类与标签**：灵活的内容组织方式
- **搜索功能**：基于 Pagefind 的全文搜索

### 🎮 互动体验

- **Live2D 看板娘**：可配置的虚拟角色互动
- **音乐播放器**：内置音乐播放器，支持可视化效果
- **樱花飘落**：浪漫的视觉特效
- **打字机效果**：横幅文字打字机动画
- **图片灯箱**：Fancybox 图片浏览

### 📚 多内容支持

| 模块 | 说明 |
|------|------|
| **博客文章** | 支持 Markdown、MDX、代码高亮、数学公式 |
| **书架** | 书籍管理，支持封面、评分、阅读状态 |
| **影视** | 电影/电视剧管理，支持分类、评分 |
| **游戏** | 游戏管理，支持平台、评分 |
| **番组** | 番剧管理，支持批量导入 |
| **相册** | 图片相册，支持分类浏览 |
| **足迹** | 旅行地点记录，支持地图展示 |
| **规划** | 待办事项，支持状态切换 |
| **笔记本** | 日记/笔记管理，支持分类 |
| **更新日志** | 项目更新记录 |

### 🖥️ 后台管理

- **完整的管理面板**：基于 Express + TypeScript 构建
- **内容管理**：文章、书籍、影视、游戏等全模块管理
- **配置管理**：可视化编辑网站配置
- **文件上传**：支持 Markdown 文件上传自动解析
- **密码安全**：使用 bcrypt 加密存储密码
- **JWT 认证**：安全的身份验证机制

### 🔧 技术特性

- **Astro 7**：下一代静态站点生成器
- **Svelte 5**：轻量级前端框架
- **TailwindCSS 4**：原子化 CSS 框架
- **TypeScript**：类型安全开发
- **Serverless Ready**：支持 Cloudflare Pages 部署

## 🚀 快速开始

### 环境要求

- Node.js ≥ 20
- pnpm ≥ 9

### 前端博客

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build
```

开发服务器将在 `http://localhost:4321` 启动。

### 后台管理

```bash
# 进入后台目录
cd admin

# 安装依赖
npm install

# 初始化管理员密码（首次运行必须）
node scripts/init-password.js

# 启动开发服务器
npm run dev
```

后台服务将在 `http://localhost:9998` 启动。

> ⚠️ **安全提示**：首次登录后，请务必修改管理员密码！

### 创建文章

```bash
pnpm new-post <文章标题>
```

例如：

```bash
pnpm new-post "我的第一篇博客"
```

## 📁 项目结构

```
Firefly/
├── src/                          # 前端源码
│   ├── components/               # 组件
│   │   ├── layout/               # 布局组件
│   │   ├── widget/               # 侧边栏组件
│   │   ├── comment/              # 评论组件
│   │   ├── features/             # 特色功能组件
│   │   └── pages/                # 页面特定组件
│   ├── config/                   # 配置文件
│   │   ├── siteConfig.ts         # 站点配置
│   │   ├── navBarConfig.ts       # 导航栏配置
│   │   ├── themeConfig.ts        # 主题配置
│   │   └── ...
│   ├── content/                  # 内容文件
│   │   ├── posts/                # 博客文章
│   │   ├── books/                # 书籍数据
│   │   ├── movies/               # 影视数据
│   │   ├── games/                # 游戏数据
│   │   ├── bangumi/              # 番组数据
│   │   ├── travel/               # 旅行数据
│   │   ├── plans/                # 规划数据
│   │   ├── notebooks/            # 笔记本数据
│   │   └── changelog/            # 更新日志
│   ├── pages/                    # 页面路由
│   ├── styles/                   # 样式文件
│   └── utils/                    # 工具函数
├── admin/                        # 后台管理系统
│   ├── controllers/              # 控制器
│   ├── routes/                   # 路由
│   ├── services/                 # 服务层
│   ├── middleware/               # 中间件
│   └── public/                   # 静态资源
├── docs/                         # 文档
├── scripts/                      # 脚本
└── package.json
```

## ⚙️ 配置说明

### 主要配置文件

| 文件 | 说明 |
|------|------|
| `src/config/siteConfig.ts` | 站点基本信息、页面开关、导航栏配置 |
| `src/config/themeConfig.ts` | 主题色、字体、布局等视觉配置 |
| `src/config/backgroundWallpaper.ts` | 背景壁纸配置 |
| `src/config/commentConfig.ts` | 评论系统配置（Artalk、Giscus、Waline 等） |
| `src/config/musicConfig.ts` | 音乐播放器配置 |
| `src/config/analyticsConfig.ts` | 统计分析配置 |

### 配置示例

修改站点基本信息：

```typescript
// src/config/siteConfig.ts
export const siteConfig = {
  title: '我的博客',
  subtitle: '记录生活，分享技术',
  url: 'https://example.com',
  description: '一个技术博客',
  keywords: ['技术', '编程', '生活'],
};
```

## 📦 部署

### Cloudflare Pages

1. 登录 Cloudflare 控制台
2. 创建新的 Pages 项目
3. 连接 GitHub 仓库
4. 配置构建命令：`pnpm build`
5. 配置输出目录：`dist`
6. 部署！

### Vercel

1. 登录 Vercel 控制台
2. 创建新项目
3. 连接 GitHub 仓库
4. Vercel 会自动检测 Astro 项目配置
5. 部署！

### 自托管

```bash
# 构建项目
pnpm build

# 使用静态服务器启动
npx serve dist
```

## 🧩 插件与集成

### 评论系统

支持多种评论系统，在 `src/config/commentConfig.ts` 中配置：

- Artalk
- Giscus
- Waline
- Twikoo
- Disqus

### 统计分析

支持多种统计分析服务：

- Google Analytics
- Umami Analytics
- Microsoft Clarity
- 51La

### 图标库

- Material Symbols
- Font Awesome 7
- Simple Icons
- Mingcute Icons

## 📝 开发指南

### 添加新页面

1. 在 `src/pages/` 目录下创建新页面
2. 在 `src/config/siteConfig.ts` 中添加页面配置
3. 在 `src/config/navBarConfig.ts` 中添加导航链接

### 添加新组件

1. 在 `src/components/` 目录下创建新组件
2. 根据组件用途选择合适的子目录

### 修改主题色

1. 修改 `src/config/themeConfig.ts` 中的 `primaryColor`
2. 修改 `src/styles/variables.styl` 中的相关变量

## 🔒 安全

- 文章加密使用 AES-256 加密
- 后台密码使用 bcrypt 哈希存储
- JWT Token 认证机制
- 输入内容自动清理

## 📄 许可协议

本项目遵循 [MIT License](LICENSE) 开源协议。

## 🤝 贡献

欢迎提交 Issue 或 Pull Request！

## 📞 联系方式

- GitHub: [@CuteLeaf](https://github.com/CuteLeaf)
- 博客: [https://cuteleaf.github.io](https://cuteleaf.github.io)

---

**用 Firefly 点亮你的数字花园！** 🌌
