---
title: markdown+html写作教程
published: 2026-09-14
pinned: true
order: 0
description: 写作教程
category: markdown
draft: false
image: api
encrypted: false
tags: [markdown, 教程]
---

> 使用规则：上方为实时预览效果，下方代码块为纯净源码，直接复制即可粘贴到 `.md` 文档。

---

## 一、基础排版与文字特效（1-8）

### 1. 黄金比例正文段落

**实时预览：**

<p style="text-indent:2em; line-height:1.8; color:#f98f8f; font-size:16px; letter-spacing:0.5px; margin-bottom:16px;">
在博客写作中，使用标准缩进段落可以让文章阅读质感大幅提升，告别原生 Markdown 靠左顶格的粗糙感。本段样式适配手机、电脑双端，行高舒适、字体柔和，适合作为所有正文通用模板。
</p>

**纯净源码：**

```html
<p style="text-indent:2em; line-height:1.8; color:#f98f8f; font-size:16px; letter-spacing:0.5px; margin-bottom:16px;">
在博客写作中，使用标准缩进段落可以让文章阅读质感大幅提升，告别原生 Markdown 靠左顶格的粗糙感。本段样式适配手机、电脑双端，行高舒适、字体柔和，适合作为所有正文通用模板。
</p>
```

> 注：原文 `#F98F` 不是合法十六进制颜色，这里改为 `#f98f8f`。你可以按自己主题替换。

---

### 2. 多色重点文字标注

**实时预览：**

<p style="line-height:1.8; margin-bottom:16px;">
普通正文内容，用于铺垫讲解。<span style="color:#2563eb; font-weight:600;">蓝色重点：核心概念</span>，<span style="color:#d93025; font-weight:600;">红色重点：易错禁忌</span>，<span style="color:#059669; font-weight:600;">绿色重点：正确方法</span>，<span style="color:#f59e0b; font-weight:600;">橙色重点：注意事项</span>。
</p>

**纯净源码：**

```html
<p style="line-height:1.8; margin-bottom:16px;">
普通正文内容，用于铺垫讲解。<span style="color:#2563eb; font-weight:600;">蓝色重点：核心概念</span>，<span style="color:#d93025; font-weight:600;">红色重点：易错禁忌</span>，<span style="color:#059669; font-weight:600;">绿色重点：正确方法</span>，<span style="color:#f59e0b; font-weight:600;">橙色重点：注意事项</span>。
</p>
```

---

### 3. 圆角标签徽章

**实时预览：**

<p style="margin-bottom:16px;">
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#eff6ff;color:#2563eb;margin-right:6px;">知识点</span>
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#f0fdf4;color:#059669;margin-right:6px;">已掌握</span>
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#fef2f2;color:#d93025;margin-right:6px;">重难点</span>
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#fffbeb;color:#f59e0b;">待复习</span>
</p>

**纯净源码：**

```html
<p style="margin-bottom:16px;">
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#eff6ff;color:#2563eb;margin-right:6px;">知识点</span>
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#f0fdf4;color:#059669;margin-right:6px;">已掌握</span>
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#fef2f2;color:#d93025;margin-right:6px;">重难点</span>
<span style="display:inline-block;padding:2px 10px;border-radius:12px;font-size:13px;background:#fffbeb;color:#f59e0b;">待复习</span>
</p>
```

---

### 4. 渐变霓虹文字

**实时预览：**

<p style="font-size:26px; font-weight:bold; text-align:center; background:linear-gradient(90deg,#2563eb,#8b5cf6); -webkit-background-clip:text; color:transparent; margin:20px 0;">
✨ 博客渐变主标题｜高级质感拉满
</p>

**纯净源码：**

```html
<p style="font-size:26px; font-weight:bold; text-align:center; background:linear-gradient(90deg,#2563eb,#8b5cf6); -webkit-background-clip:text; color:transparent; margin:20px 0;">
✨ 博客渐变主标题｜高级质感拉满
</p>
```

---

### 5. 立体阴影文字

**实时预览：**

<p style="font-size:20px; font-weight:bold; color:#333; text-shadow:1px 2px 3px rgba(0,0,0,0.15); text-align:center; margin-bottom:16px;">
立体阴影标题｜更有层次感
</p>

**纯净源码：**

```html
<p style="font-size:20px; font-weight:bold; color:#333; text-shadow:1px 2px 3px rgba(0,0,0,0.15); text-align:center; margin-bottom:16px;">
立体阴影标题｜更有层次感
</p>
```

---

### 6. 居中高级小节标题

**实时预览：**

