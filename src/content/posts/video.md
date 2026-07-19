---
title: MDX 格式文章示例
published: 1970-01-02
description: 这是一个 MDX 格式的示例文章，展示了如何在 Markdown 中使用 JSX。
tags: [MDX, Markdown, 文章示例]
category: 文章示例
draft: false
---

import { Icon } from 'astro-icon/components'

:::tip
[Firefly](https://github.com/CuteLeaf/Firefly) 支持 `MDX` 和 `Markdown` 两种类型的文章，你可以在文章中混合使用两种格式，如果没有特别复杂内容和需求，推荐使用 Markdown 格式就够了。
:::

## Markdown 和 MDX 的区别
- Markdown (MD) 是一种轻量级标记语言，允许用户使用纯文本格式编写文档，然后将其转换为格式化的HTML。它因其简洁易用的语法而广受欢迎，特别适合编写文档和博客文章。
- MDX 是一种扩展了 Markdown 语法的格式，允许在 Markdown 文档中无缝地插入 JSX 代码。通过 MDX，用户可以在文档中嵌入 React 组件，从而实现更丰富的交互性和动态性。

| 特性 | Markdown | MDX |
| :--- | :--- | :--- |
| 基础语法 | 支持 (CommonMark) | 支持 (CommonMark) |
| HTML 标签 | 支持 | 支持 (作为 JSX) |
| 组件导入 | 不支持 | 支持 (import) |
| 动态数据 | 不支持 | 支持 (JS 表达式) |
| 样式定制 | 有限 (class/style) | 灵活 (className/CSS-in-JS) |

## 使用组件

这是一个图标组件：

<Icon name="material-symbols:star" class="text-yellow-500" />

你可以在 MDX 文件中导入并使用任何 Astro 组件。

## JSX 表达式

你可以在 MDX 中使用 JavaScript 表达式：

```jsx
{new Date().toLocaleDateString('zh-CN')}
```

显示结果：{new Date().toLocaleDateString('zh-CN')}

## 注意事项

- MDX 文件需要使用 `.mdx` 扩展名
- 导入语句必须放在文件顶部，frontmatter 之后
- 组件名称必须大写开头
- 不要在 MDX 中使用 `---` 分隔符，它会被解析为 frontmatter
