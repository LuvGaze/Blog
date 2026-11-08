import type {AnnouncementConfig, AnnouncementPopupConfig} from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
    // 公告标题
    title: "公告",

    // 公告内容
    content: "欢迎 ~ ",

    // 是否允许用户关闭公告
    closable: false,

    link: {
        // 启用链接
        enable: true,
        // 链接文本
        text: "了解更多",
        // 链接 URL
        url: "/changelog/",
        // 内部链接
        external: false,
    },
};

export const announcementPopupConfig: AnnouncementPopupConfig = {
    // 是否启用首次访问弹窗公告
    enable: false,

    // 弹窗标题
    title: "欢迎来访",

    // 弹窗内容，支持换行
    content:
        "这是你第一次来到我的博客，希望你能在这里找到感兴趣的内容 ~\n" +
        "此弹窗仅在首次访问时出现，关闭后不会再打扰你。",

    // 弹窗图标（留空则不显示）
    icon: "fa7-solid:bullhorn",

    // 是否显示关闭按钮
    closable: true,

    // 自动关闭时间（秒），0 表示不自动关闭，需要手动点击关闭
    autoCloseSeconds: 10,

    link: {
        // 启用链接
        enable: true,
        // 链接文本
        text: "看看更新日志",
        // 链接 URL
        url: "/changelog/",
        // 内部链接
        external: false,
    },
};