<p style="font-size:19px; font-weight:600; text-align:center; color:#222; margin:24px 0 12px; padding-bottom:8px; border-bottom:2px solid #eef2f7;">
一、这里是文章小节标题
</p>

**纯净源码：**

```html
<p style="font-size:19px; font-weight:600; text-align:center; color:#222; margin:24px 0 12px; padding-bottom:8px; border-bottom:2px solid #eef2f7;">
一、这里是文章小节标题
</p>
```

---

### 7. 居中引言/结语段落

**实时预览：**

<p style="text-align:center; line-height:1.8; color:#555; font-size:15px; margin:20px 0;">
本段落适用于文章开头引言、结尾感悟、随笔小结，居中排版更加文艺、规整、有氛围感。
</p>

**纯净源码：**

```html
<p style="text-align:center; line-height:1.8; color:#555; font-size:15px; margin:20px 0;">
本段落适用于文章开头引言、结尾感悟、随笔小结，居中排版更加文艺、规整、有氛围感。
</p>
```

---

### 8. 极简文艺引用块

**实时预览：**

<div style="padding:10px 14px; background:#fdfdfd; border-radius:6px; margin:14px 0;">
<p style="margin:0; color:#444; line-height:1.7; font-style:italic;">
极简文艺引用，无粗边框、无高饱和底色，适合散文、随笔、观点类博客，质感干净高级。
</p>
</div>

**纯净源码：**

```html
<div style="padding:10px 14px; background:#fdfdfd; border-radius:6px; margin:14px 0;">
<p style="margin:0; color:#444; line-height:1.7; font-style:italic;">
极简文艺引用，无粗边框、无高饱和底色，适合散文、随笔、观点类博客，质感干净高级。
</p>
</div>
```

---

## 二、提示卡片与重点高亮（9-17）

### 9. 蓝色信息提示卡片

**实时预览：**

<div style="border-left:4px solid #2563eb;background:#eff6ff;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#1e40af;"><strong>💡 知识点提示</strong><br/>这里放置博客核心干货、原理讲解、补充说明，样式干净高级，比原生引用块颜值高很多。</p>
</div>

**纯净源码：**

```html
<div style="border-left:4px solid #2563eb;background:#eff6ff;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#1e40af;"><strong>💡 知识点提示</strong><br/>这里放置博客核心干货、原理讲解、补充说明，样式干净高级，比原生引用块颜值高很多。</p>
</div>
```

---

### 10. 绿色总结成功卡片

**实时预览：**

<div style="border-left:4px solid #059669;background:#f0fdf4;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#065f46;"><strong>✅ 总结结论</strong><br/>用于放置文章结论、复盘总结、正确方法、最终方案，阅读体验清爽舒适。</p>
</div>

**纯净源码：**

```html
<div style="border-left:4px solid #059669;background:#f0fdf4;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#065f46;"><strong>✅ 总结结论</strong><br/>用于放置文章结论、复盘总结、正确方法、最终方案，阅读体验清爽舒适。</p>
</div>
```

---

### 11. 橙色注意事项卡片

**实时预览：**

<div style="border-left:4px solid #f59e0b;background:#fffbeb;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#92400e;"><strong>⚠️ 注意事项</strong><br/>记录易错点、使用前提、操作注意、前置条件，提醒读者规避常规问题。</p>
</div>

**纯净源码：**

```html
<div style="border-left:4px solid #f59e0b;background:#fffbeb;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#92400e;"><strong>⚠️ 注意事项</strong><br/>记录易错点、使用前提、操作注意、前置条件，提醒读者规避常规问题。</p>
</div>
```

---

### 12. 红色风险警告卡片

**实时预览：**

<div style="border-left:4px solid #d93025;background:#fef2f2;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#991b1b;"><strong>❌ 风险警告</strong><br/>重点禁忌、错误示范、严重误区、不推荐操作，醒目提醒，避免踩坑。</p>
</div>

**纯净源码：**

```html
<div style="border-left:4px solid #d93025;background:#fef2f2;padding:14px 16px;border-radius:0 10px 10px 0;margin:16px 0;">
<p style="margin:0;line-height:1.7;color:#991b1b;"><strong>❌ 风险警告</strong><br/>重点禁忌、错误示范、严重误区、不推荐操作，醒目提醒，避免踩坑。</p>
</div>
```

---

### 13. 纯色高亮背景块

**实时预览：**

<p style="background:#f8fafc; padding:12px 16px; border-radius:8px; line-height:1.8; color:#333; margin-bottom:16px;">
本段为重点兜底内容，适合放置定义、核心总结、金句、干货浓缩。底色柔和不抢视线，比彩色卡片更低调高级，适合正文大面积使用。
</p>

