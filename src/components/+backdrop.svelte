<script lang="ts">
	import P5, { type Sketch } from 'p5-svelte';

	const sketch: Sketch = (p5) => {
		let y = 100;
		let z = 100;
		let q = 100;
		const padding = 4;
		// The statements in the setup() function
		// execute once when the program begins
		p5.setup = () => {
			// createCanvas must be the first statement
			p5.createCanvas(p5.windowWidth - padding, p5.windowHeight - padding);
			p5.stroke(247, 184, 1); // Set line drawing color to white
			p5.frameRate(160);
		};
		// The statements in draw() are executed until the
		// program is stopped. Each statement is executed in
		// sequence and after the last line is read, the first
		// line is executed again.
		p5.draw = () => {
			p5.background(48, 50, 61); // Set the background to black

			y = createLines(y, 10);
			q = createLines(q, 5);
			z = createLines(z, 7.5);
		};
		function createLines (linePoint: number, steps: number) {
			linePoint -= steps
			if (linePoint < 0) {
				linePoint = p5.height
			}
			p5.line(0, linePoint, p5.width, linePoint);
			return linePoint;
		}

	};
</script>

<svelte:window/>

<section class="backdrop"><P5 {sketch} /></section>

<style>
	.backdrop {
		grid-area: 1 / 1;
		position: absolute;
		left: 0; 
		top: 0;
		z-index: -1;
		width: 500px;
	}
</style>
