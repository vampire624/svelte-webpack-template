<script>
  import Nest from '@/components/nest.svelte'
  import { onMount } from 'svelte';
  export let location
  let value = ''
  let ping = ''
	let canvas
	onMount(() => {
		const ctx = canvas.getContext('2d')
		let frame

		(function loop() {
			frame = requestAnimationFrame(loop)

			const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)

			for (let p = 0; p < imageData.data.length; p += 4) {
				const i = p / 4
				const x = i % canvas.width
				const y = i / canvas.height >>> 0

				const t = window.performance.now()

				const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000))
				const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000))
				const b = 128

				imageData.data[p + 0] = r
				imageData.data[p + 1] = g
				imageData.data[p + 2] = b
				imageData.data[p + 3] = 255
			}

			ctx.putImageData(imageData, 0, 0)
		}())

		return () => {
			cancelAnimationFrame(frame)
		}
	})
</script>

<p class="route">
  current pathname is {location.pathname} !
</p>

<h3>01 bind 指令（vue：v-model）</h3>
<input type="text" bind:value={value}>
<p>hello {value}</p>

<h3>02 this 绑定</h3>
<canvas
  bind:this={canvas}
	width={32}
	height={32}
></canvas>

<h3>03 组件绑定</h3>
<p>ping: {ping}</p>
<Nest bind:value={ping}></Nest>
<style>
.route {
  color: orange;
  font-size: 22px;
}
canvas {
  width: 160px;
  height: 160px;
  background-color: #666;
  -webkit-mask: url('../../public/favicon.png') no-repeat;
  mask: url('../../public/favicon.png') no-repeat;
}
</style>