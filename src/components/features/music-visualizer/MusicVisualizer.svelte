<script lang="ts">
import { onDestroy, onMount } from "svelte";
import { musicPlayerConfig } from "@/config/musicConfig";
import { AudioAnalyzer } from "./AudioAnalyzer";
import LyricsOverlay from "./LyricsOverlay.svelte";
import ThreeScene from "./ThreeScene.svelte";
import VisualizerControls from "./VisualizerControls.svelte";

const audioAnalyzer = new AudioAnalyzer();
let sceneReady = $state(false);
let backgroundColor = $state(
	musicPlayerConfig.visualizer?.background?.dark ?? "#0a0a15",
);

function syncPageBackground() {
	backgroundColor = document.documentElement.classList.contains("dark")
		? (musicPlayerConfig.visualizer?.background?.dark ?? "#0a0a15")
		: (musicPlayerConfig.visualizer?.background?.light ?? "#ffffff");
}

function connectAudio() {
	const audio = document.getElementById(
		"firefly-music-audio",
	) as HTMLAudioElement | null;
	if (!audio) {
		setTimeout(connectAudio, 200);
		return;
	}
	if (!audio.crossOrigin) {
		audio.crossOrigin = "anonymous";
	}
	try {
		audioAnalyzer.connect(audio);
	} catch (e) {
		console.warn("[MusicVisualizer] AudioAnalyzer connect failed:", e);
	}

	if (audioCtxState() === "suspended") {
		audioAnalyzer.resume();
	}
}

function audioCtxState() {
	return audioAnalyzer.audioCtx?.state || "running";
}

onMount(() => {
	syncPageBackground();

	const themeObserver = new MutationObserver(syncPageBackground);
	themeObserver.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});

	const mgr = window.__fireflyMusic;
	if (!mgr) {
		const waitForMgr = () => {
			if (window.__fireflyMusic) {
				connectAudio();
			} else {
				setTimeout(waitForMgr, 100);
			}
		};
		waitForMgr();
	} else {
		if (!mgr.getState().initialized) {
			mgr.init();
		}
		connectAudio();
	}

	const handleFirstClick = () => {
		audioAnalyzer.resume();
		document.removeEventListener("click", handleFirstClick);
	};
	document.addEventListener("click", handleFirstClick);

	return () => {
		themeObserver.disconnect();
		document.removeEventListener("click", handleFirstClick);
	};
});

onDestroy(() => {
	audioAnalyzer.disconnect();
});
</script>

<div class="music-visualizer" style={`background: ${backgroundColor};`}>
	{#if sceneReady}
		<VisualizerControls />
		<LyricsOverlay />
	{/if}
	<ThreeScene
		{audioAnalyzer}
		{backgroundColor}
		onSceneReady={() => (sceneReady = true)}
	/>
</div>