**纯净源码：**

```html
<p style="background:#f8fafc; padding:12px 16px; border-radius:8px; line-height:1.8; color:#333; margin-bottom:16px;">
本段为重点兜底内容，适合放置定义、核心总结、金句、干货浓缩。底色柔和不抢视线，比彩色卡片更低调高级，适合正文大面积使用。
</p>
```

---

### 14. 侧边竖标重点块

**实时预览：**

<div style="padding:12px 16px; background:#f8fafc; border-radius:8px; border-left:6px solid #6366f1; margin:16px 0;">
<p style="margin:0; color:#333; line-height:1.7;"><strong>核心金句：</strong>这里放置整篇博客最核心的观点、总结、金句，侧边粗边高亮，视觉聚焦、阅读重点一眼锁定。</p>
</div>

**纯净源码：**

```html
<div style="padding:12px 16px; background:#f8fafc; border-radius:8px; border-left:6px solid #6366f1; margin:16px 0;">
<p style="margin:0; color:#333; line-height:1.7;"><strong>核心金句：</strong>这里放置整篇博客最核心的观点、总结、金句，侧边粗边高亮，视觉聚焦、阅读重点一眼锁定。</p>
</div>
```

---

### 15. 交互式高亮引用块

**实时预览：**

<div style="display:flex; align-items:flex-start; gap:12px; background:#eff6ff; padding:16px 20px; border-radius:10px; margin:16px 0;">
  <span style="font-size:24px; line-height:1;">💡</span>
  <p style="margin:0; color:#1e40af; line-height:1.7; font-size:15px;"><strong>核心观点：</strong>好的博客排版不是为了炫技，而是为了降低读者的认知负荷。用 HTML 弥补 Markdown 的不足，才是正确的写作姿势。</p>
</div>

**纯净源码：**

```html
<div style="display:flex; align-items:flex-start; gap:12px; background:#eff6ff; padding:16px 20px; border-radius:10px; margin:16px 0;">
  <span style="font-size:24px; line-height:1;">💡</span>
  <p style="margin:0; color:#1e40af; line-height:1.7; font-size:15px;"><strong>核心观点：</strong>好的博客排版不是为了炫技，而是为了降低读者的认知负荷。用 HTML 弥补 Markdown 的不足，才是正确的写作姿势。</p>
</div>
```

---

### 16. 悬浮立体内容卡片

**实时预览：**

<div style="padding:20px; background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08); margin:18px 0;">
<p style="font-size:17px; font-weight:bold; color:#333; margin:0 0 10px 0;">📖 立体悬浮内容卡片</p>
<p style="margin:0; line-height:1.7; color:#555;">自带柔和阴影、立体浮空质感，是现代博客最主流的卡片样式，干净高级、不刺眼、适配所有文章模块。</p>
</div>

**纯净源码：**

```html
<div style="padding:20px; background:#ffffff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.08); margin:18px 0;">
<p style="font-size:17px; font-weight:bold; color:#333; margin:0 0 10px 0;">📖 立体悬浮内容卡片</p>
<p style="margin:0; line-height:1.7; color:#555;">自带柔和阴影、立体浮空质感，是现代博客最主流的卡片样式，干净高级、不刺眼、适配所有文章模块。</p>
</div>
```

---

### 17. 高级渐变分割线

**实时预览：**

<hr style="height:1px;border:none;background:linear-gradient(to right,transparent,#cbd5e1,transparent);margin:26px 0;">

**纯净源码：**

```html
<hr style="height:1px;border:none;background:linear-gradient(to right,transparent,#cbd5e1,transparent);margin:26px 0;">
```

---

## 三、布局与分栏展示（18-23）

### 18. 双列分栏布局

**实时预览：**

<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:16px 0;">
<div style="background:#f8fafc;padding:16px;border-radius:10px;">
<p style="font-weight:bold;color:#2563eb;margin:0 0 8px 0;">✅ 优点优势</p>
<p style="margin:0;line-height:1.7;color:#333;">结构清晰、排版高级、对比直观，适合博客优缺点、方案对比、知识点对照展示。</p>
</div>
<div style="background:#f8fafc;padding:16px;border-radius:10px;">
<p style="font-weight:bold;color:#d93025;margin:0 0 8px 0;">❌ 缺点局限</p>
<p style="margin:0;line-height:1.7;color:#333;">纯原生 Markdown 无法实现分栏，必须使用合规 HTML 布局，适配所有主流博客平台。</p>
</div>
</div>

**纯净源码：**

