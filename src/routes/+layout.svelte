<script lang="ts">
	import Nav from '../components/+nav.svelte';
	import P5, { type Sketch } from 'p5-svelte';

	const sketch: Sketch = (p5) => {
		let y = 100;
		let z = 100;

		// The statements in the setup() function
		// execute once when the program begins
		p5.setup = () => {
			// createCanvas must be the first statement
			p5.createCanvas(p5.windowWidth, p5.windowHeight);
			p5.stroke(255); // Set line drawing color to white
			p5.frameRate(160);
		};
		// The statements in draw() are executed until the
		// program is stopped. Each statement is executed in
		// sequence and after the last line is read, the first
		// line is executed again.
		p5.draw = () => {
			p5.background(0); // Set the background to black
			y = y - 10;
			z = z - 7.5;
			if (y < 0) {
				y = p5.height;
			}
			if (z < 0) {
				z = p5.height;
			}
			p5.line(0, y, p5.width, y);

			p5.line(0, z, p5.width, z);
		};
	};
</script>

<Nav />

<main class="layout__main">
	<div class="layout_main__backdrop"><P5 {sketch} /></div>
	<div class="layout_main_slot"><slot /></div>
</main>

<style>
	.layout_main__backdrop {
		grid-area: 1 / 1;
		position: absolute;
		left: 0; 
		top: 0;
		z-index: -1;
		/* width: 100vw;
		height: 100vh; */
	}
	.layout_main_slot {
		grid-area: 1 / 1;
		align-self: center;
	}
	.layout__main {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		max-width: 1024px;
		margin: 0 auto;
		/* padding: 2rem; */
	}

	:global(body) {
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
		--theme-color-mango: #f7b801;
		--theme-color-purple: #3d348b;
		--theme-color-purple-light: #7678ed;
		--theme-color-tangerine: #f18701;
		--theme-color-jet-black: #30323d;
		box-sizing: border-box;
		margin: 0;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		background-color: var(--theme-color-jet-black);
		color: var(--theme-color-purple-light);
		transition: background-color 0.3s;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
	}
	:global(body.dark-mode) {
		/* TODO: add dark-mode toggle */
	}
	:global(a) {
		font-size: 2rem;
		font-weight: 900;
		text-decoration: none;
		color: var(--theme-color-tangerine);
	}
	:global(a:hover) {
		color: var(--theme-color-mango);
	}
</style>
