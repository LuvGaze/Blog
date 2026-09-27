<script lang="ts">
/**
 * 玫瑰花开关组件 - 用于切换列表/网格布局
 */
interface Props {
	activeTab: "list" | "grid";
	class?: string;
}

let { activeTab = $bindable("list"), class: className = "" }: Props = $props();

let checkboxRef = $state<HTMLInputElement | null>(null);

function syncCheckbox() {
	if (checkboxRef) {
		checkboxRef.checked = activeTab === "grid";
	}
}

function handleChange() {
	const newLayout = checkboxRef?.checked ? "grid" : "list";
	activeTab = newLayout;
	localStorage.setItem("postListLayout", newLayout);
	window.dispatchEvent(
		new CustomEvent("layoutChange", { detail: { layout: newLayout } }),
	);
}

function initFromStorage() {
	const saved = localStorage.getItem("postListLayout");
	if (saved === "list" || saved === "grid") {
		activeTab = saved;
	}
	syncCheckbox();
}

$effect(() => {
	initFromStorage();
	if (typeof document === "undefined") return;
	document.addEventListener("astro:page-load", initFromStorage);
	return () => {
		document.removeEventListener("astro:page-load", initFromStorage);
	};
});
</script>

<label class="rose-switch {className}" aria-label="切换文章卡片/列表视图" title="切换文章卡片/列表视图">
	<input
		bind:this={checkboxRef}
		type="checkbox"
		checked={activeTab === "grid"}
		onchange={handleChange}
	/>
	<span class="thumb">
		<svg class="rose" viewBox="0 0 40 48" aria-hidden="true">
			<!-- 茎 -->
			<path d="M20 22 L20 44" stroke="#16a34a" stroke-width="2.6" stroke-linecap="round" fill="none"/>
			<!-- 左叶 -->
			<path d="M20 32 C 12 30, 7 25, 6 19 C 13 22, 17 26, 20 32 Z" fill="#22c55e"/>
			<!-- 右叶 -->
			<path d="M20.6 38 C 28 36, 33 31, 34.5 25 C 28 28, 23 32, 20.6 38 Z" fill="#16a34a"/>
			<!-- 萼片 -->
			<path d="M20 22 C 15 20, 14 16, 16 13 C 18 17, 20 19, 20 22 Z" fill="#2f9e44"/>
			<path d="M20 22 C 25 20, 26 16, 24 13 C 22 17, 20 19, 20 22 Z" fill="#2f9e44"/>
			<!-- 外层花瓣 -->
			<path d="M20 4 C 27 1, 34 5, 33 13 C 32 20, 25 22, 20 17 C 15 22, 8 20, 7 13 C 6 5, 13 1, 20 4 Z" fill="#e11d48"/>
			<!-- 中层花瓣 -->
			<path d="M20 7 C 25 5, 30 8, 29 14 C 28 18, 23 20, 20 15 C 17 20, 12 18, 11 14 C 10 8, 15 5, 20 7 Z" fill="#f43f5e"/>
			<!-- 内层花瓣 -->
			<path d="M20 9 C 23 8, 26 10, 26 14 C 26 16, 23 18, 20 15 C 17 18, 14 16, 14 14 C 14 10, 17 8, 20 9 Z" fill="#fb7185"/>
			<!-- 花心 -->
			<circle cx="20" cy="13.5" r="2" fill="#fbbf24"/>
		</svg>
	</span>
</label>

<style>
.rose-switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 2.5rem;
    background: #141414;
    border-radius: 1.25rem;
    box-shadow: 0 0 0.1rem 0.1rem #000000, 0 0 0.5rem 0.1rem #0b0b10 inset;
    cursor: pointer;
    flex-shrink: 0;
    transition: background 0.3s ease, box-shadow 0.3s ease;
}

.rose-switch input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.thumb {
    position: absolute;
    width: 2.1875rem;
    height: 2.1875rem;
    top: 0.15625rem;
    left: 0.15625rem;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #2b2b2b, #111);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.35s cubic-bezier(0.34, 1.2, 0.64, 1), background 0.35s ease;
    z-index: 1;
}

.rose-switch input:checked ~ .thumb {
    transform: translateX(2.5rem);
}

.rose {
    width: 1.85rem;
    height: 1.85rem;
    filter: brightness(0.6) saturate(0.7);
    transition: filter 0.35s ease, transform 0.35s ease;
}

.rose-switch input:checked ~ .thumb .rose {
    filter: brightness(1.8) saturate(1.15) drop-shadow(0 0 5px rgba(225, 29, 72, 0.55));
    transform: scale(1.1);
}

.rose-switch:hover .thumb {
    background: radial-gradient(circle at 35% 30%, #333, #151515);
}
</style>