```html
<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:16px 0;">
<div style="background:#f8fafc;padding:16px;border-radius:10px;">
<p style="font-weight:bold;color:#2563eb;margin:0 0 8px 0;">✅ 优点优势</p>
<p style="margin:0;line-height:1.7;color:#333;">结构清晰、排版高级、对比直观，适合博客优缺点、方案对比、知识点对照展示。</p>
</div>
<div style="background:#f8fafc;padding:16px;border-radius:10px;">
<p style="font-weight:bold;color:#d93025;margin:0 0 8px 0;">❌ 缺点局限</p>
<p style="margin:0;line-height:1.7;color:#333;">纯原生 Markdown 无法实现分栏，必须使用合规 HTML 布局，适配所有主流博客平台。</p>
</div>
</div>
```

---

### 19. 响应式三列特性展示

**实时预览：**

<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; margin:20px 0;">
  <div style="background:#f8fafc; padding:20px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
    <div style="font-size:28px; margin-bottom:8px;">🚀</div>
    <p style="font-weight:bold; color:#1e293b; margin:0 0 6px 0;">极速部署</p>
    <p style="margin:0; font-size:14px; color:#64748b; line-height:1.6;">一键生成静态页面，秒级发布上线</p>
  </div>
  <div style="background:#f8fafc; padding:20px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
    <div style="font-size:28px; margin-bottom:8px;">🛡️</div>
    <p style="font-weight:bold; color:#1e293b; margin:0 0 6px 0;">安全可靠</p>
    <p style="margin:0; font-size:14px; color:#64748b; line-height:1.6;">原生HTML标签，无恶意脚本注入</p>
  </div>
  <div style="background:#f8fafc; padding:20px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
    <div style="font-size:28px; margin-bottom:8px;">🎨</div>
    <p style="font-weight:bold; color:#1e293b; margin:0 0 6px 0;">高度定制</p>
    <p style="margin:0; font-size:14px; color:#64748b; line-height:1.6;">行内样式精准控制，所见即所得</p>
  </div>
</div>

**纯净源码：**

```html
<div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:16px; margin:20px 0;">
  <div style="background:#f8fafc; padding:20px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
    <div style="font-size:28px; margin-bottom:8px;">🚀</div>
    <p style="font-weight:bold; color:#1e293b; margin:0 0 6px 0;">极速部署</p>
    <p style="margin:0; font-size:14px; color:#64748b; line-height:1.6;">一键生成静态页面，秒级发布上线</p>
  </div>
  <div style="background:#f8fafc; padding:20px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
    <div style="font-size:28px; margin-bottom:8px;">🛡️</div>
    <p style="font-weight:bold; color:#1e293b; margin:0 0 6px 0;">安全可靠</p>
    <p style="margin:0; font-size:14px; color:#64748b; line-height:1.6;">原生HTML标签，无恶意脚本注入</p>
  </div>
  <div style="background:#f8fafc; padding:20px; border-radius:12px; text-align:center; border:1px solid #e2e8f0;">
    <div style="font-size:28px; margin-bottom:8px;">🎨</div>
    <p style="font-weight:bold; color:#1e293b; margin:0 0 6px 0;">高度定制</p>
    <p style="margin:0; font-size:14px; color:#64748b; line-height:1.6;">行内样式精准控制，所见即所得</p>
  </div>
</div>
```

---

### 20. 步骤流程卡

**实时预览：**

<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin:20px 0;">
<div style="background:#eff6ff; padding:15px; border-radius:10px; text-align:center;">
<p style="font-weight:bold; color:#2563eb; margin:0 0 6px 0;">步骤 1</p>
<p style="margin:0; font-size:14px; color:#333;">前期准备工作</p>
</div>
<div style="background:#f0fdf4; padding:15px; border-radius:10px; text-align:center;">
<p style="font-weight:bold; color:#059669; margin:0 0 6px 0;">步骤 2</p>
<p style="margin:0; font-size:14px; color:#333;">正式操作执行</p>
</div>
<div style="background:#fffbeb; padding:15px; border-radius:10px; text-align:center;">
<p style="font-weight:bold; color:#f59e0b; margin:0 0 6px 0;">步骤 3</p>
<p style="margin:0; font-size:14px; color:#333;">结果验收复盘</p>
</div>
</div>

**纯净源码：**

