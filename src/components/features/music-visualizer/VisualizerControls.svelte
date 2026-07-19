<script lang="ts">
import { musicPlayerConfig } from "@/config/musicConfig";

let controlsVisible = $state(false);

function toggleControls() {
	controlsVisible = !controlsVisible;
}
</script>

<div class="mv-controls-container">
	<button class="mv-controls-toggle" on:click={toggleControls} title="音乐可视化控制">
		<svg
			class="mv-controls-icon"
			class:rotated={controlsVisible}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
		>
			{#if controlsVisible}
				<path d="M12 5v14M5 12h14" />
			{:else}
				<path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />
			{/if}
		</svg>
	</button>

	<div class="mv-controls-panel" class:hidden={!controlsVisible}>
		<div class="mv-controls-title">音乐可视化</div>
		<div class="mv-controls-item">
			<span class="mv-controls-label">自动旋转</span>
			<input
				type="checkbox"
				checked={musicPlayerConfig.visualizer?.autoRotate ?? true}
				on:change={(e) => {
					if (musicPlayerConfig.visualizer) {
						musicPlayerConfig.visualizer.autoRotate = (e.target as HTMLInputElement).checked;
					}
				}}
			/>
		</div>
		<div class="mv-controls-item">
			<span class="mv-controls-label">旋转速度</span>
			<input
				type="range"
				min="0"
				max="2"
				step="0.1"
				value={musicPlayerConfig.visualizer?.autoRotateSpeed ?? 0.3}
				on:input={(e) => {
					if (musicPlayerConfig.visualizer) {
						musicPlayerConfig.visualizer.autoRotateSpeed = parseFloat((e.target as HTMLInputElement).value);
					}
				}}
			/>
		</div>
	</div>
</div>
