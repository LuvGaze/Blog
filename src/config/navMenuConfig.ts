/**
 * 导航菜单配置（后台「导航菜单」可编辑，专用树形编辑器）
 * 整棵导航树都在这里定义：父菜单与子项均可 增删/排序/改名/显隐/配图标/外链/关联功能开关。
 * - 每个节点的 enabled 为「手动显隐」，被关闭的节点及其子级都不显示；
 * - 可选的 pageKey 关联 siteConfig.pages 功能开关（如 friends/circle），
 *   当对应页面开关为 false 时，即使 enabled=true 也不再显示（与 Navbar 过滤逻辑一致）；
 * - 修改后需重新 build 生效。
 */
export interface NavMenuNode {
    /** 菜单显示名 */
    name: string;
    /** 跳转地址（站内路径或 https:// 外链） */
    url: string;
    /** 图标（iconify 名，如 material-symbols:home） */
    icon?: string;
    /** 是否为外部链接（新标签页打开） */
    external?: boolean;
    /** 是否显示（false 时连同子级一起隐藏） */
    enabled: boolean;
    /** 关联站点功能开关（siteConfig.pages.xxx），对应页面被关闭时该节点隐藏 */
    pageKey?: string;
    /** 子菜单项 */
    children?: NavMenuNode[];
}

export const navMenuConfig = {
    // 顶部导航树，按顺序从上到下显示
    menus: [
        {
            name: "主页",
            url: "/",
            enabled: true,
            icon: "material-symbols:home"
           },
        {
            name: "文章",
            url: "/archive/",
            enabled: false,
            icon: "material-symbols:article",
            children: [{
    name: "文章列表",
    url: "/posts/",
    enabled: false,
    icon: "material-symbols:view-list",
    pageKey: "postList"
   }, {
    name: "推文",
    url: "/circle/",
    enabled: false,
    icon: "material-symbols:public",
    pageKey: "circle"
   }, {
    name: "归档",
    url: "/archive/",
    enabled: false,
    icon: "material-symbols:archive"
   }, {
    name: "分类",
    url: "/categories/",
    enabled: false,
    icon: "material-symbols:folder-open-rounded"
   }, {
    name: "标签",
    url: "/tags/",
    enabled: false,
    icon: "material-symbols:tag-rounded"
   }]
           },
        {
            name: "记录",
            url: "#",
            enabled: true,
            icon: "material-symbols:camera-outdoor",
            children: [{
    name: "归档",
    url: "/archive/",
    enabled: true,
    icon: "material-symbols:archive"
   }, {
    name: "相册",
    url: "/gallery/",
    enabled: true,
    icon: "material-symbols:photo-library",
    pageKey: "gallery"
   }, {
    name: "番组计划",
    url: "/bangumi/",
    enabled: false,
    icon: "material-symbols:movie",
    pageKey: "bangumi"
   }, {
    name: "书架",
    url: "/books/",
    enabled: true,
    icon: "material-symbols:book-5",
    pageKey: "books"
   }, {
    name: "笔记本",
    url: "/notebooks/",
    enabled: false,
    icon: "material-symbols:menu-book-outline",
    pageKey: "notebooks"
   }, {
    name: "足迹",
    url: "/travel/",
    enabled: true,
    icon: "material-symbols:location-on",
    pageKey: "places"
   }]
           },
        {
            name: "娱乐",
            url: "#",
            enabled: true,
            icon: "material-symbols:sports-esports",
            children: [{
    name: "追番",
    url: "/anime/",
    enabled: true,
    icon: "material-symbols:live-tv",
    pageKey: "anime"
   }, {
    name: "影视",
    url: "/movies/",
    enabled: true,
    icon: "material-symbols:movie-outline-rounded",
    pageKey: "movies"
   }, {
    name: "游戏",
    url: "/games/",
    enabled: true,
    icon: "material-symbols:gamepad-rounded",
    pageKey: "games"
   }, {
    name: "规划",
    url: "/plans/",
    enabled: true,
    icon: "material-symbols:list-alt",
    pageKey: "routines"
   }]
           },
        {
            name: "生活",
            url: "#",
            enabled: true,
            icon: "material-symbols:local-cafe",
            children: [{
    name: "朋友圈",
    url: "/moments/",
    enabled: true,
    icon: "material-symbols:chat-bubble-outline",
    pageKey: "moments"
   }, {
    name: "网站导航",
    url: "/website/",
    enabled: true,
    icon: "material-symbols:public"
   }]
           },
        {
            name: "社交",
            url: "#",
            enabled: true,
            icon: "material-symbols:groups",
            children: [{
    name: "留言板",
    url: "/guestbook/",
    enabled: true,
    icon: "material-symbols:edit-outline",
    pageKey: "guestbook"
   }, {
    name: "友链",
    url: "/friends/",
    enabled: true,
    icon: "material-symbols:group",
    pageKey: "friends"
   }]
           },
        {
            name: "关于",
            url: "#",
            enabled: true,
            icon: "material-symbols:info",
            children: [{
    name: "关于我",
    url: "/about/",
    enabled: true,
    icon: "material-symbols:person"
   }, {
    name: "更新日志",
    url: "/changelog/",
    enabled: true,
    icon: "material-symbols:history",
    pageKey: "changelog"
   }, {
    name: "打赏",
    url: "/sponsor/",
    enabled: false,
    icon: "material-symbols:favorite",
    pageKey: "sponsor"
   }]
           },
        {
            name: "链接",
            url: "#",
            enabled: false,
            icon: "material-symbols:link",
            children: [{
    name: "GitHub",
    url: "https://github.com/LuvGaze/",
    enabled: true,
    external: true,
    icon: "fa7-brands:github"
   }, {
    name: "Gitee",
    url: "https://gitee.com/LuvGaze/",
    enabled: true,
    external: true,
    icon: "fa7-brands:gitee"
   }]
           }
    ],
};