```html
<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin:20px 0;">
<div style="background:#eff6ff; padding:15px; border-radius:10px; text-align:center;">
<p style="font-weight:bold; color:#2563eb; margin:0 0 6px 0;">步骤 1</p>
<p style="margin:0; font-size:14px; color:#333;">前期准备工作</p>
</div>
<div style="background:#f0fdf4; padding:15px; border-radius:10px; text-align:center;">
<p style="font-weight:bold; color:#059669; margin:0 0 6px 0;">步骤 2</p>
<p style="margin:0; font-size:14px; color:#333;">正式操作执行</p>
</div>
<div style="background:#fffbeb; padding:15px; border-radius:10px; text-align:center;">
<p style="font-weight:bold; color:#f59e0b; margin:0 0 6px 0;">步骤 3</p>
<p style="margin:0; font-size:14px; color:#333;">结果验收复盘</p>
</div>
</div>
```

---

### 21. 斑马纹美化表格

**实时预览：**

<table width="100%" style="border-collapse:collapse;border:none;margin:16px 0;">
<tr style="background:#f1f5f9;">
<th style="padding:10px;border:none;color:#333;">排版方式</th>
<th style="padding:10px;border:none;color:#333;">颜值表现</th>
<th style="padding:10px;border:none;color:#333;">适用场景</th>
</tr>
<tr>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">纯 Markdown</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">朴素、单调</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">草稿、速记</td>
</tr>
<tr style="background:#fafafa;">
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">Markdown+HTML</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">精致、高级、干净</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">正式博客、推文、教程</td>
</tr>
</table>

**纯净源码：**

```html
<table width="100%" style="border-collapse:collapse;border:none;margin:16px 0;">
<tr style="background:#f1f5f9;">
<th style="padding:10px;border:none;color:#333;">排版方式</th>
<th style="padding:10px;border:none;color:#333;">颜值表现</th>
<th style="padding:10px;border:none;color:#333;">适用场景</th>
</tr>
<tr>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">纯 Markdown</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">朴素、单调</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">草稿、速记</td>
</tr>
<tr style="background:#fafafa;">
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">Markdown+HTML</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">精致、高级、干净</td>
<td style="padding:10px;border:none;border-bottom:1px solid #eee;">正式博客、推文、教程</td>
</tr>
</table>
```

---

### 22. 美化图片样式

**实时预览：**

<p align="center">
<img src="" style="border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.1); max-width:100%;" alt="配图示例">
<small style="color:#666;">图：博客配图说明文字（自行替换图片链接）</small>
</p>

**纯净源码：**

```html
<p align="center">
<img src="" style="border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.1); max-width:100%;" alt="配图示例">
<small style="color:#666;">图：博客配图说明文字（自行替换图片链接）</small>
</p>
```

---

### 23. 小字注释、备注样式

**实时预览：**

<p style="font-size:13px; color:#888; line-height:1.6; margin-top:8px;">
* 备注：此处为补充说明、版本注释、来源标注、免责说明，字体更小、颜色更淡，不抢正文视觉重心，博客排版极致规范。
</p>

**纯净源码：**

```html
<p style="font-size:13px; color:#888; line-height:1.6; margin-top:8px;">
* 备注：此处为补充说明、版本注释、来源标注、免责说明，字体更小、颜色更淡，不抢正文视觉重心，博客排版极致规范。
</p>
```

---

## 四、交互与收纳模块（24-29）

### 24. 折叠展开收纳模块

**实时预览：**

<details style="background:#f8fafc;padding:14px;border-radius:10px;margin:16px 0;">
<summary style="cursor:pointer;font-weight:600;color:#2563eb;">📌 点击展开：查看详细拓展内容</summary>
<p style="margin-top:12px;line-height:1.7;color:#475569;">这里可以放长内容、详细原理、多余科普、附录、参数明细、延伸阅读。默认折叠，页面干净整洁，读者想看再点开，极大提升博客阅读体验。</p>
</details>

**纯净源码：**

```html
<details style="background:#f8fafc;padding:14px;border-radius:10px;margin:16px 0;">
<summary style="cursor:pointer;font-weight:600;color:#2563eb;">📌 点击展开：查看详细拓展内容</summary>
<p style="margin-top:12px;line-height:1.7;color:#475569;">这里可以放长内容、详细原理、多余科普、附录、参数明细、延伸阅读。默认折叠，页面干净整洁，读者想看再点开，极大提升博客阅读体验。</p>
</details>
```

---

### 25. 渐变霓虹按钮

**实时预览：**

<div style="margin:20px 0; text-align:center;">
<a href="#" style="display:inline-block; padding:12px 30px; background:linear-gradient(90deg, #2563eb, #8b5cf6); color:#fff; text-decoration:none; border-radius:30px; font-weight:bold; box-shadow:0 4px 15px rgba(37, 99, 235, 0.3); transition:all 0.3s;">🚀 获取完整源码</a>
</div>

