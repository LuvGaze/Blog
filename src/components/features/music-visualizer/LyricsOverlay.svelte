<script lang="ts">
import { musicPlayerConfig } from "@/config/musicConfig";

let currentLyrics = $state("");
let isVisible = $state(false);

if (musicPlayerConfig.showLyrics) {
	const mgr = window.__fireflyMusic;
	if (!mgr) {
		const waitForMgr = () => {
			if (window.__fireflyMusic) {
				initLyricsListener();
			} else {
				setTimeout(waitForMgr, 100);
			}
		};
		waitForMgr();
	} else {
		initLyricsListener();
	}
}

function initLyricsListener() {
	const mgr = window.__fireflyMusic;
	if (!mgr) return;

	const updateLyrics = () => {
		const state = mgr.getState();
		isVisible = state.playState === "playing";
		currentLyrics = state.currentLyric || "";
	};

	updateLyrics();

	const off = mgr.onStateChange(updateLyrics);
	if (off) {
		import("svelte").then(({ onDestroy }) => {
			onDestroy(() => {
				off();
			});
		});
	}
}
</script>

{#if musicPlayerConfig.showLyrics}
	<div
		class="mv-lyrics-overlay"
		class:hidden={!isVisible || !currentLyrics}
	>
		<div class="mv-lyrics-content">{currentLyrics}</div>
	</div>
{/if}
