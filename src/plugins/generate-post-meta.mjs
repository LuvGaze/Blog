/**
 * 生成 public/api/allPostMeta.json（随机文章数据源）
 *
 * 文章详情页底部的「随机文章」组件（src/components/misc/RecommendedPost.astro）
 * 会在浏览器端 fetch <base>/api/allPostMeta.json 获取全部文章元数据后随机抽取。
 * 此前该 JSON 无任何构建逻辑生成，导致请求 404、组件一直为空。
 *
 * 本插件在构建启动及 dev 启动时扫描 src/content/posts 下的 md/mdx，
 * 提取 frontmatter 生成（跳过草稿），写入 public/api/allPostMeta.json，
 * dev 下监听内容变更自动重新生成。
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "../..");
const postsDir = path.join(projectRoot, "src", "content", "posts");
const outFile = path.join(projectRoot, "public", "api", "allPostMeta.json");

/** 解析 frontmatter 顶层标量字段（title/published/category/description/draft/password 等） */
function parseFrontmatter(src) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---/.exec(src);
  const fields = {};
  if (!m) return fields;
  const lineRe = /^([A-Za-z_][\w]*):\s*(.*)$/gm;
  let mm;
  while ((mm = lineRe.exec(m[1]))) {
    fields[mm[1]] = mm[2].trim();
  }
  return fields;
}

/** 还原 YAML 标量（去引号、布尔归一） */
function cleanScalar(val) {
  if (val === undefined || val === null) return undefined;
  let s = String(val).trim();
  if (s === "true") return true;
  if (s === "false") return false;
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    return s.slice(1, -1);
  }
  return s;
}

function generatePostMeta() {
  const items = [];
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, JSON.stringify(items));
    return items;
  }
  for (const f of fs.readdirSync(postsDir)) {
    if (!/\.(md|mdx)$/.test(f)) continue;
    const full = path.join(postsDir, f);
    const fm = parseFrontmatter(fs.readFileSync(full, "utf8"));
    const draft = cleanScalar(fm.draft) === true;
    // 草稿不在随机文章中出现（与列表隐藏行为一致）
    if (draft) continue;
    items.push({
      id: f.replace(/\.(md|mdx)$/, ""),
      title: cleanScalar(fm.title) ?? f.replace(/\.(md|mdx)$/, ""),
      category: cleanScalar(fm.category),
      description: cleanScalar(fm.description),
      published: cleanScalar(fm.published),
      password: cleanScalar(fm.password),
    });
  }
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(items, null, 2));
  return items;
}

export function generatePostMetaPlugin() {
  let timer = null;
  const schedule = () => {
    clearTimeout(timer);
    timer = setTimeout(generatePostMeta, 120);
  };
  return {
    name: "generate-post-meta",
    buildStart() {
      generatePostMeta();
    },
    configureServer(server) {
      generatePostMeta();
      // dev 下内容变更时重新生成，保证新增/修改文章实时反映到随机文章
      server.watcher.on("change", (file) => {
        if (file && file.replace(/\\/g, "/").startsWith(postsDir.replace(/\\/g, "/"))) {
          schedule();
        }
      });
    },
  };
}