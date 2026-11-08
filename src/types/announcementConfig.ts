export type AnnouncementConfig = {
    // enable属性已移除，现在通过sidebarLayoutConfig统一控制
    title?: string; // 公告栏标题
    content: string; // 公告栏内容
    icon?: string; // 公告栏图标
    type?: "info" | "warning" | "success" | "error"; // 公告类型
    closable?: boolean; // 是否可关闭
    link?: {
        enable: boolean; // 是否启用链接
        text: string; // 链接文字
        url: string; // 链接地址
        external?: boolean; // 是否外部链接
    };
};

export type AnnouncementPopupConfig = {
    enable: boolean; // 是否启用首次访问弹窗
    title?: string; // 弹窗标题
    content: string; // 弹窗内容
    icon?: string; // 弹窗图标
    closable?: boolean; // 是否显示关闭按钮
    autoCloseSeconds?: number; // 自动关闭时间（秒），0 表示不自动关闭
    link?: {
        enable: boolean; // 是否启用链接
        text: string; // 链接文字
        url: string; // 链接地址
        external?: boolean; // 是否外部链接
    };
};
