import type {BackgroundWallpaperConfig} from "@/types/backgroundWallpaper";

export const backgroundWallpaper: BackgroundWallpaperConfig = {
    // 壁纸模式："banner" 横幅壁纸，"fullscreen" 全屏壁纸，"overlay" 全屏透明，"none" 纯色背景无壁纸
    mode: "fullscreen",
    // 是否允许用户通过导航栏切换壁纸模式
    // 且同时维护多种壁纸模式过于复杂（已经屎山代码），在切换时有时候可能会出现一些奇怪的过渡效果或者bug
    // 推荐只选择自己喜欢的模式并关闭切换功能
    switchable: true,
    // 是否启用背景视频播放，配置后将在导航栏显示视频播放按钮
    playerEnable: false,
    /**
     * 背景图片配置
     * 图片路径支持三种格式：
     * 1. public 目录（以 "/" 开头，不优化）："/assets/images/banner.avif"
     * 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/banner.avif"
     * 3. 远程 URL："https://example.com/banner.jpg"
     * 注意：远程URL和public目录的图片不会被优化，请确保图片体积足够小以免影响加载速度
     *
     * 建议不要替换d1-d6，m1-m6这些默认示例图片，但你可以删除掉节省空间
     * 因为以后可能会更换示例图片，导致你自定义的图片被覆盖
     * 所以建议使用自己的图片的时候命名为其他名称，不要使用d1-d6，m1-m6这些名称
     *
     * 如果只使用一张图片或者使用随机图API，推荐直接使用字符串格式：
     * desktop: "https://t.alcy.cc/pc",   // 随机图API
     * desktop: "assets/images/DesktopWallpaper/d1.avif", // 单张图片
     *
     * mobile: "https://t.alcy.cc/mp", // 随机图API
     * mobile: "assets/images/MobileWallpaper/m1.avif", // 单张图片
     *
     * 支持配置多张图片（数组），每次刷新页面随机显示一张：
     * desktop: [
     * "assets/images/DesktopWallpaper/d1.avif",
     * "assets/images/DesktopWallpaper/d2.avif",
     * ],
     *
     * mobile:[
     *   "assets/images/MobileWallpaper/m1.avif",
     *   "assets/images/MobileWallpaper/m2.avif",
     * ],
     */
    src: {
        // 桌面背景图片（支持单张或多张随机）
        // desktop: "assets/images/DesktopWallpaper/d1.avif",
        desktop: [
            "assets/images/DesktopWallpaper/d1.avif",
            "assets/images/DesktopWallpaper/d2.avif",
            "assets/images/DesktopWallpaper/d3.avif",
            "assets/images/DesktopWallpaper/d4.avif",
            "assets/images/DesktopWallpaper/d5.avif",
            "assets/images/DesktopWallpaper/d6.avif",
            "assets/images/DesktopWallpaper/d7.avif",
            "https://t.alcy.cc/pc",
        ],
        // 移动背景图片（支持单张或多张随机）
        // mobile: "assets/images/MobileWallpaper/m1.avif",
        mobile: [
            "assets/images/MobileWallpaper/m1.avif",
            "assets/images/MobileWallpaper/m2.avif",
            "assets/images/MobileWallpaper/m3.avif",
            "assets/images/MobileWallpaper/m4.avif",
            "assets/images/MobileWallpaper/m5.avif",
            "assets/images/MobileWallpaper/m6.avif",
            "https://t.alcy.cc/mp",
        ],
        // 背景视频播放地址
        // 支持单个视频路径（字符串）或多个视频循环（数组）
        // 支持远程视频URL，本地视频请放在 public/assets/videos/ 目录下
        // playerUrl: "/assets/videos/firefly.mp4",
        playerUrl: [
            "https://www.image2url.com/r2/default/videos/1781765166391-f2ba6648-1597-40e0-9f0a-6768ae39e574.mp4",
        ],
    },
    // 横幅壁纸和全屏壁纸共享配置
    common: {
        // 壁纸遮罩暗度，让横幅文字显示更清晰，0-1之间，值越大越暗
        dimOpacity: 0.2,
        // 多视频播放模式："order" 顺序循环，"random" 随机切换（仅当 playerUrl 为数组时生效）
        playerMode: "random",
        // 主页横幅文字
        homeText: {
            // 是否启用主页横幅文字
            enable: true,
            // 是否允许用户通过控制面板切换横幅标题显示
            switchable: true,
            // 主页横幅主标题
            title: "Lovely LuvGaze!",
            // 主页横幅主标题字体大小
            titleSize: "3.8rem",
            // 主页横幅副标题
            subtitle: [
                "The best way to predict the future is to create it.",
                "Other people will put limitations on you. Don’t do it to yourself.",
                "Failure is an option, but fear is not.",
                "Vulnerability is not weakness; it’s our greatest measure of courage.",
                "You are not your mistakes. You are the light in your heart.",
                "All children are born artists. The problem is to remain an artist as we grow up.",
                "Creativity is as important as literacy.",
                "If you’re not prepared to be wrong, you’ll never come up with anything original.",
                "If you think you’re too small to make a difference, try sleeping with a mosquito.",
                "The single story creates stereotypes, and the problem with stereotypes is not that they are untrue, but that they are incomplete.",
                "Your ‘self’ is not a fixed entity. It is a story you tell yourself.",
                "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
                "Success is not the key to happiness. Happiness is the key to success.",
                "Grit is passion and perseverance for very long-term goals.",
                "Your twenties are not a throwaway decade. They are your most formative years.",
                "One second a day is enough to record your life.",
                "The right brain thinks in pictures; the left brain thinks in language.",
                "Sleep is your life-support system.",
                "Activation energy is the force required to change your behavior.",
                "Don’t wait to feel motivated. You have to force yourself.",
                "The only way to do great work is to love what you do.",
                "Stop waiting for the perfect moment. Take the moment and make it perfect.",
                "Your time is limited. Don’t waste it living someone else’s life.",
                "If you want to go fast, go alone. If you want to go far, go together.",
                "The biggest risk is not taking any risk.",
                "Imagination is the source of every form of human achievement.",
                "We don’t grow into creativity, we grow out of it.",
                "The role of a teacher is to create the conditions for invention rather than provide ready-made knowledge.",
                "Leadership is not about being in charge. It is about taking care of those in your charge.",
                "Empathy is a choice, and it’s a vulnerable choice.",
                "Diversity is not about how we differ. It’s about embracing what makes us unique.",
                "You can’t stop the waves, but you can learn to surf.",
                "What you resist persists. What you look at disappears.",
                "Your brain does not process negatives. Stop saying ‘don’t panic’ and start saying ‘stay calm’.",
                "Success is stumbling from failure to failure with no loss of enthusiasm.",
                "The only true failure is the failure to learn from failure.",
                "Your passion is your purpose. Find it and let it drive you.",
                "How you spend your days is how you spend your life.",
                "Regret is a function of aspiration. If you have no aspirations, you’ll have no regrets.",
                "The universe is under no obligation to make sense to you.",
                "Your body is not a temple. It’s a playground.",
                "Start where you are. Use what you have. Do what you can.",
                "Action is the antidote to despair.",
                "Climate change is the Everest of all problems.",
                "We are the first generation to feel the impact of climate change and the last generation that can do something about it.",
                "People don’t buy what you do; they buy why you do it.",
                "The most powerful person in the room is the one who listens.",
                "Technology is nothing. What’s important is that you have faith in people.",
                "AI won’t replace humans, but humans with AI will replace humans without AI.",
                "Art is the lie that enables us to realize the truth.",
                "You don’t have to be great to start, but you have to start to be great.",
                "The only limit to our realization of tomorrow will be our doubts of today.",
                "Curiosity is the engine of achievement.",
                "The goal of education is to replace an empty mind with an open one.",
                "Play is the highest form of research.",
                "Human connection is why we’re here. It’s what gives purpose and meaning to our lives.",
                "Be kind, for everyone you meet is fighting a hard battle.",
                "Alone we can do so little; together we can do so much.",
                "The greatest weapon against stress is our ability to choose one thought over another.",
                "You yourself, as much as anybody in the entire universe, deserve your love and affection.",
                "What you think, you become. What you feel, you attract. What you imagine, you create.",
                "Success is not about being the best. It’s about being better than you were yesterday.",
                "The only way to fail permanently is to stop trying.",
                "Don’t aim for success if you want it; just do what you love and believe in, and it will come naturally.",
                "Time isn’t precious because it’s scarce. It’s precious because it’s irreversible.",
                "The two most powerful warriors are patience and time.",
                "Science is not a body of facts. It’s a process of inquiry.",
                "Your assumptions are your windows on the world. Scrub them off every once in a while, or the light won’t come in.",
                "The best time to plant a tree was 20 years ago. The second best time is now.",
                "Small acts, when multiplied by millions of people, can transform the world.",
                "We do not inherit the earth from our ancestors; we borrow it from our children.",
                "There is no such thing as ‘away’. When we throw anything away, it must go somewhere.",
                "A leader’s job is not to do the work for others, but to help others figure out how to do it themselves.",
                "To be a good leader, you must first learn to follow.",
                "Any sufficiently advanced technology is indistinguishable from magic.",
                "The future is already here — it’s just not evenly distributed.",
                "Art washes away from the soul the dust of everyday life.",
                "Every child is an artist. The problem is how to remain an artist once we grow up.",
                "Walking is man’s best medicine.",
                "Let food be thy medicine and medicine be thy food.",
                "Innovation is taking two things that already exist and putting them together in a new way.",
                "Your most unhappy customers are your greatest source of learning.",
                "Education is not the filling of a pail, but the lighting of a fire.",
                "Children are not things to be molded, but people to be unfolded.",
                "Courage is not the absence of fear, but the triumph over it.",
                "The biggest adventure you can take is to live the life of your dreams.",
                "Happiness is not something ready-made. It comes from your own actions.",
                "The secret of happiness is freedom. The secret of freedom is courage.",
                "The world is a book, and those who do not travel read only one page.",
                "Cultural differences should not separate us from each other, but rather bring a collective strength.",
                "Your brand is what people say about you when you’re not in the room.",
                "Influence is not about being loud. It’s about being worth listening to.",
                "The unexamined life is not worth living.",
                "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
                "There is no limit to what we, as women, can accomplish.",
                "Feminism isn’t about making women strong. Women are already strong. It’s about changing the way the world perceives that strength.",
                "Language is the road map of a culture. It tells you where its people come from and where they are going.",
                "Words are containers for power. Choose them wisely.",
                "Hope is being able to see that there is light despite all of the darkness.",
            ],
            // 主页横幅副标题字体大小
            subtitleSize: "1.5rem",
            typewriter: {
                // 是否启用打字机效果
                // 打字机开启 → 循环显示所有副标题
                // 打字机关闭 → 每次刷新随机显示一条副标题
                enable: true,
                // 打字速度（毫秒）
                speed: 60,
                // 删除速度（毫秒）
                deleteSpeed: 30,
                // 完全显示后的暂停时间（毫秒）
                pauseTime: 2000,
            },
        },
        // 导航栏配置
        navbar: {
            // 导航栏透明模式："semi" 半透明，"full" 完全透明，"semifull" 动态透明
            transparentMode: "semi",
            // 是否开启毛玻璃模糊效果，开启可能会影响页面性能，如果不开启则是半透明，请根据自己的喜好开启
            enableBlur: true,
            // 毛玻璃模糊度
            blur: 5,
        },
        // 水波纹动画效果配置，开启会影响页面性能，请根据自己的喜好开启
        waves: {
            enable: {
                // 桌面端是否启用水波纹动画效果
                desktop: true,
                // 移动端是否启用水波纹动画效果
                mobile: true,
            },
            // 是否允许用户通过控制面板切换水波纹动画
            switchable: true,
        },
        // 渐变过渡效果配置，当水波纹关闭时自动启用，提供壁纸底部到背景色的平滑过渡
        gradient: {
            enable: {
                // 桌面端是否启用渐变过渡
                desktop: true,
                // 移动端是否启用渐变过渡
                mobile: true,
            },
            // 渐变高度
            height: "10%",
            // 是否允许用户通过控制面板切换渐变过渡
            switchable: true,
        },
        // 壁纸轮播配置，横幅壁纸和全屏壁纸共享，仅在配置多张图片时生效
        carousel: {
            // 是否启用壁纸轮播；关闭时保持每次刷新随机显示一张
            enable: true,
            // 轮播切换间隔（毫秒）
            interval: 5000,
            // 过渡效果: 'fade' 渐变 | 'zoom' 缩放 | 'slide' 滑动 | 'kenburns' 旋转木马
            transitionEffect: "fade",
            // 是否允许用户通过控制面板切换壁纸轮播
            switchable: true,
        },
    },
    // Banner模式特有配置
    banner: {
        // 图片位置
        // 支持所有CSS object-position值，如: 'top', 'center', 'bottom', 'left top', 'right bottom', '25% 75%', '10px 20px'..
        // 如果不知道怎么配置百分百之类的配置，推荐直接使用：'center'居中，'top'顶部居中，'bottom' 底部居中，'left'左侧居中，'right'右侧居中
        position: "0% 20%",
    },
    // 全屏透明覆盖模式特有配置
    overlay: {
        // 是否允许用户通过控制面板调整全屏透明模式参数
        switchable: {
            opacity: true,
            blur: true,
            cardOpacity: true,
        },
        // 层级，确保壁纸在背景层
        zIndex: -1,
        // 壁纸透明度
        opacity: 0.8,
        // 背景模糊度
        blur: 10,
        // 卡片透明度，0-1之间，值越小越透明
        cardOpacity: 0.5,
    },
    // 全屏壁纸模式特有配置
    fullscreen: {
        // 图片位置
        position: "center",
    },
};
