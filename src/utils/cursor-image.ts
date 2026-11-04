import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

/** 构建期处理后的光标图片缓存，避免每个页面重复解码/缩放 */
const cache = new Map<string, string>();

type DecodedImage = { width: number; height: number; rgba: Buffer };

/** 解析 .ico / .cur 中最大的一帧；支持 PNG 帧与 32 位 BMP 帧 */
function decodeIcon(buffer: Buffer): DecodedImage | null {
	if (buffer.readUInt16LE(0) !== 0) return null;
	const type = buffer.readUInt16LE(2);
	if (type !== 1 && type !== 2) return null;
	const count = buffer.readUInt16LE(4);

	let best: { offset: number; bytes: number; width: number; height: number } | null = null;
	for (let i = 0; i < count; i++) {
		const entry = 6 + i * 16;
		const width = buffer[entry] || 256;
		const height = buffer[entry + 1] || 256;
		const bytes = buffer.readUInt32LE(entry + 8);
		const offset = buffer.readUInt32LE(entry + 12);
		if (offset + bytes > buffer.length) continue;
		if (!best || width > best.width) best = { offset, bytes, width, height };
	}
	if (!best) return null;

	const frame = buffer.subarray(best.offset, best.offset + best.bytes);
	// PNG 压缩帧：直接交给 sharp
	if (frame.readUInt32BE(0) === 0x89504e47) {
		return { width: 0, height: 0, rgba: frame };
	}

	const dibSize = frame.readUInt32LE(0);
	const width = frame.readInt32LE(4);
	const fullHeight = frame.readInt32LE(8);
	const bpp = frame.readUInt16LE(14);
	const compression = frame.readUInt32LE(16);
	if (compression !== 0 || bpp !== 32 || width <= 0) return null;

	const height = Math.abs(fullHeight) / 2;
	const dataOffset = dibSize;
	const rowBytes = width * 4;
	const xorSize = rowBytes * height;
	if (dataOffset + xorSize > frame.length) return null;

	const rgba = Buffer.alloc(width * height * 4);
	let hasAlpha = false;
	for (let y = 0; y < height; y++) {
		const srcRow = dataOffset + (height - 1 - y) * rowBytes;
		for (let x = 0; x < width; x++) {
			const s = srcRow + x * 4;
			const d = (y * width + x) * 4;
			rgba[d] = frame[s + 2];
			rgba[d + 1] = frame[s + 1];
			rgba[d + 2] = frame[s];
			rgba[d + 3] = frame[s + 3];
			if (frame[s + 3] > 0) hasAlpha = true;
		}
	}

	// 老式光标没有 alpha 通道，用后面的 AND 掩码还原透明区域
	if (!hasAlpha) {
		const maskOffset = dataOffset + xorSize;
		const maskStride = (((width + 31) >> 5) * 4);
		if (maskOffset + maskStride * height <= frame.length) {
			for (let y = 0; y < height; y++) {
				const row = maskOffset + (height - 1 - y) * maskStride;
				for (let x = 0; x < width; x++) {
					const bit = (frame[row + (x >> 3)] >> (7 - (x & 7))) & 1;
					if (bit) rgba[(y * width + x) * 4 + 3] = 0;
				}
			}
		}
	}

	return { width, height, rgba };
}

/** 把配置里的本地路径统一成浏览器可访问的 /xxx URL */
function toWebPath(src: string): string {
	const rel = src
		.replace(/^.*?public[\\/]/, "")
		.replace(/^\.\//, "")
		.replace(/^[\\/]+/, "")
		.replace(/\\/g, "/");
	return "/" + rel.split("/").map(encodeURIComponent).join("/");
}

/**
 * 解析光标图片：
 * - 本地图片按 size 缩放后以 data URI 返回（支持 png / jpg / webp / gif / svg / ico / cur）
 * - size 为 0、外部链接或不存在的文件，返回可直接使用的 URL
 */
export async function resolveCursorImage(image: string, size?: number): Promise<string> {
	const src = String(image || "").trim();
	if (!src) return "";

	const isLocal = !/^(https?:|data:|blob:)/i.test(src);
	if (!isLocal) return src;

	const rel = src
		.replace(/^.*?public[\\/]/, "")
		.replace(/^\.\//, "")
		.replace(/^[\\/]+/, "")
		.replace(/\\/g, "/");
	const webPath = toWebPath(src);
	if (!size || size <= 0) return webPath;

	const key = `${rel}@${size}`;
	const cached = cache.get(key);
	if (cached) return cached;

	const filePath = path.join(process.cwd(), "public", decodeURIComponent(rel));
	if (!fs.existsSync(filePath)) return webPath;

	const ext = path.extname(filePath).toLowerCase();
	try {
		let pipeline: ReturnType<typeof sharp> | null = null;
		if (ext === ".ico" || ext === ".cur") {
			const decoded = decodeIcon(fs.readFileSync(filePath));
			if (decoded) {
				pipeline = decoded.width
					? sharp(decoded.rgba, { raw: { width: decoded.width, height: decoded.height, channels: 4 } })
					: sharp(decoded.rgba);
			}
		} else if ([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"].includes(ext)) {
			pipeline = sharp(filePath);
		}
		if (!pipeline) return webPath;

		const buffer = await pipeline
			.resize(size, size, {
				fit: "contain",
				background: { r: 0, g: 0, b: 0, alpha: 0 },
			})
			.png()
			.toBuffer();
		const dataUri = `data:image/png;base64,${buffer.toString("base64")}`;
		cache.set(key, dataUri);
		return dataUri;
	} catch {
		return webPath;
	}
}
