<script>
	import { count } from '../store/index.js'

	function decrement() {
		count.update(count => count - 1)
	}
</script>

<button on:click={decrement}>
	-
</button>