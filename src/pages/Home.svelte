<script>
	// import Button from '@smui/button'
	// import '@/style/index.less'
</script>

<main>
	<h1>Hello svelte!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<h2>check full examples up there</h2>
	<!-- <Button>确认</Button> -->
	<div class="test">
		<p>test</p>
		<div class="test-c">test-c</div>
	</div>
	<div class="test-less">
		<p>less</p>
		<div class="test-less-child">test-less-child</div>
	</div>
</main>

<style lang="less">
	/* @import 'style/index.less'; */
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.test {
		color: #ff3e00;
		display: flex;
		transform: rotate(0);
		&-c {
			color: aqua;
		}
	}
</style>