**纯净源码：**

```html
<div style="margin:20px 0; text-align:center;">
<a href="#" style="display:inline-block; padding:12px 30px; background:linear-gradient(90deg, #2563eb, #8b5cf6); color:#fff; text-decoration:none; border-radius:30px; font-weight:bold; box-shadow:0 4px 15px rgba(37, 99, 235, 0.3); transition:all 0.3s;">🚀 获取完整源码</a>
</div>
```

---

### 26. 极简文字超链接

**实时预览：**

<p style="margin-bottom:16px;">
这是一个 <a href="#" style="color:#2563eb; text-decoration:none; border-bottom:1px solid #2563eb; transition:0.3s;">带有下划线的高亮链接</a>，鼠标悬停时会有更好的视觉反馈。
</p>

**纯净源码：**

```html
<p style="margin-bottom:16px;">
这是一个 <a href="#" style="color:#2563eb; text-decoration:none; border-bottom:1px solid #2563eb; transition:0.3s;">带有下划线的高亮链接</a>，鼠标悬停时会有更好的视觉反馈。
</p>
```

---

### 27. 带边框的下载/操作按钮

**实时预览：**

<div style="margin:16px 0; text-align:center;">
<a href="#" style="display:inline-block; padding:10px 24px; border:2px solid #059669; color:#059669; text-decoration:none; border-radius:8px; font-weight:bold; transition:0.3s;">📥 下载附件</a>
</div>

**纯净源码：**

```html
<div style="margin:16px 0; text-align:center;">
<a href="#" style="display:inline-block; padding:10px 24px; border:2px solid #059669; color:#059669; text-decoration:none; border-radius:8px; font-weight:bold; transition:0.3s;">📥 下载附件</a>
</div>
```

---

### 28. 交互式复选框

**实时预览：**

<div style="background:#fff; padding:16px; border-radius:10px; border:1px solid #e2e8f0; margin:16px 0;">
<p style="margin:0 0 8px; color:#334155;"><input type="checkbox" checked style="margin-right:8px; accent-color:#059669;"> 已完成：博客基础架构搭建</p>
<p style="margin:0 0 8px; color:#334155;"><input type="checkbox" style="margin-right:8px; accent-color:#059669;"> 待处理：配置 SEO 标签</p>
<p style="margin:0; color:#334155;"><input type="checkbox" style="margin-right:8px; accent-color:#059669;"> 待处理：编写第一篇教程</p>
</div>

**纯净源码：**

```html
<div style="background:#fff; padding:16px; border-radius:10px; border:1px solid #e2e8f0; margin:16px 0;">
<p style="margin:0 0 8px; color:#334155;"><input type="checkbox" checked style="margin-right:8px; accent-color:#059669;"> 已完成：博客基础架构搭建</p>
<p style="margin:0 0 8px; color:#334155;"><input type="checkbox" style="margin-right:8px; accent-color:#059669;"> 待处理：配置 SEO 标签</p>
<p style="margin:0; color:#334155;"><input type="checkbox" style="margin-right:8px; accent-color:#059669;"> 待处理：编写第一篇教程</p>
</div>
```

---

### 29. 密码/敏感信息遮挡块

**实时预览：**

<div style="background:#1e293b; color:#94a3b8; padding:12px 16px; border-radius:8px; font-family:monospace; margin:16px 0;">
🔒 敏感密钥：<span style="background:#334155; padding:2px 6px; border-radius:4px; user-select:none;">***************</span>
<br/>🔒 接口地址：<span style="background:#334155; padding:2px 6px; border-radius:4px; user-select:none;">***************</span>
</div>

<div style="background:#1e293b; color:#94a3b8; padding:12px 16px; border-radius:8px; font-family:monospace; margin:16px 0;">
🔒 敏感信息：[已隐藏] 请使用安全方式获取密钥。
</div>

**纯净源码：**

```html
<div style="background:#1e293b; color:#94a3b8; padding:12px 16px; border-radius:8px; font-family:monospace; margin:16px 0;">
🔒 敏感密钥：<span style="background:#334155; padding:2px 6px; border-radius:4px; user-select:none;">***************</span>
<br/>🔒 接口地址：<span style="background:#334155; padding:2px 6px; border-radius:4px; user-select:none;">***************</span>
</div>

<div style="background:#1e293b; color:#94a3b8; padding:12px 16px; border-radius:8px; font-family:monospace; margin:16px 0;">
🔒 敏感信息：[已隐藏] 请使用安全方式获取密钥。
</div>
```

---

## 五、代码与数据展示（30-35）

### 30. 高级代码展示框

