<script>
	// import Button from '@smui/button'
	// import '@/style/index.less'
	// const promise = new Promise()
	/* 测试 babel 对‘全局对象’的转换 */
	const set = new Set()
	const map = new Map()
	const promise = new Promise((resolve) => {
		resolve()
	})
	/* 测试 babel 对全部对象实例方法的转换 */
	const str = 'string'
	const trusy = str.includes('s')
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
	@import 'style/index.less';
	main {
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
		transform: rotate(0);
		&-c {
			color: aqua;
		}
	}
</style>