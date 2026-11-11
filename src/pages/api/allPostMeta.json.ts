import I18nKey from "@/i18n/i18nKey";
import { i18n } from "@/i18n/translation";
import {getSortedPosts} from "@/utils/content-utils";

export async function GET() {
    const posts = await getSortedPosts();

    const allPostsData = posts
        .map((post) => ({
            id: post.id,
            title: post.data.title,
            description: post.data.password
                ? i18n(I18nKey.passwordProtectedDesc)
                : post.data.description,
            published: post.data.published.getTime(),
            category: post.data.category || "",
            password: !!post.data.password,
        }))
        // 日历按纯日期排序，忽略置顶
        .sort((a, b) => b.published - a.published);

    return new Response(JSON.stringify(allPostsData));
}