**实时预览：**

<div style="border-radius:8px; overflow:hidden; margin:16px 0; border:1px solid #e2e8f0;">
<div style="background:#f1f5f9; padding:8px 14px; display:flex; align-items:center; gap:6px;">
<span style="width:10px; height:10px; border-radius:50%; background:#f87171;"></span>
<span style="width:10px; height:10px; border-radius:50%; background:#facc15;"></span>
<span style="width:10px; height:10px; border-radius:50%; background:#4ade80;"></span>
<span style="margin-left:10px; font-size:12px; color:#64748b; font-family:monospace;">index.js</span>
</div>
<pre style="background:#0f172a; color:#e2e8f0; padding:16px; margin:0; font-size:14px; line-height:1.7;"><code>// 博客美化组件加载函数
console.log("博客美化组件加载成功");
function useBlogStyle() {
  return "高级排版，一键复用";
}
// 初始化样式
useBlogStyle();</code></pre>
</div>

**纯净源码：**

```html
<div style="border-radius:8px; overflow:hidden; margin:16px 0; border:1px solid #e2e8f0;">
<div style="background:#f1f5f9; padding:8px 14px; display:flex; align-items:center; gap:6px;">
<span style="width:10px; height:10px; border-radius:50%; background:#f87171;"></span>
<span style="width:10px; height:10px; border-radius:50%; background:#facc15;"></span>
<span style="width:10px; height:10px; border-radius:50%; background:#4ade80;"></span>
<span style="margin-left:10px; font-size:12px; color:#64748b; font-family:monospace;">index.js</span>
</div>
<pre style="background:#0f172a; color:#e2e8f0; padding:16px; margin:0; font-size:14px; line-height:1.7;"><code>// 博客美化组件加载函数
console.log("博客美化组件加载成功");
function useBlogStyle() {
  return "高级排版，一键复用";
}
// 初始化样式
useBlogStyle();</code></pre>
</div>
```

---

### 31. 单行代码高亮

**实时预览：**

<p>日常写作中，行内代码用于标记关键词、属性、命令，例如 <code style="background:#f4f5f7;padding:2px 6px;border-radius:4px;color:#d93025;font-weight:500;font-family:monospace;">background:#2563eb</code>、<code style="background:#f4f5f7;padding:2px 6px;border-radius:4px;color:#d93025;font-weight:500;font-family:monospace;">border-radius:8px</code>，样式简约精致，不突兀、适配所有正文场景。</p>

**纯净源码：**

```html
<p>日常写作中，行内代码用于标记关键词、属性、命令，例如 <code style="background:#f4f5f7;padding:2px 6px;border-radius:4px;color:#d93025;font-weight:500;font-family:monospace;">background:#2563eb</code>、<code style="background:#f4f5f7;padding:2px 6px;border-radius:4px;color:#d93025;font-weight:500;font-family:monospace;">border-radius:8px</code>，样式简约精致，不突兀、适配所有正文场景。</p>
```

---

### 32. 带行号代码块

**实时预览：**

<div style="border-radius:8px; overflow:hidden; border:1px solid #e5e7eb; margin:16px 0;">
<pre style="background:#1f2937; color:#f3f4f6; padding:16px; margin:0; font-size:14px; line-height:1.8;"><code>1  // 初始化博客样式
2  import style from "blog-css"
3  // 开启高级排版模式
4  style.openHighLevelMode()
5  // 双端自适应适配
6  style.setMobilePcAdapt()</code></pre>
</div>

**纯净源码：**

```html
<div style="border-radius:8px; overflow:hidden; border:1px solid #e5e7eb; margin:16px 0;">
<pre style="background:#1f2937; color:#f3f4f6; padding:16px; margin:0; font-size:14px; line-height:1.8;"><code>1  // 初始化博客样式
2  import style from "blog-css"
3  // 开启高级排版模式
4  style.openHighLevelMode()
5  // 双端自适应适配
6  style.setMobilePcAdapt()</code></pre>
</div>
```

---

### 33. 代码注释高亮区分

**实时预览：**

<div style="border-radius:8px; overflow:hidden; margin:16px 0;">
<pre style="background:#0f172a; padding:16px; margin:0;"><code style="color:#94a3b8;">/* 这是注释说明：适配所有博客平台、Obsidian、公众号 */</code><code style="color:#cbd5e1;">
const blogConfig = {
  theme: "light",    // 浅色主题
  layout: "high-level", // 高级排版布局
  adapt: true        // 开启双端适配
}
</code></pre>
</div>

**纯净源码：**

