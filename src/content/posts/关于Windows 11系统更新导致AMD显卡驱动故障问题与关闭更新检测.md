---
title: 关于Windows 11系统更新导致AMD显卡驱动故障问题与关闭更新检测
published: 2024-11-06
pinned: false
description: ""
category: 电脑系统优化
draft: false
image: api
encrypted: false
tags: [Windows, AMD]
---

驱动恢复

先去官网重新下载驱动-----[处理器和显卡驱动程序及支持](https://www.amd.com/zh-cn/support/download/drivers.html)

安装的时候选择重置驱动

windows更新检测关闭

按下Win+R，输入 regedit 回车进入注册表编辑器界面，找到以下路径

HKEY_LOCAL_MACHINESOFTWAREMicrosoftWindowsCurrentVersionDriverSearching

双击SearchOrderConfig键值，将原来的 1 改为 0 即可