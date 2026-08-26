---
title: Markdown 使用教程
published: 1970-01-01
description: 一个包含 Mermaid 的 Markdown 博客文章简单示例。
tags: [Markdown, 博客, Mermaid, Firefly]
category: 文章示例
draft: false
---

## Markdown 中 Mermaid 图表完整指南

本文演示如何在 Markdown 文档中使用 Mermaid 创建各种复杂图表，包括流程图、时序图、甘特图、类图和状态图。

## 流程图示例

流程图非常适合表示流程或算法步骤。

```mermaid
flowchart TD
    A[开始] --> B{条件判断}
    B -->|是| C[执行操作A]
    B -->|否| D[执行操作B]
    C --> E[结束]
    D --> E
```

## 时序图示例

时序图用于展示对象之间的交互顺序。

```mermaid
sequenceDiagram
    participant 用户
    participant 系统
    participant 数据库

    用户->>系统: 请求登录
    系统->>数据库: 查询用户信息
    数据库-->>系统: 返回用户数据
    系统->>系统: 验证密码
    系统-->>用户: 登录成功
```

## 甘特图示例

甘特图用于项目进度管理。

```mermaid
gantt
    title 项目开发计划
    dateFormat  YYYY-MM-DD
    section 设计
    需求分析     :done,    des1, 2024-01-01, 3d
    架构设计     :done,    des2, 2024-01-04, 5d
    section 开发
    前端开发     :active,  dev1, 2024-01-09, 10d
    后端开发     :          dev2, 2024-01-09, 10d
    section 测试
    单元测试     :          test1, 2024-01-19, 5d
    集成测试     :          test2, 2024-01-24, 5d
```

## 类图示例

类图用于展示类之间的关系。

```mermaid
classDiagram
    class 用户 {
        -姓名: string
        -邮箱: string
        +登录()
        +退出()
    }
    class 文章 {
        -标题: string
        -内容: string
        +发布()
        +编辑()
    }
    用户 "1" --> "*" 文章 : 发布
```

## 状态图示例

状态图用于展示对象的状态变化。

```mermaid
stateDiagram-v2
    [*] --> 草稿
    草稿 --> 审核中 : 提交
    审核中 --> 已发布 : 通过
    审核中 --> 草稿 : 退回
    已发布 --> [*]
```

## 使用方法

在 Firefly 博客中，您只需在 Markdown 代码块中使用 `mermaid` 语言标识，即可渲染 Mermaid 图表：

```markdown
```mermaid
flowchart TD
    A[开始] --> B[结束]
```
```

Firefly 会自动处理 Mermaid 图表的渲染，支持亮暗主题切换，并提供图表的缩放和拖拽功能。