```html
<div style="border-radius:8px; overflow:hidden; margin:16px 0;">
<pre style="background:#0f172a; padding:16px; margin:0;"><code style="color:#94a3b8;">/* 这是注释说明：适配所有博客平台、Obsidian、公众号 */</code><code style="color:#cbd5e1;">
const blogConfig = {
  theme: "light",    // 浅色主题
  layout: "high-level", // 高级排版布局
  adapt: true        // 开启双端适配
}
</code></pre>
</div>
```

---

### 34. 数据参数展示块

**实时预览：**

<div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0;">
<p style="margin:0 0 8px 0; font-weight:bold; color:#222;">📋 组件配置参数</p>
<p style="margin:0; line-height:1.7; color:#444;"><strong>适配平台：</strong>Obsidian / 个人博客 / 公众号 / 静态网站<br/><strong>样式类型：</strong>纯行内HTML，无依赖、无JS<br/><strong>兼容特性：</strong>手机/电脑双端自适应</p>
</div>

**纯净源码：**

```html
<div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; padding:16px; margin:16px 0;">
<p style="margin:0 0 8px 0; font-weight:bold; color:#222;">📋 组件配置参数</p>
<p style="margin:0; line-height:1.7; color:#444;"><strong>适配平台：</strong>Obsidian / 个人博客 / 公众号 / 静态网站<br/><strong>样式类型：</strong>纯行内HTML，无依赖、无JS<br/><strong>兼容特性：</strong>手机/电脑双端自适应</p>
</div>
```

---

### 35. 错误代码提示块

**实时预览：**

<div style="background:#fef2f2; border-left:4px solid #d93025; border-radius:0 8px 8px 0; padding:16px; margin:16px 0;">
<p style="margin:0 0 10px 0; font-weight:bold; color:#991b1b;">❌ 代码报错提示</p>
<pre style="margin:0; background:#fff; border-radius:4px; padding:10px;"><code style="color:#d93025;">Error: 样式参数缺失
Cause: 未配置行高与字体参数</code></pre>
</div>

**纯净源码：**

```html
<div style="background:#fef2f2; border-left:4px solid #d93025; border-radius:0 8px 8px 0; padding:16px; margin:16px 0;">
<p style="margin:0 0 10px 0; font-weight:bold; color:#991b1b;">❌ 代码报错提示</p>
<pre style="margin:0; background:#fff; border-radius:4px; padding:10px;"><code style="color:#d93025;">Error: 样式参数缺失
Cause: 未配置行高与字体参数</code></pre>
</div>
```

---

## 六、全局使用说明

**实时预览：**

<p style="text-indent:2em; line-height:1.8; color:#333; font-size:15px; margin-bottom:16px;">
本套共计35款完整版博客美化组件，全覆盖基础排版、高亮提示、布局分栏、交互收纳、代码展示五大核心场景，全部采用纯行内HTML样式，无外部CSS依赖、无JavaScript脚本，零污染、零代码冲突，兼容性拉满。所有组件均经过双端适配测试，完美适配移动端、桌面端，兼容Obsidian笔记、个人博客、公众号编辑器、静态网页、技术文档等绝大多数写作场景。使用方式极简，直接复制对应组件下方的纯净源码，粘贴即可实时生效，无需额外配置、无需调试。
</p>

<p style="text-indent:2em; line-height:1.8; color:#333; font-size:15px; margin-bottom:16px;">
💡 通用优化技巧：所有颜色、圆角、边距参数均可自由修改，可根据自己博客主题色调，统一替换主色值，打造专属统一的页面风格，大幅提升文章精致度与阅读体验。
</p>

**纯净源码：**

```html
<p style="text-indent:2em; line-height:1.8; color:#333; font-size:15px; margin-bottom:16px;">
本套共计35款完整版博客美化组件，全覆盖基础排版、高亮提示、布局分栏、交互收纳、代码展示五大核心场景，全部采用纯行内HTML样式，无外部CSS依赖、无JavaScript脚本，零污染、零代码冲突，兼容性拉满。所有组件均经过双端适配测试，完美适配移动端、桌面端，兼容Obsidian笔记、个人博客、公众号编辑器、静态网页、技术文档等绝大多数写作场景。使用方式极简，直接复制对应组件下方的纯净源码，粘贴即可实时生效，无需额外配置、无需调试。
</p>

<p style="text-indent:2em; line-height:1.8; color:#333; font-size:15px; margin-bottom:16px;">
💡 通用优化技巧：所有颜色、圆角、边距参数均可自由修改，可根据自己博客主题色调，统一替换主色值，打造专属统一的页面风格，大幅提升文章精致度与阅读体验。
</p>
```